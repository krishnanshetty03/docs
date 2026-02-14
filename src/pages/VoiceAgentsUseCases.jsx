function VoiceAgentsUseCases() {
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
            <h1>Voice Agents Use Cases</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Discover how different industries leverage Spinabot Voice Agents to automate calls and improve customer experience.
            </p>

            <section style={sectionStyle}>
                {/* Hospitals & Clinics */}
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>1) Hospitals & Clinics</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
                        <strong>Use Case:</strong> Appointment booking, follow-ups, test reminders
                    </p>
                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>How It Helps:</h3>
                    <ul style={listStyle}>
                        <li>24/7 appointment scheduling</li>
                        <li>Automated patient reminders</li>
                        <li>Reduces front-desk workload</li>
                        <li>Handles high call volume instantly</li>
                    </ul>
                </div>

                {/* Restaurants */}
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>2) Restaurants</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
                        <strong>Use Case:</strong> Table reservations, order tracking, feedback calls
                    </p>
                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>How It Helps:</h3>
                    <ul style={listStyle}>
                        <li>Takes reservations automatically</li>
                        <li>Confirms bookings via call</li>
                        <li>Collects post-visit feedback</li>
                        <li>Handles peak-hour call traffic</li>
                    </ul>
                </div>

                {/* Real Estate */}
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>3) Real Estate</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
                        <strong>Use Case:</strong> Lead qualification & site visit scheduling
                    </p>
                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>How It Helps:</h3>
                    <ul style={listStyle}>
                        <li>Qualifies property inquiries</li>
                        <li>Schedules site visits</li>
                        <li>Sends reminders</li>
                        <li>Follows up with interested buyers</li>
                    </ul>
                </div>

                {/* Educational Institutions */}
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>4) Educational Institutions</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
                        <strong>Use Case:</strong> Admission inquiries & fee reminders
                    </p>
                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>How It Helps:</h3>
                    <ul style={listStyle}>
                        <li>Answers course-related questions</li>
                        <li>Books counseling calls</li>
                        <li>Sends payment reminders</li>
                        <li>Handles admission season call spikes</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default VoiceAgentsUseCases
