import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "If Viagra/Cialis didn’t work for me, will Ready?",
        answer: "Rugiet Ready contains a unique combination of Sildenafil, Tadalafil, and Apomorphine. This combination works on both the brain and the body, providing a more comprehensive solution than single-ingredient generics."
    },
    {
        question: "How long does Rugiet Ready take to start working?",
        answer: "Due to its sublingual (under-the-tongue) delivery method, Rugiet Ready enters the bloodstream directly, often taking effect in 15 minutes or less."
    },
    {
        question: "How long do the effects of Rugiet Ready last?",
        answer: "The effects of Tadalafil in the formula can last for up to 36 hours, giving you flexibility and confidence."
    },
    {
        question: "What are some common side effects?",
        answer: "Common side effects may include headache, flushing, or nausea. Please consult with our medical team during your online visit for full details."
    }
];

const FAQ = () => {
    const [open, setOpen] = useState(null);

    return (
        <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
            <div className="container" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
                <h2 style={{
                    fontSize: '48px',
                    color: '#1f776d',
                    flex: '1',
                    minWidth: '300px'
                }}>
                    Frequently Asked Questions
                </h2>

                <div style={{ flex: '1.5', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} style={{
                            border: '1px solid #eee',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <button
                                onClick={() => setOpen(open === idx ? null : idx)}
                                style={{
                                    width: '100%',
                                    padding: '24px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textAlign: 'left',
                                    backgroundColor: open === idx ? '#fcfcfc' : 'white'
                                }}
                            >
                                <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{faq.question}</span>
                                {open === idx ? <Minus size={20} /> : <Plus size={20} />}
                            </button>

                            {open === idx && (
                                <div style={{ padding: '0 24px 24px', color: '#666', lineHeight: '1.6' }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
