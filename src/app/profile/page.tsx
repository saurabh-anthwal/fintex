"use client"
import withAuth from '@/hoc/withAuth';
import { clearToken } from '@/redux/actions/userActions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();

  const logoutUser = ()=>{
    localStorage.removeItem('access_token')
    dispatch(clearToken());
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-center justify-between border border-gray-200">
        <div className="flex items-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            src="https://via.placeholder.com/150" // Replace with actual user image URL
            alt="User Profile"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">johndoe@example.com</p>
            <p className="text-gray-600">+1 (234) 567-8901</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
          Edit Profile
        </button>
      </div>

      {/* User Information */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700"><strong>Username:</strong> johndoe</p>
            <p className="text-gray-700"><strong>Account Type:</strong> Premium</p>
            <p className="text-gray-700"><strong>Joined:</strong> January 2021</p>
          </div>
          <div>
            <p className="text-gray-700"><strong>Subscription:</strong> Active</p>
            <p className="text-gray-700"><strong>2FA Enabled:</strong> Yes</p>
            <p className="text-gray-700"><strong>Notifications:</strong> Enabled</p>
          </div>
        </div>
      </div>

      {/* Stock Settings */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Stock Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700"><strong>Preferred Stocks:</strong> AAPL, TSLA, AMZN</p>
            <p className="text-gray-700"><strong>Favorite Markets:</strong> NASDAQ, NYSE</p>
          </div>
          <div>
            <p className="text-gray-700"><strong>Watchlist:</strong> 5 items</p>
            <p className="text-gray-700"><strong>Portfolio Value:</strong> $50,000</p>
          </div>
        </div>
      </div>

      {/* Wallet Information */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Wallet & Security</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700"><strong>Wallet Balance:</strong> $12,500</p>
            <p className="text-gray-700"><strong>Pending Transactions:</strong> 2</p>
          </div>
          <div>
            <p className="text-gray-700"><strong>Recent Deposits:</strong> $2,000</p>
            <p className="text-gray-700"><strong>Recent Withdrawals:</strong> $1,000</p>
          </div>
        </div>
      </div>

      {/* Stock Icons */}
      <div className="flex justify-around mt-6">
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white p-4 rounded-full mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m-1-4h2a2 2 0 011 3.732A2 2 0 0110 11H8m8 6h-1v-4h-1m-1-4h2a2 2 0 011 3.732A2 2 0 0114 11h-2"></path></svg>
          </div>
          <p className="text-sm text-gray-600">Wallet</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white p-4 rounded-full mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <p className="text-sm text-gray-600">Stock Charts</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white p-4 rounded-full mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3 0V9m0 3v3m-4 4h8v-6a2 2 0 00-2-2h-4a2 2 0 00-2 2v6z"></path></svg>
          </div>
          <p className="text-sm text-gray-600">Settings</p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-8">
        <button onClick={logoutUser} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default withAuth(Profile);
