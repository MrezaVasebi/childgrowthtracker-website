import type { Metadata } from 'next';
import { AlertTriangle, CheckCircle2, Mail, Smartphone } from 'lucide-react';
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
        description="Request deletion in the app or contact support if you cannot sign in. You have 14 days to restore your account before app-controlled data is permanently deleted."
      />
      <section className="deletion-notice" aria-labelledby="before-deleting">
        <AlertTriangle aria-hidden="true" />
        <div>
          <h2 id="before-deleting">Before you delete your account</h2>
          <p>
            Export any records you want to keep. An internet connection is
            required to submit the request, and account deletion does not cancel
            an Apple App Store or Google Play subscription.
          </p>
        </div>
      </section>
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
        <ol className="deletion-timeline">
          <li>
            <span>1</span>
            <div>
              <h3>Deletion requested</h3>
              <p>
                Your account is marked for deletion, you are signed out, and
                that account’s local data is cleared from this device.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h3>Restore within 14 days</h3>
              <p>
                Your account and cloud data remain protected during the recovery
                period. Sign in again during these 14 days and choose
                <strong> Restore Account</strong> to recover the account.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h3>Permanent deletion</h3>
              <p>
                After 14 days, app-controlled authentication, database, and
                storage data is permanently deleted and cannot be restored.
              </p>
            </div>
          </li>
        </ol>
        <div className="deletion-retention">
          <h3>Records retained separately</h3>
          <p>
            Synchronization deletion markers may remain for up to 90 days, and
            privacy-safe aggregate cleanup metrics for up to 180 days. Apple,
            Google Play, and RevenueCat may retain purchase records according to
            their own legal obligations and policies.
          </p>
        </div>
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
