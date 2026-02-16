import React from 'react';

interface ProductDetailProps {
    onOpenIssue: (id: string) => void;
    onBack: () => void;
}

const ProductDetailView: React.FC<ProductDetailProps> = ({ onOpenIssue, onBack }) => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="w-full max-w-7xl mb-4">
                <button 
                    onClick={onBack}
                    className="group flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium px-2 py-1 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <span className="material-icons text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Back
                </button>
            </div>

            <main className="w-full max-w-7xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <header className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">verified</span> Verified Match
                                </span>
                                <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">Evidence-Based Recommendation</span>
                            </div>
                            <div className="flex items-center gap-6 mb-4">
                                <div className="hidden md:block w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 border border-slate-200 p-2 relative">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYWwQegJHb5OHIOVUmG4aZ4-zoIkyFacrjG1rGE4alUlAHzgRuWAm-93NcMzmcu6nDRn8P6CMOy3UTHl_NFvcNyyNy848CEO4SvCfUQc6_VdrtdUL4hQM97qVcXv5ou-pFKTAAZhRzPalKiFv2XPmix-3GbrcFNHDMcJiFrbbWPzZtZNoqpOcW8vI63KDTOIPVnWAFBqZxhTw6ZUXr2jYtMAZlFuTcq0N2nHShTO2TYT3JARXSoihHVBt4ypx8y2La9Hord0ujto" alt="AC Product" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">LG 1.5T 5-Star AI+ Dual Inverter</h1>
                                    <div className="flex flex-wrap items-center gap-3 text-sm">
                                        <div className="flex items-center text-yellow-500">
                                            {[...Array(4)].map((_,i) => <span key={i} className="material-symbols-outlined text-lg fill-1">star</span>)}
                                            <span className="material-symbols-outlined text-lg fill-1">star_half</span>
                                            <span className="ml-1 font-bold text-slate-700 dark:text-slate-300">4.6</span>
                                        </div>
                                        <span className="text-slate-300">|</span>
                                        <span className="text-slate-500 dark:text-slate-400">Analysed <strong className="text-slate-700 dark:text-slate-300">2,123+</strong> reviews</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2 text-sm pl-0 md:pl-[120px]">
                                Optimized for: 
                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">Chennai Top-Floor</span>
                                <span className="text-slate-300">•</span>
                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">10h Daily Usage</span>
                                <span className="text-slate-300">•</span>
                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">PIN 600042</span>
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-3 min-w-[200px]">
                            <div className="text-right">
                                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Trust Score</div>
                                <div className="text-3xl font-bold text-primary">99.4%</div>
                                <div className="text-[10px] text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded inline-block mt-1">High Confidence</div>
                            </div>
                            <div className="flex items-center gap-2 mt-2 w-full justify-end">
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Report
                                </button>
                                <button className="flex-1 md:flex-none bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                                    Best Price 
                                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 border-r border-slate-100 dark:border-slate-800 flex flex-col">
                        <section className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">engineering</span>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Technical Fit</h2>
                                    <p className="text-xs text-slate-500">Why this hardware matches your needs</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <TechFitItem 
                                    title="1.5 Ton Capacity" 
                                    verified 
                                    desc={<span>Crucial for <span className="font-medium text-slate-900 dark:text-white">Top Floor</span> heat load (~30% higher). A 1.0T unit would run continuously without cutting off, increasing bills.</span>}
                                    progress={95}
                                    meta="Required: 1.42T | Provided: 1.50T"
                                />
                                <TechFitItem 
                                    title="100% Copper Condenser" 
                                    verified 
                                    desc={<span>Essential for <span className="font-medium text-slate-900 dark:text-white">Chennai Coastal</span> air. Aluminum fins degrade in 2-3 years here; Copper ensures 10+ year longevity.</span>}
                                />
                                <TechFitItem 
                                    title="Convertible 5-in-1" 
                                    verified 
                                    desc={<span>Optimizes for <span className="font-medium text-slate-900 dark:text-white">10h Daily Usage</span>. Running at 40% capacity at night saves ~₹300/month vs non-inverter.</span>}
                                />
                            </div>
                        </section>

                        <section className="p-6 md:p-8 flex-1 bg-amber-50/30 dark:bg-amber-900/5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-500">
                                    <span className="material-symbols-outlined">warning</span>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Watch-outs & Risks</h2>
                                    <p className="text-xs text-slate-500">Negative clusters identified in data</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <RiskAlert 
                                    title="Service Delay in PIN 600042" 
                                    cluster="High" 
                                    desc="Multiple users report 48-72h wait times for installation/repair in Velachery area during peak summer."
                                    linkText="View 3 original complaints"
                                    onClick={() => onOpenIssue('delay')}
                                />
                                <RiskAlert 
                                    title="Remote Control Lag" 
                                    cluster="Med" 
                                    desc="Display sometimes lags by 1-2 seconds when changing modes rapidly. Not a functional defect but annoying."
                                    linkText="View discussion thread"
                                    onClick={() => onOpenIssue('remote')}
                                />
                            </div>
                        </section>
                    </div>

                    <div className="w-full lg:w-2/3 bg-slate-50/50 dark:bg-slate-900/50">
                        <section className="p-6 md:p-8">
                             <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                        <span className="material-symbols-outlined">groups</span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Social Proof & Evidence</h2>
                                        <p className="text-xs text-slate-500">Real user experiences from 2,123 verified reviews</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sentiment:</span>
                                    <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                                        <span className="material-symbols-outlined text-sm">thumb_up</span> 88% Positive
                                     </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <StatCard score="4.6" label="Cooling Speed" percentage={92} color="green" />
                                <StatCard score="4.8" label="Energy Saving" percentage={96} color="green" />
                                <StatCard score="3.9" label="Installation" percentage={78} color="yellow" />
                                <StatCard score="4.2" label="Noise Level" percentage={84} color="green" />
                            </div>

                            <div className="mb-4 flex justify-between items-end">
                                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Community Evidence Gallery</h3>
                                <div className="flex gap-3 text-xs">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                        Read 14 Reddit Threads
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                                        View 8 Team-BHP Discussions
                                    </div>
                                </div>
                            </div>

                            <div className="relative group overflow-x-auto hide-scroll pb-4 flex gap-4 snap-x">
                                <ReviewSnippet 
                                    user="u/CoolingGeek_99" 
                                    source="r/IndiaTech" 
                                    time="2mo ago" 
                                    text="Honestly surprised by the bills. Using it 12 hours a day in Mumbai heat and bill only went up by ₹1800. The AI mode actually works." 
                                    tag="Verified Owner" 
                                    iconSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBtG51sCSTujlvNwJJS41XkgbWwb0Dd8AE1biFvXwRAXG71KPVt-RHMB0hq5RJoRjxg_Qgv8sGqRCvzIvUDeVfVFmCuyYDw_PyzvxeYQR14boIn-aK4G6ikdC7OBraU0eNNQwJpkiTvmMaCLOf-hg1Si7GsgLFJkIyH8XllAwCEUCgUtMBp7V5x8xQ8x89PrMQ_yXa-7FaCdZZL0GW-ALGb54tBcQ9GeOZDzfojIlAesh_EMwVMvTUA0YBqiJcQxrksf--v6tpz2_4"
                                />
                                <ReviewSnippet 
                                    user="BHPian_Turbo" 
                                    source="Team-BHP" 
                                    time="6mo ago" 
                                    text="The outdoor unit is quieter than my old Voltas. Cooling is solid even at 42°C. Only gripe is the remote feels cheap plastic." 
                                    tag="Long-term Review" 
                                    isForum
                                />
                                <ReviewSnippet 
                                    user="u/Chennai_Heat" 
                                    source="r/Chennai" 
                                    time="1yr ago" 
                                    text="Got this installed last week. Service center in Anna Nagar was super prompt. Came same day. Cooling is a beast." 
                                    tag="Local Experience" 
                                    iconSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBtG51sCSTujlvNwJJS41XkgbWwb0Dd8AE1biFvXwRAXG71KPVt-RHMB0hq5RJoRjxg_Qgv8sGqRCvzIvUDeVfVFmCuyYDw_PyzvxeYQR14boIn-aK4G6ikdC7OBraU0eNNQwJpkiTvmMaCLOf-hg1Si7GsgLFJkIyH8XllAwCEUCgUtMBp7V5x8xQ8x89PrMQ_yXa-7FaCdZZL0GW-ALGb54tBcQ9GeOZDzfojIlAesh_EMwVMvTUA0YBqiJcQxrksf--v6tpz2_4"
                                />
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-100/50 dark:bg-slate-800/20 -mx-6 md:-mx-8 px-6 md:px-8 py-6 mb-[-1.5rem] md:mb-[-2rem] rounded-b-xl">
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Data Confidence & Transparency</span>
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                        Aggregated from <strong>2,123+ Verified Reviews</strong> across major platforms. <br className="hidden sm:inline" />Confidence Score: <strong className="text-green-600 dark:text-green-400">99.4%</strong> based on cross-referenced user profiles.
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> 14 Reddit threads</span>
                                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> 8 Team-BHP posts</span>
                                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> 452 Amazon verified reviews</span>
                                    </div>
                                </div>
                                <button className="w-full sm:w-auto text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 dark:shadow-none">
                                    <span className="material-symbols-outlined text-lg">analytics</span>
                                    View Full Source Data
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

function TechFitItem({ title, verified, desc, progress, meta }: any) {
    return (
        <div className="group bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{title}</h3>
                {verified && (
                    <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">check_circle</span> Verified Fit
                    </span>
                )}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{desc}</p>
            {progress && (
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: `${progress}%` }}></div>
                </div>
            )}
            {meta && (
                <div className="flex justify-between mt-1 text-[10px] text-slate-400">
                    {meta.split('|').map((m: string, i: number) => <span key={i}>{m.trim()}</span>)}
                </div>
            )}
        </div>
    )
}

function RiskAlert({ title, cluster, desc, linkText, onClick }: any) {
    return (
        <div className="bg-white dark:bg-slate-900 border-l-4 border-amber-500 rounded-r-lg shadow-sm p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" onClick={onClick}>
            <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{title}</h4>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded">Cluster: {cluster}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2">{desc}</p>
            <div className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline">
                {linkText} <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </div>
        </div>
    )
}

function StatCard({ score, label, percentage, color }: any) {
    const bg = color === 'green' ? 'bg-green-500' : 'bg-yellow-500';
    return (
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 text-center shadow-sm">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{score}<span className="text-sm text-slate-400 font-normal">/5</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wide font-medium mt-1">{label}</div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full mt-2 overflow-hidden">
                <div className={`h-full ${bg}`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    )
}

function ReviewSnippet({ user, source, time, text, tag, iconSrc, isForum }: any) {
    return (
        <div className="min-w-[280px] md:min-w-[320px] bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 snap-center">
            <div className="flex items-center gap-2 mb-3">
                {isForum ? (
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                        <span className="material-symbols-outlined text-sm">forum</span>
                    </div>
                ) : (
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                         <img src={iconSrc} alt="User" className="w-4 h-4 opacity-80" />
                    </div>
                )}
                <div className="text-xs">
                    <p className="font-bold text-slate-700 dark:text-slate-200">{user}</p>
                    <p className="text-slate-400">{source} • {time}</p>
                </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mb-3 border border-slate-100 dark:border-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">"{text}"</p>
            </div>
            <div className="flex items-center justify-between text-xs">
                <span className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded font-medium">{tag}</span>
                <a href="#" className="text-primary hover:underline flex items-center gap-1">Source <span className="material-symbols-outlined text-[10px]">open_in_new</span></a>
            </div>
        </div>
    )
}

export default ProductDetailView;