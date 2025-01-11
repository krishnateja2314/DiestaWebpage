import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.Google_Client_Email,
                private_key: process.env.Google_Client_Key?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });
        const sheets = google.sheets({ version: "v4", auth });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.Google_Sheet_Id_score,
            range: "Sheet1!A2:P50", // Adjust range as needed
        });
        
        const values = response.data.values || [];
        
        const teamScores = {
            'MAE/ID/CC/HS': { cultural: 0, sports: 0, total: 0 },
            'CE/MSME/LA/EM': { cultural: 0, sports: 0, total: 0 },
            'CH/CHY/IC/Design': { cultural: 0, sports: 0, total: 0 },
            'CSE/MnC/MATHS': { cultural: 0, sports: 0, total: 0 },
            'EE/AI/ICDT/COE': { cultural: 0, sports: 0, total: 0 },
            'BME/BT/ES/EP/Physics': { cultural: 0, sports: 0, total: 0 },
            'Staff': { cultural: 0, sports: 0, total: 0 }
        };

        values.forEach((row) => {
            if (!row[2] || !row[3]) return; 
            
            const type = row[2].toLowerCase();
            const status = row[3].toLowerCase();
            
            if (status !== 'done') return;
            const teamColumns = {
                'MAE/ID/CC/HS': 9,       // Column J
                'CE/MSME/LA/EM': 8,      // Column F
                'CH/CHY/IC/Design': 7,    // Column H
                'CSE/MnC/MATHS': 4,      // Column E
                'EE/AI/ICDT/COE': 5,     // Column I
                'BME/BT/ES/EP/Physics': 6, // Column G
                'Staff': 10              // Column K
            };

            // Update scores based on event type
            Object.entries(teamColumns).forEach(([team, colIndex]) => {
                const score = parseInt(row[colIndex]) || 0;
                if (type === 'cultural') {
                    teamScores[team].cultural += score;
                } else if (type.startsWith('sports')) {
                    teamScores[team].sports += score;
                }
                teamScores[team].total += score;
            });
        });

        const teamOrder = [
            'MAE/ID/CC/HS',
            'CE/MSME/LA/EM',
            'CH/CHY/IC/Design',
            'CSE/MnC/MATHS',
            'EE/AI/ICDT/COE',
            'BME/BT/ES/EP/Physics',
            'Staff'
        ];

        const Total = teamOrder.map(team => teamScores[team].total);
        const CultiScore = teamOrder.map(team => teamScores[team].cultural);
        const SportsScore = teamOrder.map(team => teamScores[team].sports);
        return res.status(200).json({
            score: {
                Total,
                Culti: CultiScore,
                Sports: SportsScore
            }
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: "internal server error" });
    }
}