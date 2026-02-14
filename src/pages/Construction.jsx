function Construction() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const featureGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
    };

    const featureCardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        textAlign: 'center'
    };

    const iconStyle = {
        fontSize: '3rem',
        marginBottom: '1rem'
    };

    return (
        <div>
            <h1 style={{ color: orangeColor }}>Spinabot for Construction</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-powered automation for projects that finish on time</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot equips construction firms, general contractors, and developers with AI agents that track milestones, coordinate vendors, and forecast delays across projects and sites.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>FIELD - TESTED SOLUTIONS FOR CONSTRUCTION</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Project Timeline Automation & Milestone Tracking */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📋</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Project Timeline Automation & Milestone Tracking</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Maintain live Gantt-style timelines powered by updates from chat, voice, and forms, with automatic alerts when milestones or dependencies change.
                        </p>
                    </div>

                    {/* Voice Agents for Site Reports & Safety Checks */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🗣️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Voice Agents for Site Reports & Safety Checks</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Allow supervisors to call in hands-free progress updates and safety reports that are transcribed, structured, and synced to project systems.
                        </p>
                    </div>

                    {/* Material Procurement Workflow Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📄</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Material Procurement Workflow Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate purchase requests, approvals, and vendor communication while tracking lead times and delivery schedules.
                        </p>
                    </div>

                    {/* Predictive Delay & Cost Overrun Analytics */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Predictive Delay & Cost Overrun Analytics</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Analyze historical and live project data to predict delays and budget overruns with recommended mitigation actions.
                        </p>
                    </div>

                    {/* Automated Compliance Documentation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📝</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Automated Compliance Documentation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Generate, organize, and store safety, inspection, and regulatory documents with full audit-ready records.
                        </p>
                    </div>

                    {/* Subcontractor Coordination & Scheduling */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Subcontractor Coordination & Scheduling</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Use chat and voice agents to assign tasks, confirm availability, and automatically update schedules for all trades.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Construction
