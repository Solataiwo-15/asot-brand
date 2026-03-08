import Link from "next/link";
import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Marquee from "@/components/Marquee";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Solutions — ASOT Event & Corporate Branding",
};

const RED_ITEMS = [
  "Conference Branding",
  "Corporate Events",
  "Onboarding Kits",
  "Awards & Galas",
  "Campaign Activations",
  "Customer Loyalty",
  "Institutional Events",
];
const LIME_ITEMS = Array(8).fill("Merch People Want");

interface Panel {
  icon: string;
  label: string;
  title: string;
  body: string;
  visualIcon: string;
  visualTag: string;
  bigText: string;
  btnVariant: "red" | "lime";
  reversed: boolean;
}

const PANELS: Panel[] = [
  {
    icon: "🏟️",
    label: "Most Popular",
    title: "ELEVATE CONFERENCE & EVENT EXPERIENCES",
    body: "Turn every touchpoint into a brand moment. From custom conference kits and lanyards to photo-ready giveaways — we make your event feel premium from check-in to closing ceremony.",
    visualIcon: "🎫",
    visualTag: "Conferences · Summits · Expos",
    bigText: "EVENT",
    btnVariant: "red",
    reversed: false,
  },
  {
    icon: "👥",
    label: "HR & Culture",
    title: "ELEVATE ONBOARDING EXPERIENCES",
    body: "Onboard new employees, customers, and partners in a way that builds a strong sense of belonging and lasting connection from day one. Every kit tells your brand story.",
    visualIcon: "🎁",
    visualTag: "Welcome Kits · Staff Merch",
    bigText: "ONBOARD",
    btnVariant: "lime",
    reversed: true,
  },
  {
    icon: "📣",
    label: "Marketing & Campaigns",
    title: "DRIVE MARKETING RESULTS",
    body: "High quality merch outlives adverts and airtime. We've helped hundreds of companies run successful activations, roadshows, and product launches using branded merchandise that lasts.",
    visualIcon: "🚀",
    visualTag: "Activations · Roadshows · Promos",
    bigText: "MARKET",
    btnVariant: "red",
    reversed: false,
  },
  {
    icon: "🏆",
    label: "Awards & Recognition",
    title: "LEAVE MEMORABLE IMPRESSIONS",
    body: "From gala nights to award ceremonies — make every recognition moment exceptional. Luxury gift boxes, engraved keepsakes, and premium branded merch that recipients cherish long after the event.",
    visualIcon: "✨",
    visualTag: "Awards · Galas · VIP Events",
    bigText: "IMPRESS",
    btnVariant: "lime",
    reversed: true,
  },
  {
    icon: "❤️",
    label: "Customer Loyalty",
    title: "REWARD CUSTOMER LOYALTY",
    body: "Everyone likes to be appreciated — including your customers. Nurture bonds with loyal customers and partners by showing genuine appreciation through beautifully branded merch that reflects your values.",
    visualIcon: "🎀",
    visualTag: "Loyalty Gifts · VIP Packages",
    bigText: "REWARD",
    btnVariant: "red",
    reversed: false,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Experience Solutions Tailored for Your Brand"
        bgWord="SOLUTIONS"
        body="Making the decision to invest in branded merch is always rooted in a deeper need. By understanding your goals, we maximise your outcome — every single time."
      >
        BUILT FOR EVERY <br />
        <span className={styles.red}>CORPORATE</span> MOMENT.
      </PageBanner>

      <Marquee items={RED_ITEMS} variant="red" />

      {/* Solution panels */}
      <div className={styles.panels}>
        {PANELS.map((p, i) => (
          <div
            key={i}
            className={`${styles.panel} ${p.reversed ? styles.reversed : ""}`}
          >
            <div className={styles.content}>
              <div
                className={`${styles.icon} ${p.btnVariant === "lime" ? styles.iconLime : styles.iconRed}`}
              >
                {p.icon}
              </div>
              <div
                className={`${styles.label} ${p.btnVariant === "lime" ? styles.labelLime : styles.labelRed}`}
              >
                {p.label}
              </div>
              <h2 className={styles.panelTitle}>{p.title}</h2>
              <p className={styles.panelBody}>{p.body}</p>
              <Link
                href="/contact"
                className={p.btnVariant === "lime" ? "btn-lime" : "btn-red"}
              >
                Get Started
              </Link>
            </div>

            <div
              className={`${styles.visual} ${styles[`visual${i + 1}` as keyof typeof styles]}`}
            >
              <div className={styles.visualInner}>
                <span className={styles.visualIcon}>{p.visualIcon}</span>
                <div className={styles.visualTag}>{p.visualTag}</div>
              </div>
              <div
                className={`${styles.bigText} ${p.btnVariant === "lime" ? styles.bigTextLime : styles.bigTextRed}`}
              >
                {p.bigText}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Marquee items={LIME_ITEMS} variant="lime" />

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Ready to Start?
        </div>
        <h2 className={styles.ctaTitle}>
          FIND YOUR PERFECT
          <br />
          <span className={styles.red}>BRANDED</span>{" "}
          <span className={styles.lime}>SOLUTION.</span>
        </h2>
        <p className={styles.ctaBody}>
          Tell us about your next event or corporate need. We&apos;ll craft a
          tailored recommendation and quote within 24 hours.
        </p>
        <div className="cta-row centered">
          <Link href="/contact" className="btn-red">
            Get a Free Quote
          </Link>
          <Link href="/products" className="btn-lime">
            Browse Products
          </Link>
        </div>
      </section>
    </>
  );
}
