import React from 'react'
import { motion } from 'framer-motion'
import styles from './VideoSection.module.css'

function VideoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className={styles.content} variants={itemVariants}>
        <motion.div className={styles.videoContainer} variants={itemVariants}>
          <video
            controls
            className={styles.video}
            poster="/uk.png"
          >
            <source src="/congratulations.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео
          </video>
        </motion.div>

        <motion.div className={styles.subtitle} variants={itemVariants}>
          <p>использован ии в целях производства сайта</p>
        </motion.div>

        <motion.div className={styles.textContent} variants={itemVariants}>
          <h2 className={styles.title}>Твой путь — твои правила</h2>
          
          <div className={styles.paragraphs}>
            <p>
              В 18 лет кажется, что нужно сразу найти все ответы. Но истинная красота в самом поиске. Не бойся
              менять стили, пробовать новые жанры, ошибаться в коде жизни и начинать всё с чистого листа.
            </p>
            <p>
              Ты — сложная и прекрасная композиция. В тебе есть и нежность пастельных тонов, и решительность четких
              линий. Никогда не позволяй чужим ожиданиям приглушать твою яркость. Ищи то, что заставляет твое сердце
              биться чаще, будь то искусство, люди или мечты, от которых захватывает дух.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.specialBlock} variants={itemVariants}>
          <h3>Полина, ты — вдохновение</h3>
          <p>
            Ты обладаешь редким даром — видеть красоту там, где другие проходят мимо. Твой никнейм, твой стиль,
            твое видение мира — это то, что делает тебя особенной.
          </p>
          <p>
            В этот день я хочу пожелать тебе гармонии. Чтобы внутри всегда было спокойствие, а снаружи — бесконечный
            океан возможностей. Пусть каждый твой шаг будет уверенным, а каждая улыбка — настоящей. Ты заслуживаешь
            мира, который будет так же прекрасен, как те мечты, которые ты строишь в своей голове.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default VideoSection
