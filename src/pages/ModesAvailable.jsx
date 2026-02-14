function ModesAvailable() {
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

    const listStyle = {
        margin: 0,
        paddingLeft: '1.2rem',
        lineHeight: '1.6'
    };

    return (
        <div>
            <h1>Modes Available</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Build your way. Choose the mode that fits your skills and needs.
            </p>

            <section style={sectionStyle}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Non-Developer Mode */}
                    <div style={cardStyle}>
                        <h2 style={{ color: orangeColor, marginTop: 0 }}>Non-Developer Mode</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            AI does the heavy lifting. You describe what you need in plain English, Spinabot builds the entire workflow automatically
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Who It's For:</h3>
                            <ul style={listStyle}>
                                <li>Marketing teams</li>
                                <li>Sales operations</li>
                                <li>Customer success</li>
                                <li>Business analysts</li>
                                <li>Anyone without coding skills</li>
                            </ul>
                        </div>
                    </div>

                    {/* Developer Mode */}
                    <div style={cardStyle}>
                        <h2 style={{ color: orangeColor, marginTop: 0 }}>Developer Mode</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Manual workflow builder for technical users who want precise control over every node, condition, and integration.
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Who It's For:</h3>
                            <ul style={listStyle}>
                                <li>Developers</li>
                                <li>Solutions architects</li>
                                <li>Technical operations</li>
                                <li>Power users</li>
                                <li>Complex automation needs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <div style={{
                    background: `linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)`,
                    padding: '2rem',
                    borderRadius: '12px',
                    border: `1px solid ${orangeColor}`,
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: orangeColor, marginTop: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                        Switch Anytime <span style={{ fontSize: '1.5rem' }}>🔄</span>
                    </h2>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h3 style={{ marginBottom: '1rem' }}>The Best Part:</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                            Start in Non-Developer Mode → Switch to Developer Mode to fine-tune → Switch back
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
                            No lock-in. Use what works for you, when you need it.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ModesAvailable
