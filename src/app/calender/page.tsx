import { Suspense } from "react";
import Calender from "./Calender";
import data from "./data.json";
import { headers } from "next/headers";
async function getEvents() {
  try {
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const response = await fetch(`${protocol}://${host}/api/getEvents`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Events:", error);
    return {
      Total: [],
      Culti: [],
      Sports: [],
    };
  }
}
const Page = async () => {
  const data = await getEvents();
  console.log(typeof data);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Calender culturalEvents={data.culturalEvents} sportEvents={data.sportEvents} />
    </Suspense>
  );
};

export default Page;
