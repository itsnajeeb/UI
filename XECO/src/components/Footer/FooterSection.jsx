import GradientText from '../CommonComponents/GradientText';
import GetInTouchForm from './GetInTouchForm';
import footerShape01 from '/assets/images/footer_shape01.png'
import footerShape02 from '/assets/images/footer_shape02.png'
import TelegramIcon from '@mui/icons-material/Telegram';
export default function FooterSection() {
    return (
        <footer className="relative mt-64 manrope-fonts">
           

            <div className="absolute -top-80 left-1/2  -translate-x-1/2 z-30 w-full max-w-4xl px-6">
                <GetInTouchForm />
            </div>

            <div className=" mx-7 rounded-2xl border border-white
  relative overflow-hidden
  top-20    pt-[300px]
  bg-linear-to-b from-[#2f8b7a] via-[#0e3b3a] to-[#050714]
  text-white
">

                {/* BACKGROUND GRID EFFECT */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.08)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.08)_96%)] bg-[size:80px_80px]" />

                {/* LEFT BALL */}
                <img
                    src={footerShape01}
                    className="absolute left-[0px] top-40 bottom-40 w-20 h-38 opacity-70"
                    alt=""
                />

                {/* RIGHT BALL */}
                <img
                    src={footerShape02}
                    className="absolute right-[80px] top-50 w-20 h-20 opacity-80"
                    alt=""
                />

               

                <div className="relative z-10 max-w-[1200px] mx-auto px-10 pt-32 pb-16">

                    {/* TITLE */}


                    {/* FOOTER GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  overflow-visible">

                        {/* COLUMN 1 */}
                        <div>
                            <h4 className="mb-6 font-semibold uppercase text-base">Useful Links</h4>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li>Contact Us</li>
                                <li>How it Works</li>
                                <li>Create</li>
                                <li>Explore</li>
                                <li>Terms & Services</li>
                            </ul>
                        </div>

                        {/* COLUMN 2 */}
                        <div>
                            <h4 className="mb-6 font-semibold uppercase text-base">Solutions</h4>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li>Token Suite</li>
                                <li>Ecosystem</li>
                                <li>Investment</li>
                                <li>Portal</li>
                                <li>Tokenization</li>
                            </ul>
                        </div>

                        {/* COLUMN 3 */}
                        <div>
                            <h4 className="mb-6 font-semibold uppercase text-base">Useful Links</h4>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li>Help Center</li>
                                <li>Partners</li>
                                <li>Suggestions</li>
                                <li>Blog</li>
                                <li>Newsletters</li>
                            </ul>
                        </div>

                        {/* COLUMN 4 */}
                        <div>
                            <h4 className="mb-6 font-semibold uppercase text-base">
                                Subscribe Newsletter
                            </h4>

                            <p className="text-slate-300 mb-6 text-sm">
                                Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
                            </p>

                            <div className="flex  items-center justify-center bg-[#0b1220] rounded-xl overflow-hidden">

                                <input
                                    type="email"
                                    placeholder="info@gmail.com"
                                    className="bg-transparent px-4 py-4 outline-none text-sm "
                                />

                                <button className="bg-white px-4 hover:bg-primary-color transition-all duration-300 overflow-visible  cursor-pointer flex justify-center items-center text-black  py-4   mr-1">
                                    <TelegramIcon/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-slate-400">
                        Copyright © 2023 XECO. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
