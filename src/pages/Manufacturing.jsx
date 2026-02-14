function Manufacturing() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Manufacturing</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI-driven operations for smarter production</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps manufacturers optimize production workflows, manage supply chains, coordinate maintenance, and ensure quality control with intelligent automation.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>MANUFACTURING SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Production Scheduling & Workflow Optimization */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>⚙️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Production Scheduling & Workflow Optimization</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Optimize production schedules, balance workloads, track job progress, and adjust for delays or priority changes.
                        </p>
                    </div>

                    {/* Supply Chain & Inventory Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📦</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Supply Chain & Inventory Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Monitor inventory levels, automate reorder points, track shipments, and coordinate with suppliers.
                        </p>
                    </div>

                    {/* Predictive Maintenance Alerts */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🔧</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Predictive Maintenance Alerts</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Analyze equipment data to predict failures, schedule preventive maintenance, and minimize downtime.
                        </p>
                    </div>

                    {/* Quality Control & Defect Tracking */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>✅</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Quality Control & Defect Tracking</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate quality inspections, log defects, trigger corrective actions, and generate quality reports.
                        </p>
                    </div>

                    {/* Workforce Coordination & Shift Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>👷</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Workforce Coordination & Shift Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Manage shift schedules, track attendance, coordinate breaks, and communicate updates to floor workers.
                        </p>
                    </div>

                    {/* Safety Compliance & Incident Reporting */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🛡️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Safety Compliance & Incident Reporting</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Log safety incidents, track compliance training, generate OSHA reports, and manage safety protocols.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Manufacturing
