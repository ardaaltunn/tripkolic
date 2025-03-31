import React, { ReactNode } from 'react';

interface ProfileLayoutProps {
    header: ReactNode;
    footer: ReactNode;
    children: ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ header, footer, children }) => {
    return (
        <main className="flex min-h-screen flex-col bg-gray-100">
            {header}

            <div className="flex-1 p-4 pt-20 pb-20">
                {children}
            </div>

            {footer}
        </main>
    );
};

export default ProfileLayout; 