import React from "react";
import Logo from "@/components/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
function Navbar() {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />

        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
