function SmartScheduling() {
    return (
        <div>
            <h1>Smart Scheduling</h1>
            <p>Let Lindy handle the back-and-forth of scheduling meetings.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>How Smart Scheduling Works</h2>
                <p>
                    Lindy acts as your scheduling assistant, finding optimal meeting times
                    and coordinating with participants.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Features</h2>
                <ul>
                    <li>Automatic availability checking</li>
                    <li>Time zone coordination</li>
                    <li>Meeting room booking</li>
                    <li>Calendar invites with agenda</li>
                    <li>Rescheduling when conflicts arise</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Preferences</h2>
                <p>Set your scheduling preferences so Lindy knows:</p>
                <ul>
                    <li>Your preferred meeting times</li>
                    <li>Buffer time between meetings</li>
                    <li>Focus hours (no meetings)</li>
                    <li>Meeting length preferences</li>
                </ul>
            </section>

            <section>
                <h2>Usage Example</h2>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                        "Lindy, schedule a 30-minute meeting with Sarah and John next week."
                    </p>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                        Lindy will find a time that works for everyone and send the calendar invites.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default SmartScheduling
