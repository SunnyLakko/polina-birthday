import React from 'react'
import { motion } from 'framer-motion'
import styles from './StartScreen.module.css'

function StartScreen({ onStart }) {
  return (
    <motion.div
      className={styles.startScreen}
      exitBeforeEnter
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          18 лет
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Твоя история начинается здесь
        </motion.p>

        <motion.button
          className={styles.button}
          onClick={onStart}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Открыть
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default StartScreen
