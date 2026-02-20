import React, { useState, useEffect } from 'react';
import styles from './VoiceMessageAnimation.module.css';

const VoiceMessageAnimation = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Voice Interface Demo</div>

            {/* Live Waveform Indicator */}
            <div className={styles.waveformContainer}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            <div className={styles.chatArea}>
                {/* User Voice Message */}
                {step >= 1 && (
                    <div className={styles.userMessage}>
                        <div className={`${styles.bubble} ${styles.userBubble}`}>
                            <div className={styles.audioWaveSmall}>
                                <div className={styles.smallBar} style={{ animationDelay: '0.1s' }}></div>
                                <div className={styles.smallBar} style={{ animationDelay: '0.2s' }}></div>
                                <div className={styles.smallBar} style={{ animationDelay: '0.3s' }}></div>
                                <div className={styles.smallBar} style={{ animationDelay: '0.4s' }}></div>
                                <span>0:04</span>
                            </div>
                        </div>
                        <div className={styles.transcript}>"what spinabot do?"</div>
                        <div className={styles.voiceTag}>Voice Input</div>
                    </div>
                )}

                {/* AI Voice Response */}
                {step >= 2 && (
                    <div className={styles.aiMessage} style={{ opacity: 1 }}>
                        <div className={`${styles.bubble} ${styles.aiBubble}`}>
                            Spinabot builds AI agents that talk, work, and take action for businesses—automating conversations, meetings, and workflows end-to-end
                        </div>
                        <div className={styles.voiceTag}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                            Voice Response Active
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VoiceMessageAnimation;
