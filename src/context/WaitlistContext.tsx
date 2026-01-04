import React, { createContext, useContext, useState, ReactNode } from 'react';
import WaitlistModal from '@/components/WaitlistModal';

interface WaitlistContextType {
  openWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};

interface WaitlistProviderProps {
  children: ReactNode;
}

export const WaitlistProvider: React.FC<WaitlistProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWaitlist = () => setIsOpen(true);

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      {children}
      <WaitlistModal open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  );
};
