import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from '../ui/GlitchText';

import CartDrawer from './CartDrawer';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Men', path: '/category/men' },
        { name: 'Women', path: '/category/women' },
        { name: 'Accessories', path: '/category/accessories' },
        { name: 'Art', path: '/category/art' },
        { name: 'Sale', path: '/category/sale', className: 'text-plazma-accent' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-plazma-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-display font-bold tracking-widest text-white hover:text-plazma-accent transition-colors">
                        <GlitchText text="PLAZMALAB" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium tracking-widest uppercase hover:text-plazma-accent transition-colors ${link.className || 'text-gray-300'}`}
                            >
                                <GlitchText text={link.name} />
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6 text-white">
                        <button className="hover:text-plazma-accent transition-colors">
                            <Search size={20} />
                        </button>
                        <button className="hover:text-plazma-accent transition-colors hidden sm:block">
                            <User size={20} />
                        </button>
                        <button
                            className="relative hover:text-plazma-accent transition-colors"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag size={20} />
                            <span className="absolute -top-2 -right-2 bg-plazma-accent text-plazma-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>
                        <button
                            className="md:hidden hover:text-plazma-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-plazma-dark border-t border-gray-800 overflow-hidden"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-lg font-medium uppercase tracking-wide ${link.className || 'text-gray-300'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default Navbar;
