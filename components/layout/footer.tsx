"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="flex flex-col items-center py-8 text-center">
      <Separator className="my-6" />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Waitlist. All rights reserved.
      </p>
    </footer>
  );
}
