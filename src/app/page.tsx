'use client';

import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import Logo from '../components/common/Logo';
import LoginForm from '../pages/login/LoginForm';
import RegisterOptions from '../components/auth/RegisterOptions';

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
