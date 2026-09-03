import type { Metadata } from 'next';
import { LegalLayout, supportEmail } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Terms of Use | Child Growth Analyst',
  description: 'Terms governing the use of Child Growth Analyst.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms of Use"
      title="Simple terms for a sensitive kind of data."
      description="These terms explain the responsibilities that come with using Child Growth Analyst and its optional subscription services."
      updated="September 3, 2026"
    >
      <section>
        <h2>1. Agreement and eligibility</h2>
        <p>
          By using Child Growth Analyst, you agree to these Terms and our
          Privacy Policy. You must be legally able to enter this agreement and
          use the application as a parent, guardian, or authorized caregiver.
          Children may not create accounts directly.
        </p>
      </section>
      <section>
        <h2>2. Educational purpose</h2>
        <p>
          The application organizes measurements and provides growth charts,
          calculations, reports, and optional AI-generated educational
          summaries. It is not a medical device and does not provide medical
          advice, diagnosis, treatment, emergency monitoring, or a substitute
          for professional care.
        </p>
      </section>
      <section>
        <h2>3. Your information and account</h2>
        <p>
          You are responsible for providing accurate information, protecting
          access to your account, and ensuring you have authority to enter
          information about a child. Notify us promptly if you suspect
          unauthorized access.
        </p>
      </section>
      <section>
        <h2>4. Premium subscriptions</h2>
        <p>
          Premium may be offered through monthly or annual auto-renewing
          subscriptions. Current localized prices and billing periods are shown
          by Google Play or Apple before purchase. Subscriptions renew unless
          cancelled through the applicable store before renewal. Cancellation
          normally leaves Premium active until the paid period ends.
        </p>
        <p>
          Payments, cancellations, and refunds are administered by the store
          under its policies. Deleting your account, signing out, or
          uninstalling the application does not cancel store billing.
        </p>
      </section>
      <section>
        <h2>5. AI features</h2>
        <p>
          AI features require explicit consent and may produce incomplete or
          inaccurate output. You must not rely on AI output for diagnosis,
          treatment, emergencies, or decisions requiring professional medical
          judgment. Usage limits may apply even when a provider attempt fails
          after a request has been accepted.
        </p>
      </section>
      <section>
        <h2>6. Acceptable use</h2>
        <ul>
          <li>
            Do not misuse the service, interfere with security, or attempt
            unauthorized access.
          </li>
          <li>Do not upload content you lack permission to use.</li>
          <li>
            Do not use the service to harm, exploit, or unlawfully monitor
            another person.
          </li>
          <li>
            Do not resell or reverse engineer protected parts of the service
            except where law permits.
          </li>
        </ul>
      </section>
      <section>
        <h2>7. Availability and changes</h2>
        <p>
          Features may change as the service improves or as platform
          requirements change. We may suspend access where necessary for
          security, legal compliance, maintenance, or material violation of
          these Terms.
        </p>
      </section>
      <section>
        <h2>8. Ownership</h2>
        <p>
          Pacifica Analytic owns the application, website, branding, and
          original service materials. You retain rights in information you
          provide and grant us only the permission needed to operate the service
          as described in the Privacy Policy.
        </p>
      </section>
      <section>
        <h2>9. Disclaimers and liability</h2>
        <p>
          The service is provided on an “as available” basis to the extent
          permitted by law. We do not guarantee uninterrupted access or that
          every calculation, chart, or AI output is error-free. Nothing in these
          Terms excludes rights or liability that cannot legally be excluded.
        </p>
      </section>
      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these Terms can be sent to{' '}
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
