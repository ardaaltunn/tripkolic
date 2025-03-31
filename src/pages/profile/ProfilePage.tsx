'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PencilSquareIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import BankDetailsModal, { BankDetailsData } from '../../components/modals/BankDetailsModal';
import ContactDetailsModal, { ContactDetailsData } from '../../components/modals/ContactDetailsModal';
import SettingsModal, { SettingsData } from '../../components/modals/SettingsModal';

export default function ProfilePage() {
    const router = useRouter();
    const [isBankModalOpen, setIsBankModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    // Modal veri state'leri
    const [bankDetails, setBankDetails] = useState<BankDetailsData>({
        accountType: 'Bireysel',
        bankName: 'Kasikorn Bank',
        accountName: 'Hakan Kizilkaya',
        accountNumber: '3635636635',
    });

    const [contactDetails, setContactDetails] = useState<ContactDetailsData>({
        ownerName: 'Hakan Kizilkaya',
        phoneNumber: '+6687997755',
        officePhone1: '+66758575858',
        officePhone2: '+66857857858',
    });

    const [settings, setSettings] = useState<SettingsData>({
        password: '',
        email: 'Hakankizi@gmail.com',
    });

    const handleLogout = () => {
        // Logout işlemi
        router.push('/');
    };

    // Modal işleyicileri
    const openBankModal = () => setIsBankModalOpen(true);
    const closeBankModal = () => setIsBankModalOpen(false);
    const saveBankDetails = (data: BankDetailsData) => {
        setBankDetails(data);
        closeBankModal();
    };

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);
    const saveContactDetails = (data: ContactDetailsData) => {
        setContactDetails(data);
        closeContactModal();
    };

    const openSettingsModal = () => setIsSettingsModalOpen(true);
    const closeSettingsModal = () => setIsSettingsModalOpen(false);
    const saveSettings = (data: SettingsData) => {
        setSettings(data);
        closeSettingsModal();
    };

    return (
        <div className="pb-20">
            {/* Tab Bar */}
            <div className="border-b">
                <div className="flex items-center justify-between px-4">
                    <div className="flex items-center text-[#F4921D] font-medium border-b-2 border-[#F4921D] pb-2 pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        Profile
                    </div>
                    <div className="flex items-center text-gray-600 pb-2 pt-3 border-b-2 border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        Users
                    </div>
                    <div className="flex items-center text-gray-600 pb-2 pt-3 border-b-2 border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        Products
                    </div>
                    <div className="flex items-center text-gray-600 pb-2 pt-3 border-b-2 border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                        </svg>
                        Seller
                    </div>
                </div>
            </div>

            {/* Company Details */}
            <div className="p-4">
                <div className="border border-[#F4921D] rounded-lg overflow-hidden mb-4 shadow-md">
                    <div className="flex justify-between items-center p-3 bg-white">
                        <h2 className="font-medium text-gray-800">Company details</h2>
                    </div>
                    <div className="p-4 bg-white">
                        <div className="flex mb-4">
                            <div className="w-20 h-20 bg-gray-100 rounded-full mr-4 relative">
                                <div className="absolute bottom-0 right-0 ">
                                    <PencilSquareIcon className="h-5 w-5 text-black" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-y-2">
                                    <span className="text-sm text-gray-600">Operator ID :</span>
                                    <span className="text-sm">2324234234</span>

                                    <span className="text-sm text-gray-600">Company Number:</span>
                                    <span className="text-sm">453536565456</span>

                                    <span className="text-sm text-gray-600">Legal name:</span>
                                    <span className="text-sm">Kamil koç co.ltd</span>

                                    <span className="text-sm text-gray-600">TAT Number:</span>
                                    <span className="text-sm">23/4536536</span>

                                    <span className="text-sm text-gray-600">VAT number:</span>
                                    <span className="text-sm">34635363563635</span>

                                    <span className="text-sm text-gray-600">Address:</span>
                                    <span className="text-sm">atatürk bulvarı, 1234 sokak<br />ayden apartmanı no:23<br />gayrettepe istanbul</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bank Details */}
                <div className="border border-[#F4921D] rounded-lg overflow-hidden mb-4 shadow-md">
                    <div className="flex justify-between items-center p-3 bg-white">
                        <h2 className="font-medium text-gray-800">Bank Details</h2>
                        <button onClick={openBankModal} className="p-1 rounded-full hover:bg-gray-100">
                            <PencilSquareIcon className="h-7 w-7 text-black" />
                        </button>
                    </div>
                    <div className="p-4 bg-white">
                        <div className="grid grid-cols-2 gap-y-3">
                            <span className="text-sm text-gray-600">Account Type</span>
                            <span className="text-sm">{bankDetails.accountType}</span>

                            <span className="text-sm text-gray-600">Bank name:</span>
                            <span className="text-sm">{bankDetails.bankName}</span>

                            <span className="text-sm text-gray-600">Account Name:</span>
                            <span className="text-sm">{bankDetails.accountName}</span>

                            <span className="text-sm text-gray-600">Account Number</span>
                            <span className="text-sm">{bankDetails.accountNumber}</span>
                        </div>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="border border-[#F4921D] rounded-lg overflow-hidden mb-4 shadow-md">
                    <div className="flex justify-between items-center p-3 bg-white">
                        <h2 className="font-medium text-gray-800">Contact details</h2>
                        <button onClick={openContactModal} className="p-1 rounded-full hover:bg-gray-100">
                            <PencilSquareIcon className="h-7 w-7 text-black" />
                        </button>
                    </div>
                    <div className="p-4 bg-white">
                        <div className="grid grid-cols-2 gap-y-3">
                            <span className="text-sm text-gray-600">Company owner name</span>
                            <span className="text-sm">{contactDetails.ownerName}</span>

                            <span className="text-sm text-gray-600">Phone number</span>
                            <span className="text-sm">{contactDetails.phoneNumber}</span>

                            <span className="text-sm text-gray-600">Office phone number</span>
                            <span className="text-sm">{contactDetails.officePhone1}</span>

                            <span className="text-sm text-gray-600">Office phone number 2</span>
                            <span className="text-sm">{contactDetails.officePhone2}</span>
                        </div>
                    </div>
                </div>

                {/* Settings */}
                <div className="border border-[#F4921D] rounded-lg overflow-hidden mb-4 shadow-md">
                    <div className="flex justify-between items-center p-3 bg-white">
                        <h2 className="font-medium text-gray-800">Settings</h2>
                        <button onClick={openSettingsModal} className="p-1 rounded-full hover:bg-gray-100">
                            <PencilSquareIcon className="h-7 w-7 text-black" />
                        </button>
                    </div>
                    <div className="p-4 bg-white">
                        <div className="grid grid-cols-2 gap-y-3">
                            <span className="text-sm text-gray-600">Change password</span>
                            <span className="text-sm">{settings.password ? '•'.repeat(settings.password.length) : '•••••••••••••'}</span>

                            <span className="text-sm text-gray-600">Change mail</span>
                            <span className="text-sm">{settings.email}</span>
                        </div>
                    </div>
                </div>

                {/* Logout Button */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={handleLogout}
                        className="flex items-center bg-[#F4921D] text-white py-3 px-6 rounded-lg font-medium"
                    >
                        <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                        Log out
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border border-gray-200 rounded-t-xl shadow-lg flex justify-between px-2 py-3">
                <div className="flex flex-col items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-xs">Bookings</span>
                </div>
                <div className="flex flex-col items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs">Invoice</span>
                </div>
                <div className="flex flex-col items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="text-xs">Messages</span>
                </div>
                <div className="flex flex-col items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-xs">Report</span>
                </div>
                <div className="flex flex-col items-center text-[#F4921D]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">Profile</span>
                </div>
            </div>

            {/* Modals */}
            <BankDetailsModal
                isOpen={isBankModalOpen}
                onClose={closeBankModal}
                onSave={saveBankDetails}
            />

            <ContactDetailsModal
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
                onSave={saveContactDetails}
            />

            <SettingsModal
                isOpen={isSettingsModalOpen}
                onClose={closeSettingsModal}
                onSave={saveSettings}
            />
        </div>
    );
} 