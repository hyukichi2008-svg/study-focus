import './globals.css';

export const metadata = {
  title: 'Study Focus',
  description: 'Minimal Stripe Checkout example',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
