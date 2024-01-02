import type { Metadata } from 'next'
import { Rubik_Bubbles } from 'next/font/google'
import './globals.css'
const comic = Rubik_Bubbles({
  subsets: ['latin'],
  weight: ["400"],
})
const images = [
  {
    url: '/mar.jpg',
  },
];


export const metadata: Metadata = {
  metadataBase: new URL('https://mar.band'),
  title: 'mar is very cool',
  description: 'mar is a los angeles based artist',
  openGraph: {
    images: images,
  },
  twitter: {
    images: images,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comic.className}>{children}</body>
    </html>
  );
}
