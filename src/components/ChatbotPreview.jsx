import React from 'react';
import styles from './ChatbotPreview.module.css';

const ChatbotPreview = () => {
    return (
        <div className={styles.chatContainer}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.botInfo}>
                    <div className={styles.botIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                            <circle cx="12" cy="5" r="2"></circle>
                            <path d="M12 7v4"></path>
                            <line x1="8" y1="16" x2="8" y2="16"></line>
                            <line x1="16" y1="16" x2="16" y2="16"></line>
                        </svg>
                    </div>
                    <div>
                        <h3 className={styles.botName}>Help Bot</h3>
                        <p className={styles.botStatus}>Replies instantly</p>
                    </div>
                </div>
                <button className={styles.closeButton}>×</button>
            </div>

            {/* Body */}
            <div className={styles.body}>
                <div className={styles.messageBubble}>
                    👋 Hi! How can I help you today?
                </div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <div className={styles.suggestionsTitle}>Try asking:</div>
                <div className={styles.suggestionsRow}>
                    <button className={styles.suggestionChip}>
                        <span>🔑</span> Where are my keys?
                    </button>
                    <button className={styles.suggestionChip}>
                        <span>💰</span> Pricing info
                    </button>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className={styles.input}
                        readOnly
                    />
                    <button className={styles.sendButton}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>

                <div className={styles.poweredBy}>
                    Powered by Spinabot
                </div>
            </div>
        </div>
    );
};

export default ChatbotPreview;
