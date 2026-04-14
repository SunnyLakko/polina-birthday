import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Sticker from './Sticker'
import styles from './MessageSection.module.css'

function MessageSection() {
  const [screenData, setScreenData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Кастомные данные для разнообразия
  const customScreens = [
    {
      number: 1,
      location: '✨ Встреча',
      title: '18 лет: Начало твоей эстетики',
      text: 'Восемнадцать — это магия. Ты вступаешь в возраст, когда мир перестает диктовать, а начинает слушать. Каждый твой выбор — это кисть, каждый шаг — линия на холсте, где главная героиня — ты.'
    },
    {
      number: 2,
      location: '💭 Моменты',
      title: 'Из чего складывается твой мир?',
      text: 'Из смеха в 3 часа ночи, из музыки в наушниках, из взглядов людей, которые тебя понимают без слов. Из маленьких побед и больших мечтаний. Из тебя. Ты — шедевр, работа над которым продолжается.'
    },
    {
      number: 3,
      location: '🔥 Путь',
      title: 'Твой путь — твои правила',
      text: 'Забудь о должном. Твоя история пишется твоей ручкой, твоим сердцем, твоей дерзостью. Быть собой не модно — это революционно. Зажигай, твори, живи на полную.'
    },
    {
      number: 4,
      location: '💖 Сердце',
      title: 'Полина, ты — искусство',
      text: 'В твоих глазах светится то, что не купишь и не скопируешь. Твой вкус, твой стиль, твой взгляд — это то, что делает мир красивее. Спасибо, что ты есть. Ты вдохновляешь.'
    },
    {
      number: 5,
      location: '⚡ Взлёт',
      title: 'Лети выше',
      text: 'Каждый твой шаг — волна перемен. Каждая идея — звезда на ночном небе. Ты рождена, чтобы сиять, творить, менять правила игры. Не забудь — ты уже знаешь, кем хочешь быть.'
    },
    {
      number: 6,
      location: '🌟 Вечность',
      title: 'Твоя сцена начинается СЕЙЧАС',
      text: 'Создавай. Люби. Живи как королева. Это твой день, твоя сцена, твой момент славы. Пусть каждый миг станет памятным. Тебя ждёт целая вселенная возможностей. 🎉✨'
    }
  ]

  useEffect(() => {
    // Используем кастомные данные вместо парсинга
    console.log('Using custom screen data:', customScreens)
    setScreenData(customScreens)
    setLoading(false)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Генерируем случайные позиции для стикеров
  const stickers = Array.from({ length: 11 }, (_, i) => ({
    id: i,
  }))

  return (
    <motion.section
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.background} />

      {/* Stickers */}
      <div className={styles.stickersContainer}>
        {stickers.map((sticker, index) => (
          <Sticker key={sticker.id} i={sticker.id} index={index} />
        ))}
      </div>

      {/* Main Content */}
      <motion.div className={styles.content} variants={itemVariants}>
        <motion.h2 className={styles.mainTitle} variants={itemVariants}>
          Из чего складывается твой мир?
        </motion.h2>

        {loading ? (
          <motion.div className={styles.loader} variants={itemVariants}>
            <p>Загрузка текста...</p>
          </motion.div>
        ) : screenData && screenData.length > 0 ? (
          <motion.div className={styles.screensContainer} variants={containerVariants}>
            {screenData.map((screen, idx) => (
              <motion.div 
                key={idx} 
                className={styles.screenCard}
                variants={itemVariants}
              >
                <div className={styles.cardNumber}>{screen.number}</div>
                <div className={styles.cardLocation}>{screen.location}</div>
                {screen.title && <h3 className={styles.screenTitle}>{screen.title}</h3>}
                <p className={styles.screenText}>{screen.text}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className={styles.emptyState}>
            <p style={{ color: '#9B8FA8' }}>Здесь будет текст поздравления 💕</p>
          </div>
        )}
      </motion.div>
    </motion.section>
  )
}

export default MessageSection
