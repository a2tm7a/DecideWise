import React from 'react';

interface ComparisonViewProps {
    onViewWinner: () => void;
    onOpenIssue: (id: string) => void;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({ onViewWinner, onOpenIssue }) => {
    return (
        <div className="max-w-7xl mx-auto w-full p-4 lg:p-8 pb-20 animate-in fade-in slide-in-from-right-4 duration-500">
            <header className="mb-10 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-blue-100 dark:border-blue-800">
                    <span className="material-icons text-base">analytics</span>
                    Analysed 3,500+ combined reviews from Verified Owners
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">Head-to-Head Reality Check</h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Comparing tradeoffs based on <span className="font-semibold text-slate-800 dark:text-slate-200">Mumbai Coastal conditions</span> & <span className="font-semibold text-slate-800 dark:text-slate-200">Top Floor</span> usage constraints.</p>
            </header>

            <div className="bg-gradient-to-r from-primary/10 via-blue-50 to-primary/10 dark:from-primary/20 dark:via-slate-800 dark:to-primary/20 border border-primary/20 rounded-2xl p-6 mb-12 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-icons text-9xl text-primary">emoji_events</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 flex items-center gap-1.5 shadow-sm">
                    <span className="material-icons text-primary text-sm">verified_user</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Trust Score</span>
                    <span className="text-sm font-extrabold text-primary">99.4%</span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 mt-2">
                    <div className="flex-shrink-0 bg-white dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-primary/30">
                        <span className="material-icons text-4xl text-primary">verified</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-1">DecideWise Verdict</h2>
                        <p className="text-slate-700 dark:text-slate-300">
                            <span className="font-bold text-primary">Daikin MTKM50U</span> is the winner for your <span className="font-semibold">Top Floor</span> apartment. Its superior 5280W capacity handles the roof heat load better than the Panasonic, despite the higher initial cost.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button 
                            onClick={onViewWinner}
                            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors flex items-center gap-2"
                        >
                            View Winner <span className="material-icons text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 relative">
                
                {/* Desktop Divider & Badge */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:border-slate-700 -ml-px z-0"></div>
                <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-widest shadow-sm">VS</div>

                {/* --- HEADER ROW --- */}
                
                {/* Left Product Header */}
                <div className="lg:col-start-1 lg:row-start-1 z-10">
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 h-full flex flex-col justify-between">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-20 h-20 bg-white rounded-lg p-2 border border-slate-100 dark:border-slate-700 flex-shrink-0">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmfumUE-W5-MCYey3qfbAbbl4UzNGAmOC8R0I3rjpUVvh8zUGqfyCEwixZjBI2oHWJGmuFsZhxQCiNF0DCgle5bia0sbXN7I5uVaY69wXUFq9PCV5rPBY8ze_MEvUvHvipFRpYYD10SqYrvt1BxYXaGhR53k1X54cJIepy7Pxx8SDkvLZmkRYS2Vp9DzZCM6wqGmi9WDbO4p9kI7tvVZ4VNkhq_5wS0uKyc9c_SyjGJ5wtnxpMLVVa6QzBg0qokYgSZiE4ypkdrwI" alt="Daikin AC" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Your #1 Match</span>
                                </div>
                                <h3 className="font-bold text-lg leading-tight text-slate-900 dark:text-white">Daikin 1.5 Ton 5 Star</h3>
                                <div className="text-sm text-slate-500">MTKM50U</div>
                                <div className="mt-1 font-bold text-slate-900 dark:text-white">₹41,990</div>
                            </div>
                        </div>
                        <div className="mt-auto p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800/30 flex items-start gap-3">
                            <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-xl flex-shrink-0 mt-0.5">travel_explore</span>
                            <div>
                                <div className="text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wide mb-0.5">Hype Filter Applied</div>
                                <p className="text-[11px] text-purple-700 dark:text-purple-400 leading-tight">Removed 215 potentially incentivized reviews from this analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Product Header */}
                <div className="lg:col-start-3 lg:row-start-1 z-10 mt-6 lg:mt-0">
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 h-full flex flex-col justify-between">
                         <div className="flex items-start gap-4 mb-4">
                            <div className="w-20 h-20 bg-white rounded-lg p-2 border border-slate-100 dark:border-slate-700 flex-shrink-0">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87hJZ3_fLTxdGBrZXJlKynO83t4roxTVcqppb8jec8edgyt_p__6POdyX9i0D970X-j70vwF2RtknlXoMc6o3LOhZQM4Sy3oE9rJUH9KW72V0FKRQu5lqv-kr3hDpnDqLDA7XpcxOPeAq0BMVntlcUOm_rWIjwSPwgvtJXqnp89DhnbytmGikjXq81nmL1t25mq6aJXsJEC0NPQBi5EcOU9f0O4rm_HuuXCu6TzoZmHxqdLC2B404GoS39ymCkhrSpTQH4xp3riM" alt="Panasonic AC" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Runner Up</span>
                                </div>
                                <h3 className="font-bold text-lg leading-tight text-slate-900 dark:text-white">Panasonic 1.5 Ton Wi-Fi</h3>
                                <div className="text-sm text-slate-500">CS/CU-NU18YKY5W</div>
                                <div className="mt-1 font-bold text-slate-900 dark:text-white">₹44,500</div>
                            </div>
                        </div>
                         <div className="mt-auto p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800/30 flex items-start gap-3">
                            <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-xl flex-shrink-0 mt-0.5">travel_explore</span>
                            <div>
                                <div className="text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wide mb-0.5">Hype Filter Applied</div>
                                <p className="text-[11px] text-purple-700 dark:text-purple-400 leading-tight">Removed 205 potentially incentivized reviews from this analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- TECHNICAL FIT ROW --- */}

                {/* Left Product Tech */}
                <div className="lg:col-start-1 lg:row-start-2 z-10 h-full">
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 h-full">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span className="material-icons text-primary text-xl">straighten</span> Technical Fit
                        </h4>
                        <div className="space-y-4">
                            <TechFitBar label="Cooling Capacity (5280W)" status="Perfect Fit" statusColor="text-green-600 dark:text-green-400" percentage={100} note="Exceeds requirement for top floor heat load." />
                            <TechFitBar label="Condenser (Copper)" status="Verified" statusBadge percentage={100} />
                            <TechFitBar label="ISEER Rating (5.2)" status="Verified" statusBadge percentage={95} />
                        </div>
                    </div>
                </div>

                 {/* Right Product Tech */}
                 <div className="lg:col-start-3 lg:row-start-2 z-10 h-full">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 h-full">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span className="material-icons text-primary text-xl">straighten</span> Technical Fit
                        </h4>
                        <div className="space-y-4">
                            <TechFitBar label="Cooling Capacity (5050W)" status="Adequate" statusColor="text-amber-600 dark:text-amber-400" percentage={85} barColor="bg-amber-500" note="Slightly lower capacity for top floor." />
                            <TechFitBar label="Condenser (Copper)" status="Verified" statusBadge percentage={100} />
                            <TechFitBar label="ISEER Rating (5.1)" status="Verified" statusBadge percentage={90} />
                        </div>
                    </div>
                </div>

                {/* --- PERFORMANCE ROW --- */}

                {/* Left Product Perf */}
                <div className="lg:col-start-1 lg:row-start-3 z-10 h-full">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 h-full">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span className="material-icons text-primary text-xl">leaderboard</span> Performance Scores
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            <ScoreCard label="Cooling Speed" score={4.8} />
                            <ScoreCard label="Energy Saving" score={4.9} />
                            <ScoreCard label="Installation" score={4.2} />
                            <ScoreCard label="Noise Level" score={4.5} />
                        </div>
                    </div>
                </div>

                {/* Right Product Perf */}
                <div className="lg:col-start-3 lg:row-start-3 z-10 h-full">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 h-full">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span className="material-icons text-primary text-xl">leaderboard</span> Performance Scores
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            <ScoreCard label="Cooling Speed" score={4.3} />
                            <ScoreCard label="Energy Saving" score={4.7} />
                            <ScoreCard label="Installation" score={4.5} />
                            <ScoreCard label="Noise Level" score={4.0} />
                        </div>
                    </div>
                </div>

                {/* --- RISKS ROW --- */}

                {/* Left Product Risk */}
                <div className="lg:col-start-1 lg:row-start-4 z-10 h-full">
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 h-full">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span className="material-icons text-loss text-xl">warning_amber</span> Watch-outs & Risks
                        </h4>
                         <div className="space-y-4">
                            <RiskItem 
                                title="PCB Failure Reports" 
                                count={128} 
                                risk="Moderate Risk" 
                                source="Team-BHP" 
                                desc="Cluster detected in 12% of reviews from areas with voltage fluctuations."
                                colorClass="bg-amber-400"
                                onOpen={() => onOpenIssue('vibration')}
                            />
                             <RiskItem 
                                title="Remote Usability" 
                                count={86} 
                                risk="Usability" 
                                riskColor="text-slate-600 bg-slate-100 border-slate-200"
                                source="" 
                                desc="Frequent complaints about lack of backlight for night use."
                                colorClass="bg-slate-300 dark:bg-slate-600"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Product Risk */}
                <div className="lg:col-start-3 lg:row-start-4 z-10 h-full">
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 h-full">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span className="material-icons text-loss text-xl">warning_amber</span> Watch-outs & Risks
                        </h4>
                         <div className="space-y-4">
                            <RiskItem 
                                title="Blue Fin Degradation" 
                                count={194} 
                                risk="High Risk" 
                                riskColor="text-red-700 bg-red-50 border-red-100"
                                source="Twitter" 
                                desc="High reports of coating wearing off after 2 years in coastal zones."
                                colorClass="bg-red-500"
                            />
                             <RiskItem 
                                title="App Connectivity" 
                                count={62} 
                                risk="Usability" 
                                riskColor="text-slate-600 bg-slate-100 border-slate-200"
                                source="" 
                                desc="Occasional drops requiring hard reset of the WiFi module."
                                colorClass="bg-slate-300 dark:bg-slate-600"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 mb-10">
                <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 text-xl">
                    <span className="material-icons text-primary">forum</span> Community Evidence Gallery
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <EvidenceCard 
                        tag="Daikin Owner" 
                        tagColor="bg-green-100 text-green-700"
                        rating={5}
                        text="I live on the 14th floor in Noida, direct sun. The Daikin cools the room in 10 mins flat. My previous Voltas struggled after 1PM. Definitely worth the extra 3k."
                        verified
                        via="Amazon India"
                        analysis="High Performance, Verified against 42 similar reports."
                    />
                     <EvidenceCard 
                        tag="Panasonic Owner" 
                        tagColor="bg-blue-100 text-blue-700"
                        rating={4.5}
                        text="The Miraie app is a lifesaver. I turn on the AC before leaving work. Cooling is decent but takes time on very hot days. The silent mode is truly silent."
                        verified
                        via="Flipkart"
                        analysis="High Convenience. Verified against 12 similar smart-feature reports."
                    />
                </div>
            </div>
        </div>
    );
};

function TechFitBar({ label, status, statusColor, percentage, barColor = "bg-green-500", note, statusBadge }: any) {
    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
                {statusBadge ? (
                     <span className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">Verified</span>
                ) : (
                    <span className={`text-xs font-bold ${statusColor}`}>{status}</span>
                )}
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                <div className={`h-full rounded-full ${barColor}`} style={{ width: `${percentage}%` }}></div>
            </div>
            {note && <p className="text-xs text-slate-500 mt-1">{note}</p>}
        </div>
    )
}

function ScoreCard({ label, score }: { label: string, score: number }) {
    return (
        <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{label}</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">{score}<span className="text-sm text-slate-400 font-normal">/5</span></div>
        </div>
    )
}

function RiskItem({ title, count, risk, riskColor = "text-amber-700 bg-amber-50 border-amber-100", source, desc, colorClass, onOpen }: any) {
    return (
        <div className="flex gap-3 cursor-pointer group" onClick={onOpen}>
            <div className={`w-1.5 ${colorClass} rounded-full flex-shrink-0 mt-1`}></div>
            <div>
                <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">{title}</h5>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-1.5 rounded border border-slate-200 dark:border-slate-700">{count} owners</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">{desc}</p>
                <div className="mt-2 flex items-center gap-2">
                    <span className={`text-[10px] font-medium border px-2 py-0.5 rounded ${riskColor}`}>{risk}</span>
                    {source && (
                        <div className="flex items-center gap-1 group/source">
                            <span className="text-[10px] text-slate-400 group-hover/source:text-primary transition-colors">Source: {source}</span>
                            <span className="material-icons text-[10px] text-slate-300 group-hover/source:text-primary transition-colors">open_in_new</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function EvidenceCard({ tag, tagColor, rating, text, verified, via, analysis }: any) {
    return (
         <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative">
            <div className="absolute top-4 right-4">
                <span className="material-icons text-slate-200 dark:text-slate-700 text-4xl">format_quote</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <div className={`${tagColor} text-xs font-bold px-2 py-1 rounded`}>{tag}</div>
                <div className="flex text-amber-400 text-xs">
                     {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-icons text-sm">{i < Math.floor(rating) ? 'star' : (i < rating ? 'star_half' : 'star_border')}</span>
                     ))}
                </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 italic">"{text}"</p>
            <div className="border-t border-slate-100 dark:border-slate-700 pt-3 mt-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        {verified && <div className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold">Verified Purchase</div>}
                        <a href="#" className="flex items-center gap-1 text-xs text-slate-500 font-medium hover:text-primary transition-colors group">
                            via {via}
                            <span className="material-icons text-[12px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
                        </a>
                    </div>
                     <div className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                        <span className="material-symbols-outlined text-[14px]">link</span> Source Verified
                     </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-2 rounded text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-slate-400 mt-0.5">analytics</span>
                    <span><span className="font-semibold text-slate-600 dark:text-slate-300">Analysis Note:</span> Sentiment: {analysis}</span>
                </div>
            </div>
        </div>
    )
}

export default ComparisonView;