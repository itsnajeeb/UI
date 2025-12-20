import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import logo from '/assets/images/logo/logo.png';
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
export default function MobileSidebar({ open, setOpen }) {
    const [blogOpen, setBlogOpen] = useState(false);

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
              h-full w-[72%] max-w-75
              bg-[#0F101E]  
              text-white
              flex flex-col
            "
                    >
                        {/* HEADER */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                            <h2 className="text-2xl font-bold"><img src={logo} alt="" /></h2>

                            <motion.button
                                onClick={() => setOpen(false)}
                                animate={{ rotate: 720 }}
                                transition={{ duration: 0.9 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-color"
                            >
                                <X size={22} />
                            </motion.button>
                        </div>

                        {/* MENU */}
                        <nav className=" py-3">
                            <ul className="space-y-2 text-sm font-semibold manrope-fonts ">
                                <li className="border-b border-white/10 pb-3 px-5">Home</li>
                                <li className="border-b border-white/10 pb-3 px-5">Feature</li>
                                <li className="border-b border-white/10 pb-3 px-5">ICO Chart</li>
                                <li className="border-b border-white/10 pb-3 px-5">Roadmap</li>

                                <li className="border-b border-white/10 pb-3 px-5">
                                    <button
                                        onClick={() => setBlogOpen(!blogOpen)}
                                        className="w-full flex items-center justify-between"
                                    >
                                        <span>Blog</span>

                                        <motion.span
                                            animate={{ rotate: blogOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={20} />
                                        </motion.span>
                                    </button>

                                    <AnimatePresence>
                                        {blogOpen && (
                                            <motion.ul
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="mt-4 ml-4 space-y-3 text-sm text-gray-300 overflow-hidden"
                                            >
                                                <li className="cursor-pointer hover:text-primary-color transition">
                                                    Latest Posts
                                                </li>
                                                <li className="cursor-pointer hover:text-primary-color transition">
                                                    News
                                                </li>
                                                <li className="cursor-pointer hover:text-primary-color transition">
                                                    Tutorials
                                                </li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li className="border-b border-white/10 pb-3 px-5">Roadmap</li>

                            </ul>
                        </nav>

                        {/* SOCIAL */}
                        <div className="px-3 py-6  border-white/10 flex gap-3  justify-center">
                            {/* {["f", "t", "i", "in", "y"].map((s, i) => ( */}
                            {icons.map((s, i) => (
                                <div
                                    key={i}
                                    className=" w-9 h-9 border border-white/20 flex items-center justify-center rounded hover:bg-primary-color transition"
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
