import SpinabotLogo from '../components/SpinabotLogo'

function WhatIsLindy() {
    const orangeColor = '#f59e0b'; // Amber/Orange color from reference

    const productBoxStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid var(--border-color)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    };

    const productBoxHoverStyle = {
        transform: 'translateY(-4px)',
        borderColor: orangeColor,
        boxShadow: `0 8px 24px rgba(245, 158, 11, 0.2)`
    };

    const iconContainerStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem'
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
                <SpinabotLogo size={96} color={orangeColor} />
                <h1 style={{ fontSize: '3rem', margin: 0, lineHeight: '1.2' }}>
                    Your AI Crew<br />
                    <span style={{ color: orangeColor }}>for the Businesses</span>
                </h1>
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Build AI agents with a simple prompt. Design, Host & Scale with AI Automation.
            </p>

            <section id="overview" style={{ marginBottom: '3rem' }}>
                <h2>The AI Platform That Powers Your Business</h2>
                <p>
                    Spinabot is an intelligent automation platform that transforms how businesses operate,
                    giving you back 15+ hours every week through autonomous AI agents. Set up in 5 minutes.
                    Build workflows with simple prompts.
                </p>
            </section>

            <section id="what-spinabot-does" style={{ marginBottom: '3rem' }}>
                <h2>What Spinabot Does for You</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '2rem',
                    justifyContent: 'center',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <div
                        style={productBoxStyle}
                        onMouseEnter={(e) => {
                            Object.assign(e.currentTarget.style, productBoxHoverStyle);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={iconContainerStyle}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={orangeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <h3 style={{ color: orangeColor, marginTop: 0, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            CHATBOT
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', textAlign: 'left' }}>
                            <li>Handle customer inquiries 24/7 in your brand voice</li>
                            <li>Answer questions, resolve issues, and escalate when needed</li>
                            <li>Your support team is always available</li>
                        </ul>
                    </div>

                    <div
                        style={productBoxStyle}
                        onMouseEnter={(e) => {
                            Object.assign(e.currentTarget.style, productBoxHoverStyle);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={iconContainerStyle}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={orangeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                        </div>
                        <h3 style={{ color: orangeColor, marginTop: 0, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            VOICE
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', textAlign: 'left' }}>
                            <li>AI-powered phone conversations for sales and support</li>
                            <li>Inbound call handling and outbound campaigns</li>
                            <li>Natural conversations that convert</li>
                        </ul>
                    </div>

                    <div
                        style={productBoxStyle}
                        onMouseEnter={(e) => {
                            Object.assign(e.currentTarget.style, productBoxHoverStyle);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={iconContainerStyle}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={orangeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                                <rect x="9" y="9" width="6" height="6" />
                                <line x1="9" y1="1" x2="9" y2="4" />
                                <line x1="15" y1="1" x2="15" y2="4" />
                                <line x1="9" y1="20" x2="9" y2="23" />
                                <line x1="15" y1="20" x2="15" y2="23" />
                                <line x1="20" y1="9" x2="23" y2="9" />
                                <line x1="20" y1="14" x2="23" y2="14" />
                                <line x1="1" y1="9" x2="4" y2="9" />
                                <line x1="1" y1="14" x2="4" y2="14" />
                            </svg>
                        </div>
                        <h3 style={{ color: orangeColor, marginTop: 0, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            SLM
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', textAlign: 'left' }}>
                            <li>Fast, efficient AI processing for real-time responses</li>
                            <li>Cost-effective automation at scale</li>
                            <li>Purpose-built for business operations</li>
                        </ul>
                    </div>

                    <div
                        style={productBoxStyle}
                        onMouseEnter={(e) => {
                            Object.assign(e.currentTarget.style, productBoxHoverStyle);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={iconContainerStyle}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={orangeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="19" cy="5" r="2" />
                                <circle cx="5" cy="19" r="2" />
                                <circle cx="19" cy="19" r="2" />
                                <path d="M13.73 10.27L17.27 6.73" />
                                <path d="M6.73 17.27l4.54-4.54" />
                                <path d="M17.27 17.27L13.73 13.73" />
                            </svg>
                        </div>
                        <h3 style={{ color: orangeColor, marginTop: 0, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            WORKFLOW
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', textAlign: 'left' }}>
                            <li>Connect your entire tech stack into intelligent workflows</li>
                            <li> Describe your problem—our AI instantly delivers the right solution (AI Workflow Generation)</li>
                            <li>Operations run themselves while you focus on growth</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="how-spinabot-different" style={{ marginBottom: '3rem' }}>
                <h2>How Spinabot Is Different</h2>

                <div style={{ marginTop: '2rem' }}>
                    <div style={{
                        marginBottom: '2rem',
                        paddingLeft: '1rem',
                        borderLeft: `4px solid ${orangeColor}`
                    }}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>
                            AI Workflow Generator
                        </h3>
                        <p>
                            Rather than manually building workflows or automation logic, you simply describe your objective — Spinabot’s AI interprets it and generates the solution automatically.
                        </p>
                    </div>

                    <div style={{
                        marginBottom: '2rem',
                        paddingLeft: '1rem',
                        borderLeft: `4px solid ${orangeColor}`
                    }}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>
                            No Coding Required
                        </h3>
                        <p>
                            There’s no need for developers or technical configuration. Spinabot uses natural language inputs to understand your business needs and acts on them with more than 10+ languages support.
                        </p>
                    </div>

                    <div style={{
                        marginBottom: '2rem',
                        paddingLeft: '1rem',
                        borderLeft: `4px solid ${orangeColor}`
                    }}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>
                            Flexible for Any Business
                        </h3>
                        <p>
                            Whether you are a solo entrepreneur or an enterprise team, Spinabot adapts to your requirements — from basic task automation to complex operations.
                        </p>
                    </div>

                    <div style={{
                        marginBottom: '2rem',
                        paddingLeft: '1rem',
                        borderLeft: `4px solid ${orangeColor}`
                    }}>
                        <h3 style={{ color: orangeColor, marginTop: 0 }}>
                            Spinabot works everywhere
                        </h3>
                        <p>
                            Deploys across web, mobile, SMS, Slack, email and phone.
                            Your customers reach you anywhere. Your automation follows.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhatIsLindy
