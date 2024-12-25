import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Image src="/diestaLogo.svg" alt="hero" width={1920} height={1080} />
      <div>
        Introduced in 2021, Diesta is an annual Interdepartmental sports &
        cultural fest of IIT Hyderabad. All the departments are divided into
        7-10 teams. All the teams put their best foot forward to take away the
        ultimate trophy, the glory of being the best of them all.
      </div>
    </div>
  );
}
