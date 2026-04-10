"use client";

import "./globals.css";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "@/relay/environment";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <RelayEnvironmentProvider environment={environment}>
          {children}
        </RelayEnvironmentProvider>
      </body>
    </html>
  );
}
