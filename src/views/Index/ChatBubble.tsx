import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type HoverController = {
  scale: number;
  x: number;
};

export default function ChatBubble() {
  const [visible, setVisible] = useState(false);
  const [hoverController, setHoverController] = useState<
    undefined | HoverController
  >(undefined);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 700);
  }, []);

  const variants = {
    visible: { opacity: [0, 1], y: -10 },
    hidden: { opacity: 0, y: 0 },
  };

  const manageHover = () => {
    if (window.innerWidth > 640)
      setHoverController({
        scale: 1.1,
        x: 30,
      });
    else setHoverController(undefined);
  };

  useEffect(() => {
    manageHover();
    window.addEventListener('resize', () => manageHover());
  }, []);

  return (
    <motion.header className='mx-auto max-w-sm' whileHover={hoverController}>
      <motion.main
        animate={{ scale: [0.85, 1.1, 1], y: [50, 0] }}
        transition={{ duration: 1, type: 'spring', damping: 4 }}
        className='sticky top-6 max-w-sm text-left text-base md:top-12 md:text-xl'>
        <br />
        <div className='animate__animated animate__fadeInUp rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 px-6 py-4 text-white'>
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
        className='border-6 flex w-20 items-center justify-center rounded-full border-white shadow-md dark:border-black'>
        <Image
          src='/images/profilePicSmall.webp'
          height={80}
          width={80}
          alt='My profile picture'
          priority={true}
          className='w-20 rounded-full border-8 border-white shadow-lg dark:border-black'
        />
      </motion.div>
    </motion.header>
  );
}
