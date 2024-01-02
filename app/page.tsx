import Mar from "../public/mar.jpg";
import Cookie from "../public/cookie.png";
import Marianne_Rotyliano from "../public/Marianne_Rotyliano.png"
import Image from "next/image";

export default function Home() {
  const containerStyle = {
    backgroundColor: "forestgreen",
    fontFamily: "Comic Sans MS, cursive",
  };

  return (
    <main style={containerStyle} className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hey jamie</p>
      <Image src={Marianne_Rotyliano} width={400} alt="QR" />
      <Image src={Mar} width={400} alt="Mar" />
      <Image src={Cookie} width={400} alt="Cookie" />
      <video width="320" height="240" controls>
        <source src="/jamieskating.MOV" type="video/mp4" />
      </video>
      <a href="https://www.tiktok.com/@marrotyliano" target="_blank" rel="noopener noreferrer">
        Check out my TikTok!
      </a>
    </main>
  );
}
