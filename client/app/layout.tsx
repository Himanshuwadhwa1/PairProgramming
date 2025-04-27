import { Geist, Geist_Mono,Space_Mono,Bitter } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const spaceMonoHeavy = Space_Mono({
  weight:["700","400"],
  style :"normal",
  subsets :["latin"],
  variable : "--font-space-mono",
})
export const fontBitter = Bitter({
  weight:['100','200','300','400','500','600','700','800','900'],
  style:['italic','normal'],
  subsets:['latin'],
  variable:'--font-bitter'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
