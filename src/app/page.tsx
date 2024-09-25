import Link from 'next/link';
import Image from 'next/image';
import { FaChartLine, FaArrowUp, FaArrowDown, FaBullseye, FaMoneyBillAlt } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100">
      {/* Logo */}
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4964/4964960.png"
        alt="Stock Trading"
        width={120}
        height={120}
        className="mb-8"
      />

      {/* Main Heading */}
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4 tracking-wide">
        Welcome to FINTEX
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        Your gateway to smart stock trading and investment strategies.
      </p>

      {/* Call-to-action buttons */}
      <div className="flex space-x-6 mb-10">
        <Link
          href="/auth/register"
          className="px-8 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Register
        </Link>
        <Link
          href="/auth/login"
          className="px-8 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-colors"
        >
          Login
        </Link>
        <Link
          href="/settings"
          className="px-8 py-3 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors"
        >
          Settings
        </Link>
      </div>

      {/* Stock Performance Section */}
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-4xl mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
          <FaChartLine className="text-blue-600 mr-2" /> Live Stock Performance
        </h2>
        
        {/* Example Stock Data */}
        <div className="grid grid-cols-3 gap-6">
          {/* Stock 1 */}
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaBullseye className="text-red-500 mr-2" /> Apple (AAPL)
            </h3>
            <Image
              src="https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-trader-online-trading-in-flat-concept-png-image_3974399.png"
              alt="Apple Stock Chart"
              width={300}
              height={150}
              className="mx-auto mb-4"
            />
            <p className="text-lg">Current Price: <span className="font-bold text-green-500">$145.32 <FaArrowUp className="inline" /></span></p>
            <p>Daily Change: <span className="text-green-600">+2.34%</span></p>
          </div>

          {/* Stock 2 */}
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaMoneyBillAlt className="text-green-500 mr-2" /> Tesla (TSLA)
            </h3>
            <Image
              src="https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-trader-online-trading-in-flat-concept-png-image_3974399.png"
              alt="Tesla Stock Chart"
              width={300}
              height={150}
              className="mx-auto mb-4"
            />
            <p className="text-lg">Current Price: <span className="font-bold text-red-500">$705.67 <FaArrowDown className="inline" /></span></p>
            <p>Daily Change: <span className="text-red-600">-1.45%</span></p>
          </div>

          {/* Stock 3 */}
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaArrowUp className="text-green-500 mr-2" /> Amazon (AMZN)
            </h3>
            <Image
              src="https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-trader-online-trading-in-flat-concept-png-image_3974399.png"
              alt="Amazon Stock Chart"
              width={300}
              height={150}
              className="mx-auto mb-4"
            />
            <p className="text-lg">Current Price: <span className="font-bold text-green-500">$3,285.90 <FaArrowUp className="inline" /></span></p>
            <p>Daily Change: <span className="text-green-600">+1.21%</span></p>
          </div>
        </div>
      </div>

      {/* Additional Trading Information */}
      <div className="shadow-lg rounded-lg p-8 max-w-3xl bg-white">
        <h2 className="text-2xl font-semibold mb-4">Why Trade with Us?</h2>
        <p className="mb-4 text-lg">
          FINTEX is designed to give you real-time market data, advanced analytics, and a seamless trading experience. Join thousands of users who trust our platform for their stock investments and financial goals.
        </p>
        <ul className="list-disc text-left mb-6 text-lg">
          <li>Access to real-time stock data and charts</li>
          <li>Comprehensive portfolio tracking and management</li>
          <li>Advanced stock trading strategies and tutorials</li>
          <li>Secure, fast transactions with low fees</li>
        </ul>

        <p>
          Start your trading journey now by registering for a free account or log in to manage your portfolio and settings.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-gray-500">
        <p>&copy; 2024 FINTEX Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}
