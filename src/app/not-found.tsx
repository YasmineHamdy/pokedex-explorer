import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
        <p className="mb-4 text-4xl">😵</p>
        <h2 className="mb-2 text-xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mb-6 text-gray-500">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
