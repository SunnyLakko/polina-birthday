import React from 'react'
import { motion } from 'framer-motion'
import styles from './Sticker.module.css'

function Sticker({ i, index }) {
  // Random positioning and sizing for each sticker
  const randomRotate = Math.random() * 15 - 7.5 // -7.5 to 7.5 degrees
  const randomScale = 0.6 + Math.random() * 0.5 // 0.6 to 1.1
  const randomX = Math.random() * 80 - 40 // -40 to 40%
  const randomY = Math.random() * 60 - 30 // -30 to 30%

  // Levitation animation
  const levitateVariants = {
    hover: {
      y: [0, -10, 0],
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      className={styles.sticker}
      style={{
        left: `calc(50% + ${randomX}%)`,
        top: `calc(50% + ${randomY}%)`,
      }}
      initial={{
        opacity: 0,
        rotate: randomRotate - 10,
        scale: randomScale * 0.5,
      }}
      whileInView={{
        opacity: 1,
        rotate: randomRotate,
        scale: randomScale,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover="hover"
      variants={levitateVariants}
    >
      <img src={`/stick${i}.png`} alt={`sticker-${index}`} />
    </motion.div>
  )
}

export default Sticker
