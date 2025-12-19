const navItems = ["Home", "Feature", "ICO Chart", "Roadmap", "Blog", "Contact"];
import logo from '/assets/images/logo/logo.png';
import user from '/assets/images/icon/user.png';
import { Menu, MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
        w-full z-50 transition-all duration-500 ease-in-out py-8
        ${isSticky
                    ? "fixed top-0 left-0 bg-[#0F101E] backdrop-blur-md py-4 shadow-lg translate-y-0"
                    : "absolute top-0 left-0 bg-transparent py-8 -translate-y-0"} `}
        >
            <div className="flex relative  pt-0    justify-between  items-center manrope-fonts mx-8 ">
                <div>
                    <img src={logo} alt="" />
                </div>
                <nav className="absolute  left-1/2 -translate-x-1/2 z-50 ">
                    <div className="flex items-center gap-10 px-10 py-4 rounded-full bg-[#0F101E] backdrop-blur-md border border-white/10">

                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`relative text-lg tracking-wide  transition-colors duration-500 ease-in-out  ${item === "Home" ? "text-[#4FD1C5]" : "text-white"}  hover:text-[#4FD1C5]`}
                            >
                                {item}

                                {/* underline animation */}
                                <span
                                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4FD1C5] transition-all duration-500 ease-in-out hover:w-full"
                                />
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Login button  */}
                <div className='flex justify-center items-center gap-5 '>
                    <div className='flex justify-center items-center bg-white text-black px-8  py-2 rounded-full space-x-3'>
                        <div className='font-semibold text-base'>Login</div>
                        <div className=''>
                            <img src={user} alt="" />
                        </div>
                    </div>
                    <div className='text-white bg-primary-color p-2.5 rounded-full cursor-pointer hover:bg-white hover:text-primary-color duration-400 transition-all'>
                        <MenuIcon size={22} />
                    </div>
                </div>
            </div>
        </header>

    );
}
