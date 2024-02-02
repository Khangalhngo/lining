"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter, usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { motion, AnimatePresence } from "framer-motion";
import { initialize } from "next/dist/server/lib/render-server";
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const pathname = usePathname();
  console.log("🚀 ~ Providers ~ router:", router);

  return (
    <NextUIProvider navigate={router.push}>
      <AnimatePresence>
        {/* <motion.div
          key={pathname}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.75 }}
          variants={{
            initialState: { opacity: 0 },
            animateState: { opacity: 2 },
            eexitState: {},
          }}
          className="base-page-size"
        > */}
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        {/* </motion.div> */}
      </AnimatePresence>
    </NextUIProvider>
  );
}
