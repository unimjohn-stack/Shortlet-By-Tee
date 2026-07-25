import Button from '../components/ui/Button';
import heroImg from '../assets/HeroImg.webP';
import './HeroSection.css';
import Badge from './ui/Badge';
import { FiHome } from 'react-icons/fi';
import { GiHouse } from "react-icons/gi";
import { PiSecurityCamera } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { MdHotel } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="bg-background" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className=" texts mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between gap-12 px-6">
        <div className="max-w-xl space-y-6">
            {/* <p className="font-medium uppercase tracking-widest text-accent">
            Premium Shortlets
            </p> */}
            <Badge className='badge' variant='premium'>
                {/* <FiHome size={24} /> */}
                <GiHouse className='house' size={20}/>
                Premium Shortlets From Temmie</Badge>
            <h1 className="header text-7xl font-bold leading-tight text-white">Omo gimme Tag I no sabi<br/> </h1>
            
            {/* <p className="text-lg text-body">
                Discover elegant apartments designed for business trips, vacations and weekend getaways.
            </p> */}
            <div className="flex gap-4">
                <Badge className='badge2' variant='clear'>
                    <MdHotel />Top Notch Amenities</Badge>
                <Badge className='badge2' variant='clear'><MdSupportAgent /> 24/7 Support</Badge>
                <Badge className='badge2' variant='clear'><PiSecurityCamera /> Secured Environs</Badge>
            </ div>
            <div className="flex gap-4">
                <Button variant='accent' size='lg'>Book Now</Button>
                <Button className='btn2' variant='secondary' size='lg'>View Rooms</Button>
            </div>
        </div>
        {/* <div className="flex-1">
            <img src={heroImg} alt="lux apartment" className='w-full rounded-3xl object-cover shadow-xl' />
        </div> */}
        </div>
    </section>
  );
};

export default HeroSection;