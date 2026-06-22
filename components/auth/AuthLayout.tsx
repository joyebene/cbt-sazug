interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-6 overflow-hidden">
      <div className="relative w-full max-w-6xl h-[650px] shadow-2xl bg-white overflow-hidden">

        {/* Blue diagonal section */}
        <div
          className="absolute inset-y-0 right-0 w-[65%] bg-[#1d4fa3]"
          style={{
            clipPath:
              "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Left Section */}
        <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center">
          <div className="text-center">
            <img
              src="/logo.png"
              alt="School Logo"
              className="w-32 mx-auto"
            />

            <h1 className="mt-6 text-3xl font-bold text-blue-900">
              CBT SYSTEM
            </h1>

            <p className="text-slate-500 mt-2">
              Secure Examination Platform
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center px-10">
          <div className="w-full max-w-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}