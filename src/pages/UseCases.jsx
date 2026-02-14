import { Link } from 'react-router-dom';

function UseCases() {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '4rem'
    };

    const cardStyle = {
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginTop: '1.5rem'
    };

    const stepListStyle = {
        margin: 0,
        paddingLeft: '1.2rem',
        lineHeight: '1.6'
    };

    return (
        <div>
            <h1>Use Cases</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Explore how Spinabot solves real-world problems with intelligent automation.
            </p>

            {/* Use Case 1: Site Visit Scheduling */}
            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor, borderBottom: `2px solid ${orangeColor}`, paddingBottom: '0.5rem', display: 'inline-block' }}>
                    1) Site Visit Scheduling Automation
                </h2>

                <h3>Problem Statement</h3>
                <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Manual coordination of site visits often leads to delays, miscommunication, and repeated follow-ups. Sales teams spend excessive time scheduling, confirming, and reminding customers—reducing operational efficiency and impacting customer experience.
                </p>

                <div style={cardStyle}>
                    <h3 style={{ marginTop: 0 }}>Workflow Overview</h3>
                    <p style={{ lineHeight: '1.6' }}>
                        This automation streamlines the entire site visit scheduling process from lead qualification to confirmation.
                    </p>

                    <h3 style={{ color: orangeColor }}>How It Works</h3>
                    <ul style={{ ...stepListStyle, listStyleType: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong>HubSpot – Contact Search:</strong> When a lead is marked as Interested in HubSpot, the workflow is triggered.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong>Calendly – Self-Scheduling Link:</strong> A Calendly booking link is automatically shared with the customer, allowing them to select a convenient time.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong>Google Calendar – Auto Event Creation:</strong> Once the meeting is booked, the site visit is automatically added to Google Calendar.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong>Email Confirmation (SMTP2GO):</strong> A confirmation email is sent to the customer with visit details.
                        </li>
                        <li>
                            <strong>Telegram Notification:</strong> Internal notifications are sent to the sales team for real-time updates.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Use Case 2: SaaS Usage Monitor */}
            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor, borderBottom: `2px solid ${orangeColor}`, paddingBottom: '0.5rem', display: 'inline-block' }}>
                    2) AI-Powered SaaS Usage Monitor
                </h2>

                <h3>Problem Statement</h3>
                <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Organizations often subscribe to multiple SaaS tools without clear visibility into actual usage. As a result:
                </p>
                <ul style={stepListStyle}>
                    <li>Licenses remain unused</li>
                    <li>Costs increase unnecessarily</li>
                    <li>IT teams lack actionable insights</li>
                    <li>Finance teams struggle to control SaaS spend</li>
                </ul>
                <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                    Manual audits are time-consuming and rarely provide real-time intelligence.
                </p>

                <div style={cardStyle}>
                    <h3 style={{ color: orangeColor, marginTop: 0 }}>How the Workflow Works</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <strong>1. Trigger</strong>
                        <p style={{ margin: '0.5rem 0' }}>The workflow can run:</p>
                        <ul style={stepListStyle}>
                            <li>Manually (when clicking Execute Workflow)</li>
                            <li>Automatically on a schedule (using a cron expression)</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <strong>2. HTTP Request – Usage Data Collection</strong>
                        <p style={{ margin: '0.5rem 0' }}>The system fetches SaaS usage data from an external source (API or script endpoint). This step collects:</p>
                        <ul style={stepListStyle}>
                            <li>Active users</li>
                            <li>Login frequency</li>
                            <li>Feature usage</li>
                            <li>License allocation</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <strong>3. OpenAI – Intelligent Analysis</strong>
                        <p style={{ margin: '0.5rem 0' }}>The AI engine analyzes the usage data to:</p>
                        <ul style={stepListStyle}>
                            <li>Identify inactive users</li>
                            <li>Detect underutilized licenses</li>
                            <li>Highlight abnormal usage patterns</li>
                            <li>Recommend optimization actions</li>
                        </ul>
                        <p style={{ margin: '0.5rem 0', fontStyle: 'italic' }}>It transforms raw usage logs into actionable business insights.</p>
                    </div>

                    <div>
                        <strong>4. Slack – Real-Time Alerting</strong>
                        <p style={{ margin: '0.5rem 0' }}>If inefficiencies are detected, the workflow automatically sends structured alerts to Slack, notifying relevant teams. Alerts may include:</p>
                        <ul style={stepListStyle}>
                            <li>Tools with low engagement</li>
                            <li>Licenses to downgrade</li>
                            <li>Cost-saving recommendations</li>
                            <li>Potential renewal risks</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Use Case 3: Negative Review Alert */}
            <section style={sectionStyle}>
                <h2 style={{ color: orangeColor, borderBottom: `2px solid ${orangeColor}`, paddingBottom: '0.5rem', display: 'inline-block' }}>
                    3) Negative Review Instant Alert
                </h2>

                <h3>Problem Statement</h3>
                <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Negative reviews often go unnoticed for hours or days, receive delayed responses, damage online reputation, reduce customer trust, and impact future sales. Manual monitoring is inconsistent and reactive rather than proactive.
                </p>

                <div style={cardStyle}>
                    <h3 style={{ color: orangeColor, marginTop: 0 }}>How the Workflow Works</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <strong>1. Webhook – Real-Time Review Capture</strong>
                        <p style={{ margin: '0.5rem 0' }}>
                            When a new customer review is submitted (via website, Google Reviews integration, or external platform), the webhook receives the review data instantly.
                        </p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <strong>2. OpenAI – Sentiment Detection & Response Generation</strong>
                        <p style={{ margin: '0.5rem 0' }}>The AI engine:</p>
                        <ul style={stepListStyle}>
                            <li>Analyzes the sentiment of the review</li>
                            <li>Identifies whether it is negative or critical</li>
                            <li>Generates a professional, empathetic response</li>
                            <li>Structures a ready-to-publish reply</li>
                        </ul>
                        <p style={{ margin: '0.5rem 0', fontStyle: 'italic' }}>This ensures fast and appropriate communication.</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <strong>3. SMTP2GO Email – Instant Business Notification</strong>
                        <p style={{ margin: '0.5rem 0' }}>If a negative review is detected:</p>
                        <ul style={stepListStyle}>
                            <li>A structured alert email is sent to the business owner or support team</li>
                            <li>Includes review details and suggested AI response</li>
                            <li>Enables quick approval or escalation</li>
                        </ul>
                    </div>

                    <div>
                        <strong>4. Telegram – Real-Time Team Alert</strong>
                        <p style={{ margin: '0.5rem 0' }}>A notification is immediately pushed to your Telegram group so the team can:</p>
                        <ul style={stepListStyle}>
                            <li>Take urgent action</li>
                            <li>Respond publicly</li>
                            <li>Follow up with the customer</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UseCases
