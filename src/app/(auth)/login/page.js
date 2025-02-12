"use client";
import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex w-[50%] flex-col gap-3">
      <HeroSection title="Login" />
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          name="email"
          placeholder="Enter your Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          placeholder="Enter your Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button
          type="submit"
          className="relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400  hover:scale-105 hover:shadow-lg hover:from-orange-400 hover:via-orange-300 hover:to-yellow-300 text-white font-semibold px-6 py-3
      after:absolute after:inset-0 after:bg-white/10 after:opacity-0 after:transition-opacity
      hover:after:opacity-100"
        >
          Login
        </Button>
      </form>

      <p className="text-gray-500 text-sm">
        Don't have an account yet?
        <Link href="/register">Sign Up</Link> instead
      </p>
    </div>
  );
};

export default Login;
