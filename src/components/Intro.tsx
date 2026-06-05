import { useState, useEffect } from 'react';

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'exit'>('loading');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Count up from 0 to 100
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('reveal');
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === 'reveal') {
      const t = setTimeout(() => {
        setPhase('exit');
        setTimeout(onComplete, 900);
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'hsl(24 8% 10%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: phase === 'exit' ? 0 : 1,
        transform: phase === 'exit' ? 'translateY(-8px)' : 'translateY(0)',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Background texture line */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.06 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              height: '1px',
              background: 'hsl(36 20% 90%)',
              width: '100%',
              top: `${(i + 1) * 8.33}%`,
            }}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center', position: 'relative' }}>
        {/* Counter */}
        <div
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            color: 'hsl(36 20% 97%)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            opacity: phase === 'reveal' ? 0.15 : 1,
            transition: 'opacity 0.6s ease',
            userSelect: 'none',
          }}
        >
          {counter.toString().padStart(2, '0')}
        </div>

        {/* Name reveal */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: phase === 'reveal' ? 1 : 0,
            transform: phase === 'reveal' ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              color: 'hsl(36 20% 97%)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Adhya Sharma
          </div>
          <div
            style={{
              marginTop: '16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'hsl(36 20% 70%)',
            }}
          >
            - Portfolio —
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            height: '1px',
            background: 'hsl(36 20% 40%)',
            width: `${counter * 1.5}px`,
            maxWidth: '120px',
            transition: 'width 0.1s linear',
          }}
        />
        <button
          onClick={() => { setPhase('exit'); setTimeout(onComplete, 900); }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'hsl(36 20% 50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 0',
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default Intro;
