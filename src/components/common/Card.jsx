import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hoverEffect = true, style = {}, ...props }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-card ${className}`}
      style={{
        padding: '24px',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-soft)',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
