const members = [
    'Revalina Erica Permatasri (007)',
    'Clarissa Aydin Rahmazea (014)',
    'Muhammad Afrizan Rasya (048)',
    'Angga Firmansyah (062)',
    'Jofanka Al-Kautsar P A (107)',
]

export default function Slide01() {
    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                fontFamily: 'Inter, system-ui, sans-serif',
            }}
        >
            <h1 style={{ fontSize: '2.8cqw', fontWeight: 700, margin: 0 }}>
                Algoritma Metaheuristik
            </h1>
            <h2 style={{ fontSize: '1.6cqw', fontWeight: 600, margin: '0.8cqw 0 0' }}>
                Ant Lion Optimizer (ALO) dan Grasshopper Optimization Algorithm (GOA)
            </h2>

            <div style={{ marginTop: '6cqw', fontSize: '1.1cqw', lineHeight: 1.6 }}>
                <p style={{ margin: 0 }}>Anggota Kelompok:</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {members.map((m) => (
                        <li key={m}>• {m}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}