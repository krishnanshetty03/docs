function MeetingNotes() {
    return (
        <div>
            <h1>Meeting Notes</h1>
            <p>Automatic note-taking for all your meetings.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Automatic Note-Taking</h2>
                <p>
                    Lindy joins your meetings and takes comprehensive notes so you can focus on the conversation.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>What Gets Captured</h2>
                <ul>
                    <li>Key discussion points and decisions</li>
                    <li>Action items with assigned owners</li>
                    <li>Important questions and answers</li>
                    <li>Next steps and deadlines</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Post-Meeting</h2>
                <p>
                    After each meeting, Lindy:
                </p>
                <ol>
                    <li>Summarizes the key takeaways</li>
                    <li>Creates a list of action items</li>
                    <li>Shares notes with all participants</li>
                    <li>Sets up follow-up reminders</li>
                </ol>
            </section>

            <section>
                <h2>Integrations</h2>
                <p>Meeting notes work seamlessly with:</p>
                <ul>
                    <li>Zoom</li>
                    <li>Google Meet</li>
                    <li>Microsoft Teams</li>
                    <li>Slack (for sharing)</li>
                </ul>
            </section>
        </div>
    )
}

export default MeetingNotes
