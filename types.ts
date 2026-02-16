export enum ViewState {
    HOME = 'HOME',
    QUIZ = 'QUIZ',
    LOADING = 'LOADING',
    SHORTLIST = 'SHORTLIST',
    COMPARISON = 'COMPARISON',
    PRODUCT_DETAIL = 'PRODUCT_DETAIL'
}

export interface Product {
    id: string;
    model: string;
    brand: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    matchScore: number;
    rank: number; // 1, 2, 3
    image: string;
    features: string[];
    pros: string[];
    cons: string[];
    verifiedReview?: {
        text: string;
        source: string;
        authorType?: string; // Verified Purchase, Owner
    };
    specs: {
        capacity: string;
        condenser: string;
        iseer: number;
        coolingSpeed: number;
        energySaving: number;
        installation: number;
        noiseLevel: number;
    };
    risk?: {
        title: string;
        description: string;
        owners: number;
        severity: 'High' | 'Medium' | 'Low';
        source: string;
    };
}