import React from 'react';

function Integrations() {
    const orangeColor = '#f59e0b';
    const sectionStyle = { marginBottom: '5rem' };
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '1.5rem'
    };
    const cardStyle = {
        backgroundColor: '#111',
        padding: '1.25rem',
        borderRadius: '16px',
        border: '1px solid #222',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '500',
        color: 'var(--text-secondary)',
        transition: 'all 0.2s ease',
        cursor: 'default'
    };

    const categories = [
        {
            title: 'CRM',
            items: ['Salesforce', 'HubSpot', 'Microsoft Dynamics CRM', 'Zoho CRM', 'Intercom', 'Zendesk', 'Pipedrive', 'Zendesk Sell']
        },
        {
            title: 'Messaging & Meetings',
            items: ['Slack', 'Microsoft Teams', 'Discord', 'Telegram', 'Webex', 'Zoom', 'WhatsApp Business', 'SMS']
        },
        {
            title: 'Email',
            items: ['Gmail', 'Outlook', 'SendGrid', 'SMTP2GO', 'Zoho Mail']
        },
        {
            title: 'Productivity',
            items: ['Airtable', 'Asana', 'Calendly', 'Google Calendar', 'Google Drive', 'Google Forms', 'Google Sheets', 'Google Workspace', 'Jira', 'Notion']
        },
        {
            title: 'Developer & Data',
            items: ['GitHub', 'Pinecone', 'Webhooks', 'Google Analytics']
        },
        {
            title: 'Databases',
            items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Snowflake', 'BigQuery']
        },
        {
            title: 'Commerce & Payments',
            items: ['Stripe', 'Shopify', 'Razorpay', 'Clover']
        },
        {
            title: 'Social & Content',
            items: ['Google', 'LinkedIn', 'Facebook', 'YouTube', 'WordPress']
        },
        {
            title: 'Travel',
            items: ['Airbnb', 'Expedia']
        },
        {
            title: 'Voice',
            items: ['Twilio', 'Vonage', 'RingCentral', 'Aircall']
        },
        {
            title: 'API Methods',
            items: ['REST API', 'API Keys']
        }
    ];

    return (
        <div style={{
            padding: '4rem 2rem 8rem 2rem',
            color: 'var(--text-primary)',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
        }}>
            <header style={{ marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                    Ecosystem <span style={{ color: orangeColor }}>Integrations</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Spinabot connects with 200+ industry-leading tools and platforms. Seamlessly integrate your AI workforce into your existing technology stack to automate complex cross-platform workflows.
                </p>
            </header>

            {categories.map((category, index) => (
                <section key={index} style={sectionStyle}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: orangeColor }}>
                        {category.title}
                    </h2>
                    <div style={gridStyle}>
                        {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} style={cardStyle} onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = orangeColor;
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.backgroundColor = '#181818';
                            }} onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#222';
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.backgroundColor = '#111';
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            <section style={{
                ...cardStyle,
                padding: '4rem',
                backgroundColor: `${orangeColor}05`,
                borderColor: `${orangeColor}22`,
                textAlign: 'center'
            }}>
                <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>And 100+ More...</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                    Our integration engine is constantly expanding. Don't see your tool listed? Use our Generic REST API or Webhooks to connect any service with an open API.
                </p>
            </section>
        </div>
    );
}

export default Integrations;
