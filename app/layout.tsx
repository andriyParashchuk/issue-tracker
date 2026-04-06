"use client";

import "./globals.css";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "@/relay/environment";

export default function RootLayout({ children }: any) {
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
