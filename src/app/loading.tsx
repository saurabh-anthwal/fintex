import { MdHourglassEmpty } from 'react-icons/md';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <MdHourglassEmpty className="text-6xl text-blue-500 animate-spin mb-4" />
      <p className="text-lg font-semibold text-gray-700">Loading, please wait...</p>
    </div>
  );
}
