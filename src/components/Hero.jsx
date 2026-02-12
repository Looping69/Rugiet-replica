import React from 'react';
import Quiz from './Quiz';

const Hero = () => {
    return (
        <section style={{
            background: 'linear-gradient(#320e02, #81430a, #c28534, #e7c389, #f1ece6 14%)',
            padding: '80px 0',
            minHeight: '800px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '40px'
            }}>
                {/* Left Side: Content */}
                <div style={{ flex: '1', minWidth: '300px', color: 'white', zIndex: 1 }}>
                    <img
                        src="https://www.rugiet.com/IMGS/favicons/R.png"
                        alt="Rugiet"
                        style={{ width: '40px', marginBottom: '40px' }}
                    />
                    <h1 style={{
                        fontSize: 'clamp(40px, 5vw, 64px)',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        maxWidth: '500px'
                    }}>
                        Powerful treatments for your best sex ever
                    </h1>
                    <p style={{ fontSize: '18px', opacity: '0.9', maxWidth: '400px' }}>
                        Fast-acting formulas with up to 3X the power of generics — built for real performance.
                    </p>

                    <div style={{ marginTop: '60px' }}>
                        {/* Hero Image / Product Shot */}
                        <img
                            src="https://cdn.sanity.io/images/xswtsnqo/production/fe9b910d6e3ae48277c5e5dc9106d7b384c0f4e6-1560x2769.webp"
                            alt="Rugiet Ready"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>

                {/* Right Side: Quiz */}
                <div style={{ flex: '1', minWidth: '300px', zIndex: 2 }}>
                    <Quiz />
                </div>
            </div>

            {/* Decorative background circle */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,199,162,0.1) 0%, transparent 70%)',
                zIndex: 0
            }}></div>
        </section>
    );
};

export default Hero;
