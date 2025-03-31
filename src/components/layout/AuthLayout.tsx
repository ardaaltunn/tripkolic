import React, { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-[#ededed] flex items-center justify-center">
            {/* Remove gradient background and decorative elements */}
            {/* Use a simple light gray background (e.g., bg-gray-50 or bg-gray-100) */}
            {/* Ensure children are centered */}
            <div className="w-full max-w-md px-4 py-6">
                {children}
            </div>
        </div>
    );
} 