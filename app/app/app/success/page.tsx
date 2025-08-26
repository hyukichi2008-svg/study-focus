import Link from 'next/link';

export default function Success() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', gap: 16 }}>
      <h1>支払いが完了しました 🎉</h1>
      <Link href="/">ホームに戻る</Link>
    </main>
  );
}
