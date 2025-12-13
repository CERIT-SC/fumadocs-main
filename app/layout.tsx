import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import Footer from "@/components/footer";

export default async function Layout({ 
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
    <html suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
           theme={{
             enabled: false,
           }}
           search={{
             enabled: false,
           }}
        >
           {children}
        </RootProvider>
      </body>
    </html>
    <Footer />
    </>
  );
}
