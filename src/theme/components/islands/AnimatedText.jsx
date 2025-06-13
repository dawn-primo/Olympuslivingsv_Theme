import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Styles from '../modules/AnimatedTextWithImageModule/animatedText.module.css';

export default function AnimatedText({ add_animated_text = [] }) {
  const textArray = add_animated_text.map(item => item.animated_text);

  useEffect(() => {
    console.log('Raw data:', add_animated_text);
    console.log('Filtered array:', textArray);
  }, []);

  return (
    <div className={Styles.heading_container}>
      {textArray.length > 0 && (
        <Typewriter
          options={{
            strings: textArray,
            autoStart: true,
            loop: true,
          }}
        />
      )}
    </div>
  );
}
