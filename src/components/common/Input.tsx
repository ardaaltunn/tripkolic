import React, { forwardRef } from 'react';

type InputProps = {
    icon?: React.ReactNode;
    type?: string;
    placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ icon, type = 'text', placeholder, className, ...props }, ref) => {
        return (
            <div className="relative w-full mb-4">
                {icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    type={type}
                    className={`w-full h-11 px-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 shadow-md ${icon ? 'pl-10' : ''
                        } focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-200 ${className || ''}`}
                    placeholder={placeholder}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input; 