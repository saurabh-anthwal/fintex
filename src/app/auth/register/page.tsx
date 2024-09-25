"use client";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useMutation } from "@tanstack/react-query";
import AuthService from '@/services/authServices';
import { useRouter } from 'next/navigation'
import { FaSpinner } from 'react-icons/fa'; 

// Register Interface type for form values
interface RegisterFormValue {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter()
  // Register mutation using react-query
  const {
    mutate: registerUser, 
    isPending: registerPending, 
    isError: registerError,
    error: registerErrorMessage, // Capture error message
  } = useMutation({
    mutationFn: AuthService.register, 
    onSuccess: (data: any) => {
      router.push("/auth/login"); // Redirect to login page on success
    },
    onError: (error: any) => {
      // Optional: Log the error or handle custom logic
      console.error("Registration failed", error);
    },
  });

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Initialize Formik
  const formik = useFormik<RegisterFormValue>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const payload ={
        "username": values.username,
        "email" : values.email,
        "password": values.password,
        "first_name": null,
        "last_name": null
    }
      registerUser(payload);
    },
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Your Account</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.username && formik.errors.username
                  ? 'border-red-500'
                  : 'focus:ring-blue-500'
              }`}
              required
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'focus:ring-blue-500'
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
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'focus:ring-blue-500'
              }`}
              required
            />
            <div
              className="absolute inset-y-0 right-3 top-5 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <MdVisibilityOff className="text-gray-600" />
              ) : (
                <MdVisibility className="text-gray-600" />
              )}
            </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <div className='relative'>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'border-red-500'
                  : 'focus:ring-blue-500'
              }`}
              required
            />
            <div
              className="absolute inset-y-0 right-3 top-5 flex items-center cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <MdVisibilityOff className="text-gray-600" />
              ) : (
                <MdVisibility className="text-gray-600" />
              )}
            </div>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
            ) : null}
          </div>

          {/* Show error message if registration fails */}
          {registerError && (
            <p className="text-red-500 text-center mb-4">
              {registerErrorMessage?.detail}
            </p>
          )}
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            disabled={registerPending}
          >
            Register
             {registerPending && (
              <FaSpinner className="animate-spin mr-2" />
            )}
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
