import React from 'react';

interface IssueDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    issueId: string;
}

const IssueDrawer: React.FC<IssueDrawerProps> = ({ isOpen, onClose, issueId }) => {
    return (
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
            
            {/* Drawer */}
            <div className={`fixed inset-y-0 right-0 w-full max-w-xl bg-background-light dark:bg-background-dark shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                 <div className="px-6 py-6 border-b border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark z-10 flex-shrink-0">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                            <span className="material-icons text-base">warning</span>
                            <span>Issue Analysis</span>
                        </div>
                        <button onClick={onClose} className="rounded-md bg-transparent text-slate-400 hover:text-slate-500 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors p-1">
                            <span className="material-icons">close</span>
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                        Noisy Outdoor Unit (Vibration)
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                        Reports indicate excessive rattling specifically during the compressor startup cycle.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3 border border-primary/10">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Confidence Score</span>
                                <span className="material-icons text-primary text-sm" title="High data volume">verified</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-primary">92%</span>
                                <span className="text-xs text-primary font-medium">Very High</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-2">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                             <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Severity Impact</span>
                                <span className="material-icons text-orange-500 text-sm">group</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-slate-800 dark:text-slate-200">~18%</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">of owners</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-2">
                                <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: '18%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Content Scrollable */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8 bg-background-light dark:bg-background-dark">
                    <section>
                         <div className="flex items-center gap-2 mb-3">
                            <span className="material-icons text-slate-400 text-sm">business</span>
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Brand Response</h3>
                        </div>
                        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border-l-4 border-primary shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                             <div className="flex items-start gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                                    <span className="font-bold text-xs text-slate-700 dark:text-slate-200">LG</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-slate-900 dark:text-white text-sm">Official LG Support</span>
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Verified</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        We are aware of the vibration reports in the 'X-Series' 2023 batch. This is due to a mounting bracket alignment issue. A <span className="font-semibold text-slate-900 dark:text-white">free dampener kit</span> is available for all affected customers via service request.
                                    </p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <a href="#" className="text-xs font-medium text-primary hover:text-primary-dark flex items-center gap-1 transition-colors">
                                            View Official Statement <span className="material-icons text-[14px]">open_in_new</span>
                                        </a>
                                        <span className="text-xs text-slate-400">•</span>
                                        <span className="text-xs text-slate-400">Updated 2 days ago</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </section>

                    <section>
                         <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="material-icons text-slate-400 text-sm">fact_check</span>
                                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Verified Sources</h3>
                            </div>
                            <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-800 rounded-full px-2 py-1 cursor-help" title="We filter out bots and paid reviews">
                                <span className="material-icons text-[14px] text-slate-500">filter_alt</span>
                                <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">Filters Active</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {/* Reddit Source */}
                            <div className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#FF4500] flex items-center justify-center shrink-0">
                                             <span className="text-white text-xs font-bold">R</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">r/HVACAdvice</p>
                                            <p className="text-[10px] text-slate-400">User: AC_Expert_Mumbai</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">3 weeks ago</span>
                                </div>
                                <blockquote className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-slate-200 dark:border-slate-700 pl-3 mb-3 italic">
                                    "...installed 15 of these units this summer. <span className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 px-1 rounded">The fan motor mount seems to be the issue</span> creating that resonance. Tightening it doesn't help much, needs rubber washers."
                                </blockquote>
                                <a href="#" className="text-xs text-primary font-medium hover:underline inline-flex items-center gap-1">Read Thread <span className="material-icons text-[12px]">launch</span></a>
                            </div>

                            {/* Amazon Source */}
                             <div className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-50 to-transparent dark:from-orange-900/10 rounded-bl-full pointer-events-none"></div>
                                <div className="flex justify-between items-start mb-3 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center shrink-0">
                                            <span className="text-[10px] font-bold text-white">Amz</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Amazon Verified Purchase</p>
                                                 <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50" title="Review passed AI authenticity check">
                                                    <span className="material-icons text-[10px]">auto_awesome</span> HYPE FILTER
                                                </span>
                                            </div>
                                            <div className="flex text-orange-400 text-[10px] mt-0.5">
                                                <span className="material-icons text-[12px]">star</span>
                                                <span className="material-icons text-[12px]">star</span>
                                                <span className="material-icons text-[12px]">star_border</span>
                                                <span className="material-icons text-[12px]">star_border</span>
                                                <span className="material-icons text-[12px]">star_border</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-slate-200 dark:border-slate-700 pl-3 mb-3 italic relative z-10">
                                    "Cooling is great but the <span className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-1 rounded decoration-red-300 underline decoration-wavy">loud rattling noise started after 2 weeks</span>. Technician said it's normal but it wakes up the neighbors."
                                </blockquote>
                                <div className="flex justify-between items-center relative z-10">
                                    <span className="text-[10px] text-slate-400">Review from Mumbai, MH</span>
                                    <a href="#" className="text-xs text-primary font-medium hover:underline inline-flex items-center gap-1">See Review <span className="material-icons text-[12px]">launch</span></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                         <div className="flex items-center gap-2 mb-3">
                            <span className="material-icons text-slate-400 text-sm">map</span>
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Report Density</h3>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 flex gap-4 items-center">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 relative">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJNkxbBuAP3Qn5pIrJyVsiA0BACA0XehaZcSH8DBPvomycEGsqCqowiKsLw-CBeiaENAKL61SrmTeeA_TFucYiisLdRIPeH486mzG57DKZ31NO1d5rcgw0w8XRKK_R8bhCTjh1Xrjzhpcp-ySwURYubYPOVePv2Cush23glxbzoeqbNtsbNYipjPMXWhjYSZtVOrRUO_fob_BUIkFIeArvT0PKN-PgwFsREjTefdS6yR97-dBmsVrJeosMxFL_emOFIzW91oi0o2Q" alt="Map" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                    <span className="w-8 h-8 rounded-full bg-primary/30 animate-ping absolute"></span>
                                    <span className="w-3 h-3 rounded-full bg-primary relative border-2 border-white dark:border-slate-900"></span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">High Incidence in Coastal Cities</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">45% of reports originate from Mumbai and Chennai. Possible correlation with high-humidity operation.</p>
                            </div>
                        </div>
                    </section>
                </div>
                
                 {/* Footer / Action Area */}
                <div className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 p-6 z-10 flex-shrink-0">
                    <div className="flex gap-3">
                        <button className="flex-1 bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                            Share Report
                        </button>
                        <button className="flex-1 bg-primary text-white py-2.5 px-4 rounded-lg text-sm font-medium shadow-sm hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            Track This Issue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueDrawer;