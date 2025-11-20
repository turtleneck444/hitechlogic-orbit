import { Header } from "./Header";
import { Footer } from "./Footer";
import { AIChatWidget } from "@/components/ui/ai-chat-widget";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[80px]">{children}</main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
