import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlitchText from '../components/ui/GlitchText';
import OrganicWrapper from '../components/ui/OrganicWrapper';
import BrushStroke from '../components/ui/BrushStroke';

// Import images (using the ones we downloaded)
import bannerWomen from '../assets/images/banner_women.png';
import productMain from '../assets/images/product_main.jpg';
import heroVideo from '../assets/media/gen/herovid.mp4';
import menImg from '../assets/media/men/akbruce/SKY CAPTAIN_0000_Layer 128.jpg';
import womenImg from '../assets/media/women/asami/asami indie1.jpg';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden bg-plazma-warm">
                {/* Background Video Layer with texture overlay */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-plazma-dark via-transparent to-black/80" />
                    {/* Artistic "Glitch" Lines */}
                    <div className="absolute top-1/4 left-0 w-full h-[1px] bg-plazma-accent/30 animate-pulse" />
                    <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-plazma-glow/20" />
                </div>

                <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8 relative"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter mix-blend-difference">
                            <GlitchText text="WEARABLE" /> <br />
                            <span className="text-plazma-from-white to-gray-500">ART</span>
                        </h1>
                        {/* Decorative floating element */}
                        <div className="absolute -top-10 -right-20 w-32 h-32 border border-plazma-accent/40 rounded-full animate-float hidden md:block" />
                    </motion.div>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl font-light tracking-wide"
                    >
                        <GlitchText text="Fusion of Art, Festival Culture" /> & Global Community
                    </motion.p>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            to="/category/men"
                            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-plazma-dark bg-white overflow-hidden transition-all hover:bg-plazma-accent"
                        >
                            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest">
                                Enter The Lab
                            </span>
                            <div className="absolute inset-0 bg-plazma-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Asymmetric Categories */}
            <section className="py-32 relative overflow-hidden">
                {/* Background decorative text */}
                <div className="absolute top-20 left-10 text-[200px] font-display font-bold text-white/5 pointer-events-none select-none leading-none">
                    PLAZMA
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Men - Larger, offset left */}
                        <OrganicWrapper className="md:col-span-7 h-[600px] relative group cursor-pointer" intensity="low">
                            <Link to="/category/men" className="block w-full h-full">
                                <div
                                    className="absolute inset-0 bg-gray-800"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 98% 90%, 0 100%)' }}
                                >
                                    <img src={menImg} alt="Men" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 desaturate group-hover:grayscale-0" />
                                    {/* Psychedelic overlay always present but changing on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-orange-900/40 mix-blend-difference opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                                </div>
                                {/* Label Container - High Z-Index to stay on top */}
                                <div className="absolute bottom-10 left-10 z-40 pointer-events-none">
                                    <BrushStroke variant={1} className="w-96 h-48 -top-16 -left-10 text-gray-800/80 -z-10 absolute" />
                                    <h2 className="text-8xl font-display font-bold text-white tracking-widest relative z-50 drop-shadow-2xl pointer-events-auto mix-blend-normal">
                                        <GlitchText text="MEN" />
                                    </h2>
                                </div>
                            </Link>
                        </OrganicWrapper>

                        {/* Women - Smaller, offset right, overlapping slightly in visual flow */}
                        <OrganicWrapper className="md:col-span-5 h-[450px] md:-ml-10 md:mt-20 relative group cursor-pointer z-20" intensity="medium">
                            <Link to="/category/women" className="block w-full h-full">
                                <div
                                    className="absolute inset-0 bg-gray-800 border-2 border-white/5"
                                    style={{ clipPath: 'polygon(2% 0, 100% 2%, 100% 100%, 0 95%)' }}
                                >
                                    <img src={womenImg} alt="Women" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-gradient-to-bl from-teal-900/40 to-pink-900/40 mix-blend-difference opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                                </div>
                                <div className="absolute top-10 right-10 z-40 pointer-events-none leading-none">
                                    <BrushStroke variant={2} className="w-80 h-40 -top-10 -right-10 text-gray-800/80 -z-10 absolute rotate-180" />
                                    <h2 className="text-7xl font-display font-bold text-white tracking-widest text-right relative z-50 drop-shadow-2xl pointer-events-auto mix-blend-normal">
                                        <GlitchText text="WOMEN" />
                                    </h2>
                                </div>
                            </Link>
                        </OrganicWrapper>
                    </div>
                </div>
            </section>

            {/* New Arrivals - "Beautiful Glitch" Grid */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="relative">
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
                                <span className="text-plazma-accent">NEW</span> DROPS
                            </h2>
                            <div className="h-1 w-1/2 bg-plazma-accent" />
                        </div>
                        <Link to="/category/new" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm tracking-widest uppercase mt-4 md:mt-0">
                            View All Collection <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {[1, 2, 3, 4].map((item, index) => (
                            <OrganicWrapper key={item} intensity={index % 2 === 0 ? 'low' : 'medium'} className={index % 2 !== 0 ? 'md:translate-y-12' : ''}>
                                <div className="group relative">
                                    <div
                                        className="relative aspect-[3/4] overflow-hidden bg-gray-900 mb-6 border border-white/5"
                                        style={{
                                            clipPath: index % 2 === 0
                                                ? 'polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%)'
                                                : 'polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 5%)'
                                        }}
                                    >
                                        <img
                                            src={productMain}
                                            alt="Product"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Glitch overlay on hover */}
                                        <div className="absolute inset-0 bg-plazma-accent/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-color-dodge" />

                                        <button className="absolute bottom-0 right-0 bg-white text-plazma-dark p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-plazma-accent">
                                            <ShoppingBag size={24} />
                                        </button>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white mb-1 tracking-wide">HOODIE {item}</h3>
                                    <p className="text-plazma-muted font-mono">$89.00</p>
                                </div>
                            </OrganicWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
