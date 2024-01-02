import Mar from "../public/mar.jpg";
import Cookie from "../public/cookie.png";

import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hello mar</p>
      <p>i am a lemon</p>
      <Image src={Mar} width={500} alt="Mar" />
      <Image src={Mar} width={500} alt="Mar" />
      <img src="/mar.jpg" alt="Jamie" />
    </main>
  );
}
