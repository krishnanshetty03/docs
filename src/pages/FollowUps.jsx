function FollowUps() {
    return (
        <div>
            <h1>Follow-ups</h1>
            <p>Never miss a follow-up with Lindy's automatic tracking and reminders.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>How It Works</h2>
                <p>
                    Lindy automatically tracks action items from emails and meetings, then sends
                    follow-ups when needed.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>What Gets Tracked</h2>
                <ul>
                    <li>Action items from meetings</li>
                    <li>Commitments made in emails</li>
                    <li>Pending responses</li>
                    <li>Scheduled check-ins</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Follow-up Types</h2>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                        <h3>Gentle Reminders</h3>
                        <p>Polite nudges for pending items without being pushy.</p>
                    </div>
                    <div>
                        <h3>Status Checks</h3>
                        <p>Checking in on ongoing projects or commitments.</p>
                    </div>
                    <div>
                        <h3>Action Item Reminders</h3>
                        <p>Internal reminders for your own tasks and commitments.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Timing</h2>
                <p>Configure when Lindy sends follow-ups:</p>
                <ul>
                    <li>After 3 days (default)</li>
                    <li>After 1 week</li>
                    <li>Custom timeframes</li>
                    <li>Based on priority and urgency</li>
                </ul>
            </section>
        </div>
    )
}

export default FollowUps
