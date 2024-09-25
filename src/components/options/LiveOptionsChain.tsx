const dummyCallOptionsData = [
  {
    contractName: 'SPY 4400 Call',
    lastTradeDate: '2024-09-10 15:45',
    strikePrice: 4400,
    lastPrice: 12.5,
    bid: 12.4,
    ask: 12.6,
    volume: 4500,
    openInterest: 20000,
    impliedVolatility: '25%',
  },
  {
    contractName: 'SPY 4450 Call',
    lastTradeDate: '2024-09-10 15:50',
    strikePrice: 4450,
    lastPrice: 8.7,
    bid: 8.5,
    ask: 8.9,
    volume: 3900,
    openInterest: 18500,
    impliedVolatility: '24%',
  },
];

const dummyPutOptionsData = [
  {
    contractName: 'SPY 4400 Put',
    lastTradeDate: '2024-09-10 15:45',
    strikePrice: 4400,
    lastPrice: 15.2,
    bid: 15.0,
    ask: 15.4,
    volume: 3200,
    openInterest: 15000,
    impliedVolatility: '28%',
  },
  {
    contractName: 'SPY 4450 Put',
    lastTradeDate: '2024-09-10 15:50',
    strikePrice: 4450,
    lastPrice: 11.1,
    bid: 10.9,
    ask: 11.3,
    volume: 2800,
    openInterest: 14000,
    impliedVolatility: '26%',
  },
];

export default function LiveOptionsChain() {
  return (
    <div className="text-xs p-2">
      <h2 className="text-center p-4 text-lg">Live 0DTE Options Chain</h2>
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-1">
          <p className="bg-gray-500 h-5 w-5"></p>
          <p>Calls</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="bg-gray-200 h-5 w-5"></p>
          <p>Puts</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="border-b p-2 text-left">Contract Name</th>
              <th className="border-b p-2 text-left">Last Price</th>
              <th className="border-b p-2 text-left">Bid-Ask</th>
              <th className="border-b p-2 text-left">Volume</th>
              <th className="border-b p-2 text-left">Open Interest</th>
              <th className="border-b p-2 text-left">IV</th>
            </tr>
          </thead>
          <tbody>
            {/* Rendering Call Options */}
            {dummyCallOptionsData.map((option, index) => (
              <tr key={index} className="bg-gray-500 text-white">
                <td className="border-b p-2">{option.contractName}</td>
                <td className="border-b p-2">{option.lastPrice}</td>
                <td className="border-b p-2">{option.bid} - {option.ask}</td>
                <td className="border-b p-2">{option.volume}</td>
                <td className="border-b p-2">{option.openInterest}</td>
                <td className="border-b p-2">{option.impliedVolatility}</td>
              </tr>
            ))}

            {/* Rendering Put Options */}
            {dummyPutOptionsData.map((option, index) => (
              <tr key={index} className="bg-gray-300 text-black">
                <td className="border-b p-2">{option.contractName}</td>
                <td className="border-b p-2">{option.lastPrice}</td>
                <td className="border-b p-2">{option.bid} - {option.ask}</td>
                <td className="border-b p-2">{option.volume}</td>
                <td className="border-b p-2">{option.openInterest}</td>
                <td className="border-b p-2">{option.impliedVolatility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
