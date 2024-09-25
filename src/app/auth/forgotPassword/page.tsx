"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define the props type for OTPComponent
interface OTPComponentProps {
  onSubmit: (otp: string) => void;
}

// OTP Component
function OTPComponent({ onSubmit }: OTPComponentProps) {
  const formik = useFormik({
    initialValues: { otp: '' },
    validationSchema: Yup.object({
      otp: Yup.string().required('OTP is required'),
    }),
    onSubmit: (values) => {
      onSubmit(values.otp);
    },
  });

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Enter OTP</h2>
      
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">OTP</label>
          <input
            type="text"
            name="otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              formik.touched.otp && formik.errors.otp ? 'border-red-500' : 'focus:ring-blue-500'
            }`}
            required
          />
          {formik.touched.otp && formik.errors.otp ? (
            <p className="text-red-500 text-sm">{typeof formik.errors.otp === 'string' ? formik.errors.otp : 'Invalid OTP'}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
}

// Forgot Password Component
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [showOTP, setShowOTP] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate OTP sending
    setTimeout(() => {
      setIsSubmitting(false);
      setShowOTP(true); // Show OTP component after sending email
      setStatus('OTP sent to your email');
    }, 2000);
  };

  const handleOTPSubmit = (otp: string) => {
    // Handle OTP validation here
    setStatus('OTP verified successfully');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Forgot Your Password?</h2>

        <p className="text-gray-600 mb-6 text-center">
          Enter your email address below and we'll send you a link to reset your password.
        </p>

        {!showOTP ? (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? 'bg-gray-500' : 'bg-blue-500'} text-white py-2 rounded-md hover:bg-blue-600 transition-colors`}
            >
              {isSubmitting ? 'Sending...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          <OTPComponent onSubmit={handleOTPSubmit} />
        )}

        {status && (
          <p className={`mt-4 text-center ${status.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
            {status}
          </p>
        )}

        <p className="text-gray-600 text-center mt-6">
          Remembered your password?{' '}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
