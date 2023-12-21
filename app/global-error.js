'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Algo salio mal</h2>
        <button onClick={() => reset()}>Intentar de vuelta</button>
      </body>
    </html>
  );
}
