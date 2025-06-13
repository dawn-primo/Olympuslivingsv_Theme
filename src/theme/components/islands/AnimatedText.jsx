import React, { useEffect } from 'react';
import Styles from '../modules/AnimatedTextWithImageModule/animatedText.module.css';
import Typewriter from 'typewriter-effect';

export default function AnimatedText({ add_animated_text = [] }) {
  const textArray = add_animated_text.map(item => item.animated_text).filter(Boolean);

  useEffect(() => {
    console.log('Animated Text Array:', textArray);
  }, [textArray]);

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
