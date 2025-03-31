'use client';

import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface BankDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: BankDetailsData) => void;
}

export interface BankDetailsData {
    accountType: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
}

export default function BankDetailsModal({ isOpen, onClose, onSave }: BankDetailsModalProps) {
    const [formData, setFormData] = useState<BankDetailsData>({
        accountType: 'Bireysel',
        bankName: 'Kasikorn Bank',
        accountName: 'Hakan Kizilkaya',
        accountNumber: '3635636635',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    const banks = [
        'Kasikorn Bank',
        'Bangkok Bank',
        'Siam Commercial Bank',
        'Krung Thai Bank',
        'Bank of Ayudhya',
        'TMB Bank',
        'CIMB Thai',
        'UOB Bank',
        'HSBC',
        'Citibank',
        'Standard Chartered',
        'Mizuho Bank',
        'Bank of China',
        'Deutsche Bank',
        'ICBC Bank'
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl transform transition-all animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Edit Bank Details</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <XMarkIcon className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Account Type
                        </label>
                        <select
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4921D] focus:border-[#F4921D]"
                        >
                            <option value="Bireysel">Bireysel</option>
                            <option value="Şirket">Şirket</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Bank Name
                        </label>
                        <select
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4921D] focus:border-[#F4921D]"
                        >
                            {banks.map((bank, index) => (
                                <option key={index} value={bank}>{bank}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Account Name
                        </label>
                        <input
                            type="text"
                            name="accountName"
                            value={formData.accountName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4921D] focus:border-[#F4921D]"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Account Number
                        </label>
                        <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            maxLength={10}
                            pattern="[0-9]{10}"
                            title="Account number must be 10 digits"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4921D] focus:border-[#F4921D]"
                        />
                        <p className="mt-1 text-xs text-gray-500">Account number must be 10 digits</p>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-[#F4921D] border border-transparent rounded-md shadow-sm hover:bg-[#e38012] focus:outline-none focus:ring-2 focus:ring-[#F4921D]"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 