import Link from 'next/link';
import Image from 'next/image';
// import NotFoundImage from '../public/images/404.svg';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <div className="max-w-md">
        <Image src={'https://cdn-icons-png.flaticon.com/512/580/580185.png'} alt="Page Not Found" width={400} height={300} className="mx-auto mb-8" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          We can't seem to find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors" href="/">
          {/* <a className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"> */}
            Return Home
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
}
