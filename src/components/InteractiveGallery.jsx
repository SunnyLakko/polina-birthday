import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './InteractiveGallery.module.css'

function InteractiveGallery() {
  const items = [
    { emoji: '🎂', title: 'День Рождения', message: 'Это твой день! Радуйся, танцуй, живи без забот!' },
    { emoji: '🎨', title: 'Творчество', message: 'Ты родилась, чтобы творить. Дай жизнь своим идеям!' },
    { emoji: '🌟', title: 'Звезда', message: 'Ты яркая, как звезда. Светись и вдохновляй других!' },
    { emoji: '💖', title: 'Любовь', message: 'Люби открыто, дари свет, живи полной грудью!' },
    { emoji: '🚀', title: 'Полёт', message: 'Взлетай выше! Твой потенциал безграничен!' },
    { emoji: '👑', title: 'Королева', message: 'Ты шикарна, стильна, удивительна. Помни об этом!' },
    { emoji: '🌈', title: 'Радуга', message: 'После дождя всегда вырастает радуга. Ты — чья-то радуга!' },
    { emoji: '✨', title: 'Волшебство', message: 'Ты сама волшебство. Просто верь в себя!' },
    { emoji: '🦋', title: 'Метаморфоза', message: 'Ты постоянно растёшь и становишься красивее!' },
    { emoji: '🎭', title: 'История', message: 'Твоя история только начинается. Пиши её сама!' }
  ]

  const [clickedItems, setClickedItems] = useState(new Set())
  const [selectedItem, setSelectedItem] = useState(null)

  const handleClick = (index) => {
    setSelectedItem(items[index])
    setClickedItems(new Set([...clickedItems, index]))
  }

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 className={styles.title}>
          Кликай на эмодзи 🎯
        </motion.h2>

        <motion.div className={styles.gallery}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${clickedItems.has(index) ? styles.clicked : ''}`}
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div
                className={styles.emoji}
                animate={clickedItems.has(index) ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.6 }}
              >
                {item.emoji}
              </motion.div>
              <div className={styles.label}>{item.title}</div>
            </motion.div>
          ))}
        </motion.div>

        {selectedItem && (
          <motion.div
            className={styles.messageBox}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div className={styles.messageBg} />
            <div className={styles.messageContent}>
              <div className={styles.messageEmoji}>{selectedItem.emoji}</div>
              <p className={styles.messageText}>{selectedItem.message}</p>
            </div>
          </motion.div>
        )}

        <motion.p
          className={styles.progress}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Открыто: {clickedItems.size} из {items.length} сюрпризов ✨
        </motion.p>
      </motion.div>
    </section>
  )
}

export default InteractiveGallery
