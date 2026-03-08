import styles from "./PageBanner.module.css";

interface PageBannerProps {
  eyebrow: string;
  eyebrowVariant?: "lime" | "red" | "white";
  bgWord: string;
  children: React.ReactNode; // title as JSX so we can embed spans
  body: string;
}

export default function PageBanner({
  eyebrow,
  eyebrowVariant = "lime",
  bgWord,
  children,
  body,
}: PageBannerProps) {
  const eyebrowClass =
    eyebrowVariant === "red"
      ? "eyebrow red-ey"
      : eyebrowVariant === "white"
        ? "eyebrow white-ey"
        : "eyebrow";

  return (
    <div className={styles.banner}>
      <span className={styles.bgWord} aria-hidden="true">
        {bgWord}
      </span>
      <div className={eyebrowClass}>{eyebrow}</div>
      <h1 className={`sec-title ${styles.title}`}>{children}</h1>
      <p className="sec-body">{body}</p>
    </div>
  );
}
