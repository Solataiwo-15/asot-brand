import Link from "next/link";
import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Marquee from "@/components/Marquee";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Process — ASOT Event & Corporate Branding",
};

const RED_ITEMS = [
  "Brief & Consult",
  "Design & Approve",
  "Produce & Deliver",
  "On Time. Every Time.",
];
const LIME_ITEMS = [
  "48hr Design Turnaround",
  "Dedicated Account Manager",
  "Brand-First Approach",
  "Scalable for Any Size",
];

const STEPS = [
  {
    num: "01",
    icon: "📋",
    accent: "red",
    title: "SELECT & BRIEF",
    body: "Choose from our wide range of products and submit your event brief. Share your brand guidelines, quantities, and timeline. A dedicated account manager will respond within 2 hours to confirm and advise.",
    linkLabel: "Browse Products →",
    linkHref: "/products",
  },
  {
    num: "02",
    icon: "🎨",
    accent: "lime",
    title: "DESIGN & APPROVE",
    body: "Receive fully branded design previews within 48 hours. Our in-house design team works to your brand guidelines exactly. We refine until every detail is perfect — and nothing goes to production without your sign-off.",
    linkLabel: "Start Your Brief →",
    linkHref: "/contact",
  },
  {
    num: "03",
    icon: "🚚",
    accent: "red",
    title: "PRODUCE & DELIVER",
    body: "Our production team brings your approved designs to life at scale — with rigorous quality checks at every stage. Delivered to your venue, office, or event location, exactly when you need it.",
    linkLabel: "Get a Quote →",
    linkHref: "/contact",
  },
];

const WHY = [
  {
    num: "01",
    title: "BRAND-FIRST APPROACH",
    body: "Every product we produce is treated as a brand touchpoint. Colours, typography, and finish are matched to your identity guidelines precisely — no approximations.",
  },
  {
    num: "02",
    title: "EVENT-READY PRODUCTION",
    body: "We understand deadlines are non-negotiable for events. Our streamlined production pipeline ensures your merch arrives on time, every time — even for tight turnarounds.",
  },
  {
    num: "03",
    title: "SCALABLE FOR ANY SIZE",
    body: "From intimate executive dinners of 20 to flagship conferences of 5,000+ — we scale production without compromising on quality or brand consistency.",
  },
  {
    num: "04",
    title: "END-TO-END COORDINATION",
    body: "A dedicated account manager guides you from initial brief to final delivery — no coordination chaos, no supplier juggling, no surprises on the day.",
  },
];

const TIMELINE = [
  {
    dot: "📋",
    tag: "Day 1",
    title: "BRIEF SUBMITTED",
    accent: "red",
    body: "Submit your brief online or speak to your account manager. Product shortlist and timeline confirmed within 2 hours.",
  },
  {
    dot: "🎨",
    tag: "Day 1–2",
    title: "DESIGN PREVIEWS",
    accent: "lime",
    body: "Our design team delivers branded mockups. Revisions included — sign off when you're 100% satisfied.",
  },
  {
    dot: "⚙️",
    tag: "Day 3–8",
    title: "PRODUCTION",
    accent: "red",
    body: "Quality-checked production begins immediately after sign-off. You receive progress updates throughout.",
  },
  {
    dot: "🚚",
    tag: "Day 9–14",
    title: "DELIVERY",
    accent: "lime",
    body: "Your completed merch is packed and delivered to your venue or office — ahead of schedule, every time.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageBanner
        eyebrow="Your All-in-One Solution"
        bgWord="PROCESS"
        body="We curate, design, customise, and deliver your branded merch — anywhere in Nigeria and beyond. No logistics headaches, no missed deadlines, no compromises on quality."
      >
        WE HANDLE YOUR PROJECT
        <br />
        <span className={styles.bannerRed}>START</span> TO{" "}
        <span className={styles.bannerLime}>FINISH.</span>
      </PageBanner>

      <Marquee items={RED_ITEMS} variant="red" />

      {/* 3 Steps */}
      <div className={styles.stepsSection}>
        <div className={styles.stepsGrid}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`${styles.step} ${s.accent === "lime" ? styles.stepLime : styles.stepRed}`}
            >
              <span className={styles.stepNum}>{s.num}</span>
              <div
                className={`${styles.stepIcon} ${s.accent === "lime" ? styles.stepIconLime : styles.stepIconRed}`}
              >
                {s.icon}
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepBody}>{s.body}</p>
              <Link
                href={s.linkHref}
                className={`${styles.stepLink} ${s.accent === "lime" ? styles.stepLinkLime : styles.stepLinkRed}`}
              >
                {s.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Marquee items={LIME_ITEMS} variant="lime" />

      {/* Why ASOT */}
      <section className={`${styles.whySection} sec`}>
        <div className={styles.whyGrid}>
          <div>
            <div className="eyebrow">Why ASOT</div>
            <h2 className={`sec-title ${styles.whyTitle}`}>
              THE DETAIL IS
              <br />
              THE <span className={styles.bannerRed}>DIFFERENCE.</span>
            </h2>
            <ul className={styles.whyList}>
              {WHY.map((w) => (
                <li key={w.num} className={styles.whyItem}>
                  <div className={styles.whyNum}>{w.num}</div>
                  <div>
                    <h4 className={styles.whyItemTitle}>{w.title}</h4>
                    <p className={styles.whyItemBody}>{w.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.whyVisual}>
            <div className={styles.wvCorner}>✦</div>
            <span className={styles.wvBadge}>Our Promise</span>
            <div className={styles.wvTitle}>
              Merch That Means Something to Your Brand.
            </div>
            <div className={styles.wvSub}>
              Not generic. Not rushed. Every piece is a deliberate reflection of
              the standards your brand upholds — crafted with care, delivered
              with precision.
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineHd}>
          <div className="eyebrow red-ey">Project Timeline</div>
          <h2 className="sec-title">
            FROM BRIEF TO <span className={styles.bannerLime}>DELIVERY</span>
            <br />
            IN <span className={styles.bannerRed}>FOUR STAGES.</span>
          </h2>
        </div>
        <div className={styles.timeline}>
          {TIMELINE.map((t, i) => (
            <div key={i} className={styles.tlItem}>
              <div
                className={`${styles.tlDot} ${t.accent === "lime" ? styles.tlDotLime : ""} ${i === 0 ? styles.tlDotFirst : ""} ${i === 3 ? styles.tlDotLast : ""}`}
              >
                {t.dot}
              </div>
              <div
                className={`${styles.tlTag} ${t.accent === "lime" ? styles.tlTagLime : styles.tlTagRed}`}
              >
                {t.tag}
              </div>
              <div className={styles.tlTitle}>{t.title}</div>
              <p className={styles.tlBody}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.procCta}>
        <h2 className={styles.procCtaTitle}>
          READY TO START
          <br />
          YOUR <span className={styles.bannerLime}>PROJECT?</span>
        </h2>
        <p className={styles.procCtaBody}>
          Submit your brief today and have branded design previews in your inbox
          within 48 hours.
        </p>
        <div className="cta-row centered">
          <Link href="/contact" className="btn-lime">
            Get a Free Quote
          </Link>
          <Link href="/products" className="btn-outline-w">
            Browse Products
          </Link>
        </div>
      </section>
    </>
  );
}
