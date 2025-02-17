import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: "The official Next.js course dashboard, built with App router.",
  // metadataBase: new URL('https://nextjs-dashboard-kappa-puce-46.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><SpeedInsights /></head>
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
