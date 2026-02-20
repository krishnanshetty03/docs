import AvatarPreview from '../components/AvatarPreview';
import VoiceMessageAnimation from '../components/VoiceMessageAnimation';

function AiAvatarVoice() {
    const orangeColor = '#f59e0b';

    const previewWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '4rem 0'
    };

    const animationWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '3rem 0',
        width: '100%'
    };

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

    const useCaseBoxStyle = {
        display: 'inline-block',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        border: `1px solid ${orangeColor}`,
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        marginRight: '0.75rem',
        marginBottom: '0.75rem',
        fontSize: '0.95rem'
    };

    return (
        <div>
            <h1>AI Avatar & Voice Capabilities</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot's AI Avatar transforms traditional chatbots into fully interactive, human-like digital agents capable of handling text, voice, and real-time conversations across multiple channels.
            </p>

            <div style={previewWrapperStyle}>
                <AvatarPreview />
            </div>

            <section style={sectionStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>AI Avatar – Human-Like Digital Representative</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        The AI Avatar is a visually interactive assistant that:
                    </p>
                    <ul style={listStyle}>
                        <li>Speaks naturally with realistic facial expressions</li>
                        <li>Maintains eye contact and human-like gestures</li>
                        <li>Delivers responses with natural tone and emotion</li>
                        <li>Represents your brand personality consistently</li>
                        <li>Can be customized for industry-specific roles (Sales, Support, Consultant, Educator)</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        It provides a more engaging experience compared to standard chat widgets.
                    </p>
                </div>

                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Voice Call Capabilities</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Spinabot's AI supports real-time voice conversations, allowing customers to:
                    </p>
                    <ul style={listStyle}>
                        <li>Speak directly to your AI assistant</li>
                        <li>Ask questions naturally without typing</li>
                        <li>Receive instant spoken responses</li>
                        <li>Complete actions through voice interaction</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Voice calls are ideal for:</h3>
                    <div>
                        <span style={useCaseBoxStyle}>Customer support</span>
                        <span style={useCaseBoxStyle}>Appointment booking</span>
                        <span style={useCaseBoxStyle}>Lead qualification</span>
                        <span style={useCaseBoxStyle}>Product guidance</span>
                        <span style={useCaseBoxStyle}>Interactive onboarding</span>
                    </div>

                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        The system uses advanced speech-to-text and text-to-speech models for natural and responsive communication.
                    </p>
                </div>

                <div style={animationWrapperStyle}>
                    <VoiceMessageAnimation />
                </div>

                <div style={cardStyle}>
                    <h2 style={{ color: orangeColor, marginTop: 0 }}>Voice Message Support</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Customers can:
                    </p>
                    <ul style={listStyle}>
                        <li>Send voice messages instead of typing</li>
                        <li>Ask questions through audio input</li>
                        <li>Receive either voice or text responses</li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        This enhances accessibility and improves engagement for users who prefer speaking over typing.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AiAvatarVoice
