
import React from 'react';
import { Button } from '@/components/ui/button';

const LanguageToggle: React.FC = () => {
  return (
    <div className="inline-flex p-1 rounded-lg bg-secondary">
      <Button
        variant="default"
        size="sm"
        className="px-3 text-sm bg-yeon-purple text-secondary"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
