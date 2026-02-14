function Integrations() {
    return (
        <div>
            <h1>Integrations</h1>
            <p>Connect Lindy with your favorite tools and services.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Available Integrations</h2>
                <p>
                    Lindy integrates with hundreds of popular tools to streamline your workflow.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Communication</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1rem',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{ marginTop: 0 }}>Email</h3>
                        <p style={{ margin: 0 }}>Gmail, Outlook, Office 365</p>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1rem',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{ marginTop: 0 }}>Messaging</h3>
                        <p style={{ margin: 0 }}>Slack, Microsoft Teams, Discord</p>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1rem',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{ marginTop: 0 }}>Video</h3>
                        <p style={{ margin: 0 }}>Zoom, Google Meet, Microsoft Teams</p>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Productivity</h2>
                <ul>
                    <li>Google Calendar, Outlook Calendar</li>
                    <li>Notion, Evernote, OneNote</li>
                    <li>Trello, Asana, Monday.com</li>
                    <li>Google Drive, Dropbox, OneDrive</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Business Tools</h2>
                <ul>
                    <li>Salesforce, HubSpot, Pipedrive</li>
                    <li>Zendesk, Intercom, Freshdesk</li>
                    <li>QuickBooks, Xero, Stripe</li>
                    <li>LinkedIn, Twitter, Facebook</li>
                </ul>
            </section>

            <section>
                <h2>Custom Integrations</h2>
                <p>
                    Need a custom integration? Lindy supports:
                </p>
                <ul>
                    <li>REST API connections</li>
                    <li>Webhooks</li>
                    <li>OAuth authentication</li>
                    <li>Custom API endpoints</li>
                </ul>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <p style={{ margin: 0 }}>
                        <strong>Enterprise customers:</strong> Contact our team for
                        custom integration development.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Integrations
