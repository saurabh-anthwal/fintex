// "use client";
// import React, { useEffect, useState } from "react";
// import { FaChartLine, FaClock, FaTools } from "react-icons/fa";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// // chartTimeFrame
// const chartTimeFrame = [
//   "1-min",
//   "2-min",
//   "3-min",
//   "5-min",
//   "15-min",
//   "30-min",
//   "1-hour",
//   "4-hour",
//   "1-day",
//   "1-week",
//   "1-month",
// ]

// const ChartComponent = () => {
//   const [movingAverageEnabled, setMovingAverageEnabled] = useState(false);

//   useEffect(() => {
//     let root = am5.Root.new("chartdiv");

//     const myTheme = am5.Theme.new(root);

//     myTheme.rule("Grid", ["scrollbar", "minor"]).setAll({
//       visible: false,
//     });

//     root.setThemes([am5themes_Animated.new(root), myTheme]);

//     function generateChartData() {
//       let chartData = [];
//       let firstDate = new Date();
//       firstDate.setDate(firstDate.getDate() - 2000);
//       firstDate.setHours(0, 0, 0, 0);
//       let value = 1200;
//       for (var i = 0; i < 2000; i++) {
//         let newDate = new Date(firstDate);
//         newDate.setDate(newDate.getDate() + i);

//         value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
//         let open = value + Math.round(Math.random() * 16 - 8);
//         let low = Math.min(value, open) - Math.round(Math.random() * 5);
//         let high = Math.max(value, open) + Math.round(Math.random() * 5);

//         chartData.push({
//           date: newDate.getTime(),
//           value: value,
//           open: open,
//           low: low,
//           high: high,
//         });
//       }
//       return chartData;
//     }

//     let data = generateChartData();

//     // Create chart
//     let chart = root.container.children.push(
//       am5xy.XYChart.new(root, {
//         focusable: true,
//         panX: true,
//         panY: true,
//         wheelX: "panX",
//         wheelY: "zoomX",
//         paddingLeft: 0,
//       })
//     );

//     // Create axes
//     let xAxis = chart.xAxes.push(
//       am5xy.DateAxis.new(root, {
//         groupData: true,
//         maxDeviation: 0.5,
//         baseInterval: { timeUnit: "day", count: 1 },
//         renderer: am5xy.AxisRendererX.new(root, {
//           pan: "zoom",
//           minorGridEnabled: true,
//         }),
//         tooltip: am5.Tooltip.new(root, {}),
//       })
//     );

//     let yAxis = chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         maxDeviation: 1,
//         renderer: am5xy.AxisRendererY.new(root, {
//           pan: "zoom",
//         }),
//       })
//     );

//     let color = root.interfaceColors.get("background");

//     // Add series
//     let series = chart.series.push(
//       am5xy.CandlestickSeries.new(root, {
//         fill: color,
//         calculateAggregates: true,
//         stroke: color,
//         name: "MDXI",
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "value",
//         openValueYField: "open",
//         lowValueYField: "low",
//         highValueYField: "high",
//         valueXField: "date",
//         lowValueYGrouped: "low",
//         highValueYGrouped: "high",
//         openValueYGrouped: "open",
//         valueYGrouped: "close",
//         legendValueText:
//           "open: {openValueY} low: {lowValueY} high: {highValueY} close: {valueY}",
//         legendRangeValueText: "{valueYClose}",
//         tooltip: am5.Tooltip.new(root, {
//           pointerOrientation: "horizontal",
//           labelText:
//             "open: {openValueY}\nlow: {lowValueY}\nhigh: {highValueY}\nclose: {valueY}",
//         }),
//       })
//     );

//     // Conditionally add moving average series
//     let movingAverageSeries;
//     if (movingAverageEnabled) {
//       movingAverageSeries = chart.series.push(
//         am5xy.LineSeries.new(root, {
//           xAxis: xAxis,
//           yAxis: yAxis,
//           valueYField: "value",
//           valueXField: "date",
//           stroke: am5.color(0xFF0000),
//           strokeWidth: 2,
//           name: "Moving Average",
//           tooltip: am5.Tooltip.new(root, {
//             labelText: "Moving Average: {valueY}",
//           }),
//         })
//       );
//       movingAverageSeries.data.setAll(data);
//     }

//     // Add cursor
//     let cursor = chart.set(
//       "cursor",
//       am5xy.XYCursor.new(root, {
//         xAxis: xAxis,
//       })
//     );
//     cursor.lineY.set("visible", false);

//     // Add scrollbar
//     let scrollbar = am5xy.XYChartScrollbar.new(root, {
//       orientation: "horizontal",
//       height: 50,
//     });
//     chart.set("scrollbarX", scrollbar);

//     let sbxAxis = scrollbar.chart.xAxes.push(
//       am5xy.DateAxis.new(root, {
//         groupData: true,
//         groupIntervals: [
//           {
//             timeUnit: "week",
//             count: 1,
//           },
//         ],
//         baseInterval: { timeUnit: "day", count: 1 },
//         renderer: am5xy.AxisRendererX.new(root, {
//           minorGridEnabled: true,
//           strokeOpacity: 0,
//         }),
//       })
//     );

//     let sbyAxis = scrollbar.chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         renderer: am5xy.AxisRendererY.new(root, {}),
//       })
//     );

//     let sbseries = scrollbar.chart.series.push(
//       am5xy.LineSeries.new(root, {
//         xAxis: sbxAxis,
//         yAxis: sbyAxis,
//         valueYField: "value",
//         valueXField: "date",
//       })
//     );

//     // set data
//     series.data.setAll(data);
//     sbseries.data.setAll(data);

//     // Clean up on component unmount
//     return () => {
//       root.dispose();
//     };
//   }, [movingAverageEnabled]);

//   return <>
//        <div className="w-full p-6 bg-gray-50 rounded-lg shadow-lg">
//       <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
//       SPY 500 Index (NYSE: SPY)
//       </h2>

//       {/* Controls Section */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {/* Stock Dropdown */}
//         <div className="w-full md:w-1/4">
//           <label className="block text-lg font-medium mb-2 text-gray-700">
//             <FaChartLine className="inline mr-2 text-indigo-600" />
//             Stock
//           </label>
//           <select className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-400 bg-white text-gray-700">
//             <option value="SPY 500 Index (NYSE: SPY)">
//               SPY 500 Index (NYSE: SPY)
//             </option>
//             <option value="Apple Inc. (NASDAQ: AAPL)">
//               Apple Inc. (NASDAQ: AAPL)
//             </option>
//             <option value="Microsoft Corporation (NASDAQ: MSFT)">
//               Microsoft Corporation (NASDAQ: MSFT)
//             </option>
//             <option value="Tesla Inc. (NASDAQ: TSLA)">
//               Tesla Inc. (NASDAQ: TSLA)
//             </option>
//             <option value="Amazon.com Inc. (NASDAQ: AMZN)">
//               Amazon.com Inc. (NASDAQ: AMZN)
//             </option>
//             <option value="Meta Platforms (NASDAQ: META)">
//               Meta Platforms (NASDAQ: META)
//             </option>
//             <option value="Alphabet Inc. (NASDAQ: GOOG)">
//               Alphabet Inc. (NASDAQ: GOOG)
//             </option>
//           </select>
//         </div>

//         {/* Indicators Dropdown */}
//         <div className="w-full md:w-1/4">
//           <label className="block text-lg font-medium mb-2 text-gray-700">
//             <FaTools className="inline mr-2 text-indigo-600" />
//             Indicators
//           </label>
//           <select
//             className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-400 bg-white text-gray-700"
//             onChange={(e) => setMovingAverageEnabled(e.target.value === "Moving Averages")}
//           >
//             <option value="None">None</option>
//             <option value="Moving Averages">Moving Averages</option>
//           </select>
//         </div>
//       </div>

//       {/* Chart Section */}
//       <div id="chartdiv" className="w-full h-[600px]"></div>

//       {/* Timeframe Dropdown */}
//       <div className="w-full flex items-center gap-5 my-5">
//            {
//             chartTimeFrame.map((el,i)=>(
//               <span className="bg-gray-200 p-2" key={i}>{el}</span>
//             ))
//            }
//       </div>

//     </div>
//     </>;
// };

// export default ChartComponent;


"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChartLine, FaChartBar, FaTools, FaTimesCircle, FaCog, FaSyncAlt, FaSearch } from 'react-icons/fa'; // Import related icons

import { createChart } from "lightweight-charts";

// Dummy data for candlesticks
const dummyCandlestickData = [
  { time: '2023-09-01', open: 1000, high: 1025, low: 980, close: 980 },
  { time: '2023-09-02', open: 980, high: 1050, low: 1005, close: 1045 },
  { time: '2023-09-03', open: 1045, high: 1080, low: 1035, close: 1070 },
  { time: '2023-09-04', open: 1070, high: 1105, low: 1060, close: 1095 },
  { time: '2023-09-05', open: 1095, high: 1120, low: 1080, close: 1110 },
  { time: '2023-09-06', open: 1110, high: 1125, low: 1095, close: 1105 },
  { time: '2023-09-07', open: 1105, high: 1110, low: 1080, close: 1090 },
  { time: '2023-09-08', open: 1090, high: 1100, low: 1075, close: 1095 },
  { time: '2023-09-09', open: 1095, high: 1110, low: 1080, close: 1100 },
  { time: '2023-09-10', open: 1100, high: 1115, low: 1085, close: 1095 },
  { time: '2023-09-11', open: 1095, high: 1100, low: 1050, close: 1065 },
  { time: '2023-09-12', open: 1065, high: 1080, low: 1035, close: 1045 },
  { time: '2023-09-13', open: 1045, high: 1055, low: 1015, close: 1030 },
  { time: '2023-09-14', open: 1030, high: 1040, low: 1000, close: 1020 },
  { time: '2023-09-15', open: 1020, high: 1030, low: 980, close: 1005 },
  { time: '2023-09-16', open: 1005, high: 1025, low: 980, close: 1010 },
  { time: '2023-09-17', open: 1010, high: 1030, low: 990, close: 1025 },
  { time: '2023-09-18', open: 1025, high: 1045, low: 1000, close: 1035 },
  { time: '2023-09-19', open: 1035, high: 1050, low: 1015, close: 1040 },
  { time: '2023-09-20', open: 1040, high: 1060, low: 1025, close: 1050 },
  { time: '2023-09-21', open: 1050, high: 1070, low: 1035, close: 1065 },
  { time: '2023-09-22', open: 1065, high: 1090, low: 1045, close: 1050 },
  { time: '2023-09-23', open: 1050, high: 1100, low: 1065, close: 1095 },
  { time: '2023-09-24', open: 1095, high: 1120, low: 1075, close: 1110 },
  { time: '2023-09-25', open: 1110, high: 1130, low: 1080, close: 1120 },
  { time: '2023-09-26', open: 1120, high: 1145, low: 1090, close: 1135 },
  { time: '2023-09-27', open: 1135, high: 1150, low: 1110, close: 1140 },
  { time: '2023-09-28', open: 1140, high: 1165, low: 1120, close: 1155 },
  { time: '2023-09-29', open: 1155, high: 1170, low: 1130, close: 1165 },
  { time: '2023-09-30', open: 1165, high: 1180, low: 1145, close: 1175 },
];

// Function to calculate moving average
const calculateSMA = (data: any, period = 1) => {
  const smaData = [];
  for (let i = period - 1; i < data.length; i++) {
    const sum = data
      .slice(i - period + 1, i + 1)
      .reduce((acc: any, val: any) => acc + val.close, 0);
    smaData.push({ time: data[i].time, value: sum / period });
  }
  return smaData;
};

const ChartComponent = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [showIndicatorDropdown, setShowIndicatorDropdown] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState("None");
  const [stockName, setStockName] = useState("SPY 500 Index (NYSE: SPY)");
  const [chart, setChart] = useState<any>(null);
  const [candlestickSeries, setCandlestickSeries] = useState<any>(null);
  const [smaSeries, setSmaSeries] = useState<any>(null);
  const [timeframe, setTimeframe] = useState('M');
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  // Function to simulate loading (e.g., fetching chart data)
  const fetchChartData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

    // Toggle indicator dropdown visibility
    const toggleIndicatorDropdown = () => {
      setShowIndicatorDropdown(!showIndicatorDropdown);
    };
  
    // Handle indicator selection
    const selectIndicator = (indicator) => {
      setSelectedIndicator(indicator);
      setShowIndicatorDropdown(false);
    };
    
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!chartContainerRef.current) return; // Ensure the ref is not null

      // Create chart instance
      const chartInstance = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 600,
        layout: {
          // backgroundColor: "#f5f5f5",
          textColor: "#333",
        },
        grid: {
          vertLines: { color: "#e0e0e0" },
          horzLines: { color: "#e0e0e0" },
        },
        crosshair: {
          mode: 1,
        },
        // priceScale: {
        //   borderColor: "#ccc",
        // },
        timeScale: {
          borderColor: "#ccc",
          timeVisible: true,
          secondsVisible: false,
        },
        watermark: {
          visible: false,
        },
      });

      const candlestickSeriesInstance = chartInstance.addCandlestickSeries({
        upColor: "#4caf50",
        downColor: "#e53935",
        borderVisible: true,
        wickUpColor: "#4caf50",
        wickDownColor: "#e53935",
      });

      candlestickSeriesInstance.setData(dummyCandlestickData);
      setChart(chartInstance);
      setCandlestickSeries(candlestickSeriesInstance);

      const handleResize = () => {
        if (chartContainerRef.current) {
          chartInstance.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chartInstance.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (selectedIndicator === "Moving Averages" && chart && candlestickSeries) {
      const smaData = calculateSMA(dummyCandlestickData);
      if (smaSeries) {
        smaSeries.setData(smaData);
      } else {
        const smaSeriesInstance = chart.addLineSeries({
          color: "blue",
          lineWidth: 2,
        });
        smaSeriesInstance.setData(smaData);
        setSmaSeries(smaSeriesInstance);
      }
    } else if (selectedIndicator === "None" && smaSeries) {
      chart.removeSeries(smaSeries);
      setSmaSeries(null);
    }
  }, [selectedIndicator, chart, candlestickSeries]);

  return (
    <div className="w-full p-6 rounded-lg shadow-lg">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
        SPY 500 Index (NYSE: SPY)
      </h2>

      {/* Stock Information Section */}
      <div className="mb-6 text-center">
        <span className="block text-2xl font-semibold text-gray-600">
          Current Price: <span className="text-blue-500">$1095</span>
        </span>
        <span className="block text-md text-gray-500">
          Daily Range: <span className="font-medium"> $1080 - $1110</span> | Volume: <span className="font-medium">1.2M</span> | Change: <span className="text-green-500">+1.3%</span>
        </span>
      </div>

      {/* Controls Section */}
     <div className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-4">
      <div className="flex flex-wrap items-center gap-2 justify-start"> 

        {/* Stock Input Field with Clear Button */}
        <div className="flex items-center border-2 border-gray-300 rounded-lg px-3 py-1 focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            placeholder="Search"
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
            className="outline-none bg-transparent w-40 md:w-60"
          />
          {/* Fetch Chart Button or Loading Spinner */}
          <div className="flex items-center gap-4">
            {loading ? (
              <FaSyncAlt className="animate-spin" title="Loading" />
            ) : (
              <button
                onClick={fetchChartData}
                className="transition duration-150"
              >
              </button>
            )}
          </div>
        </div>

        {/* Timeframe Dropdown */}
        <div className="relative flex items-center px-2 border-r-2">
          <button onClick={()=>setShowTimeframeDropdown(!showTimeframeDropdown)} >{timeframe}</button>
          {showTimeframeDropdown && (
            <div className="absolute mt-0 right-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setTimeframe('M')}
                >
                  M
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setTimeframe('H')}
                >
                 H
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setTimeframe('D')}
                >
                 D
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Chart Pattern Icon */}
        <div className="flex items-center px-2 border-r-2">
          <FaChartBar className="cursor-pointer" title="Chart Pattern" />
        </div>

         {/* Stock Indicator Icon with Dropdown */}
         <div className="relative px-2 border-r-2 flex items-center">
          <FaTools
            onClick={toggleIndicatorDropdown}
            className="cursor-pointer"
            title="Stock Indicator"
          />
          {showIndicatorDropdown && (
            <div className="absolute mt-2 right-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectIndicator('None')}
                >
                  None
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectIndicator('Moving Averages')}
                >
                  Moving Averages
                </li>
                
              </ul>
            </div>
          )}
        </div>

        {/* Indicator Settings Icon */}
        <div className="flex items-center px-2 border-r-2">
          <FaCog className="cursor-pointer" title="Configure Indicator" />
        </div>
      </div>
    </div>


      {/* Chart Section */}
      <div ref={chartContainerRef} className="w-full h-[600px] mb-4"></div>

      {/* Timeframe Section */}
      <div className="w-full flex items-center gap-5 my-5 justify-center">
        {[
          "1 Min",
          "2 Min",
          "3 Min",
          "5 Min",
          "15 Min",
          "30 Min",
          "1 Hour",
          "4 Hour",
          "1 Day",
          "1 Week",
          "1 Month",
        ].map((el, i) => (
          <button
            key={i}
            className={`py-1 px-2 ${el == "1 Min" && "bg-blue-100 rounded text-blue-600 font-semibold"
              } hover:bg-blue-50 transition duration-200`}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartComponent;