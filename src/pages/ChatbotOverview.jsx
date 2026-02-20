import AvatarPreview from '../components/AvatarPreview';
import VoiceMessageAnimation from '../components/VoiceMessageAnimation';

function ChatbotOverview() {
    const orangeColor = '#f59e0b';

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
                    Chatbot Builder <span style={{ color: orangeColor }}>Overview</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Spinabot's AI Chatbot Builder allows businesses to create production-ready, intelligent chatbots in under 3 minutes — without coding.
                    Choose a predefined template, connect your knowledge base, customize your branding, and deploy instantly.
                </p>
            </header>

            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Production-Ready Chatbot in 4 Steps
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Build and deploy your intelligent chatbot in minutes with our simple 4-step process.
                </p>

                <div style={{
                    backgroundColor: '#111',
                    padding: '3rem',
                    borderRadius: '16px',
                    border: '1px solid #222',
                    maxWidth: '850px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {[
                            {
                                title: 'Start with a Template',
                                desc: 'Choose from predefined chatbot templates such as Order Bot, FAQ Bot, Sales Assistant, or Support Bot. These are designed for different business use cases and reduce setup time significantly.'
                            },
                            {
                                title: 'Define the System Prompt',
                                desc: "Set the chatbot's personality and behavior by defining tone, role (Sales expert, Support agent, etc.), business rules, and escalation behavior to align with your brand voice."
                            },
                            {
                                title: 'Add a Knowledge Base',
                                desc: 'Upload your business documents (PDFs, Policies, Product catalogs, FAQs, etc.). The chatbot will answer customer queries directly from these documents for accurate responses.'
                            },
                            {
                                title: 'Customize Appearance',
                                desc: 'Personalize your chatbot to match your brand by adjusting colors, size, theme, avatar, and welcome message. Your chatbot is now ready to go live.'
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
                                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    AI Avatar & Voice Capabilities
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: '3.5rem' }}>
                    Spinabot's AI Avatar transforms traditional chatbots into fully interactive, human-like digital agents capable of handling text, voice, and real-time conversations across multiple channels.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ width: '100%', maxWidth: '850px', display: 'flex', justifyContent: 'center' }}>
                        <AvatarPreview />
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                    Voice Call Capabilities
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: '2rem' }}>
                    Spinabot's AI supports real-time voice conversations, allowing customers to:
                </p>
                <ul style={{
                    fontSize: '1.1rem',
                    lineHeight: '2',
                    color: 'var(--text-secondary)',
                    marginBottom: '3.5rem',
                    paddingLeft: '1.5rem'
                }}>
                    <li>Speak directly to your AI assistant</li>
                    <li>Ask questions naturally without typing</li>
                    <li>Receive instant spoken responses</li>
                </ul>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ width: '100%', maxWidth: '850px' }}>
                        <VoiceMessageAnimation />
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION REMOVED FOR STREAMLINED FLOW - PREVIOUSLY "WHY SPINABOT..." */}
        </div>
    )
}

export default ChatbotOverview
