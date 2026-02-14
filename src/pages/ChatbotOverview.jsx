function ChatbotOverview() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const featureGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginTop: '1.5rem'
    };

    const featureCardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        textAlign: 'center'
    };

    return (
        <div>
            <h1>AI Chatbot Builder</h1>
            <h2 style={{ color: orangeColor, marginTop: '2rem' }}>Overview</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot's AI Chatbot Builder allows businesses to create production-ready, intelligent chatbots in under 3 minutes — without coding. Choose a predefined template, connect your knowledge base, customize your branding, and deploy instantly.
            </p>

            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor }}>WHY SPINABOT CHATBOT BUILDER?</h2>
                <div style={featureGridStyle}>
                    <div style={featureCardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Launch in Under 3 Minutes</h3>
                        <p style={{ margin: 0, lineHeight: '1.6' }}>Get your chatbot live in minutes, not days</p>
                    </div>

                    <div style={featureCardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>No Coding Required</h3>
                        <p style={{ margin: 0, lineHeight: '1.6' }}>Build powerful chatbots without technical skills</p>
                    </div>

                    <div style={featureCardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>AI-Powered Knowledge Retrieval</h3>
                        <p style={{ margin: 0, lineHeight: '1.6' }}>Intelligent answers from your knowledge base</p>
                    </div>

                    <div style={featureCardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Sentiment-Based Escalation</h3>
                        <p style={{ margin: 0, lineHeight: '1.6' }}>Automatically escalate frustrated customers</p>
                    </div>

                    <div style={featureCardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Multi-Language Support</h3>
                        <p style={{ margin: 0, lineHeight: '1.6' }}>Communicate with customers globally</p>
                    </div>

                    <div style={featureCardStyle}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>Voice + Video AI Avatar</h3>
                        <p style={{ margin: 0, lineHeight: '1.6' }}>Engage with lifelike voice and video</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChatbotOverview
