import React, { useState } from 'react';

interface ShortlistViewProps {
    onCompare: () => void;
    onViewDetail: () => void;
}

const ShortlistView: React.FC<ShortlistViewProps> = ({ onCompare, onViewDetail }) => {
    const [selectedItems, setSelectedItems] = useState<Array<{id: string, image: string}>>([]);

    const toggleSelection = (id: string, image: string) => {
        setSelectedItems(prev => {
            if (prev.find(item => item.id === id)) {
                return prev.filter(item => item.id !== id);
            }
            return [...prev, { id, image }];
        });
    };

    const isSelected = (id: string) => selectedItems.some(item => item.id === id);

    return (
        <div className="flex flex-1 flex-col lg:flex-row max-w-7xl mx-auto w-full p-4 lg:p-8 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 sticky top-24">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-semibold text-base text-slate-800 dark:text-white">Your Profile</h2>
                        <button className="text-primary text-xs font-medium hover:underline">Edit</button>
                    </div>
                    <div className="space-y-3 text-sm">
                        <ProfileItem icon="apartment" label="Context" value="160 sqft • Top Floor" />
                        <ProfileItem icon="bedtime" label="Usage" value="8-10h/Night" />
                        <ProfileItem icon="location_on" label="Location" value="Mumbai (Coastal)" />
                        <ProfileItem icon="bolt" label="Power" value="Unstable" />
                        <ProfileItem icon="account_balance_wallet" label="Budget" value="< ₹45,000" />
                    </div>
                </div>
            </aside>
            
            <main className="flex-1 pb-24">
                <header className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Top Matches for Mumbai</h1>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Optimized for <span className="font-medium text-slate-800 dark:text-slate-200">coastal durability</span> and <span className="font-medium text-slate-800 dark:text-slate-200">high heat load</span>.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">Sort by:</span>
                        <select className="text-xs border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 py-1 pl-2 pr-8 focus:ring-primary focus:border-primary">
                            <option>Relevance</option>
                            <option>Price: Low to High</option>
                            <option>Match Score</option>
                        </select>
                    </div>
                </header>
                
                <div className="space-y-6">
                    <ProductCard 
                        id="daikin"
                        rank={1}
                        matchScore={9.4}
                        model="Daikin 1.5 Ton 5 Star Inverter Split AC"
                        modelCode="MTKM50U"
                        price="₹41,990"
                        originalPrice="₹58,400"
                        discount="28% off"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmfumUE-W5-MCYey3qfbAbbl4UzNGAmOC8R0I3rjpUVvh8zUGqfyCEwixZjBI2oHWJGmuFsZhxQCiNF0DCgle5bia0sbXN7I5uVaY69wXUFq9PCV5rPBY8ze_MEvUvHvipFRpYYD10SqYrvt1BxYXaGhR53k1X54cJIepy7Pxx8SDkvLZmkRYS2Vp9DzZCM6wqGmi9WDbO4p9kI7tvVZ4VNkhq_5wS0uKyc9c_SyjGJ5wtnxpMLVVa6QzBg0qokYgSZiE4ypkdrwI"
                        badges={['High Service Reach', 'Excellent Durability', '5 Star']}
                        reasons={[
                            { title: 'Top Floor Ready', text: 'Oversized capacity (5280W) specifically counters heat gain from your roof.' },
                            { title: 'Coastal Build', text: '100% Copper condenser resists salt corrosion better than alloy alternatives.' },
                            { title: 'ROI', text: 'At 8h/night, you recover the higher upfront cost in ~18 months via electricity savings.' }
                        ]}
                        verifiedReview={{
                            text: "Tested during May heatwave in Thane. Cooling didn't trip even once unlike my neighbor's Voltas.",
                            source: "Team-BHP",
                            author: "Verified Purchase"
                        }}
                        totalCost="₹62,450"
                        selected={isSelected("daikin")}
                        onToggle={() => toggleSelection("daikin", "https://lh3.googleusercontent.com/aida-public/AB6AXuCmfumUE-W5-MCYey3qfbAbbl4UzNGAmOC8R0I3rjpUVvh8zUGqfyCEwixZjBI2oHWJGmuFsZhxQCiNF0DCgle5bia0sbXN7I5uVaY69wXUFq9PCV5rPBY8ze_MEvUvHvipFRpYYD10SqYrvt1BxYXaGhR53k1X54cJIepy7Pxx8SDkvLZmkRYS2Vp9DzZCM6wqGmi9WDbO4p9kI7tvVZ4VNkhq_5wS0uKyc9c_SyjGJ5wtnxpMLVVa6QzBg0qokYgSZiE4ypkdrwI")}
                        onViewDetail={onViewDetail}
                    />

                    <ProductCard 
                        id="panasonic"
                        rank={2}
                        matchScore={8.9}
                        model="Panasonic 1.5 Ton Wi-Fi Inverter"
                        modelCode="CS/CU-NU18YKY5W"
                        price="₹44,500"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuC87hJZ3_fLTxdGBrZXJlKynO83t4roxTVcqppb8jec8edgyt_p__6POdyX9i0D970X-j70vwF2RtknlXoMc6o3LOhZQM4Sy3oE9rJUH9KW72V0FKRQu5lqv-kr3hDpnDqLDA7XpcxOPeAq0BMVntlcUOm_rWIjwSPwgvtJXqnp89DhnbytmGikjXq81nmL1t25mq6aJXsJEC0NPQBi5EcOU9f0O4rm_HuuXCu6TzoZmHxqdLC2B404GoS39ymCkhrSpTQH4xp3riM"
                        badges={['Moderate Service', 'Average Durability', 'High Efficiency']}
                        reasons={[
                            { title: 'Built-in Stabilizer', text: 'Handles 100-290V range perfectly, saving you the cost of an external unit.' },
                            { title: 'Dry Mode', text: 'Exceptional at removing sticky Mumbai humidity without overcooling the room.' }
                        ]}
                        verifiedReview={{
                            text: "Smart app is a blessing. I turn it on 15 mins before reaching home in Mumbai traffic.",
                            source: "Reddit r/India",
                            author: "Owner Review"
                        }}
                        totalCost="₹61,800"
                        selected={isSelected("panasonic")}
                        onToggle={() => toggleSelection("panasonic", "https://lh3.googleusercontent.com/aida-public/AB6AXuC87hJZ3_fLTxdGBrZXJlKynO83t4roxTVcqppb8jec8edgyt_p__6POdyX9i0D970X-j70vwF2RtknlXoMc6o3LOhZQM4Sy3oE9rJUH9KW72V0FKRQu5lqv-kr3hDpnDqLDA7XpcxOPeAq0BMVntlcUOm_rWIjwSPwgvtJXqnp89DhnbytmGikjXq81nmL1t25mq6aJXsJEC0NPQBi5EcOU9f0O4rm_HuuXCu6TzoZmHxqdLC2B404GoS39ymCkhrSpTQH4xp3riM")}
                        onViewDetail={onViewDetail}
                    />
                    
                    <ProductCard 
                        id="lg"
                        rank={3}
                        matchScore={8.7}
                        model="LG 1.5 Ton 5 Star AI Convertible 6-in-1"
                        modelCode="RS-Q19YNZE"
                        price="₹46,490"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDDttcP8RAGUCElzahHfxLcMXumT6Rgu09bNby9sHiGqhJIl2krrGjrfph2LpTP6rW7XbM-X0pAH_0OSrCTXPnzlkMUorjs-YoskNMdAuEOKYLsfVxre71JDbCWVJlP7qisPXbip_wtkoe9JOFJPUUpXixO71HfFMPMDJeWYVldS7bElFcst_L3iKaFtRTjEWhg-2PzpBbBTbmdB4v9HfAHvGiYghDrJwF-RErPgMh4EcVqUYXQfFouqM6LJkbIEwHWainbpNni7oc"
                        badges={['High Service Reach', 'High Durability', '5 Star']}
                        reasons={[
                            { title: 'Ocean Black Protection', text: 'Black coating on fins drastically reduces rust issues near the sea.' },
                            { title: 'Convertible', text: '6-in-1 modes let you run at 40% capacity on cool nights, saving energy.' }
                        ]}
                        verifiedReview={{
                            text: "Living in Worli facing the sea. 2 years and zero rust on the outdoor unit coils thanks to the black coating.",
                            source: "Amazon Reviews",
                            author: "Verified Purchase"
                        }}
                        totalCost="₹66,190"
                        selected={isSelected("lg")}
                        onToggle={() => toggleSelection("lg", "https://lh3.googleusercontent.com/aida-public/AB6AXuDDttcP8RAGUCElzahHfxLcMXumT6Rgu09bNby9sHiGqhJIl2krrGjrfph2LpTP6rW7XbM-X0pAH_0OSrCTXPnzlkMUorjs-YoskNMdAuEOKYLsfVxre71JDbCWVJlP7qisPXbip_wtkoe9JOFJPUUpXixO71HfFMPMDJeWYVldS7bElFcst_L3iKaFtRTjEWhg-2PzpBbBTbmdB4v9HfAHvGiYghDrJwF-RErPgMh4EcVqUYXQfFouqM6LJkbIEwHWainbpNni7oc")}
                        onViewDetail={onViewDetail}
                    />
                </div>
            </main>
            
            <div className={`fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-primary/20 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 transition-transform duration-300 ${selectedItems.length > 0 ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                        <div className="text-sm text-slate-500 hidden sm:block">Compare models side-by-side</div>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {selectedItems.map((item) => (
                                    <div key={item.id} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-700 flex items-center justify-center overflow-hidden relative shadow-sm">
                                        <img className="w-full h-full object-cover" src={item.image} alt="selected"/>
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{selectedItems.length} Selected</span>
                        </div>
                    </div>
                    <button 
                        onClick={onCompare}
                        className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                        disabled={selectedItems.length < 2}
                    >
                        <span className="material-icons text-xl">compare_arrows</span>
                        Compare ({selectedItems.length}) Models
                    </button>
                </div>
            </div>
        </div>
    );
};

function ProfileItem({ icon, label, value }: { icon: string, label: string, value: string }) {
    return (
        <div className="flex items-center gap-3 py-1 text-slate-600 dark:text-slate-400">
            <span className="material-icons text-slate-400 text-lg">{icon}</span>
            <div className="leading-tight">
                <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">{label}</div>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{value}</span>
            </div>
        </div>
    )
}

function ProductCard({ id, rank, matchScore, model, modelCode, price, originalPrice, discount, image, badges, reasons, verifiedReview, totalCost, selected, onToggle, onViewDetail }: any) {
    return (
        <article className={`relative bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border-2 transition-all duration-300 overflow-hidden group hover:shadow-md ${selected ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-700'}`}>
            <div className="absolute top-4 right-4 z-20">
                <label className="inline-flex items-center cursor-pointer p-1 bg-white/80 dark:bg-black/50 rounded backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-colors">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary border-slate-300 rounded focus:ring-primary/20 transition duration-150 ease-in-out" checked={selected || false} onChange={onToggle} />
                    <span className="ml-2 text-xs font-bold text-primary dark:text-primary-dark hidden sm:inline-block">Compare</span>
                </label>
            </div>
            
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center cursor-pointer" onClick={onViewDetail}>
                <div className="w-full sm:w-24 h-24 flex-shrink-0 bg-white rounded-lg p-1 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                    <img src={image} alt={model} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
                
                <div className="flex-1 min-w-0 pr-16 sm:pr-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${rank === 1 ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                            {rank === 1 ? '#1 Match' : rank === 2 ? '#2 Match' : 'Runner Up'}
                        </span>
                        <span className="text-[10px] font-medium text-slate-500">Model: {modelCode}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight truncate hover:text-primary transition-colors">{model}</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                        <div className="text-xl font-bold text-slate-900 dark:text-white">{price}</div>
                        {originalPrice && <div className="text-xs text-slate-400 line-through">{originalPrice}</div>}
                        {discount && <span className="text-green-600 text-xs font-medium ml-1">{discount}</span>}
                    </div>
                </div>
                
                <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-1 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-4 sm:pt-0 sm:pl-4 mt-2 sm:mt-0 justify-between sm:justify-center">
                    <div className="flex flex-col items-center">
                        <div className={`text-3xl font-bold ${rank === 1 ? 'text-primary' : 'text-slate-700 dark:text-slate-300'}`}>{matchScore}</div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Match Score</div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        {badges.map((_: any, i: number) => (
                            <div key={i} className="tooltip-trigger relative cursor-help">
                                <span className={`material-icons text-[16px] ${rank === 1 ? 'text-green-600' : 'text-slate-400'}`}>
                                    {i === 0 ? 'build_circle' : i === 1 ? 'shield' : 'bolt'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="w-full sm:w-auto flex sm:flex-col gap-2 mt-2 sm:mt-0">
                    <button className="flex-1 sm:flex-none bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium py-2 px-4 rounded-lg shadow hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm whitespace-nowrap">
                        Check Price
                    </button>
                </div>
            </div>
            
            <div className="bg-white/50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onViewDetail();
                    }}
                    className="w-full flex items-center justify-center p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-semibold text-primary uppercase tracking-wide gap-1"
                >
                    Show Detailed Reasoning <span className="material-icons text-sm">arrow_forward</span>
                </button>
            </div>
        </article>
    )
}

export default ShortlistView;