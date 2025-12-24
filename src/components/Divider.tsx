'use client';

import React, { useEffect, useRef } from 'react';

interface DividerProps {
    className?: string;
    index?: number;
    speed?: number;
}

const Divider: React.FC<DividerProps> = ({ className = '', index = 1, speed = 0.15 }) => {
    const formattedIndex = index.toString().padStart(2, '0');
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            if (!containerRef.current || !imgRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if element is roughly in view (with some buffer)
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
                // Calculate distance from center of viewport
                const centerY = windowHeight / 2;
                const elementCenterY = rect.top + rect.height / 2;
                const distFromCenter = elementCenterY - centerY;

                // Move image based on distance (parallax effect)
                // When element is below center (positive dist), move it down (positive offset) -> moves slower than scroll
                // When element is above center (negative dist), move it up (negative offset)
                const yOffset = distFromCenter * speed;

                imgRef.current.style.transform = `translateY(${yOffset}px)`;
            }
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll);

        // Initial positioning
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, [speed]);

    return (
        <div ref={containerRef} className={`w-full flex justify-center items-center py-4 ${className}`}>
            <img 
                ref={imgRef}
                src={`/dividers/art_${formattedIndex}.png`}
                alt="Section Divider" 
                className="w-full max-w-[500px] md:max-w-[900px] max-h-[350px] md:max-h-[550px] h-auto object-contain opacity-90 select-none will-change-transform"
            />
        </div>
    );
};

export default Divider;
