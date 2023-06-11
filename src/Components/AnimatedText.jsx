import React, { useEffect, useState } from 'react';

const AnimatedText = () => {
  const [placeholder, setPlaceholder] = useState('');
  const string = 'Hi, I am Mohamed Amir Bendhief, Web Developer.';
  const index = useState(0);

  useEffect(() => {
    const tick = () => {
      setPlaceholder(prev => prev + string[index[0]]);
      index[1](prevIndex => prevIndex + 1);
    };

    if (index[0] < string.length) {
      const addChar = setInterval(tick, 200);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return (
    <div style={{  marginTop: '15%' , marginLeft:'10%' }}>
      <p style={{ fontSize: '24px', color: '#fffffA', fontFamily: 'Montserrat, sans-serif' }}>
        {placeholder}
      </p>
    </div>
  );
};

export default AnimatedText;
