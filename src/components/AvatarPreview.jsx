import React from 'react';
import styles from './AvatarPreview.module.css';
import avatarImg from '../assets/avatar.png';

const AvatarPreview = () => {
    return (
        <div className={styles.container}>
            {/* Top Bar (Orange) */}
            <div className={styles.topBar}>
                <span className={styles.backArrow}>←</span>
                <span>Al Avatar (en)</span>
            </div>

            {/* Video Background / Image */}
            <div className={styles.videoPlaceholder}>
                <img src={avatarImg} alt="AI Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Bottom Overlay */}
            <div className={styles.overlay}>
                <h2 className={styles.mainText}>Talk to spinabot (en) 👋</h2>

                <button className={styles.startButton}>
                    Start Conversation
                </button>

                <p className={styles.footer}>
                    By clicking on "Start Conversation" you agree to our <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>.
                </p>

                <div className={styles.poweredBy}>
                    Powered by Spinabot
                </div>
            </div>
        </div>
    );
};

export default AvatarPreview;
