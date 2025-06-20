import React, { useEffect, useRef } from 'react';

import { useReducedMotion } from '../../utils/useReducedMotion';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface ParticlesProps {
  className?: string;
}

const Particles: React.FC<ParticlesProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(window.innerWidth, window.innerHeight) / 10;

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          color: `rgba(${Math.floor(Math.random() * 50 + 100)}, ${Math.floor(Math.random() * 50 + 100)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
          speedX: prefersReducedMotion ? 0 : Math.random() * 0.5 - 0.25,
          speedY: prefersReducedMotion ? 0 : Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Move particles only if reduced motion is not preferred
        if (!prefersReducedMotion) {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Wrap particles around canvas
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Connect particles with lines
      connectParticles();

      // Only animate if reduced motion is not preferred
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(drawParticles);
      }
    };

    const connectParticles = () => {
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.1 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    resizeCanvas();
    createParticles();

    // Draw once for reduced motion, or start animation loop for normal motion
    if (prefersReducedMotion) {
      drawParticles();
    } else {
      drawParticles();
    }

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
      if (prefersReducedMotion) {
        drawParticles();
      }
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [prefersReducedMotion]);

  // Don't render particles at all if reduced motion is preferred
  if (prefersReducedMotion) {
    return null;
  }

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-10 ${className}`} />;
};

export default Particles;
