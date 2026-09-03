import type { Metadata } from 'next';
import { LegalLayout, supportEmail } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Privacy Policy | Child Growth Analyst',
  description:
    'How Child Growth Analyst collects, uses, protects, and deletes information.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="Your family’s information deserves clarity."
      description="This policy explains what Child Growth Analyst collects, why it is needed, where it is stored, and the choices available to you."
      updated="September 3, 2026"
    >
      <section>
        <h2>1. Introduction</h2>
        <p>
          Child Growth Analyst is provided by Pacifica Analytic (1001375556
          Ontario Inc.). This policy applies to the mobile application and this
          website. The application is intended for parents, guardians, and
          caregivers—not for children to create their own accounts.
        </p>
      </section>
      <section>
        <h2>2. Information you provide</h2>
        <p>
          When you create an account, we may receive your name, email address,
          and optional profile picture. Child profiles may include a name or
          nickname, birth date, due date, gender, measurements, measurement
          dates, notes, and an optional profile photo.
        </p>
        <p>
          Subscription records include your application account identifier,
          store, product, transaction, purchase, expiration, renewal, and
          entitlement status. Google Play or Apple processes payment details; we
          do not store full card or bank information.
        </p>
      </section>
      <section>
        <h2>3. How information is used</h2>
        <ul>
          <li>Store and organize growth records.</li>
          <li>
            Calculate age, corrected age, BMI, percentiles, charts, and tables.
          </li>
          <li>Synchronize and restore account data.</li>
          <li>Create reports requested by you.</li>
          <li>Verify subscriptions and prevent purchase misuse.</li>
          <li>
            Provide notifications, support, security, and service reliability.
          </li>
        </ul>
        <p>We do not sell or rent personal information.</p>
      </section>
      <section>
        <h2>4. Guest Mode and cloud storage</h2>
        <p>
          Guest Mode data is stored only on your device. If you create an
          account, selected application data is stored using Supabase so it can
          be synchronized and restored. You control whether eligible Guest Mode
          data is added to your account.
        </p>
      </section>
      <section>
        <h2>5. Optional AI Growth Assistant</h2>
        <p>
          The AI Growth Assistant is available only to verified Premium accounts
          and requires separate, explicit consent for each enabled account.
          Selected deterministic facts may be processed by OpenAI: measurement
          dates and counts, weight, height, head circumference, calculated age
          and age basis, changes, intervals, and approved data-quality flags.
        </p>
        <p>
          Child names, notes, photos, parent details, account identifiers,
          subscription identifiers, unrelated records, and Parent Reports are
          not sent to OpenAI. Response storage is disabled. OpenAI may retain
          API inputs and outputs in abuse-monitoring logs under its applicable
          API policies. The application does not save raw AI prompts or results;
          results remain on the current screen unless you export a PDF.
        </p>
      </section>
      <section>
        <h2>6. Service providers</h2>
        <p>
          We use service providers only where needed to operate the application,
          including Supabase for authentication and cloud data, RevenueCat for
          subscription management, Google Play and Apple for billing,
          notification providers, AdMob for advertising, and OpenAI for
          user-requested AI processing. Each provider processes information
          under its own terms and privacy policy.
        </p>
      </section>
      <section>
        <h2>7. Retention and deletion</h2>
        <p>
          Account deletion begins with a 14-day recovery period.
          Account-controlled authentication, database, and storage data is
          permanently deleted after that period. Synchronization deletion
          markers may remain for up to 90 days, and privacy-safe aggregate
          cleanup metrics for up to 180 days. App stores and RevenueCat may
          retain purchase records for legal or operational reasons.
        </p>
        <p>
          Deleting the application or your Child Growth Analyst account does not
          cancel an active store subscription.
        </p>
      </section>
      <section>
        <h2>8. Security and your choices</h2>
        <p>
          We use reasonable technical, administrative, and organizational
          safeguards, but no electronic storage system can guarantee absolute
          security. Depending on your location, you may request access,
          correction, export, deletion, or withdrawal of consent.
        </p>
      </section>
      <section>
        <h2>9. Medical disclaimer</h2>
        <p>
          Child Growth Analyst provides educational information and organization
          tools only. It does not provide medical advice, diagnosis, or
          treatment. Consult a qualified healthcare professional about your
          child’s health or development.
        </p>
      </section>
      <section>
        <h2>10. Contact</h2>
        <p>
          Questions and privacy requests can be sent to{' '}
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
