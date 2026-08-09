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
          /* === DESKTOP HEADER NAVBAR STYLES === */
          header, .header-container, nav.navbar, [class*="header"] {
            background-color: #f1f1f4 !important;
            backdrop-filter: blur(8px);
            transition: background-color 0.3s ease;
          }
          
          footer, .footer-container, nav.footer, [class*="footer"] {
            background-color: #0b0129 !important;
            backdrop-filter: blur(8px);
          }
          
          header nav *, 
          .header-container nav *, 
          .navbar *, 
          [class*="header"] nav * {
            background-color: transparent !important;
            background: transparent !important;
            font-size: 16px !important;
            padding: 4px 8px !important;
            margin: 0 6px !important;
            border: none !important; 
            border-radius: 0 !important; 
            color: #0e04ce !important; 
            font-weight: 500 !important;
            text-decoration: none !important;
            box-shadow: none !important;
          }

          header nav *:hover, .navbar *:hover {
            color: #0a480e !important; 
          }

          /* === MOBILE CLICK TOGGLE DROPDOWN LOGIC === */
          @media screen and (max-width: 768px) {
            
            header, .header, [class*="header"] {
              display: flex !important;
              flex-direction: row-reverse !important;
              justify-content: space-between !important;
              align-items: center !important;
              height: 70px !important;
              padding: 0 16px !important;
              position: relative !important;
              z-index: 99999 !important;
              background-color: #ffffff !important;
            }


            header.open::before {
              content: "✕" !important;
            }

            /* === FIXED INITIAL STATE: HIDDEN BY DEFAULT === */
            .header-inner, 
            .header-actions, 
            header div:has(a), 
            header nav, 
            header ul {
              display: none !important; 
              position: absolute !important;
              top: 70px !important;
              left: 0 !important;
              width: 100% !important; 
              background-color: #ffffff !important; 
              box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1) !important;
              flex-direction: column !important;
              padding: 10px 0 !important;
              z-index: 100000 !important;
              height: auto !important;
              border: none !important;
              border-radius: 0 !important;
            }

            /* === VISIBLE STATE: DISPLAY ON USER CLICK ONLY === */
            header.open .header-inner,
            header.open div:has(a),
            header.open nav,
            header.open ul,
            header.open .header-actions {
              display: flex !important; 
            }

            /* FORCES BOTH TEXT LINKS AND THE LINKEDIN ICON TO ALIGN PARALLEL */
            header nav *, 
            .header-inner a, 
            .header-actions a, 
            header nav a, 
            header [class*="actions"] a,
            header [class*="social"] a {
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              width: 100% !important;
              padding: 14px 24px !important;
              margin: 0 !important;
              font-size: 14px !important;
              font-weight: 600 !important;
              color: #0e04ce !important; 
              background: transparent !important;
              background-color: transparent !important;
              border-bottom: 1px solid #f0f0f2 !important;
              white-space: nowrap !important;
              text-decoration: none !important;
              box-shadow: none !important;
              pointer-events: auto !important; 
              box-sizing: border-box !important;
            }

            /* Keeps the LinkedIn icon centered within its block when parallel layout is active */
            header .header-actions img,
            header [class*="social"] img,
            header .header-actions svg,
            header a img:not([alt*="Logo"]) {
              margin: 0 auto !important; /* Centers the icon perfectly */
              display: block !important;
            }

            /* Appends arrow markers to text links only, skipping the LinkedIn icon wrapper */
            header nav *::after, 
            .header-inner a:not(:has(img))::after, 
            header nav a:not(:has(img))::after {
              content: "▼" !important;
              font-size: 9px !important;
              color: #0e04ce !important;
              opacity: 0.6 !important;
            }

            header nav *:last-child, 
            .header-inner a:last-child,
            .header-actions a:last-child {
              border-bottom: none !important;
            }
          }
        `}</style>
        
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('DOMContentLoaded', function() {
            document.body.addEventListener('click', function(e) {
              var headerEl = document.querySelector('header');
              if (!headerEl) return;
              if (e.target.closest('header')) {
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                  headerEl.classList.remove('open');
                  return;
                }
                headerEl.classList.toggle('open');
              } else {
                headerEl.classList.remove('open');
              }
            });
          });
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
