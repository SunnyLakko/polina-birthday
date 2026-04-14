import React from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

function Hero() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className={styles.imageContainer} variants={itemVariants}>
        <img src="./uk.png" alt="Lee Dong-uk" className={styles.image} />
      </motion.div>

      <motion.div className={styles.subtitle} variants={itemVariants}>
        <p>использован ии в целях производства сайта</p>
      </motion.div>

      <motion.h1 className={styles.title} variants={itemVariants}>
        18 лет: Начало твоей эстетики
      </motion.h1>

      <motion.div className={styles.textBlock} variants={itemVariants}>
        <p>
          Говорят, что восемнадцать — это невидимый порог. Но для тебя это не просто цифра, а чистый холст, на
          который уже нанесены первые, самые смелые мазки. Ты вступаешь в возраст, когда мир перестает диктовать
          правила и начинает внимательно слушать твой голос.
        </p>
        <p>
          Сегодня всё вокруг — этот сайт, эта музыка и даже свет за окном — работает на тебя. Позволь себе просто
          быть. Просто сиять. Впереди — целая глава, которую ты напишешь своим уникальным почерком.
        </p>
      </motion.div>
    </motion.section>
  )
}

export default Hero
