import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Our Organization",
  description: "What we do, where we work, and the research behind it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <style>{`
          header,
          .header-container,
          nav.navbar,
          [class*="header"] {
            background-color: #0d022f !important;
            backdrop-filter: blur(8px);
            transition: background-color 0.3s ease;
          }

          footer,
          .footer-container,
          nav.footer,
          [class*="footer"] {
            background-color: #0d022f !important;
            backdrop-filter: blur(8px);
            transition: background-color 0.3s ease;
          }


          header nav,
          .header-container nav,
          .navbar,
          [class*="header"] nav {
            color: #FFFFFF !important;
          }

          header nav *, 
          .header-container nav *,
          .navbar *,
          [class*="header"] nav *,
          header nav *.active,
          .header-container nav *.active,
          .navbar *.active,
          [class*="header"] nav *.active,
          header nav *[class*="active"],
          .navbar *[class*="active"] {
            color: #FFFFFF !important; 
            font-weight: 500 !important;
            text-decoration: none !important;
          }

          /* Hover state override - turns green */
          header nav *:hover,
          .header-container nav *:hover,
          .navbar *:hover,
          [class*="header"] nav *:hover {
            color: #00E63D !important;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
