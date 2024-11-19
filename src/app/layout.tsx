import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "⁠Alvian Deandra - Sales Resmi Mobil Honda",
  description:
    "Saya, Alvian Deandra, adalah sales resmi Honda yang siap membantu Anda menemukan mobil impian dengan penawaran spesial dan layanan terbaik.",
  keywords:
    "Sales mobil Honda, Promo mobil Honda, Mobil keluarga Honda, Dealer resmi Honda, Honda Bandung",
  authors: [{ name: "Rhazes" }],
  openGraph: {
    title: "⁠Alvian Deandra - Sales Resmi Mobil Honda",
    description:
      "Dapatkan layanan personal dan penawaran eksklusif untuk mobil Honda dari Alvian Deandra, sales resmi Honda terpercaya.",
    url: "https://client-honda-alvin.vercel.app",
    siteName: "Sales Honda - Alvian Deandra",
    images: [
      {
        url: "https://client-honda-alvin.vercel.app/profile-photo.jpg",
        width: 800,
        height: 800,
        alt: "⁠Alvian Deandra - Sales Resmi Honda",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "⁠Alvian Deandra - Sales Resmi Mobil Honda",
    description:
      "Beli mobil Honda impian Anda dengan mudah dan cepat bersama saya, Alvian Deandra, sales resmi Honda.",
    images: ["https://client-honda-alvin.vercel.app/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="Alvian Deandra" />
        <meta name="keywords" content="Sales mobil Honda, Honda, Promo Honda" />
        <meta
          name="description"
          content="Saya, Alvian Deandra, adalah sales resmi Honda yang siap membantu Anda menemukan mobil impian dengan penawaran spesial dan layanan terbaik."
        />
        <meta name="robots" content="index, follow" />

        {/* Metadata Open Graph untuk pembagian di media sosial */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="⁠Alvian Deandra - Sales Resmi Mobil Honda"
        />
        <meta
          property="og:description"
          content="Dapatkan layanan personal dan penawaran eksklusif untuk mobil Honda dari Alvian Deandra, sales resmi Honda terpercaya."
        />
        <meta
          property="og:url"
          content="https://client-honda-alvin.vercel.app"
        />
        <meta
          property="og:image"
          content="https://client-honda-alvin.vercel.app/profile-photo.jpg" // Gambar yang tampil di media sosial
        />
        <meta property="og:site_name" content="Sales Honda - Alvian Deandra" />

        {/* Metadata Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="⁠Alvian Deandra - Sales Resmi Mobil Honda"
        />
        <meta
          name="twitter:description"
          content="Beli mobil Honda impian Anda dengan mudah dan cepat bersama saya, Alvian Deandra, sales resmi Honda."
        />
        <meta
          name="twitter:image"
          content="https://client-honda-alvin.vercel.app/twitter-image.jpg"
        />

        <link
          rel="icon"
          href="https://client-honda-alvin.vercel.app/honda-logo.png"
        />

        <link rel="canonical" href="https://client-honda-alvin.vercel.app" />

        <meta name="theme-color" content="#FF0000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
