import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found | HiTechLogic",
    "description": "The page you're looking for doesn't exist or has been moved."
  };

  return (
    <>
      <SEO
        title="Page Not Found | HiTechLogic"
        description="The page you're looking for doesn't exist or has been moved. Return to HiTechLogic homepage for enterprise infrastructure solutions."
        schema={webpageSchema}
      />
      <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
        <div className="text-center px-4">
          <div className="inline-block text-8xl font-bold gradient-text mb-6">404</div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
