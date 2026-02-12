import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        id: 1,
        question: "How do you want to level up your sex life?",
        options: ["Get hard, faster", "Longer sex", "All of the above"]
    },
    {
        id: 2,
        question: "Have you tried other ED meds before?",
        options: ["Yes", "No"]
    },
    {
        id: 3,
        question: "What do you like most about Rugiet?",
        options: ["Works when traditional ED meds fail", "Targeted formulas for brain and body", "Fewer side effects than the rest", "Made in the USA"]
    },
    {
        id: 4,
        question: "What matters most to you in treatment?",
        options: ["A fast-acting treatment", "Stronger than Viagra, Cialis or other", "Better climax control", "An always-on daily solution"]
    }
];

const Quiz = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const nextStep = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            navigate('/intake');
        }
    };

    return (
        <div className="quiz-card glass" style={{
            borderRadius: '24px',
            padding: '40px',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '550px',
            width: '100%',
            margin: '0 auto'
        }}>
            {/* Step Indicator */}
            <div className="step-indicator" style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '40px',
                backgroundColor: '#f5f5f5',
                padding: '6px',
                borderRadius: '40px'
            }}>
                {questions.map((_, idx) => (
                    <div key={idx} style={{
                        width: '60px',
                        height: '28px',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: idx === step ? 'white' : 'transparent',
                        boxShadow: idx === step ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                        color: idx === step ? 'black' : '#999',
                        transition: 'all 0.3s ease'
                    }}>
                        0{idx + 1}
                    </div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '32px' }}>
                        {questions[step].question}
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {questions[step].options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={nextStep}
                                className="quiz-option"
                                style={{
                                    padding: '16px 24px',
                                    borderRadius: '54px',
                                    border: '1px solid #eee',
                                    backgroundColor: '#fcfcfc',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease',
                                    textAlign: 'center'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#f0ede9'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#fcfcfc'}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => navigate('/intake')}
                        style={{
                            marginTop: '24px',
                            fontSize: '14px',
                            fontWeight: '700',
                            textDecoration: 'underline',
                            color: '#999'
                        }}
                    >
                        Skip and start online visit
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Quiz;
