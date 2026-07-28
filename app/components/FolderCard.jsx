import Link from "next/link";

export default function FolderCard({ title, description, href, tone }) {
  return (
    <Link href={href} className="folder-card">
      <span className={`folder-tab folder-tab-${tone}`} aria-hidden="true" />
      <div className={`folder-body folder-bg-${tone}`}>
        <h3 className="folder-title">{title}</h3>
        <p className="folder-desc">{description}</p>
        <span className="folder-link">Open folder →</span>
      </div>
    </Link>
  );
}