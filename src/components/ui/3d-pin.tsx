"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const navigate = useNavigate();

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href) {
      navigate(href);
    }
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer min-h-[400px] w-full",
        containerClassName
      )}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* 3D Perspective container - visible on hover */}
      <div
        style={{
          perspective: "1000px",
        }}
        className="absolute inset-0 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700"
      >
        <div
          style={{
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
            }}
            className="p-6 flex justify-center items-center rounded-[28px] bg-black/90 border border-white/[0.2] shadow-[0_20px_60px_rgb(0_0_0/0.8)] transition duration-700"
          >
            <div className={cn("text-white", className)}>{children}</div>
          </div>
        </div>
      </div>

      {/* Visible card - always shown */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/90 via-[hsl(var(--accent-blue))]/70 to-[hsl(var(--accent-blue))]/40 rounded-[28px] border border-white/30 shadow-[0_40px_120px_rgba(2,6,23,0.85)] transition duration-700 hover:border-white/40">
        <div className={cn("relative z-20", className)}>{children}</div>
      </div>

      {/* Floating title */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="bg-zinc-950 py-1 px-3 rounded-full ring-1 ring-white/10">
          <span className="text-white text-xs font-bold">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: (i - 1) * 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        <motion.div
          className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"
        />
        <motion.div
          className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40"
        />
        <motion.div
          className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"
        />
        <motion.div
          className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40"
        />
      </div>
    </motion.div>
  );
};
