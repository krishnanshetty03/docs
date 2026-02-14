function HumanResources() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Human Resources</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-powered HR automation for modern workplaces</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot empowers HR teams to automate recruiting, onboarding, employee support, and compliance workflows while delivering personalized experiences at scale.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>HR AUTOMATION SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Candidate Screening & Interview Scheduling */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>👥</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Candidate Screening & Interview Scheduling</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate resume screening, initial candidate assessments, and interview coordination while syncing with ATS and calendar systems.
                        </p>
                    </div>

                    {/* Employee Onboarding Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📝</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Employee Onboarding Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Guide new hires through paperwork, benefits enrollment, and training schedules with automated reminders and progress tracking.
                        </p>
                    </div>

                    {/* 24/7 HR Helpdesk Chatbot */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💬</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>24/7 HR Helpdesk Chatbot</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Answer employee questions about policies, benefits, PTO, and payroll instantly with knowledge base integration and escalation to HR staff.
                        </p>
                    </div>

                    {/* Performance Review Coordination */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Performance Review Coordination</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate review cycles, collect feedback from multiple stakeholders, and send reminders to ensure timely completion.
                        </p>
                    </div>

                    {/* Exit Interview & Offboarding */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🚪</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Exit Interview & Offboarding</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Conduct structured exit interviews, manage equipment returns, and revoke access while gathering insights on retention.
                        </p>
                    </div>

                    {/* Compliance Training Tracking */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>✅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Compliance Training Tracking</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Monitor mandatory training completion, send automated reminders, and generate compliance reports for audits.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HumanResources
