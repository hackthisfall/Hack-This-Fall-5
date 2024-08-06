import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Roboto_Flex, Roboto_Condensed, Outfit } from 'next/font/google';
import { Providers } from './providers';
import { SpeedInsights } from '@vercel/speed-insights/next';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// export const metadata: Metadata = {
//   title: 'Hack This Fall 2025',
//   description:
//     'Hack This Fall 2025 is a 36 hour in-person hackathon scheduled to happen in Gandhinagar, Gujarat from 9th Feb to 11th Feb 2025! 🧡',
//   openGraph: {
//     title: 'Hack This Fall 2025',
//     description:
//       'Hack This Fall 2025 is a 36 hour in-person hackathon scheduled to happen in Gandhinagar, Gujarat from 9th Feb to 11th Feb 2025! 🧡',
//     siteName: 'Hack This Fall 2025',
//     images: [
//       {
//         url: 'https://hackthisfall.tech/og.png',
//         width: 2000,
//         height: 1000,
//         alt: 'Hack This Fall 2025',
//       },
//     ],
//   },
//   twitter: {
//     title: 'Hack This Fall 2025',
//     description:
//       'Hack This Fall 2025 is a 36 hour in-person hackathon scheduled to happen in Gandhinagar, Gujarat from 9th Feb to 11th Feb 2025! 🧡',
//     images: [
//       {
//         url: 'https://hackthisfall.tech/og.png',
//         width: 2000,
//         height: 1000,
//         alt: 'Hack This Fall 2025',
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} ${robotoCondensed.variable} ${outfit.variable}`}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
