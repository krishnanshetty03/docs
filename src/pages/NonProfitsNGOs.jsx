function NonProfitsNGOs() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Non-Profits and NGOs</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI that amplifies your mission and impact</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps non-profits and NGOs maximize their impact with AI-powered donor engagement, volunteer coordination, and program management automation.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>MISSION-DRIVEN SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Donor Engagement & Fundraising */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💝</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Donor Engagement & Fundraising</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate donor outreach, personalize thank-you messages, send campaign updates, and track donation milestones.
                        </p>
                    </div>

                    {/* Volunteer Recruitment & Scheduling */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🤝</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Volunteer Recruitment & Scheduling</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Match volunteers with opportunities, manage schedules, send reminders, and track volunteer hours automatically.
                        </p>
                    </div>

                    {/* Beneficiary Support Chatbot */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💬</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Beneficiary Support Chatbot</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Provide 24/7 multilingual support to beneficiaries with information on programs, eligibility, and application processes.
                        </p>
                    </div>

                    {/* Grant Application Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📄</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Grant Application Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Track grant deadlines, automate application workflows, collect required documents, and manage reporting requirements.
                        </p>
                    </div>

                    {/* Impact Reporting & Analytics */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Impact Reporting & Analytics</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Collect program data, generate impact reports, and visualize outcomes for stakeholders and funders.
                        </p>
                    </div>

                    {/* Event & Campaign Coordination */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎯</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Event & Campaign Coordination</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Manage event registrations, coordinate campaigns, send updates, and track participation across all channels.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NonProfitsNGOs
