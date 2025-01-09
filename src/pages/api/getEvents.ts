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
        
        
        
        
        
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}