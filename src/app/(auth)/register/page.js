import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="flex w-[50%] flex-col gap-3">
      <HeroSection title="Register" />
      <Input placeholder="Enter your Name" />
      <Input placeholder="Enter your Email" />
      <Input placeholder="Enter your Phone Number" />
      <Input placeholder="Enter your password" />
      <Button
        className="relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400  hover:scale-105 hover:shadow-lg hover:from-orange-400 hover:via-orange-300 hover:to-yellow-300 text-white font-semibold px-6 py-3
      after:absolute after:inset-0 after:bg-white/10 after:opacity-0 after:transition-opacity
      hover:after:opacity-100"
      >
        Register
      </Button>
      <p className="text-gray-500 text-sm">
        Already have an account?
        <Link href="/login">Sign In</Link> instead
      </p>
    </div>
  );
};

export default Register;
