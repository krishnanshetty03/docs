function ExecutionsDashboard() {
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

    const statusItemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        fontSize: '1.05rem'
    };

    const listStyle = {
        margin: 0,
        paddingLeft: '1.2rem',
        lineHeight: '1.6'
    };

    return (
        <div>
            <h1>Executions Dashboard</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Watch your automations work in real-time. Track what's running, what worked, what failed—all in one view.
            </p>

            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor }}>What You See</h2>
                <div style={{ ...cardStyle, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ color: orangeColor, fontWeight: 'bold' }}>🟢 Running</span>
                            <span> — Active workflows executing now</span>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ color: orangeColor, fontWeight: 'bold' }}>✅ Successful</span>
                            <span> — Completed without errors</span>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ color: orangeColor, fontWeight: 'bold' }}>🔴 Failed</span>
                            <span> — What went wrong and why</span>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ color: orangeColor, fontWeight: 'bold' }}>⚡ Performance</span>
                            <span> — Speed, tokens used, efficiency</span>
                        </div>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3rem'
                }}>
                    <div>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Why It Matters</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
                            Full transparency. No black box. Know exactly what your AI is doing, when, and how well.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Quick Actions</h3>
                        <ul style={{ ...listStyle, marginTop: '1rem', color: 'var(--text-primary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Replay failed workflows</li>
                            <li style={{ marginBottom: '0.5rem' }}>View detailed logs</li>
                            <li style={{ marginBottom: '0.5rem' }}>Monitor costs in real-time</li>
                            <li>Export execution history</li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Perfect For</h3>
                        <ul style={{ ...listStyle, marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Debugging issues fast</li>
                            <li style={{ marginBottom: '0.5rem' }}>Tracking automation ROI</li>
                            <li style={{ marginBottom: '0.5rem' }}>Ensuring workflows run smoothly</li>
                            <li>Optimizing performance</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExecutionsDashboard
