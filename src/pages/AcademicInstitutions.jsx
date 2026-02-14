function AcademicInstitutions() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Academic Institutions</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI that supports students from inquiry to graduation</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps universities and colleges streamline student journeys with intelligent chatbots, voice agents, and workflow automation that work 24/7 across admissions, enrollment, and campus operations.
            </p>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Admissions Inquiry Chatbots */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🧑‍💼</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Admissions Inquiry Chatbots</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Answer FAQs on programs, deadlines, fees, and scholarships in real time. Integrate with your knowledge base, CRM, and SIS for personalized responses.
                        </p>
                    </div>

                    {/* Automated Course Registration & Waitlists */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🏫</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Automated Course Registration & Waitlists</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Guide students through registration, add/drop, and waitlists across web, mobile, and chat while triggering approvals, notifications, and capacity updates.
                        </p>
                    </div>

                    {/* Voice Agents for Enrollment & Alumni Outreach */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🗣️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Voice Agents for Enrollment & Alumni Outreach</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Run outbound voice campaigns for enrollment reminders and alumni fundraising while capturing call outcomes and syncing with advancement systems.
                        </p>
                    </div>

                    {/* Student Performance Analytics & Early Warnings */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Student Performance Analytics & Early Warnings</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Combine LMS, SIS, and CRM data to identify at-risk students early and trigger advisor alerts, nudges, and personalized support workflows.
                        </p>
                    </div>

                    {/* Automated Grading Assistants */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📋</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Automated Grading Assistants</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Support grading for quizzes, multiple-choice exams, and standardized assessments with analytics on question difficulty and performance trends.
                        </p>
                    </div>

                    {/* Campus Event Scheduling & Notifications */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Campus Event Scheduling & Notifications</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate event promotion, reminders, and attendance tracking using chatbots, email, and SMS for targeted student engagement.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AcademicInstitutions
