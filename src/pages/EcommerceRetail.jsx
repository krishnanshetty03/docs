function EcommerceRetail() {
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
            <h1 style={{ color: orangeColor }}>Spinabot for E-Commerce & Retail</h1>
            <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>AI that drives sales and delights customers</h2>

            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Spinabot helps online retailers and e-commerce businesses automate customer support, personalize shopping experiences, and streamline order management across all channels.
            </p>

            <h2 style={{ color: '#22c55e', textAlign: 'center', marginBottom: '2rem' }}>E-COMMERCE SOLUTIONS</h2>

            <section style={sectionStyle}>
                <div style={featureGridStyle}>
                    {/* AI Shopping Assistant */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🛍️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>AI Shopping Assistant</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Guide customers through product discovery, answer questions, provide recommendations, and assist with checkout in real-time.
                        </p>
                    </div>

                    {/* Order Tracking & Status Updates */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📦</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Order Tracking & Status Updates</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Provide automated order status updates, shipping notifications, and delivery confirmations via chat, email, and SMS.
                        </p>
                    </div>

                    {/* Returns & Refund Automation */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>↩️</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Returns & Refund Automation</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Streamline return requests, generate shipping labels, process refunds, and update inventory automatically.
                        </p>
                    </div>

                    {/* Abandoned Cart Recovery */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>🛒</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Abandoned Cart Recovery</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Send personalized reminders to customers with abandoned carts via email, SMS, and push notifications with special offers.
                        </p>
                    </div>

                    {/* Inventory & Restock Alerts */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>📊</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Inventory & Restock Alerts</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Monitor stock levels, notify customers when items are back in stock, and alert teams about low inventory.
                        </p>
                    </div>

                    {/* Customer Loyalty & Rewards */}
                    <div style={featureCardStyle}>
                        <div style={{ ...iconStyle, color: orangeColor }}>⭐</div>
                        <h3 style={{ color: orangeColor, marginBottom: '1rem' }}>Customer Loyalty & Rewards</h3>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            Manage loyalty programs, track points, send reward notifications, and personalize offers based on purchase history.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EcommerceRetail
