"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Marquee from "@/components/Marquee";
import styles from "./page.module.css";

const RED_ITEMS = [
  "Merch Boxes",
  "Apparel",
  "Drinkware",
  "Notebooks",
  "Pens",
  "Bags",
  "Technology",
  "Home & Lifestyle",
  "Accessories",
  "Packaging",
];
const LIME_ITEMS = Array(8).fill("Fully Custom & Branded");

type Category =
  | "all"
  | "merch-box"
  | "apparel"
  | "drinkware"
  | "notebook"
  | "pen"
  | "bag"
  | "tech"
  | "lifestyle"
  | "accessory"
  | "packaging";

interface Product {
  emoji: string;
  cat: Category;
  catLabel: string;
  name: string;
  note: string;
}

const PRODUCTS: Product[] = [
  {
    emoji: "🎁",
    cat: "merch-box",
    catLabel: "Merch Boxes",
    name: "CLASSIC PACK",
    note: "Full branded merch bundle",
  },
  {
    emoji: "📫",
    cat: "merch-box",
    catLabel: "Merch Boxes",
    name: "EXECUTIVE PACK",
    note: "Premium gift set, 6 items",
  },
  {
    emoji: "🎒",
    cat: "bag",
    catLabel: "Bags",
    name: "ASHFORD BACKPACK",
    note: "Premium branded backpack",
  },
  {
    emoji: "🛍️",
    cat: "bag",
    catLabel: "Bags",
    name: "BOSSA TOTE BAG",
    note: "Colour-rich tote, 9 variants",
  },
  {
    emoji: "👜",
    cat: "bag",
    catLabel: "Bags",
    name: "AERO DRAWSTRING BAG",
    note: "Lightweight branded bag",
  },
  {
    emoji: "📓",
    cat: "notebook",
    catLabel: "Notebooks",
    name: "ATLAS NOTEBOOK",
    note: "Executive hardcover journal",
  },
  {
    emoji: "📒",
    cat: "notebook",
    catLabel: "Notebooks",
    name: "CHRONICLE NOTEBOOK",
    note: "Softcover branded notebook",
  },
  {
    emoji: "📝",
    cat: "notebook",
    catLabel: "Notebooks",
    name: "ANCHOR STICKY NOTES",
    note: "Custom branded sticky notes",
  },
  {
    emoji: "☕",
    cat: "drinkware",
    catLabel: "Drinkware",
    name: "CAMBRIDGE MUG",
    note: "Custom ceramic mug",
  },
  {
    emoji: "💧",
    cat: "drinkware",
    catLabel: "Drinkware",
    name: "COLA VACUUM BOTTLE",
    note: "Insulated branded bottle",
  },
  {
    emoji: "🍶",
    cat: "drinkware",
    catLabel: "Drinkware",
    name: "COOPER BOTTLE",
    note: "Slim insulated bottle",
  },
  {
    emoji: "🖊️",
    cat: "pen",
    catLabel: "Pens",
    name: "ARC BALL PEN",
    note: "Custom branded ballpen",
  },
  {
    emoji: "✏️",
    cat: "pen",
    catLabel: "Pens",
    name: "BEACON HIGHLIGHTER PEN",
    note: "Dual highlighter + ballpen",
  },
  {
    emoji: "🎧",
    cat: "tech",
    catLabel: "Technology",
    name: "ECHOPODS TWS EARBUDS",
    note: "Branded wireless earbuds",
  },
  {
    emoji: "🔊",
    cat: "tech",
    catLabel: "Technology",
    name: "ECOTONE SPEAKER",
    note: "Bamboo wireless speaker",
  },
  {
    emoji: "🖱️",
    cat: "tech",
    catLabel: "Technology",
    name: "BRADLEY MOUSE PAD",
    note: "Custom branded mouse pad",
  },
  {
    emoji: "🌀",
    cat: "tech",
    catLabel: "Technology",
    name: "AXIS PORTABLE FAN",
    note: "Mini branded desk fan",
  },
  {
    emoji: "🧦",
    cat: "apparel",
    catLabel: "Apparel",
    name: "CUSTOM SOCKS",
    note: "Full-print branded socks",
  },
  {
    emoji: "👕",
    cat: "apparel",
    catLabel: "Apparel",
    name: "BRANDED T-SHIRT",
    note: "Custom print, all sizes",
  },
  {
    emoji: "🔑",
    cat: "accessory",
    catLabel: "Accessories",
    name: "CITADEL KEYCHAIN",
    note: "Premium metal keychain",
  },
  {
    emoji: "🏷️",
    cat: "accessory",
    catLabel: "Accessories",
    name: "BUTTON BADGES",
    note: "Custom branded badges",
  },
  {
    emoji: "🔖",
    cat: "accessory",
    catLabel: "Accessories",
    name: "BOOKMARKS",
    note: "Branded ribbon bookmarks",
  },
  {
    emoji: "🃏",
    cat: "accessory",
    catLabel: "Accessories",
    name: "CUSTOM A6 CARDS",
    note: "Branded thank-you cards",
  },
  {
    emoji: "🕯️",
    cat: "lifestyle",
    catLabel: "Home & Lifestyle",
    name: "AURA SCENTED CANDLE",
    note: "Branded candle gift",
  },
  {
    emoji: "📦",
    cat: "packaging",
    catLabel: "Packaging",
    name: "CUSTOM MAILER BOX",
    note: "Fully branded gift box",
  },
  {
    emoji: "🎀",
    cat: "packaging",
    catLabel: "Packaging",
    name: "2-PIECE RIGID BOX",
    note: "Luxury rigid box",
  },
];

const CATS: { key: Category; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "merch-box", label: "Merch Boxes" },
  { key: "apparel", label: "Apparel" },
  { key: "drinkware", label: "Drinkware" },
  { key: "notebook", label: "Notebooks" },
  { key: "pen", label: "Pens" },
  { key: "bag", label: "Bags" },
  { key: "tech", label: "Technology" },
  { key: "lifestyle", label: "Home & Lifestyle" },
  { key: "accessory", label: "Accessories" },
  { key: "packaging", label: "Packaging" },
];

export default function ProductsPage() {
  const [active, setActive] = useState<Category>("all");

  const visible =
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active);

  return (
    <>
      <PageBanner
        eyebrow="Product Catalogue"
        bgWord="PRODUCTS"
        body="Browse 90+ fully customisable products — from merch boxes and apparel to tech accessories and premium packaging. Every item can be branded to your exact specifications."
      >
        EVERYTHING YOUR
        <br />
        <span className={styles.bannerRed}>BRAND</span> NEEDS.
      </PageBanner>

      <Marquee items={RED_ITEMS} variant="red" />

      {/* Products body */}
      <div className={styles.body}>
        {/* Category filter */}
        <div className={styles.cats}>
          {CATS.map((c) => (
            <button
              key={c.key}
              className={`${styles.cat} ${active === c.key ? styles.catOn : ""}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className={styles.grid}>
          {visible.map((p, i) => (
            <div
              key={i}
              className={`${styles.card} ${i % 2 === 0 ? styles.cardOdd : styles.cardEven}`}
            >
              <div className={styles.thumb}>
                <span className={styles.emoji}>{p.emoji}</span>
                <div className={styles.bar} />
              </div>
              <div className={styles.info}>
                <div className={styles.prodCat}>{p.catLabel}</div>
                <div className={styles.prodName}>{p.name}</div>
                <div className={styles.prodNote}>{p.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Marquee items={LIME_ITEMS} variant="lime" />

      {/* Bottom CTA */}
      <div className={styles.bottomCta}>
        <div>
          <h2 className={styles.bottomCtaTitle}>
            CAN&apos;T FIND WHAT
            <br />
            YOU NEED? <span className={styles.red}>ASK</span>{" "}
            <span className={styles.lime}>US.</span>
          </h2>
          <p className={styles.bottomCtaBody}>
            We source and customise products beyond this catalogue. Tell us what
            you&apos;re looking for and we&apos;ll make it happen.
          </p>
        </div>
        <div className="cta-row">
          <Link href="/contact" className="btn-red">
            Get a Custom Quote
          </Link>
          <Link href="/solutions" className="btn-outline-w">
            View Solutions
          </Link>
        </div>
      </div>
    </>
  );
}
