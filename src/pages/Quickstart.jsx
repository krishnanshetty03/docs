function Quickstart() {
    const orangeColor = '#f59e0b';

    const stepStyle = {
        marginBottom: '2.5rem',
        paddingLeft: '1.5rem',
        borderLeft: `4px solid ${orangeColor}`
    };

    return (
        <div>
            <h1>Quick Start Guide</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Get Started in 6 Minutes
            </p>

            <section style={{ marginTop: '3rem' }}>
                <div style={stepStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>1. Create Your Account</h2>
                    <p>
                        Visit <a href="https://dashboard.spinabot.com" style={{ color: orangeColor, textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">dashboard.spinabot.com</a>,
                        sign up, and log in to access your dashboard.
                    </p>
                </div>

                <div style={stepStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>2. Explore Product Guides</h2>
                    <p>
                        Browse the product cards available on your dashboard. Each product includes a quick-start
                        manual to help you understand features and setup steps.
                    </p>
                </div>

                <div style={stepStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>3. Set Up Your Workspace</h2>
                    <p>
                        Navigate to the Admin Dashboard to create your entity and configure your workspace.
                        From there, you can add team members and manage access.
                    </p>
                </div>

                <div style={stepStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>4. Choose Your Plan</h2>
                    <p>
                        Purchase any of the four available products based on your business needs—whether as
                        an enterprise client or an individual user.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Quickstart
