function Skills() {
    return (
        <div>
            <h1>Skills</h1>
            <p>Extend Lindy's capabilities with custom skills.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>What are Skills?</h2>
                <p>
                    Skills are modular capabilities that you can add to Lindy to extend its functionality.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Built-in Skills</h2>
                <ul>
                    <li><strong>Data Analysis:</strong> Analyze spreadsheets and data</li>
                    <li><strong>Document Generation:</strong> Create reports and documents</li>
                    <li><strong>Web Research:</strong> Gather information from the web</li>
                    <li><strong>Translation:</strong> Translate messages and documents</li>
                    <li><strong>Summarization:</strong> Summarize long content</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Custom Skills</h2>
                <p>
                    Create your own skills for specific tasks:
                </p>
                <ol>
                    <li>Define the skill's purpose and inputs</li>
                    <li>Provide examples and training data</li>
                    <li>Test the skill's performance</li>
                    <li>Deploy and use in workflows</li>
                </ol>
            </section>

            <section>
                <h2>Skill Marketplace</h2>
                <p>
                    Browse and install skills created by the community.
                </p>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '1rem'
                }}>
                    <p style={{ margin: 0 }}>
                        Visit the Skill Marketplace to discover hundreds of pre-built skills
                        for common tasks and industry-specific workflows.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Skills
