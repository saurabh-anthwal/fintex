"use client"
import withAuth from '@/hoc/withAuth';
import React from 'react';
import { FaDollarSign, FaChartLine, FaArrowUp, FaArrowDown, FaWallet } from 'react-icons/fa';

const StockOrderComponent = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Asset Liability Management</h2>

    <div className="grid grid-cols-2 gap-6">
      {/* Open Positions (Unrealized PnL) */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-700">Open Positions (Unrealized PnL)</h3>
          <FaChartLine className="text-blue-600 text-2xl" />
        </div>
        <div className="grid gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg">Trade 1</h4>
            <p>Contract: <span className="font-bold">XYZ</span></p>
            <p>Unrealized PnL: <span className="text-green-600 font-bold">$500 <FaArrowUp className="inline" /></span></p>
            <p>Position Size: 100 Contracts</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg">Trade 2</h4>
            <p>Contract: <span className="font-bold">ABC</span></p>
            <p>Unrealized PnL: <span className="text-green-600 font-bold">$200 <FaArrowUp className="inline" /></span></p>
            <p>Position Size: 50 Contracts</p>
          </div>
        </div>
      </div>

      {/* Closed Positions (Realized PnL) */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-700">Closed Positions (Realized PnL)</h3>
          <FaArrowDown className="text-red-600 text-2xl" />
        </div>
        <div className="grid gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg">Trade 1</h4>
            <p>Contract: <span className="font-bold">DEF</span></p>
            <p>Realized PnL: <span className="text-green-600 font-bold">$1000</span></p>
            <p>Position Size: 150 Contracts</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg">Trade 2</h4>
            <p>Contract: <span className="font-bold">GHI</span></p>
            <p>Realized PnL: <span className="text-green-600 font-bold">$750</span></p>
            <p>Position Size: 80 Contracts</p>
          </div>
        </div>
      </div>
    </div>

      {/* Margin Analytics */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-700">Margin Analytics</h3>
          <FaDollarSign className="text-green-500 text-2xl" />
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <p>Margin Available: <span className="font-bold">$50,000</span></p>
            <p>Margin Used: <span className="font-bold">$30,000</span></p>
          </div>
          <div className="mt-4">
            <p className="mb-2">Margin Left: <span className="font-bold">$20,000</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <p>Contracts Available for Sale: <span className="font-bold">25</span></p>
          </div>
        </div>
      </div>

      {/* Withdrawal Analytics */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-700">Withdrawal Analytics</h3>
          <FaWallet className="text-orange-500 text-2xl" />
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <p>Cash Position: <span className="font-bold">$10,000</span></p>
          <p className="mt-2">Suggested Withdrawal Amount: <span className="font-bold">$2,000</span></p>
        </div>
      </div>
    </div>
  );
};

export default withAuth(StockOrderComponent);
