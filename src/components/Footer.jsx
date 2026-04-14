import React from 'react'
import { motion } from 'framer-motion'
import styles from './Footer.module.css'

function Footer() {
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
    <motion.footer
      className={styles.footer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className={styles.content} variants={itemVariants}>
        <motion.div className={styles.logoContainer} variants={itemVariants}>
          <img src="./logo.png" alt="Logo" className={styles.logo} />
        </motion.div>

        <motion.div className={styles.finalText} variants={itemVariants}>
          <p className={styles.cta}>
            Посмотри на то, что уже пройдено, и улыбнись тому, что ждет впереди. Это твой личный праздник, твоя
            сцена и твой первый взрослый рассвет.
          </p>

          <p className={styles.wishes}>
            Пусть в твоей жизни будет побольше «ламповых» моментов, искреннего смеха и любви, которая согревает
            даже в самые холодные дни. Мы все здесь, чтобы увидеть, как ты покоряешь свои вершины.
          </p>

          <p className={styles.message}>
            Создавай. Люби. Живи на полную мощность.
          </p>

          <p className={styles.note}>
            Этот сайт — лишь маленькая цифровая открытка в сравнении с тем, какой огромный и красочный мир
            открывается перед тобой сегодня.
          </p>

          <p className={styles.signature}>
            С днем рождения, Полина! ✨
          </p>

          <p className={styles.tagline}>
            Твой день. Твоя история. Твои 18.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.background}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </motion.footer>
  )
}

export default Footer
