import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-electric-blue text-white shadow-[0_18px_40px_-24px_rgba(46,107,255,0.65)] hover:bg-electric-blue/90",
        secondary:
          "bg-white text-foreground border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] hover:text-foreground rounded-full",
        outline:
          "border border-[hsl(var(--border))] bg-transparent text-foreground hover:bg-[hsl(var(--muted))]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "text-foreground hover:bg-[hsl(var(--muted))]",
        link: "text-electric-blue underline-offset-4 hover:underline",
        hero: "bg-electric-blue text-white shadow-[0_20px_50px_-12px_rgba(46,107,255,0.7)] hover:bg-electric-blue/90 hover:shadow-[0_25px_60px_-15px_rgba(46,107,255,0.8)] hover:scale-105",
        glass: "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        xl: "h-14 rounded-full px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
