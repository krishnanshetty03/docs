import React from 'react';
import styles from './KnowledgeBaseAnimation.module.css';

const KnowledgeBaseAnimation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.animationWrapper}>

                {/* Connecting Lines Layer */}
                <svg className={styles.connections} width="500" height="400">
                    {/* Top Left connection */}
                    <line x1="100" y1="100" x2="250" y2="200" className={styles.connectorLine} />
                    <circle r="3" className={styles.flowParticle}>
                        <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M100,100 L250,200"
                        />
                    </circle>

                    {/* Top Right connection */}
                    <line x1="400" y1="100" x2="250" y2="200" className={styles.connectorLine} />
                    <circle r="3" className={styles.flowParticle}>
                        <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M400,100 L250,200"
                            begin="0.5s"
                        />
                    </circle>

                    {/* Bottom Left connection */}
                    <line x1="100" y1="300" x2="250" y2="200" className={styles.connectorLine} />
                    <circle r="3" className={styles.flowParticle}>
                        <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M100,300 L250,200"
                            begin="1s"
                        />
                    </circle>

                    {/* Bottom Right connection */}
                    <line x1="400" y1="300" x2="250" y2="200" className={styles.connectorLine} />
                    <circle r="3" className={styles.flowParticle}>
                        <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M400,300 L250,200"
                            begin="1.5s"
                        />
                    </circle>
                </svg>

                {/* Central Node */}
                <div className={styles.centerNode}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.databaseIcon}>
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                </div>

                {/* Satellite Nodes */}
                <div className={`${styles.satelliteNode} ${styles.nodeTopLeft}`}>
                    Pricing PDF
                </div>

                <div className={`${styles.satelliteNode} ${styles.nodeTopRight}`}>
                    API Docs
                </div>

                <div className={`${styles.satelliteNode} ${styles.nodeBottomLeft}`}>
                    Support Logs
                </div>

                <div className={`${styles.satelliteNode} ${styles.nodeBottomRight}`}>
                    Website
                </div>

            </div>
        </div>
    );
};

export default KnowledgeBaseAnimation;
