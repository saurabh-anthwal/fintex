"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useMutation } from '@tanstack/react-query';
import AuthService from '@/services/authServices';
import {useRouter} from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '@/redux/actions/userActions';
import { FaSpinner } from 'react-icons/fa'; 

// Login Interface type for form values
interface LoginFormValue {
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<LoginFormValue>({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); 
  const router = useRouter()
  // Login mutation using react-query
  const {
    mutate: login, 
    isPending: loginPending, 
    isError: loginErrorMessage, 
    error: ErrorMessage,
  } = useMutation({
    mutationFn: AuthService.login, 
    onSuccess: (data:any) => {
      dispatch(setToken(data.access_token));
      router.push("/spy/chart")
    },
  });

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: formData,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      login(values)
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    formik.handleChange(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Welcome Back</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={formik.handleBlur} // Track when the user leaves the input
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'focus:ring-2 focus:ring-green-500'
              }`}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <div className='relative'>
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={formik.handleBlur} // Track when the user leaves the input
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'focus:ring-2 focus:ring-green-500'
              }`}
              required
            />
            {/* Toggle icon for password visibility */}
            <div
              className="absolute inset-y-0 right-3 top-5 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <MdVisibilityOff className="text-gray-600 h-5" />
              ) : (
                <MdVisibility className="text-gray-600 h-5" />
              )}
            </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          {/* Show error message if login fails */}
          {loginErrorMessage && (
              <p className="text-red-500 text-center mb-4">
              {ErrorMessage && (ErrorMessage as any)?.response?.data?.detail
                ? (ErrorMessage as any).response.data.detail
                : 'An error occurred. Please try again.'}
              </p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
            disabled={loginPending}
          >
            Login
            {loginPending && (
              <FaSpinner className="animate-spin mr-2" />
            )}
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Don’t have an account?{' '}
          <Link href="/auth/register" className="text-green-500 hover:underline">
            Register
          </Link>
        </p>

        <p className="text-gray-600 text-center mt-4">
          <Link href="/auth/forgotPassword" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}
