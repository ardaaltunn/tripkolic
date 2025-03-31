import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    variant = 'primary',
    children,
    className = '',
    disabled = false,
    ...props
}: ButtonProps) {
    const baseStyles = "h-11 px-4 font-medium rounded-md transition-colors";

    const variantStyles = {
        primary: "bg-[#F4921D] hover:bg-[#e08315] text-white",
        secondary: "bg-[#4AAEE5] hover:bg-[#3d9ed5] text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
} 