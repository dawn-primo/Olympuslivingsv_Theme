import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Styles from '../modules/AnimatedTextWithImageModule/animatedText.module.css';
import { RichText } from '@hubspot/cms-components';

export default function AnimatedText({ add_animated_text = [] }) {
  const textArray = add_animated_text
    .map(item => item.animated_text)
    .filter(Boolean);

  useEffect(() => {
    console.log('Raw data:', add_animated_text);
    console.log('Filtered array:', textArray);
  }, []);

  return (
    <div className={Styles.animited_text}>
      {textArray.length > 0 && (
        <Typewriter
          options={{
            strings: textArray,
            autoStart: true,
            loop: true,
            wrapperClassName: 'h2',
            cursorClassName: 'h2',
            cursor: null
          }}
        />
      )}
    </div>
  );
}
