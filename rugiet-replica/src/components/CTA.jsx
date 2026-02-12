import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
    const navigate = useNavigate();
    return (
        <section style={{
            backgroundImage: 'url(https://cdn.sanity.io/images/xswtsnqo/production/b5b63b0cd2165049719baaa791d3e561e4237300-3840x2400.webp)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '800px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div className="container" style={{ zIndex: 1 }}>
                <div style={{ maxWidth: '600px', color: 'white' }}>
                    <h2 style={{ fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: '1', fontWeight: '400' }}>
                        Viagra’s got <br />
                        some <span style={{ fontWeight: '600', fontStyle: 'italic' }}>stiff</span> <br />
                        competition.
                    </h2>
                    <button className="btn btn-light" style={{ marginTop: '48px', width: '320px' }} onClick={() => navigate('/intake')}>
                        Get started
                    </button>
                </div>
            </div>

            {/* Overlay to ensure readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent)',
                zIndex: 0
            }}></div>
        </section>
    );
};

export default CTA;
