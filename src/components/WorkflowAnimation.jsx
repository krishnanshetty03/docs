import { useState, useEffect, useRef } from 'react';
import styles from './WorkflowAnimation.module.css';

function WorkflowAnimation({ steps = null }) {
    const [step, setStep] = useState(0);
    const scrollContainerRef = useRef(null);

    // Default 6-step flow if no steps provided
    const isDefault = !steps;
    const totalSteps = isDefault ? 6 : steps.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => {
                // If it's the welcome email flow (2 steps), we want a pause at the end
                // so we add extra "rest" steps at the end of the modular arithmetic
                const cycleLength = totalSteps + (isDefault ? 2 : 1);
                const next = (prev + 1) % cycleLength;
                // If we loop back to 0, scroll to start (only for default flow)
                if (isDefault && next === 0 && scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
                return next;
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [totalSteps, isDefault, steps]);

    // Lead Scoring Flow State
    const [lsStep, setLsStep] = useState(0);

    // Effect for Lead Scoring Flow
    useEffect(() => {
        if (steps === 'lead-scoring') {
            const interval = setInterval(() => {
                setLsStep((prev) => (prev + 1) % 8);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [steps]);

    const activeStep = step % (totalSteps + (isDefault ? 2 : 1));

    // Auto-scroll to active step (Only for default flow)
    useEffect(() => {
        if (isDefault && step < totalSteps && scrollContainerRef.current) {
            // Calculate position: roughly 250px per node + connector
            const scrollPos = step * 200;
            scrollContainerRef.current.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });
        }
    }, [step, totalSteps, isDefault]);

    // Render Custom Lead Scoring branched flow
    if (steps === 'lead-scoring') {
        // Define active states for the branched flow
        // 0: Webhook active
        // 1: Connection to OpenAI
        // 2: OpenAI active
        // 3: Connection split
        // 4: SendGrid (Top) & Wait (Bottom) active
        // 5: Connection to HubSpot (Top) & SendGrid (Bottom) active
        // 6: HubSpot (Top) active & HubSpot (Bottom) active
        // 7: Rest

        return (
            <div className={styles.container} style={{ justifyContent: 'center', overflow: 'visible' }}>
                <div className={styles.branchedContainer}>
                    {/* 1. Webhook */}
                    <SimpleNode
                        icon={<WebhookIcon />}
                        title="Webhook"
                        subtitle="When a webhook is.."
                        active={lsStep >= 0}
                    />

                    <Connector active={lsStep >= 1} />

                    {/* 2. OpenAI */}
                    <SimpleNode
                        icon={<OpenAIIcon />}
                        title="OpenAI"
                        subtitle="GPT-4: Lead info..."
                        active={lsStep >= 2}
                    />

                    {/* Split Connector */}
                    <div style={{ position: 'relative', width: '40px', height: '140px' }}>
                        <svg className={styles.splitConnector} viewBox="0 0 40 140" style={{ overflow: 'visible', width: '100%', left: 0 }}>
                            <path
                                d="M0 70 C 20 70, 20 -22, 40 -22"
                                className={`${styles.branchPath} ${lsStep >= 3 ? styles.active : ''}`}
                            />
                            <path
                                d="M0 70 C 20 70, 20 162, 40 162"
                                className={`${styles.branchPath} ${lsStep >= 3 ? styles.active : ''}`}
                            />
                        </svg>
                    </div>

                    {/* Split Section */}
                    <div className={styles.splitSection}>
                        {/* Top Branch */}
                        <div className={styles.branchRow}>
                            <SimpleNode
                                icon={<SendGridIcon />}
                                title="SendGrid Email"
                                subtitle="To: {{email}}..."
                                active={lsStep >= 4}
                            />
                            <Connector active={lsStep >= 5} />
                            <SimpleNode
                                icon={<HubSpotIcon />}
                                title="HubSpot"
                                subtitle="Not configured"
                                active={lsStep >= 6}
                            />
                        </div>

                        {/* Bottom Branch */}
                        <div className={styles.branchRow}>
                            <SimpleNode
                                icon={<ClockIcon />}
                                title="Wait"
                                subtitle="Wait 3d"
                                active={lsStep >= 4}
                                isWait={true}
                            />
                            <Connector active={lsStep >= 5} />
                            <SimpleNode
                                icon={<SendGridIcon />}
                                title="SendGrid Email"
                                subtitle="Follow up..."
                                active={lsStep >= 6}
                            />
                            <Connector active={lsStep >= 7} />
                            <SimpleNode
                                icon={<HubSpotIcon />}
                                title="HubSpot"
                                subtitle="Update status"
                                active={lsStep >= 7}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Render Custom Simple Flow
    if (!isDefault) {
        return (
            <div className={styles.container} style={{ justifyContent: 'center' }}>
                <div className={styles.flowContainer}>
                    {steps.map((node, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <div className={`${styles.node} ${styles.simple} ${activeStep >= index ? styles.active : ''}`}>
                                <div className={styles.simpleIconBox}>
                                    {node.icon}
                                </div>
                                <div className={styles.simpleTitle}>{node.title}</div>
                                {node.subtitle && <div className={styles.simpleSubtitle}>{node.subtitle}</div>}
                            </div>

                            {/* Render connector if not the last node */}
                            {index < steps.length - 1 && (
                                <Connector active={activeStep >= index + 1} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Default Dashboard Flow
    return (
        <div className={styles.container} ref={scrollContainerRef}>
            <div className={styles.flowContainer}>

                {/* 1. Trigger */}
                <div className={`${styles.node} ${styles.trigger} ${activeStep >= 0 ? styles.active : ''}`}>
                    <div className={styles.triggerIconBox}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                            <path d="M13 13l6 6"></path>
                        </svg>
                    </div>
                    <span className={styles.triggerText}>When clicking 'Execute workflow'</span>
                </div>

                <Connector active={activeStep >= 1} />

                {/* 2. Ingestion */}
                <AgentNode
                    active={activeStep >= 1}
                    tag="LEAD_INGESTION"
                    title="Ingestion"
                    desc="Collects leads from forms, CRMs, and webhooks into one place."
                />

                <Connector active={activeStep >= 2} />

                {/* 3. Qualifier */}
                <AgentNode
                    active={activeStep >= 2}
                    tag="LEAD_QUALIFIER"
                    title="Qualifier"
                    desc="Scores and qualifies leads based on fit, intent, and past interactions."
                />

                <Connector active={activeStep >= 3} />

                {/* 4. Prioritizer */}
                <AgentNode
                    active={activeStep >= 3}
                    tag="LEAD_PRIORITIZER"
                    title="Prioritizer"
                    desc="Ranks leads so sales teams know who to talk to first."
                />

                <Connector active={activeStep >= 4} />

                {/* 5. Cold Outreach */}
                <AgentNode
                    active={activeStep >= 4}
                    tag="LEAD_COLD_OUTREACH"
                    title="Cold Outreach"
                    desc="Drafts and sends cold outreach emails based on your product and persona."
                />

                <Connector active={activeStep >= 5} />

                {/* 6. Followups */}
                <AgentNode
                    active={activeStep >= 5}
                    tag="LEAD_FOLLOWUP"
                    title="Followups"
                    desc="Schedules and sends follow-up emails to keep leads warm automatically."
                />

            </div>
            <div className={styles.livePreview}>live_preview</div>
        </div>
    );
}

function Connector({ active }) {
    return (
        <div className={styles.connectorLine}>
            <div
                className={styles.connectorProgress}
                style={{ width: active ? '100%' : '0%' }}
            />
        </div>
    );
}

function AgentNode({ active, tag, title, desc }) {
    return (
        <div className={`${styles.node} ${styles.agent} ${active ? styles.active : ''}`}>
            <span className={styles.tag}>{tag}</span>
            <div className={styles.headerRow}>
                <div className={styles.iconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                        <circle cx="12" cy="5" r="2"></circle>
                        <path d="M12 7v4"></path>
                        <line x1="8" y1="16" x2="8" y2="16"></line>
                        <line x1="16" y1="16" x2="16" y2="16"></line>
                    </svg>
                </div>
                <span className={styles.title}>{title}</span>
            </div>
            <p className={styles.description}>{desc}</p>
        </div>
    );
}

// Sub-components for icons
const WebhookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
);

const OpenAIIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
        <path d="M12 16v-4"></path>
        <path d="M8 12h8"></path>
    </svg>
);

const SendGridIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
    </svg>
);

const HubSpotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8v8"></path>
        <path d="M8 12h8"></path>
    </svg>
);

const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

function SimpleNode({ icon, title, subtitle, active, isWait }) {
    return (
        <div className={`${styles.node} ${styles.simple} ${isWait ? styles.wait : ''} ${active ? styles.active : ''}`}>
            <div className={styles.simpleIconBox}>
                {icon}
            </div>
            <div className={styles.simpleTitle}>{title}</div>
            {subtitle && <div className={styles.simpleSubtitle}>{subtitle}</div>}
        </div>
    );
}

export default WorkflowAnimation;
