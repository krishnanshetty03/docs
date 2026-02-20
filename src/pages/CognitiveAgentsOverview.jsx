import React from 'react';
import { useNavigate } from 'react-router-dom';

function CognitiveAgentsOverview() {
    const navigate = useNavigate();
    const orangeColor = '#f59e0b';

    const products = [
        {
            id: 'email-classifier',
            name: 'EmailClassifier',
            tagline: 'AI-Powered Gmail Automation & Inbox Intelligence',
            description: 'EmailClassifier intelligently organizes, prioritizes, and automates your inbox. It uses AI to classify emails by priority, rescue important messages from spam, and draft responses aligned with your business rules and tone.',
            path: '/email-classifier'
        },
        {
            id: 'leadgen-ai',
            name: 'LeadGenAI',
            tagline: 'AI-Powered Lead Discovery & Qualification',
            description: 'Define your ideal customer and LeadGenAI automatically scrapes and generates qualified leads. It provides comprehensive contact insights, LinkedIn profiles, and company data to help sales teams discovery ICP-matched prospects in minutes.',
            path: '/leadgen-ai'
        },
        {
            id: 'linkedin-ai',
            name: 'LinkedinAI',
            tagline: 'AI-Powered LinkedIn Growth & Brand PR Agent',
            description: 'Acts as your personal LinkedIn marketing strategist. It automates post scheduling, generates content strategies, and analyzes engagement gaps to strengthen your personal or company branding like a professional PR advisor.',
            path: '/linkedin-ai'
        }
    ];

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
                    Cognitive <span style={{ color: orangeColor }}>Agents</span>
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                    Spinabot's Cognitive Agents are specialized AI assistants designed to handle specific business functions with high precision.
                    From managing your inbox to scaling your LinkedIn presence and generating high-quality leads, these agents work autonomously to drive results.
                </p>
            </header>

            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2.5rem', color: orangeColor }}>
                    Specialized Cognitive Agents
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                backgroundColor: '#111',
                                padding: '3rem',
                                borderRadius: '24px',
                                border: '1px solid #222',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                transition: 'transform 0.2s, border-color 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = orangeColor;
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#222';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                            onClick={() => navigate(product.path)}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 0.5rem 0', color: 'white' }}>
                                    {product.name}
                                </h3>
                                <div style={{ color: orangeColor, fontWeight: '600', fontSize: '1rem', marginBottom: '1rem' }}>
                                    {product.tagline}
                                </div>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6', maxWidth: '850px' }}>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default CognitiveAgentsOverview;
