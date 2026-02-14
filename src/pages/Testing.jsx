function Testing() {
    return (
        <div>
            <h1>Testing</h1>
            <p>Test and validate your Lindy configurations before deploying.</p>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Testing Your Setup</h2>
                <p>
                    Use Lindy's testing tools to ensure everything works as expected before going live.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Test Types</h2>
                <ul>
                    <li><strong>Email Response Tests:</strong> Verify drafts match your style</li>
                    <li><strong>Triage Tests:</strong> Check email categorization accuracy</li>
                    <li><strong>Workflow Tests:</strong> Simulate automated workflows</li>
                    <li><strong>Integration Tests:</strong> Confirm third-party connections work</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Running Tests</h2>
                <ol>
                    <li>Navigate to the Testing section in settings</li>
                    <li>Select the feature you want to test</li>
                    <li>Provide sample inputs</li>
                    <li>Review Lindy's outputs</li>
                    <li>Adjust settings as needed</li>
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
                        <li>Test with real examples from your inbox</li>
                        <li>Run tests after making configuration changes</li>
                        <li>Start with a limited scope before full deployment</li>
                        <li>Monitor performance in the first few days</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Testing
