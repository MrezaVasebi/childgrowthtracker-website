import { SiteHeader } from '@/components/site-header';
import { PageIntro, SiteFooter, supportEmail } from '@/components/site-shell';
import { AlertTriangle, CheckCircle2, Mail, Smartphone } from 'lucide-react';
import type { Metadata } from 'next';

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
      <section className="deletion-explainer" aria-label="Deletion details">
        <article>
          <p className="option-label">Your application data</p>
          <h2>What will be deleted</h2>
          <p>
            When the recovery period ends, Child Growth Analyst permanently
            removes the account information controlled by Pacifica Analytic,
            including:
          </p>
          <ul>
            <li>Your Child Growth Analyst sign-in account and profile.</li>
            <li>Child profiles, measurements, notes, and profile images.</li>
            <li>Saved Parent Reports and app-managed uploaded files.</li>
            <li>
              AI consent, usage, and other account-linked application records.
            </li>
          </ul>
        </article>
        <article>
          <p className="option-label">Important exceptions</p>
          <h2>What is not deleted automatically</h2>
          <p>Deleting your account does not:</p>
          <ul>
            <li>Cancel an active subscription or stop future store billing.</li>
            <li>Delete exported PDFs or backup files saved outside the app.</li>
            <li>
              Immediately erase transaction records held independently by Apple,
              Google Play, or RevenueCat.
            </li>
          </ul>
        </article>
        <article>
          <p className="option-label">Changing your mind</p>
          <h2>How account restoration works</h2>
          <p>
            During the 14-day recovery period, sign in with the same account and
            select <strong>Restore Account</strong>. The scheduled deletion is
            cancelled and your retained cloud data is downloaded into a fresh
            local workspace. After the deadline, restoration is no longer
            available.
          </p>
        </article>
        <article>
          <p className="option-label">Requesting help</p>
          <h2>If you cannot access the app</h2>
          <p>
            Send the request from the email address connected to your account.
            Include “Child Growth Analyst account deletion request” in the
            subject. We may ask you to verify account ownership before the
            request is processed.
          </p>
          <a className="primary-link" href={requestLink}>
            Contact {supportEmail} →
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
