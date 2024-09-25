"use client";
import withAuth from "@/hoc/withAuth";
import React, { useState,useEffect } from "react";
import Speedometer from "react-d3-speedometer";
import "./Dashboard.css";

const Dashboard = () => {
  const [spyData, setSpyData] = useState({
    calls: {
      contract: "460",
      limitPrice: 1.0,
      volume: 20,
      stopLoss: 2.0,
    },
    puts: {
      contract: "SPY",
      limitPrice: 1.0,
      volume: 20,
      stopLoss: 2.0,
    },
  });
  const [vix, setVix] = useState(19.5);
  const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-yellow-400">Dashboard</h1>
        <div className="flex flex-col items-end">
          <span className="text-lg font-semibold">{currentTime.toLocaleTimeString()}</span> {/* Dynamic time */}
          <span className="text-yellow-400 text-sm">87.5% Exposure</span>
        </div>
      </header>

    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-6">
      
      {/* Middle Section (Calls and Puts side by side) */}
      <div className="w-full gap-5 mb-6">
        {/* Calls */}
        <div className="p-6 rounded-lg shadow-md mb-5">
          <h2 className="text-xl font-semibold mb-4">Calls</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Contract SPY</span>
              <span>{spyData.calls.contract}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Limit Price</span>
              <span>${spyData.calls.limitPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Volume</span>
              <span>{spyData.calls.volume} Contracts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Stop-loss</span>
              <span>{spyData.calls.stopLoss}</span>
            </div>
          </div>
          {/* Buttons Section */}
          <div className="w-full flex justify-around"> 
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300">
            Execute Call
            </button>
          </div>
        </div>

        {/* Puts */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Puts</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Contract:</span>
              <span>{spyData.puts.contract}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Limit Price:</span>
              <span>${spyData.puts.limitPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Volume:</span>
              <span>{spyData.puts.volume} Contracts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Stop-loss:</span>
              <span>{spyData.puts.stopLoss}</span>
            </div>
          </div>
          {/* Buttons Section */}
          <div className="w-full flex justify-around">  
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300">
              Execute Put
            </button>
          </div>
        </div>
      </div>
        

        <div className="px-5">
            {/* Floating Action Button Group */}
            <div className="flex items-center justify-between gap-5 p-5 rounded-lg shadow-md mb-5">
              <button className="bg-gray-700 hover:bg-gray-600 text-yellow-400 w-12 h-12 rounded-full shadow-lg transition duration-300">
                P
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-yellow-400 w-12 h-12 rounded-full shadow-lg transition duration-300">
                N
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-yellow-400 w-12 h-12 rounded-full shadow-lg transition duration-300">
                D
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-yellow-400 w-12 h-12 rounded-full shadow-lg transition duration-300">
                R
              </button>
            </div>

            {/* Speedometer Section */}
            <div className="w-full flex justify-around mt-10">
                <div className="mt-4 text-yellow-400 font-bold text-xl">
                  VIX: {vix} +- X%
                </div>
                <Speedometer
                  height={200}
                  value={vix}
                  minValue={10}
                  maxValue={60}
                  segments={5}  // Adjust to 6 segments
                  maxSegmentLabels={5}
                  needleColor="#000"
                  ringWidth={10}
                  segmentColors={[
                    vix < 20 ? 'red' : 'lightgray',
                    vix >= 20 && vix < 30 ? 'yellow' : 'lightgray',
                    vix >= 30 && vix < 40 ? 'orange' : 'lightgray',
                    vix >= 40 && vix < 50 ? 'lightgreen' : 'lightgray',
                    vix >= 50 && vix <= 60 ? 'green' : 'lightgray',
                    'lightgray',
                  ]}
                />
            </div>
            <div className="text-center mb-5">
              <h3 className="text-lg font-semibold">Moving Averages</h3>
            </div>
        </div>

    </div>

    </div>
  );
};

export default withAuth(Dashboard);
