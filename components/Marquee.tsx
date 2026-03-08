import styles from "./Marquee.module.css";

interface MarqueeProps {
  items: string[];
  variant?: "red" | "lime";
}

export default function Marquee({ items, variant = "red" }: MarqueeProps) {
  // Double the items so seamless loop works
  const doubled = [...items, ...items];
  return (
    <div
      className={`${styles.wrap} ${variant === "lime" ? styles.wrapLime : ""}`}
    >
      <div
        className={`${styles.track} ${variant === "lime" ? styles.trackLime : ""}`}
      >
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
