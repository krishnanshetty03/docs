function ProductionReadyChatbot() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const stepContainerStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginBottom: '2rem'
    };

    const stepNumberStyle = {
        display: 'inline-block',
        backgroundColor: orangeColor,
        color: 'black',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '40px',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginRight: '1rem'
    };

    const listStyle = {
        margin: '1rem 0',
        paddingLeft: '1.5rem',
        lineHeight: '1.8'
    };

    return (
        <div>
            <h1>Production-Ready Chatbot in 4 Steps</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Build and deploy your intelligent chatbot in minutes with our simple 4-step process.
            </p>

            <section style={sectionStyle}>
                <div style={stepContainerStyle}>
                    <h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
                        <span style={stepNumberStyle}>1</span>
                        Start with a Template
                    </h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Choose from predefined chatbot templates such as:
                    </p>
                    <ul style={listStyle}>
                        <li>Order Bot</li>
                        <li>FAQ Bot</li>
                        <li>Sales Assistant</li>
                        <li>Support Bot</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                        Templates are designed for different business use cases and reduce setup time significantly.
                    </p>
                </div>

                <div style={stepContainerStyle}>
                    <h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
                        <span style={stepNumberStyle}>2</span>
                        Define the System Prompt
                    </h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Set the chatbot's personality and behavior by defining:
                    </p>
                    <ul style={listStyle}>
                        <li>Tone of communication</li>
                        <li>Role (Sales expert, Support agent, Order assistant, etc.)</li>
                        <li>Business rules</li>
                        <li>Escalation behavior</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                        This ensures the chatbot aligns with your brand voice.
                    </p>
                </div>

                <div style={stepContainerStyle}>
                    <h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
                        <span style={stepNumberStyle}>3</span>
                        Add a Knowledge Base
                    </h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Upload your business documents, such as:
                    </p>
                    <ul style={listStyle}>
                        <li>PDFs</li>
                        <li>Policies</li>
                        <li>Product catalogs</li>
                        <li>FAQs</li>
                        <li>Brochures</li>
                        <li>Internal documentation</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                        The chatbot will answer customer queries directly from the uploaded documents, ensuring accurate and contextual responses.
                    </p>
                </div>

                <div style={stepContainerStyle}>
                    <h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
                        <span style={stepNumberStyle}>4</span>
                        Customize Appearance
                    </h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Personalize your chatbot to match your brand:
                    </p>
                    <ul style={listStyle}>
                        <li>Color</li>
                        <li>Size</li>
                        <li>Theme</li>
                        <li>Avatar</li>
                        <li>Welcome message</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontWeight: '600', color: orangeColor, marginTop: '1.5rem' }}>
                        Your chatbot is now ready to go live.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProductionReadyChatbot
