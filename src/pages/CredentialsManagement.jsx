function CredentialsManagement() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '4rem'
    };

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <header style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', margin: '0 0 1.5rem 0' }}>
                    Credentials Management
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    The Credentials page is your central hub for connecting Spinabot to all the tools you use every day.
                    Think of it as giving Spinabot the keys to your tech stack—securely and with full control.
                </p>
            </header>

            <section style={sectionStyle}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', color: orangeColor }}>
                    How It Works
                </h2>

                <div style={{
                    backgroundColor: '#111',
                    padding: '3rem',
                    borderRadius: '16px',
                    border: '1px solid #222',
                    maxWidth: '850px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {[
                            { title: 'Connect your tools once', desc: '(OAuth or API key)' },
                            { title: 'Spinabot accesses them securely', desc: 'to build workflows' },
                            { title: 'You control what Spinabot can do', desc: 'with each tool' },
                            { title: 'Workflows work across all connected platforms', desc: 'seamlessly' }
                        ].map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    minWidth: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: orangeColor,
                                    color: 'black',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    marginTop: '0.2rem'
                                }}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', margin: 0 }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <div style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.05)',
                    padding: '2.5rem',
                    borderRadius: '16px',
                    border: `1px solid ${orangeColor}`,
                    maxWidth: '850px'
                }}>
                    <h2 style={{ color: orangeColor, marginTop: 0, fontSize: '1.75rem' }}>The Magic</h2>
                    <p style={{ fontSize: '1.1rem', margin: '1rem 0 0 0', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                        Connect once, use everywhere. Build a workflow that reads from Gmail, updates Salesforce,
                        posts to Slack, and emails via SendGrid—all without reconnecting each time.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CredentialsManagement
