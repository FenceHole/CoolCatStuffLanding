import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frances and Family - A Heartwarming Cat Rescue Story",
  description:
    "The inspiring story of Frances, a pregnant stray cat who found hope through a hole in a fence, and became a family of 8. Join us on our mission to make cat healthcare free.",
  generator: "v0.app",
  keywords: [
    "cats",
    "rescue",
    "Frances and Family",
    "cat influencer",
    "Amazon Live",
    "Cool Cat Stuff",
    "pet content creator",
    "cat dad",
    "Pittsburgh",
  ],
  authors: [{ name: "Chris Thomas" }],
  openGraph: {
    title: "Frances and Family - A Heartwarming Cat Rescue Story",
    description:
      "From a hole in a fence to a family of 8 cats. Follow our journey and mission to make cat healthcare free.",
    type: "website",
    url: "https://francesandfamily.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frances and Family",
    description: "A pregnant stray found a hole in my fence. Now I'm a cat dad of 8.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
