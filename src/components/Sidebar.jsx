import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import styles from './Sidebar.module.css'

function Sidebar() {
    const location = useLocation()
    const [expandedSections, setExpandedSections] = useState({
        startHere: true,
        meetings: true,
        inbox: true,
        meetingAssistant: true,
        advanced: true
    })

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    const isActive = (path) => location.pathname === path

    return (
        <aside className={styles.sidebar}>
            <nav>
                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Start Here</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/what-is-lindy"
                                className={`${styles.navLink} ${isActive('/what-is-lindy') || isActive('/') ? styles.active : ''}`}
                            >
                                What is Spinabot?
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/quickstart"
                                className={`${styles.navLink} ${isActive('/quickstart') ? styles.active : ''}`}
                            >
                                Quickstart
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Workflows</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/workflow-overview"
                                className={`${styles.navLink} ${isActive('/workflow-overview') ? styles.active : ''}`}
                            >
                                Overview
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/ai-workflow-generator"
                                className={`${styles.navLink} ${isActive('/ai-workflow-generator') ? styles.active : ''}`}
                            >
                                AI Workflow Generator
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/credentials-management"
                                className={`${styles.navLink} ${isActive('/credentials-management') ? styles.active : ''}`}
                            >
                                Credentials Management
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/executions-dashboard"
                                className={`${styles.navLink} ${isActive('/executions-dashboard') ? styles.active : ''}`}
                            >
                                Executions Dashboard
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/modes-available"
                                className={`${styles.navLink} ${isActive('/modes-available') ? styles.active : ''}`}
                            >
                                Modes Available
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/community"
                                className={`${styles.navLink} ${isActive('/community') ? styles.active : ''}`}
                            >
                                Community
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/use-cases"
                                className={`${styles.navLink} ${isActive('/use-cases') ? styles.active : ''}`}
                            >
                                Use Cases
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Chatbot</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/chatbot-overview"
                                className={`${styles.navLink} ${isActive('/chatbot-overview') ? styles.active : ''}`}
                            >
                                Overview
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/production-ready-chatbot"
                                className={`${styles.navLink} ${isActive('/production-ready-chatbot') ? styles.active : ''}`}
                            >
                                Production-Ready Chatbot in 4 Steps
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/ai-avatar-voice"
                                className={`${styles.navLink} ${isActive('/ai-avatar-voice') ? styles.active : ''}`}
                            >
                                AI Avatar and Voice Capabilities
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Voice Agents</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/voice-agents-overview"
                                className={`${styles.navLink} ${isActive('/voice-agents-overview') ? styles.active : ''}`}
                            >
                                Overview
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/how-to-create-voice-agent"
                                className={`${styles.navLink} ${isActive('/how-to-create-voice-agent') ? styles.active : ''}`}
                            >
                                How to Create
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/schedule-calls"
                                className={`${styles.navLink} ${isActive('/schedule-calls') ? styles.active : ''}`}
                            >
                                Schedule Calls
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/voice-agents-use-cases"
                                className={`${styles.navLink} ${isActive('/voice-agents-use-cases') ? styles.active : ''}`}
                            >
                                Use Cases
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Cognitive Agents</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/email-classifier"
                                className={`${styles.navLink} ${isActive('/email-classifier') ? styles.active : ''}`}
                            >
                                EmailClassifier
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/linkedin-ai"
                                className={`${styles.navLink} ${isActive('/linkedin-ai') ? styles.active : ''}`}
                            >
                                LinkedinAI
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/leadgen-ai"
                                className={`${styles.navLink} ${isActive('/leadgen-ai') ? styles.active : ''}`}
                            >
                                LeadgenAI
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Industry Specific Solutions</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/academic-institutions"
                                className={`${styles.navLink} ${isActive('/academic-institutions') ? styles.active : ''}`}
                            >
                                Academic Institutions
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/construction"
                                className={`${styles.navLink} ${isActive('/construction') ? styles.active : ''}`}
                            >
                                Construction
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/government"
                                className={`${styles.navLink} ${isActive('/government') ? styles.active : ''}`}
                            >
                                Government
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/healthcare"
                                className={`${styles.navLink} ${isActive('/healthcare') ? styles.active : ''}`}
                            >
                                Healthcare
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/human-resources"
                                className={`${styles.navLink} ${isActive('/human-resources') ? styles.active : ''}`}
                            >
                                Human Resources
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/marketing"
                                className={`${styles.navLink} ${isActive('/marketing') ? styles.active : ''}`}
                            >
                                Marketing
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/non-profits-ngos"
                                className={`${styles.navLink} ${isActive('/non-profits-ngos') ? styles.active : ''}`}
                            >
                                Non-Profits and NGOs
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/training-partners"
                                className={`${styles.navLink} ${isActive('/training-partners') ? styles.active : ''}`}
                            >
                                Training Partners
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/ecommerce-retail"
                                className={`${styles.navLink} ${isActive('/ecommerce-retail') ? styles.active : ''}`}
                            >
                                E-Commerce & Retail
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/real-estate"
                                className={`${styles.navLink} ${isActive('/real-estate') ? styles.active : ''}`}
                            >
                                Real Estate
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/financial-services"
                                className={`${styles.navLink} ${isActive('/financial-services') ? styles.active : ''}`}
                            >
                                Financial Services
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/manufacturing"
                                className={`${styles.navLink} ${isActive('/manufacturing') ? styles.active : ''}`}
                            >
                                Manufacturing
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/legal-services"
                                className={`${styles.navLink} ${isActive('/legal-services') ? styles.active : ''}`}
                            >
                                Legal Services
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/hospitality-tourism"
                                className={`${styles.navLink} ${isActive('/hospitality-tourism') ? styles.active : ''}`}
                            >
                                Hospitality & Tourism
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/telecommunications"
                                className={`${styles.navLink} ${isActive('/telecommunications') ? styles.active : ''}`}
                            >
                                Telecommunications
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/media-entertainment"
                                className={`${styles.navLink} ${isActive('/media-entertainment') ? styles.active : ''}`}
                            >
                                Media & Entertainment
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
