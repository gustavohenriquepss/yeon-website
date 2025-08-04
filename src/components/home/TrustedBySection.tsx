import React from 'react';

const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16 bg-yeon-darker-bg">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8 text-white/80">
            Confiado por
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder para logos de labels e parceiros */}
            <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/50 text-sm">Label Logo</span>
            </div>
            <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/50 text-sm">Label Logo</span>
            </div>
            <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/50 text-sm">Label Logo</span>
            </div>
            <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/50 text-sm">Label Logo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;