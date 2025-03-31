import React from 'react';
import Button from '../common/Button';

export default function RegisterOptions() {
    // Function to show an alert when user tries to register
    const handleRegisterClick = () => {
        alert('Bu özellik henüz yapım aşamasındadır.');
    };

    return (
        <div className="w-full text-center bg-white rounded-t-3xl p-4 pt-6 lg:pt-4 mt-8 shadow-lg fixed bottom-0 left-0 right-0 border-t-2 border-gray-200 lg:w-[380px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:bottom-32">
            <p className="text-[#F4921D] text-[16px] mb-3 font-medium mt-2 lg:mt-0">Register as</p>
            <div className="flex space-x-6 justify-center">
                <Button
                    variant="secondary"
                    className="w-32"
                    onClick={handleRegisterClick}
                    disabled={true}
                >
                    Operator
                </Button>
                <Button
                    variant="secondary"
                    className="w-32"
                    onClick={handleRegisterClick}
                    disabled={true}
                >
                    Seller
                </Button>
            </div>
        </div>
    );
} 