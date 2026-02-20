import { useState } from 'react';
import WorkflowAnimation from './WorkflowAnimation';
import styles from './GeneratorDemo.module.css';

function GeneratorDemo() {
    // States: 'idle', 'generating', 'complete'
    const [status, setStatus] = useState('idle');
    const [activePrompt, setActivePrompt] = useState(null);

    const handleGenerate = (promptType) => {
        setStatus('generating');
        setActivePrompt(promptType);

        // Simulate AI generation time
        setTimeout(() => {
            setStatus('complete');
        }, 1500);
    };

    const handleReset = () => {
        setStatus('idle');
        setActivePrompt(null);
    };

    // Define the specific workflow for "Send welcome emails"
    const welcomeEmailSteps = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            ),
            title: "Webhook",
            subtitle: "When a webhook is called fro..."
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" y1="16" x2="8" y2="16"></line>
                    <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
            ),
            title: "SendGrid Email",
            subtitle: "To: {{userData.email}} • Welco..."
        }
    ];

    // Define the specific workflow for "Sync Stripe data"
    const stripeSyncSteps = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                </svg>
            ),
            title: "Stripe",
            subtitle: "When stripe event is capture..."
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            title: "HTTP Request",
            subtitle: "Not configured"
        }
    ];

    return (
        <div className={styles.demoContainer}>

            {/* IDLE STATE: PROMPT SELECTION */}
            <div className={`${styles.screen} ${status === 'idle' ? '' : styles.hidden}`}>
                <div className={styles.header}>
                    <div className={styles.sparkleIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    </div>

                    <p className={styles.mainTitle}>
                        Build complex automation workflows in <strong>any language</strong>. Just describe what you need, and watch AI create it instantly.
                    </p>

                    <div className={styles.badgeRow}>
                        <div className={`${styles.pill} ${styles.green}`}>
                            <span>⚡ Real-time Generation</span>
                        </div>
                        <div className={`${styles.pill} ${styles.blue}`}>
                            <span>No Coding Required</span>
                        </div>
                    </div>
                </div>

                <div className={styles.examplesGrid}>
                    <button className={styles.exampleBtn} onClick={() => handleGenerate('welcome-email')}>
                        <span>📧</span> Send welcome emails to new users
                    </button>
                    <button className={styles.exampleBtn} onClick={() => handleGenerate('lead-scoring')}>
                        <span>🎯</span> Lead scoring with automated follow-ups
                    </button>
                    <button className={styles.exampleBtn} onClick={() => handleGenerate('stripe-sync')}>
                        <span>💳</span> Sync Stripe data to database
                    </button>
                </div>

                <div className={styles.inputSimulation}>
                    <span>Describe your workflow...</span>
                    <div className={styles.sendButton}>➤</div>
                </div>
            </div>

            {/* GENERATING STATE */}
            <div className={`${styles.screen} ${status === 'generating' ? '' : styles.hidden}`}>
                <div className={styles.loadingText}>
                    Generating workflow logic...
                </div>
            </div>

            {/* COMPLETE STATE: RESULT */}
            <div className={`${styles.screen} ${status === 'complete' ? '' : styles.hidden}`}>
                <WorkflowAnimation
                    steps={
                        activePrompt === 'welcome-email' ? welcomeEmailSteps :
                            (activePrompt === 'lead-scoring' ? 'lead-scoring' :
                                (activePrompt === 'stripe-sync' ? stripeSyncSteps : null))
                    }
                />

                <button className={styles.resetBtn} onClick={handleReset}>
                    ↻ Create Another
                </button>
            </div>

        </div>
    );
}

export default GeneratorDemo;
