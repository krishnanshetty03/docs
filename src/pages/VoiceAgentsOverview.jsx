import VoiceCallAnimation from '../components/VoiceCallAnimation';
import VoiceCloningAnimation from '../components/VoiceCloningAnimation';

function VoiceAgentsOverview() {
    const orangeColor = '#f59e0b';

    const centeringWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '4rem 0',
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

    return (
        <div style={{
            padding: '4rem 2rem 8rem 2rem',
            color: 'var(--text-primary)',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
        }}>
            <header style={{ marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    AI Voice <span style={{ color: orangeColor }}>Agents</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Spinabot Voice Agents allow businesses to deploy intelligent, human-like AI agents capable of handling inbound and outbound phone calls in real time.
                    From support and lead qualification to appointment booking and follow-ups, your AI voice agent operates 24/7 with live transcription and analytics.
                </p>
            </header>

            <section style={{ marginBottom: '5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <VoiceCallAnimation />
                </div>
            </section>

            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: orangeColor }}>
                    Create a Voice Agent in 3 Simple Steps
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Build and deploy your intelligent voice agent quickly with our streamlined 3-step process.
                </p>

                <div style={{
                    backgroundColor: '#111',
                    padding: '3rem',
                    borderRadius: '24px',
                    border: '1px solid #222',
                    maxWidth: '850px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {[
                            {
                                title: 'Basic Information',
                                desc: 'Configure your agent with a name (e.g., Support Assistant, Sales Executive) and select your primary language. Supported languages include English, Hindi, Marathi, Tamil, Telugu, Kannada, and more.',
                                detail: 'This defines how your voice agent communicates with callers.'
                            },
                            {
                                title: 'Define System Prompt & Greeting',
                                desc: "Set your agent's personality and behavior through role definition (Sales, Support, etc.), tone (Formal, Friendly, Professional), and business rules. Set a natural greeting message to welcome callers.",
                                detail: '"Hello! Thanks for calling. How can I assist you today?" — Ensures human-like, natural interactions.'
                            },
                            {
                                title: 'Add Knowledge Base',
                                desc: 'Attach a knowledge base by uploading PDFs, product documents, FAQs, and policies. Your voice agent retrieves accurate information from your documents in real time using RAG.',
                                detail: 'Provides accurate, document-grounded responses to caller queries.'
                            }
                        ].map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    minWidth: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: orangeColor,
                                    color: 'black',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    marginTop: '0.2rem',
                                    flexShrink: 0
                                }}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', margin: '0 0 0.75rem 0', lineHeight: '1.6' }}>
                                        {step.desc}
                                    </p>
                                    <p style={{ fontSize: '0.95rem', color: orangeColor, margin: 0, fontStyle: 'italic', fontWeight: '500' }}>
                                        {step.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: orangeColor }}>
                    Voice Cloning in Under 90 Seconds
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: '3.5rem' }}>
                    Create an authentic digital twin of any voice with just 90 seconds of reference audio. Our advanced neural cloning technology captures tone, inflection, and breathing patterns for perfect authenticity.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ width: '100%', maxWidth: '850px' }}>
                        <VoiceCloningAnimation />
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <div style={{ ...cardStyle, marginBottom: 0, borderRadius: '24px' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: orangeColor, marginTop: 0, marginBottom: '1.25rem' }}>Phone Number Management</h3>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                            Spinabot offers flexible telephony options:
                        </p>
                        <ul style={{ ...listStyle, color: 'var(--text-secondary)', marginBottom: 0 }}>
                            <li>Dedicated business numbers</li>
                            <li>Existing number porting</li>
                            <li>Instant provisioning</li>
                        </ul>
                    </div>

                    <div style={{ ...cardStyle, marginBottom: 0, borderRadius: '24px' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: orangeColor, marginTop: 0, marginBottom: '1.25rem' }}>Live Call Features</h3>
                        <ul style={{ ...listStyle, color: 'var(--text-secondary)', marginBottom: 0 }}>
                            <li>Real-time AI conversation</li>
                            <li>Live speech-to-text transcription</li>
                            <li>Context-aware responses</li>
                            <li>Dynamic intent detection</li>
                            <li>Multi-language support</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VoiceAgentsOverview
