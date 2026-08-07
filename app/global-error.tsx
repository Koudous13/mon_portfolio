'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', background: '#fff', color: '#000', minHeight: '100vh' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'red' }}>Erreur Globale !</h2>
          <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Message d'erreur :</p>
          <pre style={{ color: 'red', background: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginBottom: '1rem' }}>
            {error.message}
          </pre>
          <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Stack Trace :</p>
          <pre style={{ color: '#333', background: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginBottom: '1rem' }}>
            {error.stack}
          </pre>
        </div>
      </body>
    </html>
  )
}
