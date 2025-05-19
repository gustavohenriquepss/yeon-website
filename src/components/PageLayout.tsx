
import React from 'react';
import NavigationHeader from './NavigationHeader';
import { LanguageProvider } from '@/context/LanguageContext';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-yeon-dark-bg text-white">
      <NavigationHeader />
      <div className="container px-4 py-8">
        {children}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Yeon Music. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const WithLanguageProvider: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <PageLayout>{children}</PageLayout>
    </LanguageProvider>
  );
};

export default WithLanguageProvider;
