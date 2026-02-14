function TrainingPartners() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Training Partners</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-powered learning management and student success</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot empowers training organizations and education partners with AI automation for enrollment, course delivery, student support, and certification management.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>EDUCATION & TRAINING SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Student Enrollment & Onboarding */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📚</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Student Enrollment & Onboarding</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate course registrations, collect documents, process payments, and guide students through onboarding workflows.
                        </p>
                    </div>

                    {/* 24/7 Student Support Assistant */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💬</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>24/7 Student Support Assistant</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Answer questions about courses, schedules, assignments, and technical issues with instant AI-powered responses.
                        </p>
                    </div>

                    {/* Automated Assignment & Quiz Grading */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>✅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Automated Assignment & Quiz Grading</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Grade objective assessments automatically, provide instant feedback, and track student progress over time.
                        </p>
                    </div>

                    {/* Learning Path Recommendations */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎯</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Learning Path Recommendations</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Suggest personalized course sequences based on student goals, performance, and career objectives.
                        </p>
                    </div>

                    {/* Certification & Credential Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🏆</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Certification & Credential Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate certificate generation, track credential expiration, and send renewal reminders to students.
                        </p>
                    </div>

                    {/* Instructor Coordination & Scheduling */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Instructor Coordination & Scheduling</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Manage instructor availability, schedule classes, handle substitutions, and coordinate training sessions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrainingPartners
