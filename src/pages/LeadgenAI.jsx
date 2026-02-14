function LeadgenAI() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const cardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginBottom: '2rem'
    };

    const listStyle = {
        margin: '1rem 0',
        paddingLeft: '1.5rem',
        lineHeight: '1.8'
    };

    return (
        <div>
            <h1>LeadGenAI</h1>
            <h2 style={{ color: orangeColor, marginTop: '2rem' }}>AI-Powered Lead Discovery & Qualification</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Describe your ideal customer — industry, location, job titles, company size, hiring intent — and LeadGenAI automatically:
            </p>

            <section style={sectionStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Automated Lead Generation</h2>
                    <ul style={listStyle}>
                        <li>Scrapes and generates qualified leads</li>
                        <li>Provides company name</li>
                        <li>Employee/contact name</li>
                        <li>Role/designation</li>
                        <li>LinkedIn profile</li>
                        <li>Contact insights</li>
                    </ul>
                </div>

                <div style={cardStyle}>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                        It helps sales teams discover and qualify ICP-matched prospects in minutes instead of hours.
                    </p>
                </div>

                <div style={cardStyle}>
                    <p style={{ lineHeight: '1.6', fontWeight: '600', color: orangeColor }}>
                        Best for: Sales teams, outbound campaigns, B2B growth.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default LeadgenAI
