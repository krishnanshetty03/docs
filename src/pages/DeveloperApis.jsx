import React from 'react';

function DeveloperApis() {
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
                    API <span style={{ color: orangeColor }}>Documentation</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Integrate Spinabot's intelligence directly into your own applications. Use our omnichannel API infrastructure to power chatbots, voice agents, and white-labeled AI solutions.
                </p>
            </header>

            <section style={sectionStyle}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Omnichannel Presence
                </h2>
                <div style={cardStyle}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0', lineHeight: '1.6' }}>
                        Our API keys are universal. Use a single key to authenticate and power your entire AI stack across every interface—from web-view chatbots to low-latency voice agents.
                    </p>
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    White-Labeling & Customization
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Remove Spinabot branding and integrate our AI capabilities natively into your product experience. Our white-labeling APIs allow for seamless visual and functional alignment with your brand identity.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ ...cardStyle, border: '1px solid #333' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Custom Domain Routing</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Route API traffic through your own subdomains to maintain a consistent brand experience and simplify security whitelisting.
                        </p>
                    </div>
                    <div style={{ ...cardStyle, border: '1px solid #333' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>UI Personalization</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Use our Headless API mode to build your own UI while leveraging our enterprise-grade AI models and processing architecture.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default DeveloperApis;
