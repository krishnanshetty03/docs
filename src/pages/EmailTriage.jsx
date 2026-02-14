function EmailTriage() {
    return (
        <div>
            <h1>Email Triage</h1>
            <p>Let Lindy automatically organize and prioritize your inbox.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>How Email Triage Works</h2>
                <p>
                    Lindy reads your incoming emails and automatically categorizes them based on
                    importance, urgency, and relevance to your work.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Categories</h2>
                <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1.5rem',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{ marginTop: 0, color: 'var(--accent-blue)' }}>🔴 Urgent</h3>
                        <p style={{ margin: 0 }}>
                            Time-sensitive emails that require immediate attention
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1.5rem',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{ marginTop: 0, color: 'var(--accent-cyan)' }}>🟡 Important</h3>
                        <p style={{ margin: 0 }}>
                            Emails from key contacts or about critical topics
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1.5rem',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{ marginTop: 0, color: 'var(--text-secondary)' }}>🟢 Normal</h3>
                        <p style={{ margin: 0 }}>
                            Regular emails that can be handled during routine inbox reviews
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Custom Rules</h2>
                <p>
                    Train Lindy to recognize your specific priorities:
                </p>
                <ul>
                    <li>VIP contacts who should always be prioritized</li>
                    <li>Keywords that indicate urgency</li>
                    <li>Topics that are always important to you</li>
                    <li>Senders that can be automatically archived</li>
                </ul>
            </section>

            <section>
                <h2>Setup</h2>
                <p>Enable email triage in your Lindy settings:</p>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <code style={{ color: 'var(--accent-cyan)' }}>
                        Settings → Inbox → Enable Email Triage
                    </code>
                </div>
            </section>
        </div>
    )
}

export default EmailTriage
