function MediaEntertainment() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const featureGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
    };

    const featureCardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        textAlign: 'center'
    };

    const iconStyle = {
        fontSize: '3rem',
        marginBottom: '1rem'
    };

    return (
        <div>
            <h1 style={{ color: orangeColor }}>Spinabot for Media & Entertainment</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI automation for content creators and entertainment platforms</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps media companies, streaming platforms, and content creators automate audience engagement, content distribution, and subscriber management.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>MEDIA & ENTERTAINMENT SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Content Recommendation Engine */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎬</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Content Recommendation Engine</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Deliver personalized content recommendations based on viewing history, preferences, and engagement patterns.
                        </p>
                    </div>

                    {/* Subscriber Support & Account Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>👥</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Subscriber Support & Account Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Handle subscription inquiries, billing issues, plan changes, and technical support for streaming platforms.
                        </p>
                    </div>

                    {/* Social Media Engagement Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📱</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Social Media Engagement Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Respond to comments, manage fan interactions, schedule posts, and track engagement across platforms.
                        </p>
                    </div>

                    {/* Event Ticketing & Registration */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎫</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Event Ticketing & Registration</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate ticket sales, manage seating, send event reminders, and handle refunds or exchanges.
                        </p>
                    </div>

                    {/* Content Moderation & Community Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🛡️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Content Moderation & Community Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Monitor user-generated content, enforce community guidelines, and manage flagged content efficiently.
                        </p>
                    </div>

                    {/* Audience Analytics & Insights */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Audience Analytics & Insights</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Track viewer engagement, analyze content performance, and generate insights for content strategy.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MediaEntertainment
