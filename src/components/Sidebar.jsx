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
                    <div className={styles.sectionTitle}>Products</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/ai-crew"
                                className={`${styles.navLink} ${isActive('/ai-crew') ? styles.active : ''}`}
                            >
                                AI Crew
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/workflow-overview"
                                className={`${styles.navLink} ${isActive('/workflow-overview') ? styles.active : ''}`}
                            >
                                Workflows
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/chatbot-overview"
                                className={`${styles.navLink} ${isActive('/chatbot-overview') ? styles.active : ''}`}
                            >
                                Chatbot Builder
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/voice-agents-overview"
                                className={`${styles.navLink} ${isActive('/voice-agents-overview') ? styles.active : ''}`}
                            >
                                Voice Agents
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/cognitive-agents"
                                className={`${styles.navLink} ${isActive('/cognitive-agents') ? styles.active : ''}`}
                            >
                                Cognitive Agents
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/slm"
                                className={`${styles.navLink} ${isActive('/slm') ? styles.active : ''}`}
                            >
                                SLM
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
                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Account & Billing</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/account-billing"
                                className={`${styles.navLink} ${isActive('/account-billing') ? styles.active : ''}`}
                            >
                                Account & Billing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Developer</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/developer-platform"
                                className={`${styles.navLink} ${isActive('/developer-platform') ? styles.active : ''}`}
                            >
                                Developer Platform
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/developer-apis"
                                className={`${styles.navLink} ${isActive('/developer-apis') ? styles.active : ''}`}
                            >
                                API Documentation
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Integrations</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/integrations"
                                className={`${styles.navLink} ${isActive('/integrations') ? styles.active : ''}`}
                            >
                                Browse Integrations
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.navSection}>
                    <div className={styles.sectionTitle}>Security</div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/security"
                                className={`${styles.navLink} ${isActive('/security') ? styles.active : ''}`}
                            >
                                Security Overview
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
