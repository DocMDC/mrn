import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PublicNavbar } from "@/components/nav/public-navbar";
import Link from "next/link";
import { InterviewForm } from "@/components/interview-form";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <PublicNavbar />
      <div className="space-y-6 text-center w-3/4 lg:w-1/2">
        <h1
          className={cn(
            "text-4xl front-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Medical Roomate Network
        </h1>
        <h1 className="text-white text-lg">
          Save money on residency and fellowship interviews by sharing the cost
          with another interviewee.
        </h1>

        {/* <div>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/auth/register">Sign up</Link>
          </Button>
        </div> */}
      </div>
      <div className="mt-10 w-3/4 lg:w-1/2">
        <InterviewForm />
      </div>
    </main>
  );
}
