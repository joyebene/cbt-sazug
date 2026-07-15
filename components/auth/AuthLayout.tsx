interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-4 md:p-6">
      <div className="relative w-full max-w-6xl lg:h-162.5 shadow-2xl bg-white overflow-hidden rounded-2xl flex flex-col lg:flex-row">
        {/* Green diagonal section */}
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[65%] bg-primary"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 text-center">
          <div>
            <img
              src="/logo.jpg"
              alt="School Logo"
              className="w-24 sm:w-32 mx-auto"
            />

            <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-primary-dark">
              SAZUG CBT SYSTEM
            </h1>

            <p className="text-slate-500 mt-2">
              Secure Examination Platform
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:px-10 z-10 bg-primary lg:bg-transparent">
          <div className="w-full max-w-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}