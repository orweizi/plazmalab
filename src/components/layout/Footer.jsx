import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-plazma-gray text-gray-400 py-16 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-display font-bold tracking-widest">PLAZMALAB</h3>
                        <p className="text-sm leading-relaxed">
                            Urban tribe wear. Psychedelic street fashion.
                            Designed and manufactured in Tel Aviv.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider">Shop</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">Men</a></li>
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">Women</a></li>
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">Accessories</a></li>
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">Sale</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider">Help</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">Size Guide</a></li>
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-plazma-accent transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider">Stay Connected</h4>
                        <p className="text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-plazma-dark border border-gray-700 text-white px-4 py-2 w-full focus:outline-none focus:border-plazma-accent transition-colors"
                            />
                            <button className="bg-plazma-accent text-plazma-dark px-4 py-2 font-bold hover:bg-white transition-colors">
                                JOIN
                            </button>
                        </div>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="hover:text-plazma-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-plazma-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-plazma-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-plazma-accent transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Plazmalab. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
