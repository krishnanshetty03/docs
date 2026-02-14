function ScheduleCalls() {
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

    const useCaseBoxStyle = {
        display: 'inline-block',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        border: `1px solid ${orangeColor}`,
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        marginRight: '0.75rem',
        marginBottom: '0.75rem',
        fontSize: '0.95rem'
    };

    return (
        <div>
            <h1>Schedule Calls (Bulk Outbound Calling)</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Automate your outbound calling campaigns with Spinabot's Batch Call Scheduler.
            </p>

            <section style={sectionStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>The Batch Call Scheduler allows you to:</h2>
                    <ul style={listStyle}>
                        <li>Upload contact lists (CSV import supported)</li>
                        <li>Add contacts manually</li>
                        <li>Select the voice agent</li>
                        <li>Set earliest and latest call times</li>
                        <li>Schedule bulk calls automatically</li>
                    </ul>
                </div>

                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Use cases include:</h2>
                    <div>
                        <span style={useCaseBoxStyle}>Lead follow-ups</span>
                        <span style={useCaseBoxStyle}>Payment reminders</span>
                        <span style={useCaseBoxStyle}>Appointment confirmations</span>
                        <span style={useCaseBoxStyle}>Campaign outreach</span>
                        <span style={useCaseBoxStyle}>Customer feedback calls</span>
                    </div>
                    <p style={{ lineHeight: '1.6', fontWeight: '600', color: orangeColor, marginTop: '2rem' }}>
                        All calls run automatically without manual dialing.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ScheduleCalls
