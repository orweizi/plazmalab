import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, Heart, Share2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GlitchText from '../components/ui/GlitchText';
import OrganicWrapper from '../components/ui/OrganicWrapper';

// Import real images (shared with listing)
import men1 from '../assets/media/men/akbruce/SKY CAPTAIN_0000_Layer 128.jpg';
import men2 from '../assets/media/men/akbruce/SKY CAPTAIN_0003_Anerkjendt_Fall-Winter-2025-Anerkjendt_3059_902110_2.jpg';
import women1 from '../assets/media/women/asami/asami indie1.jpg';
import women2 from '../assets/media/women/asami/asami indie2.jpg';

const ALL_IMAGES = [men1, women1, men2, women2];

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    // Select a base image based on ID, then offer others as gallery
    const baseIndex = (parseInt(id) || 1) % ALL_IMAGES.length;
    // Create a mini-gallery by rotating the array starting from baseIndex
    const images = [
        ALL_IMAGES[baseIndex],
        ALL_IMAGES[(baseIndex + 1) % ALL_IMAGES.length],
        ALL_IMAGES[(baseIndex + 2) % ALL_IMAGES.length]
    ];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div className="pt-32 pb-20 bg-plazma-dark text-white min-h-screen">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <OrganicWrapper intensity="medium">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="aspect-[3/4] bg-gray-800 overflow-hidden relative group"
                            >
                                <img
                                    src={images[activeImage]}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </OrganicWrapper>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, index) => (
                                <OrganicWrapper
                                    as="button"
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`aspect-[3/4] bg-gray-800 overflow-hidden border-2 transition-colors ${activeImage === index ? 'border-plazma-accent' : 'border-transparent hover:border-gray-600'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                                </OrganicWrapper>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:sticky lg:top-32 h-fit space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
                                    Riot Pants Stone
                                </h1>
                                <button className="text-gray-400 hover:text-plazma-accent transition-colors">
                                    <Heart size={24} />
                                </button>
                            </div>
                            <p className="text-2xl text-plazma-accent font-light">$120.00</p>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span>(24 Reviews)</span>
                            </div>
                        </div>

                        <div className="prose prose-invert text-gray-300 font-light leading-relaxed">
                            <p>
                                Urban ninja style pants made from high quality cotton.
                                Features custom metal buttons, secret pockets, and a unique
                                asymmetrical cut. Perfect for festivals or street wandering.
                            </p>
                        </div>

                        {/* Size Selector */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="font-bold uppercase tracking-wide">Select Size</span>
                                <button className="text-gray-400 underline hover:text-white">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-5 gap-3">
                                {sizes.map((size) => (
                                    <OrganicWrapper
                                        as="button"
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 border transition-all duration-200 ${selectedSize === size
                                            ? 'border-plazma-accent bg-plazma-accent/10 text-plazma-accent'
                                            : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                                            }`}
                                    >
                                        {size}
                                    </OrganicWrapper>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-800">
                            <OrganicWrapper className="flex items-center border border-gray-700 w-fit">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-4 hover:text-plazma-accent transition-colors"
                                >
                                    <Minus size={18} />
                                </button>
                                <span className="w-12 text-center font-bold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-4 hover:text-plazma-accent transition-colors"
                                >
                                    <Plus size={18} />
                                </button>
                            </OrganicWrapper>
                            <OrganicWrapper
                                as="button"
                                className="flex-1 bg-plazma-accent text-plazma-dark font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                <ShoppingBag size={20} /> Add to Cart
                            </OrganicWrapper>
                        </div>

                        {/* Meta */}
                        <div className="space-y-2 text-sm text-gray-500 pt-8">
                            <p><span className="text-gray-300">SKU:</span> PLZ-2024-001</p>
                            <p><span className="text-gray-300">Categories:</span> Men, Pants, Urban</p>
                            <p><span className="text-gray-300">Tags:</span> Streetwear, Festival, Visionary Art</p>
                        </div>
                    </div>


                </div>

                {/* Related Products Carousel */}
                <div className="pt-20 border-t border-gray-800 mt-10">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider">
                            <GlitchText text="You May Also Like" />
                        </h2>
                        <Link to="/" className="text-sm font-mono text-gray-400 hover:text-plazma-accent transition-colors flex items-center gap-2">
                            VIEW ALL <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x">
                        {[...ALL_IMAGES, ...ALL_IMAGES].map((img, i) => (
                            <Link to={`/product/${i + 1}`} key={i} className="min-w-[280px] snap-center group relative block">
                                <OrganicWrapper intensity="low">
                                    <div className="aspect-[3/4] bg-gray-800 overflow-hidden mb-4 relative">
                                        <img
                                            src={img}
                                            alt="Related"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 desaturate group-hover:grayscale-0"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-plazma-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="font-bold uppercase tracking-wide text-sm group-hover:text-plazma-accent transition-colors">Artifact 00{i + 1}</h3>
                                    <p className="text-xs text-gray-500 font-mono mt-1">$120.00</p>
                                </OrganicWrapper>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
