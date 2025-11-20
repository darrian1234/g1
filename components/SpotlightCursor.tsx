import React, { HTMLAttributes } from 'react';
import useSpotlightEffect from '../hooks/use-spotlight';

// Define an interface for the spotlight configuration
interface SpotlightConfig {
  spotlightSize?: number;
  spotlightIntensity?: number;
  fadeSpeed?: number;
  glowColor?: string;
  pulseSpeed?: number;
  radius?: number; // Mapped to spotlightSize
  brightness?: number; // Mapped to spotlightIntensity
  color?: string; // Mapped to glowColor
  smoothing?: number; // Mapped to fadeSpeed
}

// Combine props with potential HTML canvas attributes
interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig;
}

const SpotlightCursor: React.FC<SpotlightCursorProps> = ({
  config = {} as SpotlightConfig,
  className = '',
  ...rest
}) => {
  // Map user props to hook config
  const spotlightConfig = {
    spotlightSize: config.spotlightSize || config.radius || 300,
    spotlightIntensity: config.spotlightIntensity || config.brightness || 0.15,
    glowColor: config.glowColor || config.color || '255, 255, 255',
    fadeSpeed: config.fadeSpeed || config.smoothing || 0.1,
    pulseSpeed: config.pulseSpeed || 3000,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default SpotlightCursor;