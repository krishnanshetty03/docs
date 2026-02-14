function FinancialServices() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for Financial Services</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>Secure AI automation for banking, insurance, and wealth management</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps financial institutions automate customer service, compliance workflows, fraud detection, and personalized financial guidance while maintaining strict security standards.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>FINANCIAL AUTOMATION SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* Customer Service & Account Support */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>💳</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Customer Service & Account Support</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Answer account inquiries, process transactions, provide balance information, and escalate complex issues securely.
                        </p>
                    </div>

                    {/* Loan Application Processing */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📋</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Loan Application Processing</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Collect application documents, verify information, run credit checks, and route applications for approval.
                        </p>
                    </div>

                    {/* Fraud Detection & Alert Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🔒</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Fraud Detection & Alert Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Monitor transactions for suspicious activity, alert customers of potential fraud, and automate verification processes.
                        </p>
                    </div>

                    {/* Compliance Documentation & Reporting */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Compliance Documentation & Reporting</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate KYC/AML processes, generate regulatory reports, and maintain audit trails for compliance.
                        </p>
                    </div>

                    {/* Investment Advisory & Portfolio Management */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📈</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Investment Advisory & Portfolio Management</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Provide personalized investment recommendations, portfolio updates, and market insights based on client goals.
                        </p>
                    </div>

                    {/* Claims Processing & Insurance Support */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🛡️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Claims Processing & Insurance Support</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Automate claims intake, document collection, status updates, and payment processing for insurance claims.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FinancialServices
