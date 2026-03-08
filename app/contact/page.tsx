"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import PageBanner from "@/components/PageBanner";
import Marquee from "@/components/Marquee";
import styles from "./page.module.css";

const RED_ITEMS = [
  "Free Quote in 24hrs",
  "Dedicated Account Manager",
  "Design Previews in 48hrs",
  "No Commitment Required",
];

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  quantity: string;
  eventDate: string;
  description: string;
  agreed: boolean;
}

const INITIAL: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  solution: "",
  quantity: "",
  eventDate: "",
  description: "",
  agreed: false,
};

const CONTACT_POINTS = [
  {
    icon: "⚡",
    accent: "red",
    title: "RESPOND IN 24 HOURS",
    body: "Your dedicated account manager will respond with a tailored quote and product recommendations within 24 hours of submission.",
  },
  {
    icon: "🎨",
    accent: "lime",
    title: "DESIGN PREVIEWS IN 48 HOURS",
    body: "Once briefed, our design team delivers fully branded mockups within 48 hours — ready for your review and approval.",
  },
  {
    icon: "🚚",
    accent: "red",
    title: "ON-TIME DELIVERY GUARANTEED",
    body: "We understand event deadlines are sacred. Our production pipeline is built around your timeline — not ours.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        bgWord="QUOTE"
        body="Tell us about your event or corporate project. A dedicated account manager will respond within 24 hours with a tailored recommendation and quote."
      >
        LET&apos;S BUILD YOUR
        <br />
        <span className={styles.red}>BRANDED</span>{" "}
        <span className={styles.lime}>EXPERIENCE.</span>
      </PageBanner>

      <Marquee items={RED_ITEMS} variant="red" />

      <div className={styles.body}>
        {/* LEFT — info */}
        <div className={styles.info}>
          <div className="eyebrow">Why Contact Us</div>
          <h2 className={styles.infoTitle}>
            YOUR BRIEF,
            <br />
            OUR <span className={styles.lime}>EXPERTISE.</span>
            <br />
            YOUR <span className={styles.red}>WIN.</span>
          </h2>
          <p className={styles.infoBody}>
            Whether you&apos;re planning a 50-person corporate retreat or a
            5,000-person flagship conference — we have the experience, the
            products, and the process to deliver branded merch that represents
            your brand at its best.
          </p>

          <ul className={styles.points}>
            {CONTACT_POINTS.map((p, i) => (
              <li key={i} className={styles.point}>
                <div
                  className={`${styles.pointIcon} ${p.accent === "lime" ? styles.pointIconLime : styles.pointIconRed}`}
                >
                  {p.icon}
                </div>
                <div>
                  <h4 className={styles.pointTitle}>{p.title}</h4>
                  <p className={styles.pointBody}>{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.promise}>
            <p>
              <strong className={styles.promiseBold}>Our Promise:</strong> If we
              can&apos;t meet your deadline or budget, we&apos;ll tell you
              upfront — no surprises, no wasted time.
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className={styles.formWrap}>
          <div className={styles.formTitle}>GET YOUR FREE QUOTE</div>

          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h3 className={styles.successTitle}>BRIEF RECEIVED!</h3>
              <p className={styles.successBody}>
                Your dedicated account manager will be in touch within 24 hours
                with a tailored quote and product recommendations.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>First Name *</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Amara"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name *</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Kelechi"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Company / Organisation *</label>
                <input
                  name="company"
                  type="text"
                  placeholder="Acumen Corp"
                  required
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Work Email *</label>
                <input
                  name="email"
                  type="email"
                  placeholder="amara@acumencorp.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Solution Type *</label>
                  <select
                    name="solution"
                    required
                    value={form.solution}
                    onChange={handleChange}
                  >
                    <option value="">Select a solution...</option>
                    <option>Conference / Summit Branding</option>
                    <option>Employee Onboarding Kit</option>
                    <option>Awards &amp; Gala Night</option>
                    <option>Campaign Activation</option>
                    <option>Customer Loyalty Merch</option>
                    <option>Institutional / Graduation Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Estimated Quantity *</label>
                  <select
                    name="quantity"
                    required
                    value={form.quantity}
                    onChange={handleChange}
                  >
                    <option value="">Select quantity...</option>
                    <option>1 – 50 units</option>
                    <option>51 – 200 units</option>
                    <option>201 – 500 units</option>
                    <option>501 – 1,000 units</option>
                    <option>1,001 – 5,000 units</option>
                    <option>5,000+ units</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Event / Delivery Date *</label>
                <input
                  name="eventDate"
                  type="date"
                  required
                  value={form.eventDate}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Tell Us About Your Project</label>
                <textarea
                  name="description"
                  placeholder="Describe your event, brand guidelines, specific products you're interested in, and any other details..."
                  value={form.description}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formCheck}>
                <input
                  id="agree"
                  name="agreed"
                  type="checkbox"
                  checked={form.agreed}
                  onChange={handleChange}
                />
                <label htmlFor="agree">
                  I agree to ASOT&apos;s{" "}
                  <a href="#" className={styles.privacyLink}>
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted regarding my enquiry.
                </label>
              </div>

              <button type="submit" className={styles.submit}>
                SUBMIT YOUR BRIEF →
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
