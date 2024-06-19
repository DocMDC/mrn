import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl front-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Medical Roomate Network
        </h1>
        <p className="text-white text-lg">
          Save money on residency and fellowship interviews
        </p>
        <div>
          {/* This will be a modal login component: */}
          {/* <LoginButton mode="modal" asChild>
            <Button variant="secondary" size={"lg"}>
              Sign in
            </Button>
          </LoginButton> */}
          <LoginButton asChild>
            <Button variant="secondary" size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
