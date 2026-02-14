function Community() {
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

    const stepStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '1.5rem'
    };

    const numberStyle = {
        backgroundColor: orangeColor,
        color: 'black',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginRight: '1rem',
        flexShrink: 0,
        marginTop: '2px'
    };

    const listStyle = {
        margin: 0,
        paddingLeft: '1.2rem',
        lineHeight: '1.6'
    };

    return (
        <div>
            <h1>Community</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                The Community is where Spinabot users share their best workflows with the world.
            </p>

            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor }}>WHAT YOU CAN DO</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '1.5rem'
                }}>
                    {/* Discover Workflows */}
                    <div style={cardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Discover Workflows</h3>
                        <ul style={listStyle}>
                            <li>Browse 1,000+ community-built automations</li>
                            <li>Filter by industry, department, use case</li>
                            <li>See what's trending this week</li>
                            <li>Read real user reviews and ratings</li>
                            <li>Check performance stats (success rate, avg runtime)</li>
                        </ul>
                    </div>

                    {/* One-Click Import */}
                    <div style={cardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>One-Click Import</h3>
                        <ul style={listStyle}>
                            <li>Found the perfect workflow? Click "Use This"</li>
                            <li>Auto-imports to your account</li>
                            <li>Connects to your tools</li>
                            <li>Customize or use as-is</li>
                            <li>Deploy immediately</li>
                        </ul>
                    </div>

                    {/* Share Your Wins */}
                    <div style={cardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Share Your Wins</h3>
                        <ul style={listStyle}>
                            <li>Built something great? Share it</li>
                            <li>Help others solve the same problem</li>
                            <li>Get recognition in the community</li>
                            <li>Earn badges and credibility</li>
                            <li>Drive traffic to your business (optional profile link)</li>
                        </ul>
                    </div>

                    {/* Customize Everything */}
                    <div style={cardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Customize Everything</h3>
                        <ul style={listStyle}>
                            <li>Import any workflow</li>
                            <li>Modify for your needs</li>
                            <li>Save as private version</li>
                            <li>Or publish your improvement</li>
                            <li>Credit original creator</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor }}>How to Share:</h2>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    marginTop: '1.5rem'
                }}>
                    <div style={stepStyle}>
                        <div style={numberStyle}>1</div>
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Step 1: Prep Your Workflow</h3>
                            <ul style={{ ...listStyle, marginTop: '0.5rem' }}>
                                <li>Test thoroughly (95%+ success rate recommended)</li>
                                <li>Add clear descriptions</li>
                                <li>Document customization options</li>
                                <li>Include setup instructions</li>
                            </ul>
                        </div>
                    </div>
                    <div style={stepStyle}>
                        <div style={numberStyle}>2</div>
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Step 2: Publish</h3>
                            <ul style={{ ...listStyle, marginTop: '0.5rem' }}>
                                <li>Click "Share to Community"</li>
                                <li>Choose: Public, Unlisted, or Private</li>
                                <li>Write compelling description</li>
                                <li>Add tags and category</li>
                                <li>Set preview/thumbnail</li>
                            </ul>
                        </div>
                    </div>
                    <div style={stepStyle}>
                        <div style={numberStyle}>3</div>
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Step 3: Gain Recognition</h3>
                            <ul style={{ ...listStyle, marginTop: '0.5rem' }}>
                                <li>Earn "Contributor" badge</li>
                                <li>Get featured in newsletter</li>
                                <li>Climb leaderboard</li>
                                <li>Build following</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Community
