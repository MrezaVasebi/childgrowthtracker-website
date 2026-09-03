import type { Metadata } from 'next';
import { Mail, MessageCircleQuestion } from 'lucide-react';
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
  supportEmail,
} from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Support | Child Growth Analyst',
  description:
    'Get help with Child Growth Analyst profiles, charts, subscriptions, privacy, and account access.',
};

const faqs = [
  [
    'Is Child Growth Analyst medical advice?',
    'No. The app provides educational growth information and organizational tools. Discuss health and development concerns with a qualified healthcare professional.',
  ],
  [
    'Where is Guest Mode data stored?',
    'Guest Mode profiles and measurements remain on the device. Creating an account enables cloud synchronization after you choose how to handle eligible Guest data.',
  ],
  [
    'How do I restore Premium?',
    'Sign in with the same application account, connect to the internet, and use Restore Purchases on the Premium screen if the entitlement does not refresh automatically.',
  ],
  [
    'Does deleting my account cancel Premium?',
    'No. Subscription billing is managed by Google Play or Apple and must be cancelled separately in the store account that made the purchase.',
  ],
  [
    'What information is sent for AI analysis?',
    'Only selected deterministic measurement facts are sent after explicit consent. Child names, notes, photos, parent details, and account or subscription identifiers are excluded.',
  ],
];

export default function SupportPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Support"
        title="Answers without the runaround."
        description="Start with the common questions below. If something still is not right, contact Pacifica Analytic directly."
      />
      <section className="support-layout">
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <aside className="contact-card">
          <MessageCircleQuestion />
          <p className="option-label">Still need help?</p>
          <h2>Talk to a person.</h2>
          <p>
            Include the device type and a short description of what happened. Do
            not email child measurements, passwords, or payment details.
          </p>
          <a className="primary-link" href={`mailto:${supportEmail}`}>
            <Mail size={17} /> {supportEmail}
          </a>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
