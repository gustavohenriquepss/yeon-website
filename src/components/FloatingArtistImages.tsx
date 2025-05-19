
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Image array with diverse artist photos
const artistImages = [
  "https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=300&auto=format&fit=crop"
];

interface ImagePosition {
  top: string;
  left: string;
  rotation: number;
  scale: number;
  delay: number;
}

// Generate random positions for the images
const generateRandomPositions = (count: number): ImagePosition[] => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 70 + 5}%`,
    left: `${Math.random() * 70 + 5}%`,
    rotation: Math.random() * 16 - 8,
    scale: 0.7 + Math.random() * 0.4,
    delay: Math.random() * 0.8,
  }));
};

const FloatingArtistImages = () => {
  const [positions, setPositions] = useState<ImagePosition[]>([]);
  const [isHome, setIsHome] = useState(false);
  
  useEffect(() => {
    // Only show on home page
    const isHomePage = window.location.pathname === '/';
    setIsHome(isHomePage);
    
    if (isHomePage) {
      setPositions(generateRandomPositions(artistImages.length));
    }
  }, []);
  
  if (!isHome) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {artistImages.map((src, index) => {
        if (index >= positions.length) return null;
        const { top, left, rotation, scale, delay } = positions[index];
        
        return (
          <motion.div
            key={index}
            className="absolute shadow-lg rounded-lg overflow-hidden"
            style={{ 
              top, 
              left, 
              width: '120px',
              height: '120px',
              opacity: 0,
              zIndex: 5
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.9, 0.7],
              scale: scale,
              rotate: rotation,
              y: [0, -15, 0],
            }}
            transition={{
              delay: delay,
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="glass-effect p-1 rounded-lg h-full">
              <img 
                src={src} 
                alt="Artist" 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingArtistImages;
