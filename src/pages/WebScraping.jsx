function WebScraping() {
    return (
        <div>
            <h1>Web Scraping</h1>
            <p>Extract data from websites automatically with Lindy.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>What is Web Scraping?</h2>
                <p>
                    Web scraping allows Lindy to extract structured data from web pages
                    for analysis, monitoring, or integration into workflows.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Use Cases</h2>
                <ul>
                    <li>Monitor competitor websites for changes</li>
                    <li>Extract product information from e-commerce sites</li>
                    <li>Gather research data from multiple sources</li>
                    <li>Track pricing and availability</li>
                    <li>Collect news articles on specific topics</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Setting Up a Scraper</h2>
                <ol>
                    <li>Specify the URL(s) to scrape</li>
                    <li>Define the data fields to extract</li>
                    <li>Set up the scraping schedule</li>
                    <li>Configure data storage and notifications</li>
                </ol>
            </section>

            <section>
                <h2>Best Practices</h2>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <ul style={{ margin: 0 }}>
                        <li>Respect robots.txt and website terms of service</li>
                        <li>Use appropriate scraping intervals to avoid overloading sites</li>
                        <li>Handle errors gracefully when sites change structure</li>
                        <li>Store scraped data securely and responsibly</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default WebScraping
