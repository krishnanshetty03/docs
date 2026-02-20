import GeneratorDemo from '../components/GeneratorDemo';

function WorkflowOverview() {
    const orangeColor = '#f59e0b';
    const yellowColor = '#dbee36';

    const sectionStyle = {
        marginBottom: '4rem'
    };

    const cardStyle = {
        backgroundColor: '#111',
        padding: '2rem',
        borderRadius: '16px',
        border: '1px solid #222',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.2s ease, border-color 0.2s ease'
    };

    const iconBoxStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '12px',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        color: orangeColor
    };

    const featureListStyle = {
        borderLeft: `4px solid ${orangeColor}`,
        paddingLeft: '1.5rem',
        marginBottom: '2.5rem'
    };

    const cardGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
    };

    const bulletListStyle = {
        listStyle: 'none',
        padding: 0,
        margin: '1rem 0 0 0',
        textAlign: 'left',
        width: '100%',
        color: 'var(--text-secondary)',
        lineHeight: '1.6'
    };

    return (
        <div style={{
            padding: '4rem 2rem 8rem 2rem',
            color: 'var(--text-primary)',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
        }}>
            {/* OVERVIEW SECTION */}
            <header style={{ marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    Workflow <span style={{ color: orangeColor }}>Overview</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Spinabot Workflow enables you to turn business problems into fully automated solutions using AI.
                    Instead of manually building logic or connecting nodes, simply describe your pain point — and the AI
                    Generator creates a complete workflow using intelligent tool-calling.
                </p>
            </header>

            {/* AI WORKFLOW GENERATOR PREVIEW */}
            <section style={{ marginBottom: '5rem', backgroundColor: '#050505', border: '1px solid #222', borderRadius: '24px', padding: '3rem' }}>
                <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3.5rem', fontWeight: '800' }}>Experience the <span style={{ color: orangeColor }}>AI Workflow Generator</span></h2>
                <GeneratorDemo />
            </section>

            {/* CREDENTIALS MANAGEMENT */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    Credentials Management
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: '3rem' }}>
                    The Credentials page is your central hub for connecting Spinabot to all the tools you use every day.
                    Think of it as giving Spinabot the keys to your tech stack—securely and with full control.
                </p>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '2rem', color: orangeColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    How It Works
                </h3>

                <div style={{
                    backgroundColor: '#111',
                    padding: '3rem',
                    borderRadius: '24px',
                    border: '1px solid #222',
                    maxWidth: '850px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {[
                            { title: 'Connect your tools once', desc: '(OAuth or API key)' },
                            { title: 'Spinabot accesses them securely', desc: 'to build workflows' },
                            { title: 'You control what Spinabot can do', desc: 'with each tool' },
                            { title: 'Workflows work across all connected platforms', desc: 'seamlessly' }
                        ].map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    minWidth: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: orangeColor,
                                    color: 'black',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    marginTop: '0.2rem',
                                    flexShrink: 0
                                }}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXECUTIONS DASHBOARD */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    Executions Dashboard
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: '3rem' }}>
                    Watch your automations work in real-time. Track what's running, what worked, what failed—all in one view.
                </p>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '2rem', color: orangeColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    What You See
                </h3>

                <div style={{
                    backgroundColor: '#111',
                    padding: '3rem',
                    borderRadius: '24px',
                    border: '1px solid #222',
                    maxWidth: '850px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { icon: '🟢', label: 'Running', desc: '— Active workflows executing now' },
                            { icon: '✅', label: 'Successful', desc: '— Completed without errors' },
                            { icon: '🔴', label: 'Failed', desc: '— What went wrong and why' },
                            { icon: '⚡', label: 'Performance', desc: '— Speed, tokens used, efficiency' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                    <span style={{ color: orangeColor }}>{item.label}</span>
                                    <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}> {item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WorkflowOverview;


