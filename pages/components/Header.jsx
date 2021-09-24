import { useState } from 'react';
import { motion } from 'framer-motion';

function Main() {
  const [animateObject, setAnimateObject] = useState({});

  setInterval(() => {
    setAnimateObject({ y: -10 });
  }, 1300);

  return (
    <motion.main
      animate={{ scale: [0.75, 1], y: -30, rotate: [-15, 0] }}
      transition={{ duration: 1, type: 'spring', damping: 4 }}
      className='sticky max-w-sm text-base text-left md:top-12 top-6 md:text-xl'>
      <br />
      <div className='px-6 py-4 text-white bg-blue-600 shadow-lg rounded-2xl'>
        <p>
          Hello, my name is Benjamin! 👋
          <br />
          I&apos;m a Full Stack Developer. <br /> Nice to meet you 😄
        </p>
      </div>
      <motion.img
        animate={animateObject}
        src='/profilePic.webp'
        alt='a cute little penguin, really cute'
        className='w-20 border-8 border-white rounded-full dark:border-black'
      />
    </motion.main>
  );
}

export default Main;
