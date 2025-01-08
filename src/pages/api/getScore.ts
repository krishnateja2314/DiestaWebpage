import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

// type Score = {
//     Total: number[];
//     Culti: number[];
//     Sports: number[];
// }

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
        
        const [overall, culti, sports] = await Promise.all([
            sheets.spreadsheets.values.get({
                spreadsheetId: process.env.Google_Client_Id_score,
                range: "Overall!B2:B8",
            }),
            sheets.spreadsheets.values.get({
                spreadsheetId: process.env.Google_Client_Id_score,
                range: "Culti!B2:B8",
            }),
            sheets.spreadsheets.values.get({
                spreadsheetId: process.env.Google_Client_Id_score,
                range: "sports!B2:B8",
            })
        ]);

        const Total = overall.data.values?.map(value => parseInt(value[0])) || [];
        const CultiScore = culti.data.values?.map(value => parseInt(value[0])) || [];
        const SportsScore = sports.data.values?.map(value => parseInt(value[0])) || [];

        return res.status(200).json({
            score: {
                Total,
                Culti: CultiScore,
                Sports: SportsScore
            }
        });
    } catch (error) {
        console.error('Error fetching scores:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
}