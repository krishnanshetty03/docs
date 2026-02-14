function Healthcare() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Healthcare</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>HIPAA-ready AI for patient-centric care</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps healthcare providers, clinics, and health systems automate patient intake, triage, and engagement while maintaining strict privacy and compliance.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>CLINICAL GRADE SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* 24/7 Patient Intake & Scheduling */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🧑‍💼</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>24/7 Patient Intake & Scheduling</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Collect demographics, insurance details, and chief complaints via chat or voice while offering appointment booking, rescheduling, and reminders integrated with scheduling systems.
                        </p>
                    </div>

                    {/* Symptom Pre-Screening & Triage */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🏫</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Symptom Pre-Screening & Triage</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Guide patients through structured symptom questions and route them to the right care setting or provider queue based on configurable clinical protocols.
                        </p>
                    </div>

                    {/* Insurance Verification Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Insurance Verification Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automatically validate eligibility and benefits before visits or procedures to reduce denials and last-minute rescheduling.
                        </p>
                    </div>

                    {/* Voice Agent Care Calls */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🗣️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Voice Agent Care Calls</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate wellness checks, medication reminders, and post-discharge follow-ups while escalating to care teams when needed.
                        </p>
                    </div>

                    {/* Prescription Refill Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📋</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Prescription Refill Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Capture refill requests via chat or phone and route them for approval and fulfillment while keeping patients informed of status changes.
                        </p>
                    </div>

                    {/* HIPAA-Compliant Deployment & EHR Integration */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>HIPAA-Compliant Deployment & EHR Integration</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Deploy securely in cloud or on-premise environments with encryption, access controls, and audit logs, integrated with EHR/EMR and telemedicine systems.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Healthcare
