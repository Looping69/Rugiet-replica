import React from 'react';

const Banner = () => {
  return (
    <div className="banner" style={{
      backgroundColor: '#1f776d',
      color: 'white',
      padding: '12px 24px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: '500'
    }}>
      <div className="container">
        Valentine's Day is coming. Are you Ready?{' '}
        <a href="#" className="underline" style={{ textDecoration: 'underline', marginLeft: '8px' }}>
          Take 25% off with VDAY25 &gt;
        </a>
      </div>
    </div>
  );
};

export default Banner;
