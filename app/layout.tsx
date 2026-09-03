import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = DM_Sans({ variable: '--font-body', subsets: ['latin'] });
const displayFont = Manrope({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Child Growth Analyst | Clear growth tracking for parents',
  description:
    'Track measurements, follow trusted growth charts, and create parent-friendly reports with Child Growth Analyst by Pacifica Analytic.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
