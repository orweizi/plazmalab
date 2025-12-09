import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHAPES = ['circle', 'line', 'rect', 'triangle'];
const COLORS = ['text-plazma-accent', 'text-plazma-glow', 'text-white'];

const GeometricFlash = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Randomly spawn elements every few seconds
        const spawnInterval = setInterval(() => {
            if (Math.random() > 0.3) return; // 30% chance to spawn per tick

            const id = Date.now();
            const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            // Random position (keeping away from edges slightly)
            const x = Math.random() * 80 + 10; // 10% to 90%
            const y = Math.random() * 80 + 10;

            const newElement = { id, shape, color, x, y };

            setElements(prev => [...prev, newElement]);

            // Remove element after duration matching the animation
            setTimeout(() => {
                setElements(prev => prev.filter(el => el.id !== id));
            }, 2000);

        }, 2000); // Check every 2 seconds

        return () => clearInterval(spawnInterval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <AnimatePresence>
                {elements.map(el => (
                    <GeometricElement key={el.id} {...el} />
                ))}
            </AnimatePresence>
        </div>
    );
};

const GeometricElement = ({ shape, color, x, y }) => {
    // Generate random size
    const size = Math.random() * 100 + 50;
    const strokeWidth = Math.random() * 2 + 1;

    // Common props
    const style = {
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)'
    };

    const variants = {
        initial: { opacity: 0, scale: 0.5, pathLength: 0 },
        animate: { opacity: 0.6, scale: 1, pathLength: 1 },
        exit: { opacity: 0, scale: 1.2 }
    };

    const transition = { duration: 0.8, ease: "easeInOut" };

    return (
        <div className={`${color} opacity-50`} style={style}>
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="w-full h-full overflow-visible">
                {shape === 'circle' && (
                    <motion.circle
                        cx="50" cy="50" r="40"
                        variants={variants} initial="initial" animate="animate" exit="exit" transition={transition}
                    />
                )}
                {shape === 'line' && (
                    <motion.line
                        x1="0" y1="50" x2="100" y2="50"
                        variants={variants} initial="initial" animate="animate" exit="exit" transition={transition}
                        style={{ transformOrigin: 'center', transform: `rotate(${Math.random() * 360}deg)` }}
                    />
                )}
                {shape === 'rect' && (
                    <motion.rect
                        x="10" y="10" width="80" height="80"
                        variants={variants} initial="initial" animate="animate" exit="exit" transition={transition}
                    />
                )}
                {shape === 'triangle' && (
                    <motion.path
                        d="M50 10 L90 90 L10 90 Z"
                        variants={variants} initial="initial" animate="animate" exit="exit" transition={transition}
                        style={{ transformOrigin: 'center', transform: `rotate(${Math.random() * 360}deg)` }}
                    />
                )}
                {/* Decorative plus signs near the shape */}
                <motion.path
                    d="M-10 -10 L-5 -10 M-7.5 -12.5 L-7.5 -7.5"
                    strokeWidth="1"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                />
            </svg>
        </div>
    );
};

export default GeometricFlash;
