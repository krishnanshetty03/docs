function Telecommunications() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Telecommunications</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-driven customer service and network operations</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps telecom providers automate customer support, service activation, billing inquiries, and network issue resolution at scale.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>TELECOM SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Customer Support & Troubleshooting */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📞</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Customer Support & Troubleshooting</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Diagnose connectivity issues, guide customers through troubleshooting steps, and escalate complex technical problems.
                        </p>
                    </div>

                    {/* Service Activation & Plan Changes */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📱</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Service Activation & Plan Changes</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Activate new services, process plan upgrades/downgrades, and manage add-ons automatically.
                        </p>
                    </div>

                    {/* Billing & Payment Support */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💳</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Billing & Payment Support</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Answer billing questions, process payments, set up autopay, and resolve billing disputes.
                        </p>
                    </div>

                    {/* Outage Detection & Communication */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🔧</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Outage Detection & Communication</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Monitor network status, proactively notify affected customers, and provide outage updates.
                        </p>
                    </div>

                    {/* Account Management & Self-Service */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>👤</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Account Management & Self-Service</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Enable customers to check usage, update account details, manage devices, and view service history.
                        </p>
                    </div>

                    {/* Retention & Churn Prevention */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎯</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Retention & Churn Prevention</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Identify at-risk customers, offer personalized retention deals, and automate win-back campaigns.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Telecommunications
