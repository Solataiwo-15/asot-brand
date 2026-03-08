"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/stories", label: "Stories" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/Logo.svg"
          alt="ASOT Logo"
          width={100}
          height={30}
          priority
        />
      </Link>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <Link href="/stories" className={styles.ghost}>
          Our Work
        </Link>
        <Link href="/contact" className={styles.fill}>
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
