import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { SiteHeader } from './site-header';

export const supportEmail = 'support@childgrowthanalyst.com';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image src="/app-icon.png" alt="" width={40} height={40} />
            <span>Child Growth Analyst</span>
          </Link>
          <p>Thoughtful growth tracking for parents and caregivers.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Product</strong>
            <Link href="/#features">Features</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/support">Support</Link>
          </div>
          <div>
            <strong>Legal</strong>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/delete-account">Delete account</Link>
          </div>
          <div>
            <strong>Contact</strong>
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            <span>Pacifica Analytic</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Pacifica Analytic (1001375556 Ontario Inc.)</span>
        <span>Educational information—not medical advice.</span>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">
        <span /> {eyebrow}
      </p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export function LegalLayout({
  children,
  eyebrow,
  title,
  description,
  updated,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
}) {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow={eyebrow} title={title} description={description} />
      <div className="legal-layout">
        <aside>
          <p>Pacifica Analytic</p>
          {updated ? (
            <span>
              Last updated
              <br />
              <strong>{updated}</strong>
            </span>
          ) : null}
          <a href={`mailto:${supportEmail}`}>
            Ask a question <ArrowRight size={15} />
          </a>
        </aside>
        <article className="legal-content">{children}</article>
      </div>
      <SiteFooter />
    </main>
  );
}
