'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { UserIcon } from '@heroicons/react/24/solid';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

export default function LoginForm() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await axios.post('https://api.tripkolic.com/api/v1/task/login', {
                userId,
                password
            });

            if (response.data && response.data.status) {
                setSuccess(true);

                if (login) {
                    await login(userId, password);
                }

                setTimeout(() => {
                    router.push('/profile');
                }, 1500);
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold text-center mb-6 text-[#F4921D]">LOG IN</h1>

            {error && (
                <div className="mb-4 p-3 text-red-600 bg-red-50 border border-red-200 rounded-md">
                    {error}
                </div>
            )}

            {success && (
                <div className="mb-4 p-3 text-green-600 bg-green-50 border border-green-200 rounded-md">
                    Login successful! Redirecting to profile...
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <Input
                    icon={<UserIcon className="h-5 w-5 text-gray-500" />}
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />

                <Input
                    icon={<LockClosedIcon className="h-5 w-5 text-gray-500" />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <div className="flex justify-start mb-8 mt-6">
                    <a href="#" className="text-sm text-gray-900 hover:text-gray-600 underline font-bold ml-2">
                        Forgot Password
                    </a>
                </div>

                <Button variant="primary" type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Log In'}
                </Button>
            </form>
        </div>
    );
} 