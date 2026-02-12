import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        text: "So grateful to have finally found a viable solution for my challenges. A bit on the pricey side but worth every penny.",
        name: "Dan"
    },
    {
        text: "It has changed life in the bedroom and dramatically improved my relationship with my wife!",
        name: "Merrill"
    },
    {
        text: "Amazing stuff, first it works...but APO really does enhance things in an incredible way.",
        name: "Nawaf"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % testimonials.length);
    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

    return (
        <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <span style={{ fontWeight: 'bold' }}>4.4</span>
                    <div style={{ display: 'flex', color: '#00b67a' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#1f776d' }}>
                        Real people, real results
                    </h2>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={prev}
                            style={{ padding: '12px', borderRadius: '4px', backgroundColor: '#f5f5f5' }}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            style={{ padding: '12px', borderRadius: '4px', backgroundColor: '#f5f5f5' }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f5f5f5',
                    padding: '40px',
                    borderRadius: '16px',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <p style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '24px', color: '#333' }}>
                        "{testimonials[current].text}"
                    </p>
                    <span style={{ fontWeight: '600', color: '#999' }}>{testimonials[current].name}</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
