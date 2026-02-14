function MeetingSMS() {
    return (
        <div>
            <h1>Meeting & SMS</h1>
            <p>Manage your meetings and SMS communications with Lindy.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Meeting Management</h2>
                <p>
                    Lindy helps you prepare for meetings, take notes, and follow up on action items.
                </p>
                <ul>
                    <li>Automatic meeting preparation and briefings</li>
                    <li>Real-time note-taking during meetings</li>
                    <li>Post-meeting summaries and action items</li>
                    <li>Automated follow-up emails</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>SMS Integration</h2>
                <p>
                    Extend Lindy's capabilities to SMS for seamless communication.
                </p>
                <ul>
                    <li>Send and receive SMS through Lindy</li>
                    <li>Automatic SMS responses based on context</li>
                    <li>Integration with your calendar for scheduling via SMS</li>
                </ul>
            </section>

            <section>
                <h2>Configuration</h2>
                <p>
                    Set up your meeting and SMS preferences in the settings panel.
                </p>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <code style={{ color: 'var(--accent-cyan)' }}>
                        Settings → Meetings & SMS → Configure
                    </code>
                </div>
            </section>
        </div>
    )
}

export default MeetingSMS
