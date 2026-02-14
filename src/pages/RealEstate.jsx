function RealEstate() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Real Estate</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-powered automation for faster deals and happier clients</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps real estate agents, brokers, and property managers automate lead qualification, property tours, client communication, and transaction coordination.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>REAL ESTATE SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Lead Qualification & Nurturing */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🏠</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Lead Qualification & Nurturing</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Qualify leads based on budget, location, and preferences, then nurture them with personalized property recommendations.
                        </p>
                    </div>

                    {/* Automated Property Tour Scheduling */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Automated Property Tour Scheduling</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Allow clients to book property viewings instantly, sync with agent calendars, and send automated reminders.
                        </p>
                    </div>

                    {/* Virtual Property Assistant */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💬</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Virtual Property Assistant</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Answer questions about properties, neighborhoods, pricing, and amenities 24/7 via chat or voice.
                        </p>
                    </div>

                    {/* Document Collection & Transaction Coordination */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📄</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Document Collection & Transaction Coordination</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate document requests, track signatures, manage deadlines, and coordinate with all parties in the transaction.
                        </p>
                    </div>

                    {/* Tenant Screening & Lease Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🔍</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Tenant Screening & Lease Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Collect applications, run background checks, process lease agreements, and manage renewals automatically.
                        </p>
                    </div>

                    {/* Maintenance Request Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🔧</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Maintenance Request Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Receive maintenance requests, assign to vendors, track progress, and notify tenants of completion.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RealEstate
