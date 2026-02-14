function AiWorkflowGenerator() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const cardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        height: '100%'
    };

    const statCardStyle = {
        ...cardStyle,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div>
            <h1>AI Workflow Generator</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                An AI-powered workflow builder that turns your description into working automation—instantly.
            </p>

            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor }}>How It Works</h2>
                <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div style={cardStyle}>
                        <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>1. Describe what you want</h3>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                            "When a lead fills our contact form, score them, route to sales if qualified, add to nurture if not"
                        </p>
                    </div>
                    <div style={cardStyle}>
                        <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>2. AI builds the workflow</h3>
                        <p>
                            The AI automatically constructs the complete workflow with all necessary steps, integrations, and logic paths.
                        </p>
                    </div>
                    <div style={cardStyle}>
                        <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>3. Deploy in one click</h3>
                        <p>
                            Review the generated workflow and click deploy—it's live and running immediately.
                        </p>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <div style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: `1px solid ${orangeColor}`
                }}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>The Magic</h2>
                    <p style={{ fontSize: '1.1rem', margin: 0 }}>
                        No drag-and-drop. No flowcharts. No technical knowledge needed. Just talk to it like you'd talk to your team.
                    </p>
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: orangeColor }}></span> KEY FEATURES
                </h2>
                <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem' }}>Natural Language → Automation</h3>
                <ul style={{ lineHeight: '1.8' }}>
                    <li>Type what you need in Your own languages like English, Espanol, French, Deutsch, Arab, Hindi, Telugu, Tamil, Kannada</li>
                    <li>AI understands context and intent</li>
                    <li>Builds complete workflow in seconds</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: orangeColor }}></span> REAL RESULTS
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '1.5rem'
                }}>
                    <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ color: orangeColor, marginTop: 0, marginBottom: '1.5rem' }}>Speed</h3>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.9rem' }}>Manual workflow building:</span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>20-45 minutes</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.9rem' }}>AI Workflow Generator:</span>
                                <span style={{ color: orangeColor, fontWeight: 'bold', fontSize: '1.1rem' }}>10-30 seconds</span>
                            </div>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Accuracy</h3>
                        <ul style={{ margin: 0, paddingLeft: '1.2rem', marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Fewer missing steps (AI suggests what you forgot)</li>
                            <li style={{ marginBottom: '0.5rem' }}>Consistent logic (no human error)</li>
                            <li>Best practices built in</li>
                        </ul>
                    </div>

                    <div style={cardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Adoption</h3>
                        <ul style={{ margin: 0, paddingLeft: '1.2rem', marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Non-technical teams build workflows</li>
                            <li style={{ marginBottom: '0.5rem' }}>10x more automations created</li>
                            <li>Faster ROI on platform</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AiWorkflowGenerator
