import logo from '../assets/logo.png';
import { useState } from 'react';

function SpinabotLogo({ size = 64, style = {} }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <img
            src={logo}
            alt="Spinabot Logo"
            width={size}
            height={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                objectFit: 'contain',
                transition: 'transform 0.2s linear',
                transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
                cursor: 'pointer',
                ...style
            }}
            onError={(e) => {
                e.target.style.display = 'none'; // Hide if image not found
            }}
        />
    );
}

export default SpinabotLogo;
