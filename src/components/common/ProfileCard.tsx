import React, { ReactNode } from 'react';

interface ProfileCardProps {
    title: string;
    children: ReactNode;
    onEdit?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, children, onEdit }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm mb-4 p-4">
            <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold text-gray-800">{title}</h2>
                {onEdit && (
                    <button onClick={onEdit} className="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                )}
            </div>
            <div className="text-sm space-y-2 text-gray-600">
                {children}
            </div>
        </div>
    );
};

export default ProfileCard; 