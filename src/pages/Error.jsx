import { Link, useParams } from "react-router";

const ErrorPage = () => {
    const {"*":splat } = useParams();
    console.log(splat)
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-lg text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold tracking-tight text-slate-800">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-slate-500">
          Sorry, the page you are looking for doesn't exist or may have
          been moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
