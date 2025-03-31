import React from 'react';
import Image from 'next/image';

interface LogoProps {
    width?: number;
    height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 160, height = 60 }) => {
    return (
        <div className="mb-8">
            <Image
                src="/logo.png"
                alt="ORCA Softwares"
                width={width}
                height={height}
                priority
                className="object-contain"
            />
        </div>
    );
};

export default Logo; 