import React, { useState, useRef } from 'react'
import StartScreen from './components/StartScreen'
import Hero from './components/Hero'
import MessageSection from './components/MessageSection'
import InteractiveCounter from './components/InteractiveCounter'
import ComplimentGenerator from './components/ComplimentGenerator'
import InteractiveGallery from './components/InteractiveGallery'
import WishesCard from './components/WishesCard'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'
import styles from './App.module.css'

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const audioRef = useRef(null)

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2
      audioRef.current.play().catch(() => {
        console.log('Audio playback failed')
      })
    }
    setHasStarted(true)
  }

  return (
    <div className={styles.app}>
      <audio ref={audioRef} loop>
        <source src="/song.m4a" type="audio/mp4" />
      </audio>

      {!hasStarted && <StartScreen onStart={handleStart} />}
      {hasStarted && (
        <>
          <Hero />
          <MessageSection />
          <InteractiveCounter />
          <ComplimentGenerator />
          <InteractiveGallery />
          <WishesCard />
          <VideoSection />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
