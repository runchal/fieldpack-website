import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-medium hover:text-muted-foreground transition-colors">
            Nexus
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`transition-colors ${
                location.pathname === '/about' 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
            {location.pathname === '/' ? (
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}