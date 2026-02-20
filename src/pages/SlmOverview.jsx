import React from 'react';
import SlmAnimation from '../components/SlmAnimation';

const SlmOverview = () => {
    const orangeColor = '#f59e0b';
    const sectionStyle = {
        marginBottom: '5rem',
        width: '100%',
        maxWidth: '1200px'
    };

    const cardStyle = {
        backgroundColor: '#111',
        border: '1px solid #222',
        borderRadius: '24px',
        padding: '2.5rem',
        flex: '1',
        minWidth: '300px'
    };

    return (
        <div style={{
            padding: '4rem 2rem 8rem 2rem',
            color: 'var(--text-primary)',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
        }}>
            {/* HERO SECTION */}
            <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                    What is <span style={{ color: orangeColor }}>Spinabot SLM?</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                    Spinabot SLM is an enterprise-grade small language model platform designed to run entirely on your infrastructure—delivering ultra-low latency, privacy-first AI without cloud dependency.
                </p>

                <SlmAnimation />
            </section>

            {/* PRIVATE BY DEFAULT */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', fontWeight: '700' }}>Private by Default</h2>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ ...cardStyle, borderRadius: '24px' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: orangeColor }}>🛡️ Your data stays with you</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '2' }}>
                            <li>• No external APIs</li>
                            <li>• No data leaks</li>
                            <li>• Fully VPC and compliance ready</li>
                        </ul>
                        <p style={{ marginTop: '1.5rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            Ideal for healthcare, finance, and enterprise use cases where security is non-negotiable.
                        </p>
                    </div>
                    <div style={{ ...cardStyle, border: `1px solid ${orangeColor}22`, background: 'rgba(245, 158, 11, 0.02)', borderRadius: '24px' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: orangeColor }}>⚡ Ultra-Low Latency</div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            By running models locally on your edge devices or internal servers, Spinabot SLM eliminates round-trip network lag, providing instantaneous responses for real-time applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE MODEL SIZING */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '700' }}>Interactive Model Sizing</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3.5rem' }}>Choose the right model based on your hardware and performance requirements.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { name: 'Nano (1B)', vram: '2GB', speed: '120 t/s', target: 'Edge / Mobile' },
                        { name: 'Micro (3B)', vram: '4GB', speed: '85 t/s', target: 'Laptop' },
                        { name: 'Small (7B)', vram: '8GB', speed: '50 t/s', target: 'Workstation' },
                        { name: 'Medium (14B)', vram: '16GB', speed: '35 t/s', target: 'GPU Server' }
                    ].map((model, idx) => (
                        <div key={idx} style={{
                            ...cardStyle,
                            padding: '2.5rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            borderRadius: '24px',
                            ':hover': { transform: 'translateY(-5px)' }
                        }}>
                            <div style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '1.25rem' }}>{model.name}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#666' }}>VRAM:</span>
                                    <span>{model.vram}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#666' }}>Speed:</span>
                                    <span style={{ color: orangeColor, fontWeight: '700' }}>{model.speed}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#666' }}>Target:</span>
                                    <span>{model.target}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SlmOverview;
