'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import AuthLayout from '../components/layout/AuthLayout';
import Logo from '../components/common/Logo';
import RegisterOptions from '../components/auth/RegisterOptions';

// LoginForm dinamik olarak yükleniyor, server-side rendering devre dışı
const LoginForm = dynamic(() => import('../pages/login/LoginForm'), {
  ssr: false,
  loading: () => <div className="w-full p-4 text-center">Loading login form...</div>
});

export default function Home() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center pb-32">
        <div className="mb-8">
          <Logo width={180} height={60} />
        </div>
        <LoginForm />
        <RegisterOptions />
      </div>
    </AuthLayout>
  );
}
