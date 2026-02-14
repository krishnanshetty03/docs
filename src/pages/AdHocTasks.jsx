function AdHocTasks() {
    return (
        <div>
            <h1>Ad-Hoc Tasks</h1>
            <p>Ask Lindy to handle one-time tasks and requests on demand.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>What are Ad-Hoc Tasks?</h2>
                <p>
                    Ad-hoc tasks are one-off requests that you need Lindy to handle immediately.
                    Unlike automated workflows, these are tasks you assign as needed.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Examples</h2>
                <ul>
                    <li>"Schedule a meeting with the design team next week"</li>
                    <li>"Find and summarize articles about AI trends"</li>
                    <li>"Draft an email to the client about the project update"</li>
                    <li>"Research competitors in the SaaS space"</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>How to Request Ad-Hoc Tasks</h2>
                <p>Simply tell Lindy what you need:</p>
                <ol>
                    <li>Open the Lindy chat interface</li>
                    <li>Describe your task in natural language</li>
                    <li>Lindy will confirm and execute the task</li>
                    <li>You'll receive a notification when it's complete</li>
                </ol>
            </section>

            <section>
                <h2>Best Practices</h2>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <ul style={{ margin: 0 }}>
                        <li>Be specific about deadlines and requirements</li>
                        <li>Provide context when necessary</li>
                        <li>Review Lindy's work and provide feedback</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AdHocTasks
