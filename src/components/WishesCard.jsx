import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './WishesCard.module.css'

function WishesCard() {
  const wishes = [
    { emoji: '🌟', title: 'Смелость', text: 'Будь смелой в своих мечтах и решениях' },
    { emoji: '💝', title: 'Любовь', text: 'Будь окружена любовью и добротой' },
    { emoji: '✨', title: 'Магия', text: 'Пусть каждый день приносит чудо' },
    { emoji: '🎨', title: 'Творчество', text: 'Создавай то, что вдохновляет' },
    { emoji: '🌈', title: 'Радость', text: 'Наслаждайся каждым прекрасным моментом' },
    { emoji: '💪', title: 'Сила', text: 'Верь в себя и свои возможности' },
  ]

  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className={styles.title}>
          Интерактивные Пожелания ✨
        </motion.h2>

        <div className={styles.wishesGrid}>
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className={styles.wishCard}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              layoutId={`wish-${index}`}
            >
              <motion.div className={styles.emoji}>
                {wish.emoji}
              </motion.div>
              <motion.h3 className={styles.wishTitle}>
                {wish.title}
              </motion.h3>

              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    className={styles.wishText}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {wish.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div 
                className={styles.indicator}
                animate={{ rotate: selectedIndex === index ? 180 : 0 }}
              >
                ▼
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className={styles.hint}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Кликни на карточку, чтобы открыть пожелание 💕
        </motion.p>
      </motion.div>
    </section>
  )
}

export default WishesCard
