import * as React from "react";
import { cn } from "@/lib/utils";

export function Tabs({ className, children, ...props }) {
  return (
      <div className={cn("flex flex-col", className)} {...props}>
            {children}
                </div>
                  );
                  }

                  export function TabsList({ className, children, ...props }) {
                    return (
                        <div
                              className={cn(
                                      "inline-flex h-10 items-center justify-center rounded-xl bg-muted p-1 text-muted-foreground",
                                              className
                                                    )}
                                                          {...props}
                                                              >
                                                                    {children}
                                                                        </div>
                                                                          );
                                                                          }

                                                                          export function TabsTrigger({ className, active, ...props }) {
                                                                            return (
                                                                                <button
                                                                                      className={cn(
                                                                                              "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
                                                                                                      active
                                                                                                                ? "bg-background text-foreground shadow-sm"
                                                                                                                          : "text-muted-foreground hover:text-foreground",
                                                                                                                                  className
                                                                                                                                        )}
                                                                                                                                              {...props}
                                                                                                                                                  />
                                                                                                                                                    );
                                                                                                                                                    }