"use client";

import { Input } from "@/components/shared/Input";
import { Button } from "@/components/shared/Button";

export default function LoginForm() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // login logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="mb-8">
        <h2 className="text-white text-2xl sm:text-3xl font-bold">
          Welcome Back
        </h2>

        <p className="text-blue-100 mt-2">
          Sign in to continue
        </p>
      </div>

      <Input
        label="Matric Number / Staff ID"
        placeholder="Enter ID"
      />

      <Input
        type="password"
        label="Password"
        placeholder="Enter password"
      />

      <div className="flex justify-between text-sm text-white py-2">
        <label className="flex gap-2 items-center">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          type="button"
          className="hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <Button className="w-full bg-secondary">
        Sign In
      </Button>
    </form>
  );
}