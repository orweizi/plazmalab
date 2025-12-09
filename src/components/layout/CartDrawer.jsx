import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import productMain from '../../assets/images/product_main.jpg';

const CartDrawer = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-plazma-dark border-l border-gray-800 z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                            <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                                Your Cart (2)
                            </h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {[1, 2].map((item) => (
                                <div key={item} className="flex gap-4">
                                    <div className="w-20 h-24 bg-gray-800 flex-shrink-0">
                                        <img src={productMain} alt="Product" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-white uppercase text-sm">Riot Pants Stone</h3>
                                            <p className="text-xs text-gray-400">Size: M</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-gray-700">
                                                <button className="p-1 hover:text-plazma-accent"><Minus size={14} /></button>
                                                <span className="px-2 text-sm text-white">1</span>
                                                <button className="p-1 hover:text-plazma-accent"><Plus size={14} /></button>
                                            </div>
                                            <span className="font-bold text-plazma-accent">$120.00</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-800 bg-plazma-gray/50 space-y-4">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span className="text-white font-bold">$240.00</span>
                            </div>
                            <p className="text-xs text-gray-500 text-center">Shipping & taxes calculated at checkout</p>
                            <button className="w-full bg-plazma-accent text-plazma-dark font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
