import React from 'react';

const paths = {
    1: "M10,50 Q50,40 80,50 T150,50 T200,60 T250,50 T300,55 L310,60 Q280,70 200,65 T100,70 T10,60 Z",
    2: "M20,20 Q60,10 100,20 T180,20 T260,15 T340,20 Q350,30 300,35 T200,40 T100,35 T20,30 Z",
    3: "M50,10 Q60,40 50,80 T45,150 T55,220 Q40,230 30,200 T35,100 T40,20 Z"
};

// More complex/grunge paths could be added or imported from assets.
// These are placeholders for "inky" shapes. A real implementation might use an image mask or complex path.

const BrushStroke = ({
    variant = 1,
    className = "",
    color = "fill-plazma-accent",
    style = {}
}) => {
    // Simple "grunge" paths - in a real app these would be detailed SVG paths
    const d = paths[variant] || paths[1];

    return (
        <svg
            viewBox="0 0 350 100"
            className={`absolute pointer-events-none -z-10 ${className}`}
            style={style}
            preserveAspectRatio="none"
        >
            <path
                d={d}
                className={color}
                fill="currentColor"
            />
        </svg>
    );
};

export default BrushStroke;
