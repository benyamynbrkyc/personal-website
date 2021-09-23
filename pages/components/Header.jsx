import { useState } from 'react';
import { motion } from 'framer-motion';

function Main() {
  const [animateObject, setAnimateObject] = useState({});

  setInterval(() => {
    setAnimateObject({ y: -10 });
  }, 1000);

  return (
    <motion.main
      animate={{ scale: 1.5, y: -30, rotate: [-15, 0] }}
      transition={{ duration: 0.6, type: 'spring', damping: 4 }}
      className='sticky w-1/2 mx-auto text-center lg:w-1/4 mt-36 md:top-12 top-6'>
      <br />
      <div className='px-4 py-2 text-white bg-blue-600 rounded-lg'>
        <p>Hello 👋, my name is Benjamin</p>
      </div>
      <motion.img
        animate={animateObject}
        src='https://cdn.shopify.com/s/files/1/1711/1231/products/Megayouput-5D-diy-diamond-painting-Cross-Stitch-Diamond-Embroidery-mosaic-pattern-Cute-penguin-picture-Cartoon-kids_1024x1024.jpg?v=1571609287'
        alt='a cute little penguin, really cute'
        className='w-12 border-8 border-white rounded-full dark:border-black'
      />
    </motion.main>
  );
}

export default Main;
