import Link from "next/link";
import styles from "./ImpactStrip.module.css";

interface ImpactStripProps {
  eyebrow?: string;
  title: React.ReactNode;
  body: string;
  btn1Label: string;
  btn1Href: string;
  btn1Variant?: "lime" | "red";
  btn2Label: string;
  btn2Href: string;
}

const STATS = [
  { value: "500+", label: "Events Served", accent: "red" },
  { value: "200+", label: "Corporate Clients", accent: "lime" },
  { value: "48hr", label: "Design Turnaround", accent: "red" },
  { value: "100%", label: "Custom Branded", accent: "lime" },
] as const;

export default function ImpactStrip({
  eyebrow = "Our Impact",
  title,
  body,
  btn1Label,
  btn1Href,
  btn1Variant = "lime",
  btn2Label,
  btn2Href,
}: ImpactStripProps) {
  return (
    <div className={styles.strip}>
      <div className={styles.left}>
        <div className="eyebrow white-ey">{eyebrow}</div>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <div className={styles.btns}>
          <Link
            href={btn1Href}
            className={btn1Variant === "lime" ? "btn-lime" : "btn-red"}
          >
            {btn1Label}
          </Link>
          <Link href={btn2Href} className="btn-outline-w">
            {btn2Label}
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div
              className={`${styles.statN} ${s.accent === "red" ? styles.red : styles.lime}`}
            >
              {s.value}
            </div>
            <div className={styles.statL}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
