import React, { useState, useEffect } from 'react';
import styles from './SlmAnimation.module.css';

const SlmAnimation = () => {
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let progressInterval;
        if (step === 1) {
            setProgress(0);
            progressInterval = setInterval(() => {
                setProgress((prev) => Math.min(prev + 2, 100));
            }, 40);
        } else {
            setProgress(0);
        }
        return () => clearInterval(progressInterval);
    }, [step]);

    const getStatusText = () => {
        switch (step) {
            case 0: return 'Awaiting Request...';
            case 1: return 'Local Model Processing...';
            case 2: return 'Privacy Check Complete';
            case 3: return 'Response Delivered';
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.infrastructureBoundary}>
                <div className={styles.boundaryLabel}>USER INFRASTRUCTURE (VPC)</div>
                <div className={styles.boundaryShield}>🛡️</div>

                <div className={styles.animationArea}>
                    {/* User Input side */}
                    <div className={styles.node}>
                        <div className={styles.icon}>💻</div>
                        <div className={styles.label}>Application</div>
                    </div>

                    <div className={styles.connector}>
                        <div className={`${styles.packet} ${step === 1 ? styles.sending : ''}`}></div>
                        <div className={`${styles.packet} ${step === 3 ? styles.returning : ''}`}></div>
                    </div>

                    {/* Local Model side */}
                    <div className={`${styles.node} ${step === 1 ? styles.active : ''}`}>
                        <div className={styles.chipIcon}>⚙️</div>
                        <div className={styles.label}>Spinabot SLM</div>
                        {step === 1 && (
                            <div className={styles.progressTracker}>
                                <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                                <span className={styles.tokens}>{Math.round(progress * 1.5)} tokens/s</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.statusDisplay}>
                    <div className={styles.indicator}>
                        <div className={`${styles.dot} ${step === 1 ? styles.blinking : styles.static}`}></div>
                        {getStatusText()}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlmAnimation;
