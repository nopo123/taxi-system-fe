import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

export default function AuthBackground() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed', // Ensures it covers the full screen
        top: 0,
        left: 0,
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        zIndex: -1,
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(0, 0, 255, 1))',
        overflow: 'hidden',
      }}
    >
    </Box>
  );
}
