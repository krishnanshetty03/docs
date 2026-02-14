function HowToCreateVoiceAgent() {
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

    const exampleBoxStyle = {
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        border: `1px solid ${orangeColor}`,
        padding: '1rem',
        borderRadius: '8px',
        marginTop: '1rem',
        fontStyle: 'italic'
    };

    return (
        <div>
            <h1>Create a Voice Agent in 3 Simple Steps</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Build your intelligent voice agent quickly with our streamlined 3-step process.
            </p>

            <section style={sectionStyle}>
                <div style={stepContainerStyle}>
                    <h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
                        <span style={stepNumberStyle}>1</span>
                        Basic Information
                    </h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Configure your agent with:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Agent Name</strong> (e.g., Support Assistant, Sales Executive)</li>
                    </ul>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Language Selection</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>Supported languages include:</p>
                    <ul style={listStyle}>
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Marathi</li>
                        <li>Tamil</li>
                        <li>Telugu</li>
                        <li>Kannada</li>
                        <li>And more</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                        This defines how your voice agent communicates with callers.
                    </p>
                </div>

                <div style={stepContainerStyle}>
                    <h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
                        <span style={stepNumberStyle}>2</span>
                        Define System Prompt & Greeting
                    </h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Set your agent's personality and behavior through:
                    </p>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>System Prompt</h3>
                    <ul style={listStyle}>
                        <li>Role definition (Sales, Support, Receptionist, etc.)</li>
                        <li>Tone (Formal, Friendly, Professional)</li>
                        <li>Business rules</li>
                        <li>Confirmation behavior before actions</li>
                        <li>Escalation instructions</li>
                    </ul>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Greeting Message</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>Example:</p>
                    <div style={exampleBoxStyle}>
                        "Hello! Thanks for calling. How can I assist you today?"
                    </div>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        This ensures natural, conversational interactions that sound human — not robotic.
                    </p>
                </div>

                <div style={stepContainerStyle}>
                    <h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
                        <span style={stepNumberStyle}>3</span>
                        Add Knowledge Base
                    </h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Attach a knowledge base to power intelligent responses:
                    </p>
                    <ul style={listStyle}>
                        <li>Upload PDFs</li>
                        <li>Product documents</li>
                        <li>FAQs</li>
                        <li>Policies</li>
                        <li>Internal documentation</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        Your voice agent retrieves accurate information from your documents in real time (RAG-powered responses).
                    </p>
                </div>
            </section>
        </div>
    )
}

export default HowToCreateVoiceAgent
