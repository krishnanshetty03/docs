import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
                Lindy
            </div>

            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.headerActions}>
                <a href="#" className={styles.headerLink}>SDK</a>
                <a href="#" className={styles.headerLink}>Add AI</a>
                <a href="#" className={styles.headerLink}>Support</a>
                <button className={styles.dashboardBtn}>Dashboard ▼</button>
                <button className={styles.iconBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header
