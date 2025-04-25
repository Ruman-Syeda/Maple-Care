
import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container-custom space-y-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium mb-4">About Maple Care</h3>
            <p className="text-muted-foreground">
              Empowering Canadians through healthcare policy transparency, 
              education, and advocacy for better sexual healthcare across provinces.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              </li>
              <li>
                <Link to="/compare" className="text-muted-foreground hover:text-foreground">Compare Policies</Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-muted-foreground hover:text-foreground">Knowledge Hub</Link>
              </li>
              <li>
                <Link to="/advocacy" className="text-muted-foreground hover:text-foreground">Advocacy Toolkit</Link>
              </li>
              <li>
                <Link to="/map" className="text-muted-foreground hover:text-foreground">Provincial Map</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Accessibility</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/accessibility" className="text-muted-foreground hover:text-foreground">Accessibility Statement</Link>
              </li>
              <li>
                <Link to="/languages" className="text-muted-foreground hover:text-foreground">Language Options</Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground">Help & Support</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-muted-foreground">Have questions or feedback?</p>
            <Link to="/contact" className="text-maple hover:text-maple-dark">Contact Us</Link>
            
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Get to Talk to Someone</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Call: 1-888-642-2725 (9 AM – 9 PM ET)</li>
                <li>Text: 613-800-6757</li>
                <li>Email: access@actioncanadashr.org</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Follow Us</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/actioncanadashr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-maple">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/actioncanadaSHR/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-maple">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com/actioncanadashr" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-maple">
                  <Twitter size={20} />
                </a>
                <a href="https://www.youtube.com/channel/UCkkaPDWLJyxvznWybVKUe1Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-maple">
                  <Youtube size={20} />
                </a>
                <a href="mailto:info@actioncanadaSHR.org" aria-label="Email" className="text-muted-foreground hover:text-maple">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maple Care. All rights reserved.
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-maple" />
            <span>for healthcare advocacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
