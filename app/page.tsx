import Mar from "../public/mar.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hello mar</p>
      <Image src={Mar} alt="Mar" />
    </main>
  );
}
