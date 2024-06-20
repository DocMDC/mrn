"use client";
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoginButton } from "@/components/auth/login-button";

export const PublicNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-white flex items-center">
      <div className="flex w-full px-4">
        <div className="mr-auto flex items-center justify-center">
          <Button asChild>
            <Link
              className="bg-black text-white px-2 rounded-md cursor-pointer"
              href="/"
            >
              MRN
            </Link>
          </Button>
        </div>

        <LoginButton asChild>
          <Button
            variant="secondary"
            size={"lg"}
            className="hover:bg-slate-200"
          >
            Sign in
          </Button>
        </LoginButton>
      </div>
    </div>
  );
};
