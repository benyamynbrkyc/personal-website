import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Chat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 700);
  }, []);

  const variants = {
    visible: { opacity: [0, 1], y: -10 },
    hidden: { opacity: 0, y: 0 },
  };

  return (
    <motion.header className='max-w-sm' whileHover={{ scale: 1.1, x: 30 }}>
      <motion.main
        animate={{ scale: [0.85, 1.1, 1], y: [50, 0] }}
        transition={{ duration: 1, type: 'spring', damping: 4 }}
        className='sticky max-w-sm text-base text-left md:top-12 top-6 md:text-xl'>
        <br />
        <div className='px-6 py-4 text-white shadow-xl bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl animate__animated animate__fadeInUp'>
          <h1>
            Hi, my name is Benjamin! 👋
            <br />
            I&apos;m a Full Stack Developer. <br /> Nice to meet you 😄
          </h1>
        </div>
      </motion.main>
      <motion.div
        animate={visible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.6, type: 'spring', damping: 6 }}
        className='opacity-0'>
        <img
          src='/profilePic.webp'
          className='w-20 border-8 border-white rounded-full shadow-lg dark:border-black'
          alt='My profile picture'
        />
      </motion.div>
    </motion.header>
  );
}
