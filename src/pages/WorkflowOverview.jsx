function WorkflowOverview() {
    const orangeColor = '#f59e0b';

    const listItemStyle = {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.05rem'
    };

    const checkIcon = (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={orangeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px' }}>
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );

    return (
        <div>
            <h1>Overview</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot Workflow enables you to turn business problems into fully automated solutions using AI.
                Instead of manually building logic or connecting nodes, simply describe your pain point —
                and the AI Generator creates a complete workflow using intelligent tool-calling.
            </p>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: orangeColor }}>Why Spinabot Workflow?</h2>

                <div style={{
                    marginTop: '1.5rem',
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={listItemStyle}>
                        {checkIcon}
                        <span>Describe your problem → Get a working automation</span>
                    </div>
                    <div style={listItemStyle}>
                        {checkIcon}
                        <span>No coding required</span>
                    </div>
                    <div style={listItemStyle}>
                        {checkIcon}
                        <span>AI selects and connects tools automatically</span>
                    </div>
                    <div style={listItemStyle}>
                        {checkIcon}
                        <span>Enterprise-ready integrations</span>
                    </div>
                    <div style={listItemStyle}>
                        {checkIcon}
                        <span>Transparent execution tracking</span>
                    </div>
                    <div style={listItemStyle}>
                        {checkIcon}
                        <span>Community-powered ecosystem</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkflowOverview
