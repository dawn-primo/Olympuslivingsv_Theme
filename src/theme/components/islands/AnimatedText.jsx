import React, { useEffect } from 'react';
import Styles from '../modules/AnimatedTextWithImageModule/animatedText.module.css';
import $ from 'jquery';
import Typewriter from 'typewriter-effect';

export default function AnimatedText({add_animated_text }) {
  return (
    <>  
      <div className={Styles.heading_container}>
        <Typewriter
          options={{
            strings: (add_animated_text || []).map(item => item.animated_text).filter(Boolean),
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
}
