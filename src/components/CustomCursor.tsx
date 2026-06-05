import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<'default' | 'hover' | 'text' | 'drag'>('default');

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Inner dot — snappy, follows instantly
  const dotX = useSpring(mouseX, { stiffness: 2500, damping: 100 });
  const dotY = useSpring(mouseY, { stiffness: 2500, damping: 100 });

  // Outer ring — lags for trail feel
  const ringX = useSpring(mouseX, { stiffness: 160, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 160, damping: 22 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!el) { setState('default'); return; }

      if (el.closest('button, a, [data-cursor="hover"], [role="button"]')) {
        setState('hover');
      } else if (el.closest('input, textarea, [data-cursor="text"]')) {
        setState('text');
      } else if (el.closest('img, [data-cursor="drag"]')) {
        setState('drag');
      } else {
        setState('default');
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => {
      document.documentElement.style.setProperty('--cursor-scale', '0.85');
    };
    const onUp = () => {
      document.documentElement.style.setProperty('--cursor-scale', '1');
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [visible, mouseX, mouseY]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const ringSize = state === 'hover' ? 56 : state === 'text' ? 24 : state === 'drag' ? 64 : 38;
  const dotScale = state === 'hover' ? 0 : state === 'text' ? 3.5 : 1;
  const ringOpacity = visible ? (state === 'text' ? 0.25 : 0.55) : 0;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 99998,
          borderRadius: '50%',
          border: '1.5px solid hsl(24 8% 14%)',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: ringOpacity,
          scale: state === 'hover' ? 1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      />

      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'hsl(24 8% 14%)',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
        animate={{
          scale: dotScale,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 35 }}
      />

      {/* Hover label for drag state */}
      {state === 'drag' && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
            pointerEvents: 'none',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.5rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'hsl(24 8% 14%)',
          }}>
            View
          </span>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
