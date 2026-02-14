import { useState } from 'react'
import styles from './ChatSearch.module.css'

function ChatSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSend = async () => {
        if (!inputValue.trim()) return

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        setIsLoading(true)

        // TODO: Replace with actual API call to Groq
        setTimeout(() => {
            const aiMessage = {
                id: Date.now() + 1,
                type: 'ai',
                content: 'This is a placeholder response. The Groq API integration will be added next.',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, aiMessage])
            setIsLoading(false)
        }, 1000)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <>
            {/* Toggle Button */}
            <button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle AI Search"
            >
                {isOpen ? '✕' : '🔍'}
            </button>

            {/* Chat Panel */}
            <div className={`${styles.chatPanel} ${isOpen ? styles.open : ''}`}>
                <div className={styles.chatHeader}>
                    <h3>🤖 AI Documentation Assistant</h3>
                    <p>Ask me anything about Spinabot</p>
                </div>

                <div className={styles.messagesContainer}>
                    {messages.length === 0 ? (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>💬</div>
                            <p>Ask me anything about Spinabot!</p>
                            <div className={styles.suggestions}>
                                <button onClick={() => setInputValue('What is Spinabot?')}>
                                    What is Spinabot?
                                </button>
                                <button onClick={() => setInputValue('How do I create a chatbot?')}>
                                    How do I create a chatbot?
                                </button>
                                <button onClick={() => setInputValue('Tell me about voice agents')}>
                                    Tell me about voice agents
                                </button>
                            </div>
                        </div>
                    ) : (
                        messages.map(message => (
                            <div
                                key={message.id}
                                className={`${styles.message} ${styles[message.type]}`}
                            >
                                <div className={styles.messageContent}>
                                    {message.content}
                                </div>
                                <div className={styles.messageTime}>
                                    {message.timestamp.toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                    {isLoading && (
                        <div className={`${styles.message} ${styles.ai}`}>
                            <div className={styles.messageContent}>
                                <div className={styles.typingIndicator}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.inputContainer}>
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about Spinabot features..."
                        rows="1"
                        className={styles.input}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isLoading}
                        className={styles.sendButton}
                    >
                        ➤
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChatSearch
