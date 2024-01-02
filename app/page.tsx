import Mar from "../public/mar.jpg";
import Cookie from "../public/cookie.png";

import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hey jamie</p>
      <Image src={Mar} width={400} alt="Mar" />
      <Image src={Cookie} width={400} alt="Cookie" />
      <video width="320" height="240" controls>
        <source src="/jamieskating.MOV" type="video/mp4" />
      </video>
    </main>
  );
}
