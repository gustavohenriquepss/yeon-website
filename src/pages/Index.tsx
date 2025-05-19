
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const IndexContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <main className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Yeon Music</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Em breve uma nova experiência musical.
        </p>
      </div>
      
      <Link to="/calculator">
        <Button 
          size="lg" 
          className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 flex items-center gap-2"
        >
          <Calculator className="h-5 w-5" />
          Calculadora de Ganhos
        </Button>
      </Link>
    </main>
  );
};

const Index: React.FC = () => {
  return (
    <PageLayout>
      <IndexContent />
    </PageLayout>
  );
};

export default Index;
