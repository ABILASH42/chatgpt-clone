import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import AppNavBar from "@/components/layout/AppNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex h-full flex-1">
            <AppSidebar />
            <SidebarInset className="flex-1 flex flex-col">
              <AppNavBar />
              <main className="flex-1">{children}</main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
