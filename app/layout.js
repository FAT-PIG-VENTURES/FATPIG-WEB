import { dmSans, plusJakartaSans } from '@/lib/fonts';
import CursorGlow from '@/components/ui/CursorGlow';
import './globals.css';

export const metadata = {
  title: 'Fat Pig Ventures — Technology Consulting & Digital Agency India',
  description: 'Execution-focused technology consulting & digital agency in India. We build products, engineer growth systems & solve real business problems. Talk to us today.',
  keywords: 'technology consulting, digital agency, India, web development, digital marketing, app development, MVP, startup advisory',
  openGraph: {
    title: 'Fat Pig Ventures — Technology Consulting & Digital Agency India',
    description: 'Execution-focused technology consulting & digital agency in India. We build products, engineer growth systems & solve real business problems.',
    url: 'https://fatpigventures.com',
    siteName: 'Fat Pig Ventures LLP',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakartaSans.variable}`}>
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
