function ExecutionsDashboard() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '4rem'
    };

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <header style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', margin: '0 0 1.5rem 0' }}>
                    Executions Dashboard
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Watch your automations work in real-time. Track what's running, what worked, what failed—all in one view.
                </p>
            </header>

            <section style={sectionStyle}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', color: orangeColor }}>
                    What You See
                </h2>

                <div style={{
                    backgroundColor: '#111',
                    padding: '3rem',
                    borderRadius: '16px',
                    border: '1px solid #222',
                    maxWidth: '850px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { icon: '🟢', label: 'Running', desc: '— Active workflows executing now' },
                            { icon: '✅', label: 'Successful', desc: '— Completed without errors' },
                            { icon: '🔴', label: 'Failed', desc: '— What went wrong and why' },
                            { icon: '⚡', label: 'Performance', desc: '— Speed, tokens used, efficiency' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                    <span style={{ color: orangeColor }}>{item.label}</span>
                                    <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}> {item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px' }}>
                    <div>
                        <h3 style={{ color: orangeColor, fontSize: '1.5rem', marginBottom: '1rem' }}>Why It Matters</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Full transparency. No black box. Know exactly what your AI is doing, when, and how well.
                            Built-in logging and ROI tracking for every execution.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: orangeColor, fontSize: '1.5rem', marginBottom: '1rem' }}>Quick Actions</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <span style={{ color: orangeColor }}>•</span> Replay failed workflows
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <span style={{ color: orangeColor }}>•</span> View detailed logs
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <span style={{ color: orangeColor }}>•</span> Monitor costs in real-time
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <span style={{ color: orangeColor }}>•</span> Export execution history
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExecutionsDashboard
