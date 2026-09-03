import type { Metadata } from 'next';
import { CheckCircle2, Mail, Smartphone } from 'lucide-react';
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
  supportEmail,
} from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Delete Your Account | Child Growth Analyst',
  description:
    'Request deletion of a Child Growth Analyst account and associated application data.',
};

export default function DeleteAccountPage() {
  const requestLink = `mailto:${supportEmail}?subject=Child%20Growth%20Analyst%20account%20deletion%20request`;
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Account deletion"
        title="You can leave—and take control of your data."
        description="Delete your account in the app or contact us when you cannot access it."
      />
      <section className="deletion-options">
        <article>
          <span className="option-icon">
            <Smartphone />
          </span>
          <p className="option-label">Recommended</p>
          <h2>Delete inside the app</h2>
          <ol>
            <li>Sign in to your account.</li>
            <li>
              Open <strong>Settings → Account</strong>.
            </li>
            <li>
              Select <strong>Delete Account</strong>.
            </li>
            <li>Review the explanation and confirm.</li>
          </ol>
        </article>
        <article>
          <span className="option-icon">
            <Mail />
          </span>
          <p className="option-label">Cannot sign in?</p>
          <h2>Send a deletion request</h2>
          <p>
            Email us from the address connected to your account. We may ask you
            to verify ownership before processing the request.
          </p>
          <a className="primary-link" href={requestLink}>
            Email deletion request →
          </a>
        </article>
      </section>
      <section className="deletion-details">
        <div>
          <CheckCircle2 />
          <h2>What happens next</h2>
        </div>
        <ul>
          <li>
            Account-owned data is removed from the device when the request is
            accepted.
          </li>
          <li>
            A 14-day recovery window begins. Signing back in during this period
            may restore the account.
          </li>
          <li>
            After 14 days, app-controlled authentication, database, and storage
            data is permanently deleted.
          </li>
          <li>
            Synchronization markers may remain up to 90 days; privacy-safe
            aggregate cleanup metrics may remain up to 180 days.
          </li>
          <li>
            Store and RevenueCat purchase records may remain under their legal
            obligations.
          </li>
        </ul>
        <p>
          <strong>Important:</strong> account deletion does not cancel Google
          Play or Apple subscription billing. Cancel the subscription separately
          in the applicable store.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
