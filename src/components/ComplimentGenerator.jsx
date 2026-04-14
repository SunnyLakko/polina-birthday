import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ComplimentGenerator.module.css'

function ComplimentGenerator() {
  const compliments = [
    '✨ Твоя улыбка может осветить даже самый тёмный день',
    '🌟 Ты творишь чудеса просто своим присутствием',
    '💖 В твоих глазах живёт целая вселенная',
    '🎨 Ты — живое произведение искусства',
    '🔥 Твоя энергия заразительна и вдохновляет людей',
    '👑 Ты королева своей истории',
    '🌈 Ты красишь этот мир своей уникальностью',
    '💫 Твой внутренний свет невозможно не заметить',
    '🎭 Твоя уверенность вдохновляет окружающих',
    '🦋 Ты создана для великих дел',
    '💝 Твоё сердце — источник добра',
    '⭐ Ты не попадаешь в толпу — ты выделяешься',
    '🌸 Твой стиль уникален и неповторим',
    '🎪 Ты — магия в человеческой форме',
    '🌙 Твоя красота начинается изнутри'
  ]

  const [currentCompliment, setCurrentCompliment] = useState(0)
  const [showCompliment, setShowCompliment] = useState(false)

  const getRandomCompliment = () => {
    const newIndex = Math.floor(Math.random() * compliments.length)
    setCurrentCompliment(newIndex)
    setShowCompliment(true)
  }

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className={styles.title}>
          Красота в каждой строчке 💗
        </motion.h2>

        <AnimatePresence mode="wait">
          {showCompliment && (
            <motion.div
              className={styles.complimentBox}
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={currentCompliment}
            >
              <motion.p className={styles.text}>
                {compliments[currentCompliment]}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className={styles.button}
          onClick={getRandomCompliment}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showCompliment ? 'Ещё комплимент! 💕' : 'Получи комплимент ✨'}
        </motion.button>

        <motion.div
          className={styles.floatingEmojis}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['✨', '💖', '🌟', '👑', '💫'].map((emoji, i) => (
            <motion.span
              key={i}
              className={styles.emoji}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ComplimentGenerator
