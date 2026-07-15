"use client";

import { ShieldCheck } from "lucide-react";

export default function ExamHeader() {
  return (
    <header className="bg-white border-b border-border shadow-sm">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <div>
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-10 h-10 sm:w-14 sm:h-14"
            />
            <h1 className="font-bold md:hidden">SAZUG CBT</h1>

            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-primary">
                SA'ADU ZUNGUR UNIVERSITY
              </h1>

              <p className="text-muted">
                Computer Based Examination
              </p>
            </div>
          </div>



        </div>


        <div className="flex items-center gap-2 sm:gap-3">

          <ShieldCheck className="text-primary" size={18} />

          <span className="font-medium text-sm sm:text-base">
            Secure Examination
          </span>

        </div>

      </div>

    </header>
  );
}