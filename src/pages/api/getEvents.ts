import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { console } from "inspector";

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
        const culturalEvents = await sheets.spreadsheets.values.get({  
            spreadsheetId: process.env.Google_Sheet_Id_events_cultural,
            range: "Sheet1!A2:D19",
        });
        const sportsEvents = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.Google_Sheet_Id_events_sport,
          range: "Sheet1!A2:G57",
        });
        

        return res.status(200).json({
            culturalEvents: culturalEvents.data.values?.map((event) => ({
                "title": event[0],
                "date": event[1].substr(0,event[1].indexOf(",")),
                "time": event[1].substr(event[1].indexOf(",")+1),
                "Status": event[3],
            })) || [],
            sportEvents: sportsEvents.data.values?.map((event) => ({
                "sport": event[0],
                "matchtype": event[1],
                "date": event[2].substr(0,event[2].indexOf(",")),
                "time": event[2].substr(event[2].indexOf(",") + 1),
                "TeamA": event[3],
                "TeamB": event[4],
                "Status": event[5],
                "Winner" : event[6]
                })) || [],
        });
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}
