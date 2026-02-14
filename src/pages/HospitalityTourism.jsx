function HospitalityTourism() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Hospitality & Tourism</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-powered guest experiences and operational excellence</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps hotels, resorts, and tourism businesses automate reservations, guest services, concierge support, and operations while delivering personalized experiences.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>HOSPITALITY SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Reservation & Booking Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🏨</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Reservation & Booking Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Handle bookings, modifications, cancellations, and special requests across multiple channels with real-time availability.
                        </p>
                    </div>

                    {/* 24/7 Virtual Concierge */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🛎️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>24/7 Virtual Concierge</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Provide guests with recommendations, directions, booking assistance, and local information via chat or voice.
                        </p>
                    </div>

                    {/* Guest Request & Service Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🔔</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Guest Request & Service Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Process room service orders, housekeeping requests, maintenance issues, and amenity bookings automatically.
                        </p>
                    </div>

                    {/* Check-in/Check-out Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>✅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Check-in/Check-out Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Enable contactless check-in, digital room keys, express checkout, and automated billing.
                        </p>
                    </div>

                    {/* Guest Feedback & Review Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>⭐</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Guest Feedback & Review Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Collect post-stay feedback, respond to reviews, identify service issues, and track satisfaction scores.
                        </p>
                    </div>

                    {/* Event & Conference Coordination */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🎉</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Event & Conference Coordination</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Manage event bookings, coordinate catering, track attendees, and handle special arrangements.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HospitalityTourism
