import React, { useState, useEffect } from 'react';
import styles from './VoiceCloningAnimation.module.css';

const VoiceCloningAnimation = () => {
    const [seconds, setSeconds] = useState(0);
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState('Recording'); // Recording, Analyzing, Finalizing, Ready

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => {
                const next = prev + 1;
                if (next > 90) return 0; // Reset for loop
                return next;
            });
        }, 100); // Accelerated for demo (100ms per "second")

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const currentProgress = (seconds / 90) * 100;
        setProgress(currentProgress);

        if (seconds < 30) {
            setStage('Recording');
        } else if (seconds < 60) {
            setStage('Analyzing');
        } else if (seconds < 85) {
            setStage('Finalizing');
        } else {
            setStage('Ready');
        }
    }, [seconds]);

    const renderVisualizer = () => {
        if (stage === 'Recording') {
            return (
                <div className={styles.visualizerArea}>
                    <div className={styles.pulseRing}></div>
                    <div className={styles.pulseRing} style={{ animationDelay: '1s' }}></div>
                    <div className={styles.micIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                    </div>
                </div>
            );
        }

        if (stage === 'Analyzing' || stage === 'Finalizing') {
            return (
                <div className={styles.visualizerArea}>
                    <div className={styles.waveform}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                            <div
                                key={i}
                                className={styles.waveBar}
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    height: stage === 'Finalizing' ? '30px' : undefined
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className={styles.visualizerArea}>
                <div className={styles.successCircle}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            </div>
        );
    };

    const getStatusText = () => {
        switch (stage) {
            case 'Recording': return 'Capturing Reference Audio...';
            case 'Analyzing': return 'Extracting Vocal Nuances...';
            case 'Finalizing': return 'Generating Authentic Digital Twin...';
            case 'Ready': return 'Voice Clone Ready';
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.stageInfo}>
                <div className={styles.stageStatus}>{stage}</div>
                <div className={styles.stageTitle}>{getStatusText()}</div>
            </div>

            {renderVisualizer()}

            <div style={{ width: '100%' }}>
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                    <span className={styles.timerLabel}>{seconds}s / 90s</span>
                    <span className={styles.timerLabel}>{Math.round(progress)}% Complete</span>
                </div>
            </div>

            <div className={styles.detailsGrid}>
                <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>Fidelity Score</div>
                    <div className={styles.detailValue}>{seconds < 60 ? '--' : '99.8%'}</div>
                </div>
                <div className={styles.detailCard}>
                    <div className={styles.detailLabel}>Deployment</div>
                    <div className={styles.detailValue}>{stage === 'Ready' ? 'Instant Access' : 'In Progress'}</div>
                </div>
            </div>
        </div>
    );
};

export default VoiceCloningAnimation;
