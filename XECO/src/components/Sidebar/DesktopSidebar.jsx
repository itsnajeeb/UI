import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import logo from '/assets/images/logo/logo.png';
import 'remixicon/fonts/remixicon.css'
export default function DesktopSidebar({ open, setOpen }) {

    const icons = [
        <i class="ri-facebook-fill"></i>,
        <i class="ri-twitter-fill"></i>,
        <i class="ri-instagram-line"></i>,
        <i class="ri-linkedin-fill"></i>,
        <i class="ri-youtube-fill"></i>
    ]
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />

                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="
              fixed top-0 right-0 z-50
              h-full w-[65%] max-w-sm
              bg-[#0F101E]  
              text-white
              flex flex-col  "
                    >
                        {/* HEADER */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                            <h2 className="text-2xl font-bold"><img src={logo} alt="" /></h2>

                            <motion.button
                                onClick={() => setOpen(false)}
                                animate={{ rotate: 720 }}
                                transition={{ duration: 0.9 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-color cursor-pointer"
                            >
                                <X size={22} />
                            </motion.button>
                        </div>

                        {/* Middle */}
                      <div className="flex  flex-col px-8 py-6 gap-5 manrope-fonts">

                        <div className="mb-2">
                            <h2 className="font-semibold text-lg">Office Address</h2>
                            <p className="text-[#a7a7a7] text-sm">123/A, Miranda City Likaoli <br /> Prikano, Dope</p>
                        </div>

                        <div className="">
                            <h2 className="font-semibold text-lg mb-2">Phone Number</h2>
                            <p className="text-[#a7a7a7] text-sm mb-1"> +0989 7876 9865 9</p>
                            <p className="text-[#a7a7a7] text-sm"> +(090) 8765 86543 85</p>
                        </div> 

                         <div className="">
                            <h2 className="font-semibold text-lg mb-2">Phone Number</h2>
                            <p className="text-[#a7a7a7] text-sm mb-1"> +0989 7876 9865 9</p>
                            <p className="text-[#a7a7a7] text-sm"> +(090) 8765 86543 85</p>
                        </div>
                        
                      </div>

                        {/* SOCIAL */}
                        <div className="px-3 py-6  border-white/10 flex gap-3  justify-center">
                            {/* {["f", "t", "i", "in", "y"].map((s, i) => ( */}
                            {icons.map((s, i) => (
                                <div
                                    key={i}
                                    className=" w-9 h-9 border border-white/20 flex items-center justify-center rounded hover:bg-primary-color transition-all duration-300 cursor-pointer"
                                >
                                    {s}
                                </div>
                            ))}
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
