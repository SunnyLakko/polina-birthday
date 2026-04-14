import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './InteractiveCounter.module.css'

function InteractiveCounter() {
  const [isOpen, setIsOpen] = useState(false)

  const facts = [
    '🎂 18 лет = 6570 дней красоты',
    '⭐ 18 лет = 157,680 часов вдохновения',
    '💫 18 лет = 9,460,800 минут магии',
    '✨ 18 лет = 567,648,000 секунд твоей уникальности',
    '🌟 18 лет = бесконечно много моментов, которые тебя определяют'
  ]

  const [currentFact, setCurrentFact] = useState(0)

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length)
  }

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className={styles.title}>
          Знаешь ли ты? 🎯
        </motion.h2>

        <motion.div
          className={styles.counterBox}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={styles.number}
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            18
          </motion.div>
          
          <motion.div
            className={styles.fact}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            key={currentFact}
          >
            {facts[currentFact]}
          </motion.div>

          <motion.button
            className={styles.nextBtn}
            onClick={(e) => {
              e.stopPropagation()
              nextFact()
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ещё факт ➜
          </motion.button>
        </motion.div>

        <motion.p
          className={styles.hint}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Кликни на цифру, чтобы узнать больше ✨
        </motion.p>
      </motion.div>
    </section>
  )
}

export default InteractiveCounter
