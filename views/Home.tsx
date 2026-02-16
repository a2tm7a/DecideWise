import React from 'react';

interface HomeViewProps {
    onStart: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onStart }) => {
    return (
        <div className="flex flex-col flex-grow">
            <main className="flex-grow flex flex-col items-center justify-center px-4 pt-16 pb-16 sm:pt-20 sm:pb-20">
                <div className="w-full max-w-3xl text-center space-y-12 animate-in fade-in zoom-in duration-500">
                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                            Stop guessing.<br />Start <span className="text-primary">knowing.</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                            Unbiased, data-driven research for your most important purchases.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-6 pt-4">
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <button 
                                onClick={onStart}
                                className="group relative flex items-center gap-3 px-8 py-4 bg-primary text-white shadow-lg shadow-primary/30 rounded-full text-lg font-semibold hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
                            >
                                <span className="material-icons text-2xl">ac_unit</span>
                                Find the Best Air Conditioner
                                <span className="material-icons text-white/80 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 w-full">Coming Soon</span>
                            <div className="relative group">
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium cursor-not-allowed opacity-75">
                                    <span className="material-icons text-base">laptop</span>
                                    Laptops
                                </button>
                                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded shadow-sm border border-white dark:border-slate-900">SOON</span>
                            </div>
                            <div className="relative group">
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium cursor-not-allowed opacity-75">
                                    <span className="material-icons text-base">tv</span>
                                    TVs
                                </button>
                                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded shadow-sm border border-white dark:border-slate-900">SOON</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                <span className="material-icons text-primary text-2xl">science</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Evidence-backed</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Our recommendations come from analyzing thousands of data points, not marketing brochures.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                <span className="material-icons text-primary text-2xl">verified_user</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">No sponsored content</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    We accept zero payment from manufacturers. Your trust is our only currency.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                <span className="material-icons text-primary text-2xl">bubble_chart</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Real issue clusters</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    We aggregate user complaints to reveal hidden flaws like "coil whine" or "PCB failure".
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-10 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Recently Decided</h2>
                        <p className="text-slate-500 dark:text-slate-400">Join 1,200+ people who found their perfect match this week.</p>
                    </div>
                    <a href="#" className="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1 group">
                        View all insights 
                        <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ReviewCard 
                        name="Arjun K." 
                        location="Mumbai, IN" 
                        text="Needed a 1.5 Ton AC that handles high humidity without running up the bill. The analysis on inverter efficiency was spot on."
                        product="Daikin 1.5 Ton 5 Star"
                    />
                    <ReviewCard 
                        name="Priya S." 
                        location="Bangalore, IN" 
                        text="Was confused between copper and aluminium condensers. The guide clearly explained why copper is better for coastal longevity."
                        product="LG 1.5 Ton AI Convertible"
                    />
                    <ReviewCard 
                        name="Rahul M." 
                        location="Delhi, IN" 
                        text="The noise level comparison chart was the deciding factor. I need absolute silence for my home office setup."
                        product="Mitsubishi Heavy Duty"
                    />
                </div>
            </section>
            
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                                    <span className="material-icons text-white text-[10px]">analytics</span>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">DecideWise</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Making complex purchase decisions simple, transparent, and data-backed for Indian consumers.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Platform</h4>
                            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Methodology</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Data Sources</a></li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Categories</h4>
                            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <li><a href="#" className="text-primary font-medium hover:text-primary transition-colors">Air Conditioners</a></li>
                                <li><a href="#" className="opacity-50 cursor-not-allowed">Laptops (Soon)</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-100 dark:border-slate-800 mt-12 pt-8 text-center text-xs text-slate-400">
                        © 2023 DecideWise Research Labs. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

function ReviewCard({ name, location, text, product }: { name: string, location: string, text: string, product: string }) {
    return (
        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                        <span className="material-icons text-slate-400">person</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
                        <p className="text-xs text-slate-500">{location}</p>
                    </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Verified Purchase
                </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">"{text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center p-2">
                    <span className="material-icons text-slate-300">ac_unit</span>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Selected</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{product}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeView;