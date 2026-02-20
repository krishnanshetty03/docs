import React from 'react';

function Security() {
    const orangeColor = '#f59e0b';

    return (
        <div style={{
            padding: '4rem 2rem 8rem 2rem',
            color: 'var(--text-primary)',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
        }}>
            <header style={{ marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                    Security
                </h1>
                <div style={{
                    backgroundColor: '#111',
                    padding: '2.5rem',
                    borderRadius: '24px',
                    border: '1px solid #222',
                    marginTop: '2rem'
                }}>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        For an overview of our security practices, please visit our security page.
                    </p>
                    <a
                        href="https://www.spinabot.com/security"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            backgroundColor: orangeColor,
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Visit spinabot.com/security
                    </a>
                </div>
            </header>

            <section>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Commitment to Safety
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
                    We maintain enterprise-grade security standards to protect your data and workflows. Our security documentation provides detailed information on our encryption, compliance, and data handling protocols.
                </p>
            </section>
        </div>
    );
}

export default Security;
