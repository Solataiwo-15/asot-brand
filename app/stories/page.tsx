import Link from "next/link";
import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Marquee from "@/components/Marquee";
import ImpactStrip from "@/components/ImpactStrip";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Stories — ASOT Event & Corporate Branding",
};

const RED_ITEMS = [
  "Conference Branding",
  "Employee Onboarding",
  "Gala Night Merch",
  "Customer Loyalty",
  "Campaign Activation",
  "Institutional Events",
];
const LIME_ITEMS = [
  "Building Deeper Connections",
  "Intentional Onboarding",
  "Memorable Impressions",
  "Rewarding Loyal Customers",
  "Effective On A Budget",
  "Graduation Done Right",
];

const TESTIMONIALS = [
  {
    tag: "Conference Branding",
    av: "AK",
    name: "Amara Kelechi",
    role: "Head of Events, Acumen Corp — Building Deeper Connections",
    quote:
      "ASOT delivered 400 premium conference kits for our annual summit with 72 hours to spare. The branding was flawless — attendees kept complimenting the quality throughout the day.",
  },
  {
    tag: "Employee Onboarding",
    av: "TO",
    name: "Tobi Ogunleye",
    role: "People Lead, NexaGroup — Intentional Onboarding",
    quote:
      "Our employee onboarding experience completely transformed. New hires receive an ASOT kit on day one — it instantly builds belonging. Worth every naira invested in our people.",
  },
  {
    tag: "Gala Night",
    av: "FE",
    name: "Funmi Eze",
    role: "Brand Manager, Helios Events — Memorable Impressions",
    quote:
      "The custom mailer boxes for our awards gala were the talk of the night. Clients still reach out asking where we sourced them. ASOT made our brand truly unforgettable.",
  },
  {
    tag: "Customer Loyalty",
    av: "BN",
    name: "Bola Nwosu",
    role: "CMO, Praxis HQ — Rewarding Loyal Customers",
    quote:
      "We rewarded our top 200 customers with branded kits from ASOT. Retention shot up and the social media posts from customers were incredible organic reach for the brand.",
  },
  {
    tag: "Campaign Activation",
    av: "CS",
    name: "Chidi Soneye",
    role: "Marketing Lead, Zeal Africa — Effective On A Budget",
    quote:
      "For our city-wide activation we needed 1,500 branded totes and notebooks in 5 days. ASOT pulled it off perfectly — not a single item was off-brand or late.",
  },
  {
    tag: "Institutional Event",
    av: "RA",
    name: "Dr. Remi Adeyemi",
    role: "Registrar, Meridian University — Graduation Done Right",
    quote:
      "Our convocation branded kits elevated the entire ceremony. Students were proud to receive them — the quality exceeded everything we'd seen at peer institutions in Nigeria.",
  },
];

export default function StoriesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Client Stories"
        bgWord="STORIES"
        body="Read our client success stories and get insights on how our branded merch solutions create real impact at events, within organisations, and across campaigns."
      >
        DISCOVER HOW LEADING BRANDS
        <br />
        USE <span className={styles.red}>ASOT</span> TO FUEL{" "}
        <span className={styles.lime}>GROWTH.</span>
      </PageBanner>

      {/* Featured story */}
      <div className={styles.featured}>
        <div className={styles.fsContent}>
          <span className={styles.fsTag}>Featured Story</span>
          <blockquote className={styles.fsQuote}>
            &ldquo;ASOT delivered 400 premium conference kits for our annual
            summit. The branding was{" "}
            <span className={styles.lime}>flawless.</span>&rdquo;
          </blockquote>
          <div className={styles.fsMeta}>
            <div className={styles.fsAv}>AK</div>
            <div>
              <div className={styles.fsName}>Amara Kelechi</div>
              <div className={styles.fsRole}>
                Head of Events, Acumen Corp — Annual Summit Branding
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fsVisual}>
          <div className={styles.fsVisualNum}>400</div>
          <div className={styles.fsStatRow}>
            {[
              { n: "400", l: "Kits Delivered" },
              { n: "72hr", l: "Ahead of Deadline" },
              { n: "100%", l: "Branded to Spec" },
            ].map((s) => (
              <div key={s.l} className={styles.fsStat}>
                <div className={styles.fsStatN}>{s.n}</div>
                <div className={styles.fsStatL}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Marquee items={RED_ITEMS} variant="red" />

      {/* Story grid */}
      <div className={styles.storiesBody}>
        <div className={styles.storiesHd}>
          <div>
            <div className="eyebrow">All Client Stories</div>
            <h2 className="sec-title">
              RESULTS THAT
              <br />
              <span className={styles.red}>SPEAK</span> FOR THEMSELVES.
            </h2>
          </div>
          <Link href="/contact" className="btn-lime">
            Start Your Story
          </Link>
        </div>

        <div className={styles.storyGrid}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`${styles.card} ${i % 2 === 0 ? styles.cardOdd : styles.cardEven}`}
            >
              <div
                className={`${styles.cardTag} ${i % 2 === 0 ? styles.cardTagRed : styles.cardTagLime}`}
              >
                {t.tag}
              </div>
              <div className={styles.openQuote}>&ldquo;</div>
              <p className={styles.cardQuote}>{t.quote}</p>
              <div className={styles.cardWho}>
                <div
                  className={`${styles.cardAv} ${i % 2 === 0 ? styles.cardAvRed : styles.cardAvLime}`}
                >
                  {t.av}
                </div>
                <div>
                  <div className={styles.cardName}>{t.name}</div>
                  <div className={styles.cardRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <ImpactStrip
        eyebrow="Our Numbers"
        title={
          <>
            RESULTS THAT
            <br />
            FUEL <span className={styles.lime}>BRANDS.</span>
          </>
        }
        body="Every metric below represents a client who trusted ASOT with their brand — and walked away with merch that made a lasting impression."
        btn1Label="Become a Client"
        btn1Href="/contact"
        btn1Variant="lime"
        btn2Label="View Solutions"
        btn2Href="/solutions"
      />

      <Marquee items={LIME_ITEMS} variant="lime" />

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Your Story Starts Here
        </div>
        <h2 className={styles.ctaTitle}>
          THINK <span className={styles.red}>MERCH</span>?<br />
          THINK <span className={styles.lime}>ASOT.</span>
        </h2>
        <p className={styles.ctaBody}>
          Join hundreds of brands that trust ASOT to make their events and
          corporate programmes unforgettable. Get your free quote today.
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
