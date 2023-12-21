'use client';
import { useAuthContext } from '@/context/AuthContext';
import React, { useState } from 'react';
import Button from '../UI/Button';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleclose = async () => {
    router.push('/');
  };
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 inset-0 z-10 flex justify-center items-center bg-neutral-900 p-2'>
      <form
        onSubmit={handleSubmit}
        className='bg-white py-4 px-6 rounded-xl max-w-xs w-full'
      >
        <header className='flex justify-between items-center'>
          <h2 className='font-semibold text-2xl'>Login</h2>
          <button
            type='button'
            onClick={handleclose}
            className='bg-neutral-950 text-neutral-50 rounded px-1 hover:bg-neutral-800'
          >
            ✖
          </button>
        </header>
        <input
          type='email'
          value={values.email}
          required
          placeholder='Tu email'
          className='p-2 rounded w-full border border-blue-100 block my-4'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          value={values.password}
          required
          placeholder='Tu password'
          className='p-2 rounded w-full border border-blue-100 block my-4'
          name='password'
          onChange={handleChange}
        />
        <div className='flex gap-4'>
          <Button onClick={() => loginUser(values)} className='w-full'>
            Ingresar
          </Button>
          <Button onClick={() => registerUser(values)} className='w-full'>
            Registrarme
          </Button>
        </div>
        <Button onClick={googleLogin} className='mt-2 w-full'>
          Ingresar con Google
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
