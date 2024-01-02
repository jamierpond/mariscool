import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
