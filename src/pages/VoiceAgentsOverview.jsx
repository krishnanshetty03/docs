function VoiceAgentsOverview() {
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
            <h1>AI Voice Agents</h1>
            <h2 style={{ color: orangeColor, marginTop: '2rem' }}>Overview</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot Voice Agents allow businesses to deploy intelligent, human-like AI agents capable of handling inbound and outbound phone calls in real time. From support and lead qualification to appointment booking and follow-ups, your AI voice agent operates 24/7 with live transcription and analytics.
            </p>

            <section style={sectionStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Phone Number Management</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Spinabot offers flexible telephony options:
                    </p>
                    <ul style={listStyle}>
                        <li>Spinabot can provide a dedicated business number</li>
                        <li>Can port (transfer) your existing number to Spinabot</li>
                    </ul>
                </div>

                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Live Call Features</h2>
                    <ul style={listStyle}>
                        <li>Real-time AI conversation</li>
                        <li>Live speech-to-text transcription</li>
                        <li>Context-aware responses</li>
                        <li>Dynamic intent detection</li>
                        <li>Multi-language conversation</li>
                        <li>Human-like voice output</li>
                        <li>Smart confirmation before critical actions</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default VoiceAgentsOverview
