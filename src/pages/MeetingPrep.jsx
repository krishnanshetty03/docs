function MeetingPrep() {
    return (
        <div>
            <h1>Meeting Prep</h1>
            <p>Get briefed before every meeting with Lindy's automatic preparation.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>What is Meeting Prep?</h2>
                <p>
                    Before each meeting, Lindy sends you a briefing with everything you need to know.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>What's Included</h2>
                <ul>
                    <li>Meeting agenda and objectives</li>
                    <li>Participant backgrounds and recent interactions</li>
                    <li>Relevant emails and documents</li>
                    <li>Suggested talking points</li>
                    <li>Previous meeting notes and action items</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Timing</h2>
                <p>
                    Lindy sends meeting prep briefings based on your preferences:
                </p>
                <ul>
                    <li>15 minutes before (default)</li>
                    <li>30 minutes before</li>
                    <li>1 hour before</li>
                    <li>Custom timing</li>
                </ul>
            </section>

            <section>
                <h2>Configuration</h2>
                <p>Customize your meeting prep settings:</p>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <code style={{ color: 'var(--accent-cyan)' }}>
                        Settings → Meetings → Meeting Prep
                    </code>
                </div>
            </section>
        </div>
    )
}

export default MeetingPrep
