function AssistantsBilling() {
    return (
        <div>
            <h1>Assistants & Billing</h1>
            <p>Manage your AI assistants and billing settings.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Managing Assistants</h2>
                <p>
                    View and manage all your AI assistants in one place.
                </p>
                <ul>
                    <li>See active assistants and their status</li>
                    <li>Create new specialized assistants</li>
                    <li>Pause or delete assistants</li>
                    <li>View performance metrics</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Billing Plans</h2>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1.5rem',
                        borderRadius: '8px'
                    }}>
                        <h3>Starter</h3>
                        <p>Perfect for individuals getting started</p>
                        <ul>
                            <li>1 assistant</li>
                            <li>Basic features</li>
                            <li>Email support</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1.5rem',
                        borderRadius: '8px'
                    }}>
                        <h3>Professional</h3>
                        <p>For power users and small teams</p>
                        <ul>
                            <li>5 assistants</li>
                            <li>Advanced features</li>
                            <li>Priority support</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1.5rem',
                        borderRadius: '8px'
                    }}>
                        <h3>Enterprise</h3>
                        <p>For large organizations</p>
                        <ul>
                            <li>Unlimited assistants</li>
                            <li>Custom integrations</li>
                            <li>Dedicated support</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h2>Usage & Billing</h2>
                <p>Track your usage and manage billing:</p>
                <ul>
                    <li>View current usage and limits</li>
                    <li>Update payment methods</li>
                    <li>Download invoices</li>
                    <li>Upgrade or downgrade plans</li>
                </ul>
            </section>
        </div>
    )
}

export default AssistantsBilling
