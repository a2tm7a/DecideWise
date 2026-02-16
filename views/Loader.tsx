import React, { useEffect, useState } from 'react';

interface LoaderViewProps {
    onComplete: () => void;
}

const STEPS = [
    { 
        title: "Review Aggregation", 
        desc: "Scraping 4,000+ verified reviews",
        duration: 1000 
    },
    { 
        title: "Community Sentiment", 
        desc: "Analyzing Reddit & Team-BHP threads",
        duration: 1000 
    },
    { 
        title: "Hype Filtration", 
        desc: "Applying Hype Filter & Sentiment Analysis...",
        duration: 1000 
    },
    { 
        title: "ROI Calculation", 
        desc: "Calculating ROI for your Mumbai home",
        duration: 1000 
    },
    { 
        title: "Recommendation", 
        desc: "Finalizing your perfect match",
        duration: 1000 
    }
];

const LoaderView: React.FC<LoaderViewProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        const totalDuration = 5000; // 5 seconds total
        const intervalTime = 50;
        const stepsCount = STEPS.length;
        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(100, (elapsed / totalDuration) * 100);
            
            setProgress(newProgress);

            // Calculate which step is active based on time elapsed
            const stepDuration = totalDuration / stepsCount;
            const currentStep = Math.min(stepsCount - 1, Math.floor(elapsed / stepDuration));
            setCurrentStepIndex(currentStep);

            if (elapsed >= totalDuration) {
                clearInterval(timer);
                setTimeout(onComplete, 500); // Small buffer before switching
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="flex-grow flex items-center justify-center p-4 bg-background-light dark:bg-background-dark min-h-[calc(100vh-64px)]">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column: Visual & Title */}
                <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-accent dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                            <span className="material-icons text-sm animate-spin">sync</span>
                            AI Analysis in Progress
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                            Synthesizing <br />
                            <span className="text-accent">Market Data</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                            We are processing 12+ data sources to find your perfect match, not just a top-seller. Hang tight while we crunch the numbers.
                        </p>
                    </div>

                    {/* Report Generating Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden max-w-lg">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-shimmer"></div>
                        
                        <div className="flex items-start gap-4 mb-8 opacity-50">
                            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                            <div className="space-y-2 flex-1">
                                <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                                <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl h-40 w-full mb-6 flex items-center justify-center relative border border-slate-100 dark:border-slate-800/50">
                            <span className="material-icons text-6xl text-slate-200 dark:text-slate-700 animate-pulse">manage_search</span>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-icons text-4xl text-accent animate-bounce">search</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Generating Report...</span>
                                <span className="text-lg font-bold text-accent">{Math.round(progress)}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-accent transition-all duration-100 ease-linear rounded-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Processing Status List */}
                <div className="h-full flex items-center">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800 w-full max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                <span className="material-icons text-accent">analytics</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Processing Status</h2>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Connector Line */}
                            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800 z-0"></div>

                            {STEPS.map((step, index) => {
                                const isCompleted = index < currentStepIndex || (index === currentStepIndex && progress === 100);
                                const isCurrent = index === currentStepIndex && progress < 100;
                                const isPending = index > currentStepIndex;

                                return (
                                    <div key={index} className="relative z-10 flex gap-4">
                                        {/* Icon State */}
                                        <div className="flex-shrink-0">
                                            {isCompleted ? (
                                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-green-500 flex items-center justify-center transition-all duration-300 transform scale-100">
                                                    <span className="material-icons text-green-600 dark:text-green-400 text-xl font-bold">check</span>
                                                </div>
                                            ) : isCurrent ? (
                                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-accent flex items-center justify-center relative">
                                                    <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin absolute inset-[-2px]"></div>
                                                    <span className="material-icons text-accent text-lg">sync</span>
                                                </div>
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                                    <span className="material-icons text-slate-400 text-lg">hourglass_empty</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Text Content */}
                                        <div className={`transition-opacity duration-300 ${isPending ? 'opacity-40' : 'opacity-100'}`}>
                                            <h3 className={`font-bold text-base ${isCurrent ? 'text-accent' : 'text-slate-900 dark:text-white'}`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoaderView;