import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from '../components/ui/GlitchText';
import OrganicWrapper from '../components/ui/OrganicWrapper';
import BrushStroke from '../components/ui/BrushStroke';

// MEN IMAGES
import men1 from '../assets/media/men/akbruce/SKY CAPTAIN_0000_Layer 128.jpg';
import men2 from '../assets/media/men/akbruce/SKY CAPTAIN_0003_Anerkjendt_Fall-Winter-2025-Anerkjendt_3059_902110_2.jpg';
import men3 from '../assets/media/men/akbruce/SKY CAPTAIN_0006_Layer 126.jpg';
import men4 from '../assets/media/men/ichi/ICHI VEST RED_0000_Layer 46(1).jpg';
import men5 from '../assets/media/men/twiz/TWIZY HO T.D_0001_Layer 8.jpg';

// WOMEN IMAGES
import women1 from '../assets/media/women/asami/asami indie1.jpg';
import women2 from '../assets/media/women/asami/asami indie2.jpg';
import women3 from '../assets/media/women/ichiwomen/ICHI VEST BLACK- DANA_0000_Layer 117.jpg';
import women4 from '../assets/media/women/yukata/YUKATA SAND TEX DANA_0000_Layer 154.jpg';
import women5 from '../assets/media/women/yukata/YUKATA SAND TEX DANA_0001_Layer 153.jpg';

const MEN_IMAGES = [men1, men2, men3, men4, men5];
const WOMEN_IMAGES = [women1, women2, women3, women4, women5];
const MIXED_IMAGES = [...MEN_IMAGES, ...WOMEN_IMAGES].sort(() => 0.5 - Math.random());

const ProductListing = () => {
    const { category } = useParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Determine content based on category
    const currentImages = useMemo(() => {
        const cat = category?.toLowerCase();
        if (cat === 'men') return MEN_IMAGES;
        if (cat === 'women') return WOMEN_IMAGES;
        return MIXED_IMAGES;
    }, [category]);

    const displayTitle = category ? category.replace('-', ' ') : 'Collection';

    // Mock Data generated based on category
    const products = useMemo(() => {
        return Array.from({ length: 8 }).map((_, i) => ({
            id: i + 1,
            name: `${category === 'men' ? 'Urban' : category === 'women' ? 'Visionary' : 'Lab'} Artifact ${i + 1}`,
            price: 45 + i * 5,
            image: currentImages[i % currentImages.length],
            category: category || 'General'
        }));
    }, [category, currentImages]);

    const filters = [
        { name: 'Size', options: ['S', 'M', 'L', 'XL', 'XXL'] },
        { name: 'Color', options: ['Black', 'White', 'Green', 'Purple'] },
        { name: 'Collection', options: ['New', 'Sale', 'Limited'] },
    ];

    return (
        <div className="pt-24 min-h-screen bg-plazma-dark text-white relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-plazma-gray/20 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="container mx-auto px-6 mb-20 relative z-10">
                <OrganicWrapper key={category} intensity="high" className="inline-block relative">
                    <BrushStroke variant={1} className="w-96 h-48 -top-10 -left-10 text-gray-800/80 -z-10 absolute" />
                    <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-4 text-white relative z-10">
                        <GlitchText text={displayTitle} />
                    </h1>
                </OrganicWrapper>

                <div className="flex items-center justify-between border-b border-white/10 pb-6 mt-8">
                    <p className="text-plazma-accent font-mono text-sm tracking-widest">{products.length} ARTIFACTS FOUND</p>
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:text-plazma-accent transition-colors border border-white/20 px-4 py-2 hover:border-plazma-accent"
                    >
                        <Filter size={18} /> Filters
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 relative z-10">
                {/* Sidebar Filters (Desktop) */}
                <aside className={`lg:w-64 space-y-12 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                    {filters.map((filter) => (
                        <div key={filter.name} className="border-b border-white/5 pb-6">
                            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-6 flex items-center justify-between">
                                <GlitchText text={filter.name} /> <ChevronDown size={14} />
                            </h3>
                            <div className="space-y-3">
                                {filter.options.map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-4 h-4 border border-gray-700 bg-plazma-dark/50 flex items-center justify-center group-hover:border-plazma-accent transition-colors">
                                            {/* Checkbox logic would go here */}
                                        </div>
                                        <span className="text-sm text-gray-500 font-mono group-hover:text-white transition-colors uppercase">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </aside>

                {/* Product Grid - Asymmetric Layout */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
                        {products.map((product, index) => (
                            <OrganicWrapper
                                key={`${category}-${product.id}`}
                                // Push every 2nd item down to create uneven grid
                                className={index % 2 !== 0 ? 'lg:translate-y-16' : ''}
                                intensity={index % 3 === 0 ? 'medium' : 'low'}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-gray-900 border-r border-b border-white/10 mb-6 group-hover:border-plazma-accent/50 transition-colors">

                                        {/* Image Glitch Effect Wrapper */}
                                        <div className="relative w-full h-full overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 desaturate group-hover:grayscale-0"
                                            />
                                            {/* Overlay Glitch Flash */}
                                            <div className="absolute inset-0 bg-plazma-accent/20 mix-blend-color-dodge opacity-0 group-hover:animate-pulse transition-opacity" />
                                        </div>

                                        {/* Quick Add Button */}
                                        <button className="absolute bottom-0 right-0 bg-white text-plazma-dark p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-plazma-accent z-20">
                                            <ShoppingBag size={20} />
                                        </button>

                                        {/* Decorative Corner */}
                                        <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 group-hover:bg-plazma-accent transition-colors" />
                                    </Link>

                                    <div className="space-y-2 text-center">
                                        <h3 className="text-lg font-display font-bold uppercase tracking-wider group-hover:text-plazma-accent transition-colors">
                                            <Link to={`/product/${product.id}`}>
                                                <GlitchText text={product.name} />
                                            </Link>
                                        </h3>
                                        <p className="text-plazma-muted font-mono text-sm">${product.price}.00</p>
                                    </div>
                                </motion.div>
                            </OrganicWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
