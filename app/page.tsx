import Link from "next/link";
import Marquee from "@/components/Marquee";
import ImpactStrip from "@/components/ImpactStrip";
import styles from "./page.module.css";

const RED_ITEMS = [
  "Corporate Branding",
  "Event Merch",
  "Conference Kits",
  "Branded Apparel",
  "Custom Packaging",
  "Gala Giveaways",
  "Staff Onboarding Kits",
  "Award Night Merch",
];
const LIME_ITEMS = Array(8).fill("Merch People Want");

const TEASERS = [
  {
    num: "01",
    icon: "🏟️",
    title: "SOLUTIONS",
    body: "From conference kits to gala nights — explore branded merch solutions built specifically for every corporate and event moment.",
    href: "/solutions",
    cta: "Explore Solutions →",
    accent: "red",
  },
  {
    num: "02",
    icon: "📦",
    title: "PRODUCTS",
    body: "Browse our full catalogue of 90+ customisable products across apparel, drinkware, bags, notebooks, tech, and more.",
    href: "/products",
    cta: "Browse Products →",
    accent: "lime",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "OUR PROCESS",
    body: "Three seamless steps from brief to delivery. No logistics headaches, no missed deadlines — just great branded merch on time.",
    href: "/process",
    cta: "See How It Works →",
    accent: "red",
  },
];

const KIT_ITEMS = [
  "Hardcover Branded Notebook",
  "Premium Ball Pen",
  "Custom Tote Bag",
  "Branded Mug or Bottle",
  "Custom Mailer Box",
];

const STATS = [
  { num: "500", suf: "+", lbl: "Events Served" },
  { num: "200", suf: "+", lbl: "Corporate Clients" },
  { num: "48", suf: "hr", lbl: "Avg. Design TAT" },
  { num: "100", suf: "%", lbl: "Custom & Branded" },
];

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <span className={styles.heroBg} aria-hidden="true">
          ASOT
        </span>

        <div className={styles.heroInner}>
          {/* Left copy */}
          <div className={styles.heroText}>
            <div className={styles.heroTag}>
              <span className={styles.tagDot} />
              Event &amp; Corporate Branding
            </div>

            <h1 className={styles.h1}>
              THE EASIEST WAY
              <br />
              TO GET <span className={styles.red}>BRANDED</span>
              <br />
              <span className={styles.lime}>MERCH</span> THAT WOWS.
            </h1>

            <p className={styles.sub}>
              Create the perfect merch for events, employees, or customers. From
              conference kits to gala giveaways — ASOT handles everything, start
              to finish.
            </p>

            <div className="cta-row">
              <Link href="/products" className="btn-red">
                Explore Products
              </Link>
              <Link href="/process" className="btn-outline-w">
                How It Works
              </Link>
            </div>
          </div>

          {/* Right visual card */}
          <div className={styles.heroVisual}>
            <div className={`${styles.cardBack} ${styles.cardBack1}`} />
            <div className={`${styles.cardBack} ${styles.cardBack2}`} />

            <div className={styles.cardMain}>
              <div className={styles.cardTop}>
                <div className={styles.cardTopLabel}>Featured Bundle</div>
                <div className={styles.cardTopTitle}>
                  EXECUTIVE CONFERENCE KIT
                </div>
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.cardList}>
                  {KIT_ITEMS.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <span className={styles.cardBadge}>
                  Fully Custom &amp; Branded
                </span>
              </div>
            </div>

            <div className={`${styles.chip} ${styles.chip1}`}>
              <div className={styles.chipNum}>500+</div>
              <div className={styles.chipLbl}>Events Branded</div>
            </div>
            <div className={`${styles.chip} ${styles.chip2}`}>
              <div className={styles.chipNum}>48hr</div>
              <div className={styles.chipLbl}>Design Turnaround</div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className={styles.statsStrip}>
          {STATS.map((s) => (
            <div key={s.lbl} className={styles.stat}>
              <div className={styles.statNum}>
                {s.num}
                <span className={styles.statSuf}>{s.suf}</span>
              </div>
              <div className={styles.statLbl}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ RED MARQUEE ══ */}
      <Marquee items={RED_ITEMS} variant="red" />

      {/* ══ TEASERS ══ */}
      <section className={styles.teasers}>
        <div className={styles.teasersHd}>
          <div>
            <div className="eyebrow">Explore ASOT</div>
            <h2 className="sec-title">
              EVERYTHING YOU NEED
              <br />
              FOR YOUR <span className={styles.red}>BRAND.</span>
            </h2>
          </div>
          <p className="sec-body" style={{ maxWidth: 320 }}>
            Discover our solutions, browse the full product catalogue,
            understand our process, and read client success stories.
          </p>
        </div>

        <div className={styles.teaserGrid}>
          {TEASERS.map((t, i) => (
            <div
              key={t.num}
              className={`${styles.teaserCard} ${i % 2 === 1 ? styles.teaserCardEven : ""}`}
            >
              <div className={styles.teaserNum}>{t.num}</div>
              <div className={styles.teaserIcon}>{t.icon}</div>
              <h3 className={styles.teaserTitle}>{t.title}</h3>
              <p className={styles.teaserBody}>{t.body}</p>
              <Link
                href={t.href}
                className={`${styles.teaserLink} ${t.accent === "lime" ? styles.teaserLinkLime : styles.teaserLinkRed}`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ══ LIME MARQUEE ══ */}
      <Marquee items={LIME_ITEMS} variant="lime" />

      {/* ══ IMPACT ══ */}
      <ImpactStrip
        eyebrow="Our Impact"
        title={
          <>
            THINK MERCH?
            <br />
            THINK <span className={styles.lime}>ASOT.</span>
          </>
        }
        body="Turn your employees into brand ambassadors and your customers into loyal fans. We've powered hundreds of events and corporate programmes across Africa."
        btn1Label="Get Started For Free"
        btn1Href="/contact"
        btn1Variant="lime"
        btn2Label="Read Client Stories"
        btn2Href="/stories"
      />

      {/* ══ FINAL CTA ══ */}
      <section className={styles.cta}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Ready to Start?
        </div>
        <h2 className={styles.ctaTitle}>
          THINK <span className={styles.red}>MERCH</span>?<br />
          THINK <span className={styles.lime}>ASOT.</span>
        </h2>
        <p className={styles.ctaSub}>
          Turn your employees into ambassadors and your customers into loyal
          fans. Get a personalised quote in 24 hours.
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
