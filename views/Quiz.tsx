import React, { useState } from 'react';

interface QuizViewProps {
    onComplete: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ onComplete }) => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSelect = (name: string, value: string) => {
        setAnswers(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const requiredFields = [
            'room_size', 'floor', 'ceiling', 
            'location', 'power', 'pincode', 
            'usage', 'ownership', 'health', 'noise'
        ];
        const newErrors: Record<string, string> = {};
        let isValid = true;

        requiredFields.forEach(field => {
            if (!answers[field]) {
                newErrors[field] = 'Please select an option';
                isValid = false;
            }
        });

        if (answers['pincode'] && !/^\d{6}$/.test(answers['pincode'])) {
            newErrors['pincode'] = 'Please enter a valid 6-digit PIN';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validate()) {
            onComplete();
        } else {
            // Find the first error and scroll to it
            setTimeout(() => {
                const firstError = document.querySelector('.error-marker');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    };

    return (
        <div className="flex flex-col flex-grow items-center justify-start py-10 px-4 sm:px-6">
            <div className="w-full max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center space-x-2 text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full mb-2">
                        <span>Comprehensive Analysis</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Let's build your perfect match</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
                        We use these 9 data points to filter out 95% of mismatched products.
                    </p>
                </div>

                <form className="mt-8 space-y-12" onSubmit={(e) => e.preventDefault()}>
                    {/* Section 1: Physical Space */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-sm">1</span>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Space & Layout</h2>
                        </div>
                        
                        {/* Q1 Room Size */}
                        <div className={`space-y-4 ${errors.room_size ? 'error-marker' : ''}`}>
                            <LabelWithInfo 
                                label="What is the approximate room size?" 
                                info="Base 150 sq ft = 1.2T. We adjust tonnage based on this to ensure compressor longevity."
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <QuizOption 
                                    id="size_small" 
                                    name="room_size" 
                                    icon="bed" 
                                    title="Small" 
                                    desc="< 100 sq ft" 
                                    tag="~10x10 ft" 
                                    checked={answers.room_size === 'size_small'}
                                    onChange={() => handleSelect('room_size', 'size_small')}
                                />
                                <QuizOption 
                                    id="size_medium" 
                                    name="room_size" 
                                    icon="weekend" 
                                    title="Medium" 
                                    desc="100 - 150 sq ft" 
                                    tag="Master Bedroom" 
                                    checked={answers.room_size === 'size_medium'}
                                    onChange={() => handleSelect('room_size', 'size_medium')}
                                />
                                <QuizOption 
                                    id="size_large" 
                                    name="room_size" 
                                    icon="living" 
                                    title="Large" 
                                    desc="150 - 200 sq ft" 
                                    tag="Living Hall" 
                                    checked={answers.room_size === 'size_large'}
                                    onChange={() => handleSelect('room_size', 'size_large')}
                                />
                            </div>
                            <ErrorMessage message={errors.room_size} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {/* Q2 Floor/Sun */}
                            <div className={`space-y-4 ${errors.floor ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Floor & Sun Exposure" 
                                    info="Top floor or West-facing walls trap heat, requiring +0.3T extra capacity."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="floor_standard" 
                                        name="floor" 
                                        icon="apartment" 
                                        title="Standard Room" 
                                        desc="Lower floors, shaded" 
                                        checked={answers.floor === 'floor_standard'}
                                        onChange={() => handleSelect('floor', 'floor_standard')}
                                    />
                                    <QuizListOption 
                                        id="floor_top" 
                                        name="floor" 
                                        icon="wb_sunny" 
                                        title="Top Floor / High Sun" 
                                        desc="Direct sunlight on roof/walls" 
                                        checked={answers.floor === 'floor_top'}
                                        onChange={() => handleSelect('floor', 'floor_top')}
                                    />
                                </div>
                                <ErrorMessage message={errors.floor} />
                            </div>

                            {/* Q3 Ceiling Height */}
                            <div className={`space-y-4 ${errors.ceiling ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Ceiling Height" 
                                    info="High roofs (>12ft) increase air volume, requiring higher capacity ACs."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="ceiling_std" 
                                        name="ceiling" 
                                        icon="height" 
                                        title="Standard / False Ceiling" 
                                        desc="< 10 ft height" 
                                        checked={answers.ceiling === 'ceiling_std'}
                                        onChange={() => handleSelect('ceiling', 'ceiling_std')}
                                    />
                                    <QuizListOption 
                                        id="ceiling_high" 
                                        name="ceiling" 
                                        icon="roofing" 
                                        title="High Ceiling" 
                                        desc="> 12 ft (Bungalows/Old flats)" 
                                        checked={answers.ceiling === 'ceiling_high'}
                                        onChange={() => handleSelect('ceiling', 'ceiling_high')}
                                    />
                                </div>
                                <ErrorMessage message={errors.ceiling} />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Environment */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-sm">2</span>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Environment & Location</h2>
                        </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Q4 Corrosion */}
                             <div className={`space-y-4 ${errors.location ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Corrosion Risk" 
                                    info="Coastal air or open drains release gases that eat copper. We filter for 'Blue Fin' or 'Ocean Black' protection."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="loc_std" 
                                        name="location" 
                                        icon="location_city" 
                                        title="Standard City Area" 
                                        desc="No major corrosion risks" 
                                        checked={answers.location === 'loc_std'}
                                        onChange={() => handleSelect('location', 'loc_std')}
                                    />
                                    <QuizListOption 
                                        id="loc_coastal" 
                                        name="location" 
                                        icon="water_drop" 
                                        title="Coastal / Near Drain" 
                                        desc="High corrosion risk (Mumbai/Chennai)" 
                                        checked={answers.location === 'loc_coastal'}
                                        onChange={() => handleSelect('location', 'loc_coastal')}
                                    />
                                </div>
                                <ErrorMessage message={errors.location} />
                            </div>

                            {/* Q5 Power Quality */}
                             <div className={`space-y-4 ${errors.power ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Power Quality" 
                                    info="Frequent cuts or fluctuations mandate an external stabilizer even for 'Stabilizer-free' models."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="power_stable" 
                                        name="power" 
                                        icon="bolt" 
                                        title="Stable Supply" 
                                        desc="Rare outages" 
                                        checked={answers.power === 'power_stable'}
                                        onChange={() => handleSelect('power', 'power_stable')}
                                    />
                                    <QuizListOption 
                                        id="power_unstable" 
                                        name="power" 
                                        icon="electrical_services" 
                                        title="Fluctuations / Cuts" 
                                        desc="Frequent voltage issues" 
                                        checked={answers.power === 'power_unstable'}
                                        onChange={() => handleSelect('power', 'power_unstable')}
                                    />
                                </div>
                                <ErrorMessage message={errors.power} />
                            </div>
                        </div>
                        
                         {/* Q6 Pin Code */}
                        <div className={`space-y-4 ${errors.pincode ? 'error-marker' : ''}`}>
                             <LabelWithInfo 
                                    label="Service Availability (Pin Code)" 
                                    info="We penalize brands with poor service networks in your specific area."
                                />
                            <div className="relative max-w-xs">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                                    <span className="material-icons">place</span>
                                </span>
                                <input 
                                    type="text" 
                                    placeholder="e.g. 400050" 
                                    value={answers.pincode || ''}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                                        handleSelect('pincode', val);
                                    }}
                                    className={`pl-10 block w-full rounded-lg bg-white dark:bg-slate-800 shadow-sm h-10 transition-colors focus:ring-primary focus:border-primary ${errors.pincode ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 dark:border-slate-700'}`}
                                />
                            </div>
                            <ErrorMessage message={errors.pincode} />
                        </div>
                    </section>

                    {/* Section 3: Lifestyle */}
                     <section className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-sm">3</span>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Usage & Lifestyle</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {/* Q7 Usage */}
                            <div className={`space-y-4 ${errors.usage ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Typical Usage" 
                                    info="For >10 hours, a 5-Star Inverter pays back its premium in ~14 months."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="usage_low" 
                                        name="usage" 
                                        icon="bedtime" 
                                        title="Night Only" 
                                        desc="< 8 hours/day (3-Star sufficient)" 
                                        checked={answers.usage === 'usage_low'}
                                        onChange={() => handleSelect('usage', 'usage_low')}
                                    />
                                    <QuizListOption 
                                        id="usage_high" 
                                        name="usage" 
                                        icon="history_toggle_off" 
                                        title="Heavy Usage" 
                                        desc="> 10 hours/day (5-Star recommended)" 
                                        checked={answers.usage === 'usage_high'}
                                        onChange={() => handleSelect('usage', 'usage_high')}
                                    />
                                </div>
                                <ErrorMessage message={errors.usage} />
                            </div>

                             {/* Q8 Ownership */}
                             <div className={`space-y-4 ${errors.ownership ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Ownership" 
                                    info="Tenants should avoid expensive installation models or consider Window ACs to save shifting costs."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="own_house" 
                                        name="ownership" 
                                        icon="home" 
                                        title="Homeowner" 
                                        desc="Permanent installation" 
                                        checked={answers.ownership === 'own_house'}
                                        onChange={() => handleSelect('ownership', 'own_house')}
                                    />
                                    <QuizListOption 
                                        id="own_rent" 
                                        name="ownership" 
                                        icon="move_up" 
                                        title="Tenant / Rented" 
                                        desc="Likely to shift in 1-2 years" 
                                        checked={answers.ownership === 'own_rent'}
                                        onChange={() => handleSelect('ownership', 'own_rent')}
                                    />
                                </div>
                                <ErrorMessage message={errors.ownership} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {/* Q9 Health */}
                             <div className={`space-y-4 ${errors.health ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Health & Air Quality" 
                                    info="Standard mesh filters don't stop Indian road dust/PM2.5. Allergies require PM2.5 filters."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="health_std" 
                                        name="health" 
                                        icon="air" 
                                        title="Standard Filtration" 
                                        desc="Basic dust filter" 
                                        checked={answers.health === 'health_std'}
                                        onChange={() => handleSelect('health', 'health_std')}
                                    />
                                    <QuizListOption 
                                        id="health_high" 
                                        name="health" 
                                        icon="masks" 
                                        title="High Pollution / Allergies" 
                                        desc="Need PM2.5 / HEPA filter" 
                                        checked={answers.health === 'health_high'}
                                        onChange={() => handleSelect('health', 'health_high')}
                                    />
                                </div>
                                <ErrorMessage message={errors.health} />
                            </div>

                             {/* Q10 Noise */}
                             <div className={`space-y-4 ${errors.noise ? 'error-marker' : ''}`}>
                                <LabelWithInfo 
                                    label="Noise Sensitivity" 
                                    info="Bedrooms require <28dB. Living rooms can tolerate standard 40dB levels."
                                />
                                <div className="grid grid-cols-1 gap-3">
                                    <QuizListOption 
                                        id="noise_std" 
                                        name="noise" 
                                        icon="volume_up" 
                                        title="Standard (Living Room)" 
                                        desc="Noise not critical" 
                                        checked={answers.noise === 'noise_std'}
                                        onChange={() => handleSelect('noise', 'noise_std')}
                                    />
                                    <QuizListOption 
                                        id="noise_low" 
                                        name="noise" 
                                        icon="volume_off" 
                                        title="Bedroom / Study" 
                                        desc="Need pin-drop silence (<28dB)" 
                                        checked={answers.noise === 'noise_low'}
                                        onChange={() => handleSelect('noise', 'noise_low')}
                                    />
                                </div>
                                <ErrorMessage message={errors.noise} />
                            </div>
                        </div>
                    </section>
                </form>
            </div>
            
            <div className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 fixed bottom-0 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    <button className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Back
                    </button>
                    <button 
                        onClick={handleSubmit}
                        className="px-8 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/20 transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center gap-2"
                    >
                        See Recommendations
                        <span className="material-icons text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
            {/* Spacer for fixed footer */}
            <div className="h-24"></div>
        </div>
    );
};

// Helper Components
function LabelWithInfo({ label, info }: { label: string, info: string }) {
    return (
        <div className="flex items-center justify-between">
            <label className="text-base font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                {label}
            </label>
            <div className="group relative flex items-center">
                <button className="flex items-center space-x-1 text-xs text-primary hover:text-primary-dark transition-colors cursor-help" type="button">
                    <span className="material-icons-outlined text-base">info</span>
                    <span className="hidden sm:inline">Why?</span>
                </button>
                <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                    <p>{info}</p>
                    <div className="absolute -bottom-1 right-6 w-3 h-3 bg-slate-800 rotate-45"></div>
                </div>
            </div>
        </div>
    )
}

function ErrorMessage({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <div className="flex items-center gap-1.5 text-red-500 text-xs font-semibold animate-in fade-in slide-in-from-left-1">
            <span className="material-icons text-[14px]">error_outline</span>
            {message}
        </div>
    );
}

function QuizOption({ id, name, icon, title, desc, tag, checked, onChange }: any) {
    return (
        <div className="relative h-full">
            <input 
                className="peer sr-only" 
                type="radio" 
                name={name} 
                id={id} 
                checked={checked} 
                onChange={onChange} 
            />
            <label 
                htmlFor={id} 
                className={`flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 border-2 rounded-xl cursor-pointer hover:border-primary/50 transition-all h-full relative group shadow-sm ${checked ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-700'}`}
            >
                {checked && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shadow-sm animate-in zoom-in duration-200">
                        <span className="material-icons-outlined text-xs">check</span>
                    </div>
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors ${checked ? 'bg-primary/20 text-primary' : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <span className="material-icons-outlined text-2xl">{icon}</span>
                </div>
                <span className={`text-base font-bold text-center leading-tight ${checked ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{title}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">{desc}</span>
                {tag && <span className="text-[10px] text-primary/80 mt-2 font-medium bg-primary/5 px-2 py-0.5 rounded">{tag}</span>}
            </label>
        </div>
    )
}

function QuizListOption({ id, name, icon, title, desc, checked, onChange }: any) {
    return (
        <div className="relative">
            <input 
                className="peer sr-only" 
                type="radio" 
                name={name} 
                id={id} 
                checked={checked} 
                onChange={onChange} 
            />
            <label 
                htmlFor={id}
                className={`flex items-center p-3 bg-white dark:bg-slate-800 border-2 rounded-lg cursor-pointer hover:border-primary/50 transition-all group shadow-sm ${checked ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-700'}`}
            >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors shrink-0 ${checked ? 'bg-primary/20 text-primary' : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <span className="material-icons-outlined text-lg">{icon}</span>
                </div>
                <div className="flex-grow">
                    <span className={`block text-sm font-bold ${checked ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{title}</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{desc}</span>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ml-2 ${checked ? 'bg-primary border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                    {checked && <span className="material-icons-outlined text-[10px] text-white">check</span>}
                </div>
            </label>
        </div>
    )
}

export default QuizView;