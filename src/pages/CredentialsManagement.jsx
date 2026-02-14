function CredentialsManagement() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const cardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        height: '100%'
    };

    const stepStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '1.5rem'
    };

    const numberStyle = {
        backgroundColor: orangeColor,
        color: 'black',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginRight: '1rem',
        flexShrink: 0,
        marginTop: '2px'
    };

    return (
        <div>
            <h1>Credentials Management</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                The Credentials page is your central hub for connecting Spinabot to all the tools you use every day.
                Think of it as giving Spinabot the keys to your tech stack—securely and with full control.
            </p>

            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor }}>How It Works</h2>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    marginTop: '1.5rem'
                }}>
                    <div style={stepStyle}>
                        <div style={numberStyle}>1</div>
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Connect your tools once</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>(OAuth or API key)</p>
                        </div>
                    </div>
                    <div style={stepStyle}>
                        <div style={numberStyle}>2</div>
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Spinabot accesses them securely</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>to build workflows</p>
                        </div>
                    </div>
                    <div style={stepStyle}>
                        <div style={numberStyle}>3</div>
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>You control what Spinabot can do</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>with each tool</p>
                        </div>
                    </div>
                    <div style={stepStyle}>
                        <div style={numberStyle}>4</div>
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Workflows work across all connected platforms</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>seamlessly</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <div style={{
                    background: `linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)`,
                    padding: '2rem',
                    borderRadius: '12px',
                    border: `1px solid ${orangeColor}`
                }}>
                    <h2 style={{ color: orangeColor, marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.5rem' }}></span> The Magic
                    </h2>
                    <p style={{ fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                        Connect once, use everywhere. Build a workflow that reads from Gmail, updates Salesforce,
                        posts to Slack, and emails via SendGrid—all without reconnecting each time.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CredentialsManagement
