import React from 'react';
import Image from 'next/image';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    initial?: string;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'User Avatar',
    size = 40,
    initial = 'U',
    className = '',
}) => {
    if (src) {
        return (
            <div className={`rounded-full overflow-hidden ${className}`} style={{ width: size, height: size }}>
                <Image
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="object-cover"
                />
            </div>
        );
    }

    return (
        <div
            className={`avatar-placeholder flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <span>{initial}</span>
        </div>
    );
};

export default Avatar; 