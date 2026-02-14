function Government() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '3rem'
    };

    const featureGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
    };

    const featureCardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        textAlign: 'center'
    };

    const iconStyle = {
        fontSize: '3rem',
        marginBottom: '1rem'
    };

    return (
        <div>
            <h1 style={{ color: orangeColor }}>Spinabot for Government</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI that makes public services faster and more accessible</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot enables public sector teams to deliver responsive, multilingual digital services with chatbots, voice agents, and document automation designed for government workflows.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>SOLUTIONS FOR PUBLIC AGENCIES</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Multilingual Citizen Service Chatbots */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🧑‍💼</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Multilingual Citizen Service Chatbots</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Answer questions on government services, eligibility, hours, and processes in multiple languages while routing complex cases to human agents with full context.
                        </p>
                    </div>

                    {/* Automated Permit & License Processing */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🏫</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Automated Permit & License Processing</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Guide citizens through forms, collect documents, validate data, and trigger review, approval, and notification workflows in back-office systems.
                        </p>
                    </div>

                    {/* Voice Agents for Appointments & Case Status */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🗣️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Voice Agents for Appointments & Case Status</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Provide automated scheduling, reminders, and case status updates by phone to reduce wait times and keep citizens informed 24/7.
                        </p>
                    </div>

                    {/* Document Classification & Records Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Document Classification & Records Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automatically classify, tag, and route documents and emails to improve retrieval, retention, and compliance across departments.
                        </p>
                    </div>

                    {/* On-Premise AI for Data Sovereignty */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📋</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>On-Premise AI for Data Sovereignty</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Deploy AI inside government-controlled infrastructure to meet national and local data residency and security requirements.
                        </p>
                    </div>

                    {/* FOIA Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>FOIA Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Triage, de-duplicate, and route FOIA requests while assisting staff in collecting and redacting relevant records.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Government
