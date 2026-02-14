function EmailClassifier() {
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
            <h1>EmailClassifier</h1>
            <h2 style={{ color: orangeColor, marginTop: '2rem' }}>AI-Powered Gmail Automation & Inbox Intelligence</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                EmailClassifier intelligently organizes, prioritizes, and automates your inbox.
            </p>

            <section style={sectionStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Key Capabilities:</h2>
                    <ul style={listStyle}>
                        <li>AI-based email classification by priority</li>
                        <li>Spam rescue for important messages</li>
                        <li>Smart routing & automation rules</li>
                        <li>Workflow automation with Slack, Notion, and Jira</li>
                        <li>Inbox analytics & performance insights</li>
                    </ul>
                </div>

                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Knowledge Base Powered Replies:</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        EmailClassifier includes a built-in knowledge base where users can:
                    </p>
                    <ul style={listStyle}>
                        <li>Define business rules</li>
                        <li>Add pricing guidelines</li>
                        <li>Store policies & context</li>
                        <li>Train the system on writing tone</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        The AI then drafts responses aligned with your knowledge, ensuring accurate and brand-consistent communication.
                    </p>
                </div>

                <div style={cardStyle}>
                    <p style={{ lineHeight: '1.6', fontWeight: '600', color: orangeColor }}>
                        Best for: Founders, CX teams, agencies, enterprise support teams.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default EmailClassifier
