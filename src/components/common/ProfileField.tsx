import React from 'react';

interface ProfileFieldProps {
    label: string;
    value: string;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value }) => {
    return (
        <div className="flex justify-between">
            <span>{label}:</span>
            <span className="font-medium text-gray-800">{value}</span>
        </div>
    );
};

export default ProfileField; 