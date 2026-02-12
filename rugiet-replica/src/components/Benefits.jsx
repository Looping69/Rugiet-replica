import React from 'react';
import { Share2, Zap, Clock, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Benefits = () => {
    const navigate = useNavigate();
    const ingredients = [
        { name: "Apomorphine to boost arousal", icon: <Zap size={20} /> },
        { name: "Sildenafil to get harder faster", icon: <Share2 size={20} /> },
        { name: "Tadalafil to stay hard longer", icon: <Clock size={20} /> },
        { name: "Effects in 15 minutes or less*", icon: <Zap size={20} /> }
    ];

    return (
        <section style={{ backgroundColor: '#f0ede9', padding: '100px 0' }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '80px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        color: '#1f776d',
                        marginBottom: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <span style={{
                            backgroundColor: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            fontSize: '0.6em',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <img src="https://www.rugiet.com/IMGS/favicons/R.png" style={{ width: '20px' }} />
                            Ready
                        </span>
                        has you covered.
                    </h2>
                </div>

                <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {ingredients.map((item, idx) => (
                        <div key={idx} className="pill-ingredient">
                            <span style={{ color: '#1f776d' }}>{item.icon}</span>
                            {item.name}
                        </div>
                    ))}

                    <div style={{ marginTop: '40px' }}>
                        <button className="btn btn-dark" onClick={() => navigate('/intake')}>Get started</button>
                        <p style={{
                            marginTop: '24px',
                            fontSize: '12px',
                            color: '#7c6d65',
                            lineHeight: '1.4',
                            maxWidth: '400px'
                        }}>
                            *In studies of sublingual sildenafil and apomorphine. Prescription products require an online consultation...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
