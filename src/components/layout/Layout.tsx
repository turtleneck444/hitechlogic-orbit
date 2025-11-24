import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuickActionWidget } from "@/components/ui/quick-action-widget";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[80px]">{children}</main>
      <Footer />
      <QuickActionWidget />
    </div>
  );
}
