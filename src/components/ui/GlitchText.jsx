import React from 'react';

const GlitchText = ({ text, as: Component = 'span', className = '', ...props }) => {
    return (
        <Component
            className={`relative inline-block group ${className}`}
            {...props}
        >
            <span className="relative z-10">{text}</span>
            <span
                aria-hidden="true"
                className="absolute top-0 left-0 -z-10 w-full h-full text-plazma-accent opacity-0 group-hover:opacity-100 group-hover:animate-glitch select-none"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)', transform: 'translate(-2px)' }}
            >
                {text}
            </span>
            <span
                aria-hidden="true"
                className="absolute top-0 left-0 -z-10 w-full h-full text-plazma-glow opacity-0 group-hover:opacity-100 group-hover:animate-glitch select-none delay-75"
                style={{ clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)', transform: 'translate(2px)' }}
            >
                {text}
            </span>
        </Component>
    );
};

export default GlitchText;
