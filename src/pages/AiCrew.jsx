import React from 'react';
import AiCrewAnimation from '../components/AiCrewAnimation';

const AiCrew = () => {
    const orangeColor = '#f59e0b';

    const sectionStyle = {
        marginBottom: '4rem'
    };

    const cardStyle = {
        backgroundColor: '#111',
        padding: '2rem',
        borderRadius: '16px',
        border: '1px solid #222',
        marginBottom: '2rem'
    };

    const kanbanColumnStyle = {
        backgroundColor: '#0a0a0a',
        padding: '1rem',
        borderRadius: '12px',
        border: '1px solid #1a1a1a',
        minHeight: '200px',
        flex: 1
    };

    const kanbanItemStyle = {
        backgroundColor: '#111',
        padding: '0.75rem',
        borderRadius: '8px',
        border: '1px solid #222',
        marginBottom: '0.75rem',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)'
    };

    return (
        <div style={{
            padding: '4rem 2rem 8rem 2rem',
            color: 'var(--text-primary)',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
        }}>
            <header style={{ marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    What is <span style={{ color: orangeColor }}>AI Crew?</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    AI Crew is a smart meeting assistant platform where AI agents actively attend your meetings, listen, speak, coordinate, and convert conversations into outcomes—automatically.
                </p>
            </header>

            <section style={{ marginBottom: '5rem' }}>
                <AiCrewAnimation />
            </section>

            {/* ONE CLICK INTEGRATION */}
            <section style={{ marginBottom: '5rem' }}>
                <div style={{ ...cardStyle, borderLeft: `4px solid ${orangeColor}`, marginBottom: 0 }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>One-Click Meeting Integration</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        Seamlessly connect with Google Meet/webex/zoom/teams and more using a single link. Your AI agents join instantly—no plugins, no friction.
                    </p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        backgroundColor: '#050505',
                        padding: '1.25rem',
                        borderRadius: '12px',
                        border: '1px solid #1a1a1a'
                    }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#1a73e8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M15 8l1 4h-2l-2-7h-2l2 7h-2l-1-4-2 0 2 10h10l2-10z" /></svg>
                        </div>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>meet.google.com/abc-defg-hij</span>
                        <button style={{ marginLeft: 'auto', backgroundColor: orangeColor, border: 'none', padding: '0.6rem 1.25rem', borderRadius: '6px', color: 'black', fontWeight: '600', cursor: 'pointer' }}>Join Crew</button>
                    </div>
                </div>
            </section>

            {/* JOIN & SPEAK */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>AI Agents That Join & Speak</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '900px' }}>
                    Assign role-based AI agents that join live meetings, participate in discussions, and respond intelligently in real time.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                    {['Developer', 'Scrum Master', 'Project Manager', 'Sales'].map(role => (
                        <div key={role} style={{ ...cardStyle, textAlign: 'center', padding: '2rem', marginBottom: 0 }}>
                            <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', color: orangeColor }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>{role} Agent</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Live in Meeting</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* KANBAN */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>Built-In Kanban for Follow-Ups</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '900px' }}>
                    Every meeting outcome flows directly into a Kanban board. No task gets lost.
                </p>

                <div style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                    {[
                        { title: 'Backlog', items: ['Implement auth flow', 'Update documentation'] },
                        { title: 'To-Do', items: ['Fix sidebar bug', 'Add products section'] },
                        { title: 'In Progress', items: ['AI Crew Page implementation'] },
                        { title: 'Done', items: ['Workflow Overview overhaul', 'Logo animation'] }
                    ].map(col => (
                        <div key={col.title} style={{ ...kanbanColumnStyle, padding: '1.25rem' }}>
                            <h3 style={{ fontSize: '0.95rem', marginBottom: '1.25rem', color: orangeColor, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>{col.title}</h3>
                            {col.items.map(item => (
                                <div key={item} style={{ ...kanbanItemStyle, padding: '1rem' }}>{item}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AiCrew;
