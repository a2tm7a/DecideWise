import React, { useState } from 'react';
import { ViewState } from './types';
import HomeView from './views/Home';
import QuizView from './views/Quiz';
import LoaderView from './views/Loader';
import ShortlistView from './views/Shortlist';
import ComparisonView from './views/Comparison';
import ProductDetailView from './views/ProductDetail';
import IssueDrawer from './components/IssueDrawer';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [previousView, setPreviousView] = useState<ViewState | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContentId, setDrawerContentId] = useState<string>('vibration'); // Default to vibration for demo

  const navigateTo = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPreviousView(currentView);
    setCurrentView(view);
  };

  const handleBack = () => {
    // If we have a valid previous view (not loading/home/quiz which are one-way flows typically), go back to it.
    // Otherwise default to Shortlist.
    if (previousView && previousView !== ViewState.LOADING && previousView !== ViewState.QUIZ && previousView !== ViewState.HOME) {
        navigateTo(previousView);
    } else {
        navigateTo(ViewState.SHORTLIST);
    }
  };

  const openDrawer = (issueId: string) => {
    setDrawerContentId(issueId);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Navigation Bar - Common across most views except maybe specific fullscreen flows, but kept for consistency */}
      <nav className="bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo(ViewState.HOME)}>
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="material-icons text-primary text-3xl">fact_check</span>
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                  Decide<span className="text-primary">Wise</span>
                </span>
              </div>
            </div>
            
            {currentView !== ViewState.HOME && currentView !== ViewState.QUIZ && currentView !== ViewState.LOADING && (
                <div className="hidden md:flex ml-8 space-x-4 items-center">
                    {currentView === ViewState.COMPARISON && (
                         <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
                            <span className="material-icons text-base">chevron_right</span> Comparison Mode
                        </span>
                    )}
                </div>
            )}

            <div className="flex items-center gap-4">
               {currentView !== ViewState.HOME && (
                  <>
                    <button className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                        <span className="material-icons">search</span>
                    </button>
                    <button className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-icons text-xl">person</span>
                    </button>
                  </>
               )}
               {currentView === ViewState.HOME && (
                  <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">How it works</a>
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Methodology</a>
                    <button className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-2 rounded-full transition-all shadow-sm">
                        Sign In
                    </button>
                 </div>
               )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        {currentView === ViewState.HOME && <HomeView onStart={() => navigateTo(ViewState.QUIZ)} />}
        {currentView === ViewState.QUIZ && <QuizView onComplete={() => navigateTo(ViewState.LOADING)} />}
        {currentView === ViewState.LOADING && <LoaderView onComplete={() => navigateTo(ViewState.SHORTLIST)} />}
        {currentView === ViewState.SHORTLIST && (
            <ShortlistView 
                onCompare={() => navigateTo(ViewState.COMPARISON)} 
                onViewDetail={() => navigateTo(ViewState.PRODUCT_DETAIL)}
            />
        )}
        {currentView === ViewState.COMPARISON && (
            <ComparisonView 
                onViewWinner={() => navigateTo(ViewState.PRODUCT_DETAIL)}
                onOpenIssue={(id) => openDrawer(id)}
            />
        )}
        {currentView === ViewState.PRODUCT_DETAIL && (
            <ProductDetailView 
                onOpenIssue={(id) => openDrawer(id)} 
                onBack={handleBack}
            />
        )}
      </main>

      {/* Overlay Drawer */}
      <IssueDrawer isOpen={isDrawerOpen} onClose={closeDrawer} issueId={drawerContentId} />
      
    </div>
  );
}