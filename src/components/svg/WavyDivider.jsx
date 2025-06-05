// WavyDivider.jsx
import React from 'react';
import styles from './WavyDivider.module.css';

const WavyDivider = () => {
  return (
    <div className={styles.waveContainer}>
      <svg
        className={styles.waveSvg}
        viewBox="0 0 120 28"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%"> {/* Changed x2 to 100% and y2 to 0% for horizontal gradient */}
            <stop offset="0%" stopColor="#f7eac7" /> {/* First color */}
            <stop offset="100%" stopColor="#f3eb7f" /> {/* Second color */}
          </linearGradient>
          <mask id="waveMask">
            <rect x="0" y="0" width="120" height="28" fill="white" />
            <path
              id="wavePath"
              d="M0,10 C30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v28 h-240 z"
            />
          </mask>
        </defs>
        <use
          className={styles.wave}
          xlinkHref="#wavePath"
          x="0"
          y="0"
          fill="url(#waveGradient)"
        />
        <use
          className={styles.wave}
          xlinkHref="#wavePath"
          x="0"
          y="-1"
          fill="url(#waveGradient)"
        />
        <use
          className={styles.wave}
          xlinkHref="#wavePath"
          x="0"
          y="-2"
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
  );
};

export default WavyDivider;