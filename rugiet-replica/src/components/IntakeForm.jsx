import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STEPS = [
    {
        id: 'welcome',
        title: "Before we begin",
        question: "This quick medical consultation will help our doctors determine if Rugiet Ready is right for you.",
        type: 'info',
        buttonText: "Let's Start"
    },
    {
        id: 'nitrates',
        title: "Safety Check",
        question: "Are you currently taking any nitrate medications (e.g., nitroglycerin) for chest pain or heart problems?",
        type: 'choice',
        options: ["Yes", "No"],
        required: true
    },
    {
        id: 'heart_health',
        title: "Medical History",
        question: "Do you have any history of heart attack, stroke, or severe heart disease?",
        type: 'choice',
        options: ["Yes", "No"],
        required: true
    },
    {
        id: 'blood_pressure',
        title: "Vitals",
        question: "Is your blood pressure typically normal, or do you have history of extremely high or low blood pressure?",
        type: 'choice',
        options: ["Always Normal", "History of High BP", "History of Low BP"],
        required: true
    },
    {
        id: 'allergies',
        title: "Allergies",
        question: "Are you allergic to Sildenafil (Viagra), Tadalafil (Cialis), or Apomorphine?",
        type: 'choice',
        options: ["Yes", "No"],
        required: true
    },
    {
        id: 'lifestyle',
        title: "Lifestyle",
        question: "How often do you consume alcohol?",
        type: 'choice',
        options: ["Rarely", "1-2 times a week", "Daily", "Prefer not to say"]
    },
    {
        id: 'complete',
        title: "Verified",
        question: "Thank you for completing the questionnaire. Our medical team will review your information.",
        type: 'result',
        buttonText: "Return to Home"
    }
];

const IntakeForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleNext = (val) => {
        if (val) {
            setAnswers({ ...answers, [STEPS[currentStep].id]: val });
        }

        if (currentStep < STEPS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/');
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate('/');
        }
    };

    const stepData = STEPS[currentStep];
    const progress = (currentStep / (STEPS.length - 1)) * 100;

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f1ece6',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '40px'
        }}>
            {/* Header / Progress */}
            <header style={{
                padding: '24px',
                backgroundColor: 'white',
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <button onClick={handleBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontWeight: '600' }}>
                    <ChevronLeft size={20} /> Back
                </button>

                <div style={{ flex: 1, maxWidth: '400px', margin: '0 40px' }}>
                    <div style={{ height: '6px', backgroundColor: '#e5e5e5', borderRadius: '3px', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            style={{ height: '100%', backgroundColor: '#1f776d' }}
                        />
                    </div>
                </div>

                <div style={{ width: '80px' }}></div> {/* Spacer */}
            </header>

            {/* Form Content */}
            <main style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>
                <div className="container" style={{ maxWidth: '600px', width: '100%' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="glass"
                            style={{
                                padding: '48px',
                                borderRadius: '32px',
                                textAlign: 'center'
                            }}
                        >
                            <span style={{
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#1f776d',
                                fontWeight: '700',
                                display: 'block',
                                marginBottom: '16px'
                            }}>
                                {stepData.title}
                            </span>

                            <h2 style={{ fontSize: '28px', marginBottom: '32px', color: '#170700' }}>
                                {stepData.question}
                            </h2>

                            {stepData.type === 'choice' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {stepData.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleNext(opt)}
                                            className="btn btn-light"
                                            style={{
                                                width: '100%',
                                                justifyContent: 'space-between',
                                                padding: '20px 32px'
                                            }}
                                        >
                                            {opt}
                                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #ddd' }}></div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {stepData.type === 'info' && (
                                <button className="btn btn-dark" style={{ width: '100%' }} onClick={() => handleNext('started')}>
                                    {stepData.buttonText}
                                </button>
                            )}

                            {stepData.type === 'result' && (
                                <div style={{ marginTop: '32px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        backgroundColor: '#1f776d',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        margin: '0 auto 24px'
                                    }}>
                                        <Check size={32} />
                                    </div>
                                    <button className="btn btn-dark" style={{ width: '100%' }} onClick={() => navigate('/')}>
                                        {stepData.buttonText}
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default IntakeForm;
