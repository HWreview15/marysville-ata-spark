import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-accent-foreground">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Marysville ATA</h3>
                <p className="text-sm text-secondary-foreground/80">Martial Arts Academy</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Building character, confidence, and strength through traditional Taekwondo training. 
              Join our family-friendly academy and discover your potential.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programs" className="hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#instructors" className="hover:text-accent transition-colors">Instructors</a></li>
              <li><a href="#schedule" className="hover:text-accent transition-colors">Schedule</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="text-secondary-foreground/80">
                123 Main Street<br />
                Marysville, WA 98270
              </p>
              <p className="text-secondary-foreground/80">(360) 555-0123</p>
              <p className="text-secondary-foreground/80">info@marysvilleata.com</p>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium mb-2">Academy Hours</h5>
              <div className="text-xs text-secondary-foreground/80 space-y-1">
                <p>Mon-Thu: 4:00 PM - 8:00 PM</p>
                <p>Fri: 4:00 PM - 7:00 PM</p>
                <p>Sat: 9:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Marysville ATA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors">
                Student Handbook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;