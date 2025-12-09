import React from 'react';

const OrganicWrapper = ({ children, className = '', intensity = 'low', as: Component = 'div', ...props }) => {
    // Intensity determines the rotation amount
    const rotation = intensity === 'high' ? 'rotate-2' : intensity === 'medium' ? 'rotate-1' : 'rotate-[0.5deg]';

    const clipPath = React.useMemo(() => {
        const generateEdge = (axis, start, end, steps = 1) => {
            let points = [];
            for (let i = 1; i <= steps; i++) {
                const pos = start + (end - start) * (i / (steps + 1));
                // Add jitter
                const jitter = (Math.random() - 0.5) * 2; // -1 to 1%
                if (axis === 'x') {
                    points.push(`${pos}% ${jitter}%`); // Top edge variation
                } else if (axis === 'y_right') {
                    points.push(`${100 + jitter}% ${pos}%`);
                } else if (axis === 'x_bottom') {
                    points.push(`${pos}% ${100 + jitter}%`);
                } else {
                    points.push(`${jitter}% ${pos}%`);
                }
            }
            return points;
        }

        // Corner Chops (random size between 2% and 8%)
        const c1 = 2 + Math.random() * 6; // TL x
        const c2 = 2 + Math.random() * 6; // TL y
        const c3 = 2 + Math.random() * 6; // TR x
        const c4 = 2 + Math.random() * 6; // TR y
        const c5 = 2 + Math.random() * 6; // BR x
        const c6 = 2 + Math.random() * 6; // BR y
        const c7 = 2 + Math.random() * 6; // BL x
        const c8 = 2 + Math.random() * 6; // BL y

        // Build Polygon
        // TL -> TR
        let poly = [`${0 + c1}% 0`, `${100 - c3}% 0`];

        // TR -> BR
        poly.push(`${100}% ${0 + c4}%`, `${100}% ${100 - c6}%`);

        // BR -> BL
        poly.push(`${100 - c5}% 100%`, `${0 + c7}% 100%`);

        // BL -> TL
        poly.push(`${0}% ${100 - c8}%`, `${0}% ${0 + c2}%`);

        return `polygon(${poly.join(', ')})`;
    }, []);

    return (
        <Component
            className={`transition-transform duration-500 hover:rotate-0 ${rotation} hover:scale-[1.01] ${className}`}
            style={{ clipPath }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default OrganicWrapper;
