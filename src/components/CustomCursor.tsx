import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'BUTTON' ||
                         target.tagName === 'A' ||
                         target.closest('button') !== null ||
                         target.closest('a') !== null ||
                         window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isClickable);

      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-8);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full bg-purple-400/20"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${8 - index}px`,
            height: `${8 - index}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.5,
            transition: 'opacity 0.3s ease-out'
          }}
        />
      ))}

      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-200 ${
            isPointer
              ? 'w-12 h-12 border-purple-400 bg-purple-400/10'
              : 'w-8 h-8 border-white'
          }`}
        />
      </div>

      <div
        className="fixed pointer-events-none z-50 w-1.5 h-1.5 bg-purple-400 rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
