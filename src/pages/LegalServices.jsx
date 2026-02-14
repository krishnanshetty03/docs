function LegalServices() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Legal Services</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI automation for law firms and legal departments</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps law firms and corporate legal teams automate client intake, document management, case tracking, and billing while maintaining confidentiality and compliance.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>LEGAL AUTOMATION SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Client Intake & Consultation Scheduling */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>⚖️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Client Intake & Consultation Scheduling</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Collect client information, assess case details, schedule consultations, and route to appropriate attorneys.
                        </p>
                    </div>

                    {/* Document Automation & Template Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📄</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Document Automation & Template Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Generate contracts, agreements, and legal documents from templates with automated data population.
                        </p>
                    </div>

                    {/* Case Management & Deadline Tracking */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Case Management & Deadline Tracking</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Track case milestones, court deadlines, filing requirements, and send automated reminders to legal teams.
                        </p>
                    </div>

                    {/* Legal Research Assistant */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🔍</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Legal Research Assistant</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Search case law, statutes, and legal precedents with AI-powered research and citation management.
                        </p>
                    </div>

                    {/* Time Tracking & Billing Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💰</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Time Tracking & Billing Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automatically track billable hours, generate invoices, process payments, and manage client accounts.
                        </p>
                    </div>

                    {/* Conflict Checking & Compliance */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🛡️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Conflict Checking & Compliance</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Screen for conflicts of interest, maintain ethical compliance, and generate required disclosures.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LegalServices
