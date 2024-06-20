"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import * as z from "zod";
import { InterviewSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export function InterviewForm() {
  const [isPending, startTransition] = useTransition();
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof InterviewSchema>>({
    resolver: zodResolver(InterviewSchema),
    defaultValues: {
      hospital: "",
      dateRange: {
        from: new Date(),
        to: new Date(),
      },
      //   endDate: new Date(Date.now()),
    },
  });

  const onSubmit = (values: z.infer<typeof InterviewSchema>) => {
    setError("");
    setSuccess("");

    // startTransition(() => {
    //   login(values)
    //     .then((data) => {
    //       if (data?.error) {
    //         form.reset();
    //         setError(data.error);
    //       }

    //       if (data?.success) {
    //         form.reset();
    //         setSuccess(data.success);
    //       }

    //       if (data?.twoFactor) {
    //         setShowTwoFactor(true);
    //       }
    //     })
    //     .catch(() => setError("Something went wrong!"));
    // });
    console.log("submitting");
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="uppercase text-gray-500 text-center">
        tell us about your interview
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="hospital"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Where are you interviewing?
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter a hospital"
                    />
                  </FormControl>
                  {/* <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">Forgot password?</Link>
                    </Button> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Dates</FormLabel>
                  <Popover modal={true}>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "LLL dd, y")} -{" "}
                              {format(field.value.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={field.value.from}
                        selected={{
                          from: field.value.from!,
                          to: field.value.to,
                        }}
                        onSelect={field.onChange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4">
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                disabled={isPending}
                type="submit"
                className="w-full mt-4"
              >
                Search
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
