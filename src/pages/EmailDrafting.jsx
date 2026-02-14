function EmailDrafting() {
    return (
        <div>
            <h1>Email Drafting</h1>
            <p>Let Lindy draft emails in your voice and style.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>How It Works</h2>
                <p>
                    Lindy learns your writing style and automatically drafts email responses
                    that sound like you.
                </p>
                <ol>
                    <li>Lindy analyzes the incoming email</li>
                    <li>Creates a draft response in your voice</li>
                    <li>You review and edit (or just send)</li>
                </ol>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Personalization</h2>
                <p>
                    Lindy adapts to your communication style by learning from:
                </p>
                <ul>
                    <li>Your previous emails and responses</li>
                    <li>Tone preferences you set</li>
                    <li>Edits you make to Lindy's drafts</li>
                    <li>Feedback you provide</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Draft Types</h2>
                <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div>
                        <h3>Quick Replies</h3>
                        <p>Short, concise responses for simple questions or confirmations.</p>
                    </div>
                    <div>
                        <h3>Detailed Responses</h3>
                        <p>Longer emails that address complex topics or multiple questions.</p>
                    </div>
                    <div>
                        <h3>Follow-ups</h3>
                        <p>Gentle reminders and check-ins for pending items.</p>
                    </div>
                </div>
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
                        <li>Always review drafts before sending</li>
                        <li>Provide feedback to improve accuracy</li>
                        <li>Set clear tone guidelines for different contexts</li>
                        <li>Use templates for common email types</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default EmailDrafting
