"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/branches" },
  { label: "About us", href: "/branches/about-us" },
  { label: "Guidelines", href: "/branches/guidelines" },
  { label: "Where we work", href: "/branches/where-we-work" },
  { label: "Policies", href: "/branches/policies" },
  { label: "Contact us", href: "/branches/contactus"},
   { label: "Our Strategy", href: "/branches/our-strategy"},
   { label: "Support", href: "/branches/support"},
];

export default function BranchLayout({ children }) {
  const pathname = usePathname();

  return (
    <div>
      <header className="branch-header">
        <div className="branch-brand-row">
          <div className="branch-brand">
            <img
              src="/branch.png"
              alt="Branch logo"
              style={{ width: "130px", height: "110px", borderRadius: "8px", objectFit: "cover", background: "#fff" }}
            />
            <div>
              <h1 style={{ color: "#FAF7F5", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                Steve Foundation
              </h1>
              <p style={{ color: "#F190AC", fontSize: "12px", margin: "2px 0 0" }}></p>
            </div>
          </div>
          <button className="branch-subscribe-btn">Contact us</button>
        </div>

        <nav className="branch-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`branch-nav-link${pathname === item.href ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {children}

      <footer className="branch-footer">
        <div className="branch-footer-inner">
          <div className="branch-footer-col">
            <h4>Gasabo Office</h4>
            <p>Kigali, Rwanda</p>
          </div>
          <div className="branch-footer-col">
            <h4>Quick links</h4>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div className="branch-footer-col">
            <h4>Departments</h4>
            <Link href="/branches/mm">Mental & Health</Link>
            <Link href="/branches/mg"> Maternal & child care</Link>
            <Link href="/branches/ad">Adolscent sexual & Reproductive</Link>
            <Link href="/branches/ch">Child Education & Development Skills</Link>
          </div>
          <div className="branch-footer-col">
            <h4>Contact</h4>
            <p>steve.michaelfoundation@gmail.com</p>
            <p>+250 782270658</p>
          </div>
        </div>
        <div className="branch-footer-bottom">
          © {new Date().getFullYear()} Steve foundation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
