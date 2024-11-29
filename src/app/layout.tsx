"use client";
import "@0xsequence/design-system/styles.css";
import "./globals.css";
import { SequenceKit } from "@0xsequence/kit";
import { config } from "../../config";
import { KitWalletProvider } from '@0xsequence/kit-wallet';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SequenceKit config={config}>
          <KitWalletProvider>{children}</KitWalletProvider>
        </SequenceKit>
      </body>
    </html>
  );
}
