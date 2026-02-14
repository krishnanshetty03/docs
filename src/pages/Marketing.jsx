function Marketing() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Marketing</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-driven marketing automation that converts</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps marketing teams automate lead qualification, content distribution, campaign management, and customer engagement across all channels.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>MARKETING AUTOMATION SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Lead Qualification & Scoring */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎯</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Lead Qualification & Scoring</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automatically qualify inbound leads through conversational AI, score them based on engagement, and route hot leads to sales instantly.
                        </p>
                    </div>

                    {/* Multi-Channel Campaign Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📧</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Multi-Channel Campaign Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Orchestrate email, SMS, social media, and chatbot campaigns with personalized messaging and automated follow-ups.
                        </p>
                    </div>

                    {/* Content Personalization Engine */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>✨</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Content Personalization Engine</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Deliver personalized content recommendations based on user behavior, preferences, and engagement history.
                        </p>
                    </div>

                    {/* Event Registration & Webinar Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎪</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Event Registration & Webinar Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate event registrations, send reminders, manage attendee lists, and follow up with post-event surveys.
                        </p>
                    </div>

                    {/* Social Media Engagement Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📱</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Social Media Engagement Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Respond to comments, DMs, and mentions automatically while escalating complex queries to marketing teams.
                        </p>
                    </div>

                    {/* Marketing Analytics & Attribution */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Marketing Analytics & Attribution</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Track campaign performance, attribute conversions to channels, and generate insights for optimization.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Marketing
