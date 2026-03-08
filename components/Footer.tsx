import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <Image
            src="/logo-footer.svg" // Assuming the same logo as before
            alt="ASOT Logo"
            width={100} // You might want a slightly different size for the footer
            height={30}
            className={styles.footerLogo} // A new class for specific footer logo styling
          />
          <p>
            Premium event and corporate branding solutions. From conference kits
            to gala giveaways — we handle your project from start to finish,
            anywhere in Africa.
          </p>
          <div className={styles.socialRow}>
            <span className={styles.soc}>𝕏</span>
            <span className={styles.soc}>in</span>
            <span className={styles.soc}>ig</span>
          </div>
        </div>

        {/* Products */}
        <div className={styles.col}>
          <h4>Products</h4>
          <ul>
            {[
              "Merch Boxes",
              "Apparel",
              "Drinkware",
              "Notebooks & Pens",
              "Bags",
              "Technology",
              "Packaging",
            ].map((l) => (
              <li key={l}>
                <Link href="/products">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className={styles.col}>
          <h4>Solutions</h4>
          <ul>
            {[
              "Conference Branding",
              "Corporate Events",
              "Onboarding Kits",
              "Campaign Activations",
              "Awards & Galas",
              "Customer Loyalty",
            ].map((l) => (
              <li key={l}>
                <Link href="/solutions">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/">About ASOT</Link>
            </li>
            <li>
              <Link href="/process">Our Process</Link>
            </li>
            <li>
              <Link href="/stories">Client Stories</Link>
            </li>
            <li>
              <Link href="/contact">Get a Quote</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 ASOT Designs. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
