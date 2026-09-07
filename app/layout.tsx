import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mahua-game-studio-au.crafty-petal-5865.chatgpt.site'),
  title: 'Mahua Game Studio | Play a Brighter Tomorrow',
  description: 'Mahua Game Studio makes bright, big-hearted game worlds for mobile, iPad, and console.',
  openGraph: {
    title: 'Mahua Game Studio | Play a Brighter Tomorrow',
    description: 'Bright, big-hearted game worlds for mobile, iPad, and console.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Mahua Game Studio — Play a Brighter Tomorrow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahua Game Studio | Play a Brighter Tomorrow',
    description: 'Bright, big-hearted game worlds for mobile, iPad, and console.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
