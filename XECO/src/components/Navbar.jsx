import logo from '/assets/images/logo/logo.png';
import user from '/assets/images/icon/user.png';
import { Menu, MenuIcon } from 'lucide-react';
import { useEffect,  useState } from 'react';
import MobileRightSidebar from './Sidebar/MobileSidebarMenu';
import { useIsMobile } from '../../hooks/UseMediaQuery';
import DesktopSidebar from './Sidebar/DesktopSidebar';
export default function Navbar() {
    const navItems = [
        { label: "HOME", id: "HOME" },
        { label: "FEATURE", id: "FEATURE" },
        { label: "ICO CHART", id: "ICOCHART" },
        { label: "ROADMAP", id: "ROADMAP" },
        { label: "BLOG", id: "BLOG" },
        { label: "CONTACT", id: "CONTACT" },
    ];
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile(1024);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
 
    return (
        <>
            <header
                className={` w-full z-50 transition-all duration-500 ease-in-out py-4 md:py-8
         ${isSticky
                        ? "fixed top-0 left-0 bg-[#0F101E] backdrop-blur-md py-4 shadow-lg translate-y-0"
                        : "absolute top-0 left-0 bg-transparent py-8 translate-y-0"} `}
            >
                <div className="flex relative  pt-0 justify-between px-5 mx-auto max-w-xl items-center manrope-fonts lg:px-10  md:px-1 md:border-none md:max-w-full">
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <nav className="  ">
                        <div className="hidden items-center gap-6 px-7 py-4 rounded-full bg-[#0F101E] backdrop-blur-md border font-medium border-white/10  lg:gap-5 lg:px-7 xl:gap-10 md:flex">

                            {navItems.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const section = document.getElementById(item.id);
                                        section?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                    className={`cursor-pointer relative text-sm tracking-wide transition-colors duration-500 ease-in-out  ${item.label === "Home" ? "text-[#4FD1C5]" : "text-white"} hover:text-[#4FD1C5]`}
                                >
                                    {item.label}

                                    {/* underline animation */}
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#4FD1C5] transition-all duration-500 ease-in-out hover:w-full" />
                                </button>
                            ))}
                        </div>

                    </nav>

                    {/* Login button  */}
                    <div className='flex justify-center items-center gap-5 border  '>

                        <div className='hidden cursor-pointer justify-center items-center bg-white text-black px-5  py-2 rounded-full space-x-3 xl:px-7  lg:flex'>
                            <div className='font-semibold xl:text-base text-sm '>Login</div>
                            <div className=''>
                                <img src={user} alt="" />
                            </div>
                        </div>

                        <div className='text-white bg-primary-color p-2.5 rounded-full cursor-pointer hover:bg-white hover:text-primary-color duration-400 transition-all'>
                            <MenuIcon size={20}
                                onClick={() => setOpen(true)}
                            />
                        </div>

                    </div>
                </div>
            </header>
            {isMobile ? (
                <MobileRightSidebar open={open} setOpen={setOpen} />
            ) : (
                <DesktopSidebar open={open} setOpen={setOpen} />
            )}        </>


    );
}
