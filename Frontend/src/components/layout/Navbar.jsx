import Button from "../ui/Button";
import './Navbar.css';

const Navbar = () => {
    const links = [
        "Home", "Rooms", "Gallery", "Amenities", "Contact"
    ];

  return (
    <nav className="w-full border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold text-primary">Shortlets <span className="text-accent">By Tee</span></h1>
            </div>
            <div className="nav-links hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <a key={link} href="#" className="text-body transition hover:text-primary">{link}</a>
                ))}
            </div>
            <div className="contact">
            <div className="Phone">+2349064609367</div>
                
                <Button>
                    Book Now
                </Button>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;