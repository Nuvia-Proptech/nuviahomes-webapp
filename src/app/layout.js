import { Geist, Geist_Mono, Urbanist, Public_Sans } from "next/font/google";
import "./globals.css";
import { ConditionalFooter } from "@/components/shared/footer/ConditionalFooter";
import { AppBody } from "@/components/shared/AppSetup/AppBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nuvia Proptech",
  description: "Buy, Rent, or Invest in Verified Properties with Ease",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar">
      <AppBody
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${publicSans.variable} antialiased`}
      >
        <div className="max-w-[1536px] mx-auto relative">
          {children}
          <ConditionalFooter />
        </div>
      </AppBody>
    </html>
  );
}
