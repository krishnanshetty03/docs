import React, { useEffect, useState } from 'react';
import styles from './AiCrewAnimation.module.css';

const AiCrewAnimation = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const agents = [
        { name: 'Sarah', role: 'Sales', initial: 'S', color: '#4285f4' },
        { name: 'PM Agent', role: 'AI Assistant', initial: 'PM', color: '#f59e0b', isAi: true },
        { name: 'Mike', role: 'Developer', initial: 'M', color: '#34a853' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.workflow}>
                {/* MEETING SIDE */}
                <div className={styles.meetingWindow}>
                    <div className={styles.windowHeader}>
                        <div className={styles.meetLogo}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#34a853"><path d="M15 8l1 4h-2l-2-7h-2l2 7h-2l-1-4-2 0 2 10h10l2-10z" /></svg>
                        </div>
                        <span>Weekly Sync - Google Meet</span>
                    </div>

                    <div className={styles.grid}>
                        {agents.map((agent, i) => (
                            <div key={i} className={styles.participant}>
                                <div className={`${styles.avatar} ${agent.isAi ? styles.aiAvatar : ''}`} style={{ backgroundColor: agent.color }}>
                                    {agent.initial}
                                </div>
                                <div className={styles.participantName}>{agent.name}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.captionArea}>
                        {step === 0 && <div className={styles.caption}>Sarah: "We need to fix the login bug by Friday."</div>}
                        {step === 1 && <div className={`${styles.caption} ${styles.aiSpeak}`}>PM Agent: "I've captured that. Creating a task in the Backlog."</div>}
                        {step >= 2 && <div className={styles.caption}>Mike: "Thanks, I'll take a look."</div>}
                    </div>

                    {/* ANIMATED PILL */}
                    {step === 1 && <div className={styles.taskPill}>Fix login bug</div>}
                </div>

                {/* CONNECTION LINE */}
                <div className={styles.connector}>
                    <div className={`${styles.pulse} ${step === 1 ? styles.activePulse : ''}`}></div>
                </div>

                {/* KANBAN SIDE */}
                <div className={styles.kanbanPreview}>
                    <div className={styles.kanbanHeader}>Spinabot Kanban</div>
                    <div className={styles.kanbanColumns}>
                        <div className={styles.column}>
                            <div className={styles.columnLabel}>To-Do</div>
                            <div className={styles.columnSlot}>
                                {step >= 2 && (
                                    <div className={styles.kanbanCard}>
                                        <div className={styles.cardPriority}>High</div>
                                        <div>Fix login bug</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.columnLabel}>Done</div>
                            <div className={styles.columnSlot}>
                                <div className={styles.kanbanCard}>Update sidebar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiCrewAnimation;
