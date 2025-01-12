import { Suspense } from "react";
import Charts from "./Charts";
import { headers } from "next/headers";

async function getScores() {
  try {
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const response = await fetch(`${protocol}://${host}/api/getScore`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.score;
  } catch (error) {
    console.error("Error fetching scores:", error);
    return {
      Total: [],
      Culti: [],
      Sports: [],
    };
  }
}
export default async function Page() {
  const scores = await getScores();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Charts
        total={scores.Total}
        cultural={scores.Culti}
        sports={scores.Sports}
      />
    </Suspense>
  );
}
