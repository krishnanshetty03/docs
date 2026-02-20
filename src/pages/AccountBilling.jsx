import React from 'react';

function AccountBilling() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '5rem'
    };

    const cardStyle = {
        backgroundColor: '#111',
        padding: '2.5rem',
        borderRadius: '24px',
        border: '1px solid #222',
        transition: 'transform 0.2s ease, border-color 0.2s ease',
        cursor: 'default'
    };

    const badgeStyle = {
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '99px',
        fontSize: '0.85rem',
        fontWeight: '600',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
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
                    Account & <span style={{ color: orangeColor }}>Billing</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Track your current usage, manage billing history, and configure payment methods for your organization.
                </p>
            </header>

            {/* PRODUCT ACCESS & TOKEN MANAGEMENT */}
            <section style={sectionStyle}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Workspace Governance
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <div style={cardStyle}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Product Access</div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Control which products each teammate can access. Grant or revoke permissions for AI Crew, Chatbots, and Voice Agents at the granular user level.
                        </p>
                    </div>
                    <div style={cardStyle}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Token Management</div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Allocate tokens from the shared pool to specific teams or projects. Set monthly caps and monitor real-time consumption across your organization.
                        </p>
                    </div>
                </div>
            </section>

            {/* USAGE & HISTORY */}
            <section>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Usage & Billing History
                </h2>
                <div style={{ ...cardStyle, padding: '2rem' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        Track your usage in real-time and access your financial documents. We provide transparent billing with no hidden fees.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Current Usage</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>$42.80 / $200.00</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Next Bill Date</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>March 1st, 2026</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #222' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                                <span>Update payment methods</span>
                                <span style={{ color: orangeColor, cursor: 'pointer' }}>Edit →</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                                <span>Download latest invoice (Feb 2026)</span>
                                <span style={{ color: orangeColor, cursor: 'pointer' }}>PDF ↓</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AccountBilling;
