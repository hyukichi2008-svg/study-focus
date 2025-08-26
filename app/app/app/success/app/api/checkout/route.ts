import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '../../../lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(_req: Request) {
  try {
    // デプロイ環境のURL推定（Originヘッダ優先）
    const hdrs = headers();
    const origin =
      hdrs.get('origin') ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

    const price = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID; // 例: price_1RznTsRLZMK3Wv4nVKgZ9Tdc
    if (!price) {
      return NextResponse.json({ error: 'Missing NEXT_PUBLIC_STRIPE_PRICE_ID' }, { status: 500 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return NextResponse.json({ error: err?.message ?? 'unknown' }, { status: 500 });
  }
}
