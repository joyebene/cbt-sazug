"use client";

import { ReactNode } from "react";
import ExamHeader from "./ExamHeader";

interface Props {
  children: ReactNode;
}

export default function ExamLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100">

      <ExamHeader />

      <main className="max-w-7xl mx-auto px-6 py-4">
        {children}
      </main>

    </div>
  );
}