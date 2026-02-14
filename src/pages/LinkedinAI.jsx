function LinkedinAI() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const cardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginBottom: '2rem'
    };

    const listStyle = {
        margin: '1rem 0',
        paddingLeft: '1.5rem',
        lineHeight: '1.8'
    };

    return (
        <div>
            <h1>LinkedinAI</h1>
            <h2 style={{ color: orangeColor, marginTop: '2rem' }}>AI-Powered LinkedIn Growth & Brand PR Agent</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                LinkedinAI acts as your personal LinkedIn marketing strategist.
            </p>

            <section style={sectionStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>What It Does:</h2>
                    <ul style={listStyle}>
                        <li>Automates post scheduling</li>
                        <li>Generates content strategies</li>
                        <li>Provides account performance score</li>
                        <li>Analyzes engagement gaps</li>
                        <li>Suggests improvements like a PR advisor</li>
                        <li>Offers professional marketing guidance</li>
                    </ul>
                </div>

                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Digital PR Manager for Your Brand</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        It functions as a digital PR manager for your brand, helping you:
                    </p>
                    <ul style={listStyle}>
                        <li>Improve content consistency</li>
                        <li>Increase visibility</li>
                        <li>Optimize posting times</li>
                        <li>Strengthen personal or company branding</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        All powered by Spinabot AI.
                    </p>
                </div>

                <div style={cardStyle}>
                    <p style={{ lineHeight: '1.6', fontWeight: '600', color: orangeColor }}>
                        Best for: Founders, personal brands, B2B companies, marketing teams.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default LinkedinAI
