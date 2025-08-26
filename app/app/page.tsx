export default function Page() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', gap: 16 }}>
      <h1>Study Focus – $15 test product</h1>
      <form action="/api/checkout" method="POST">
        <button
          type="submit"
          style={{ padding: '12px 20px', fontWeight: 700, border: '1px solid #222', borderRadius: 8 }}
        >
          Buy for $15
        </button>
      </form>
    </main>
  );
}
