import React from 'react';

function DeveloperOverview() {
    const orangeColor = '#f59e0b';
    const sectionStyle = { marginBottom: '5rem' };
    const cardStyle = {
        backgroundColor: '#111',
        padding: '2.5rem',
        borderRadius: '24px',
        border: '1px solid #222',
    };

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
                    Developer <span style={{ color: orangeColor }}>Platform</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Build, deploy, and scale AI-powered workflows. Our developer-first platform allows you to create high-impact automation and contribute to the global community of AI excellence.
                </p>
            </header>

            <section style={sectionStyle}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Build AI-Powered Workflows
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Leverage our robust execution engine to build complex, multi-modal workflows. From simple data transformations to advanced agentic reasoning, the Spinabot SDK provides everything you need.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={cardStyle}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>SDK & CLI</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Initialize projects, test locally, and deploy to our high-availability cloud environment using our purpose-built developer tools.
                        </p>
                    </div>
                    <div style={cardStyle}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Advanced Logic</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Implement intricate conditional logic, state management, and custom tool-calling to create workflows that adapt to real-time data.
                        </p>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Community of Workflows
                </h2>
                <div style={{ ...cardStyle, border: `1px solid ${orangeColor}22` }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        Join a thriving ecosystem of developers. Push your optimized workflows to our public community repository and enable thousands of organizations to benefit from your engineering talent.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>🚀 <strong>Global Reach:</strong> Your workflows usable by any Spinabot user.</li>
                        <li>🤝 <strong>Collaboration:</strong> Fork and improve upon existing community patterns.</li>
                        <li>🛡️ <strong>Verified Quality:</strong> Automated testing ensures community standard compliance.</li>
                        <li>🏆 <strong>Rankings:</strong> Gain recognition for the most efficient and popular automations.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default DeveloperOverview;
