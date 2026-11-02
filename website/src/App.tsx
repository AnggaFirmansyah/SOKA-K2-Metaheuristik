import { useEffect, useState, type CSSProperties } from 'react'
import SlideFrame from './components/SlideFrame'
import Slide01 from './slides/01-pendahuluan'

const slides = [{ Component: Slide01, bg: '/bg.png' }]

const btn: CSSProperties = {
  border: 'none',
  padding: 0,
  borderRadius: '50%',
  cursor: 'pointer',
  width: '3cqw',
  height: '3cqw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  const d = dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'
  return (
    <svg viewBox="0 0 24 24" style={{ width: '50%', height: '50%' }} aria-hidden="true">
      <path
        d={d}
        fill="none"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  const [index, setIndex] = useState(0)
  const total = slides.length

  const next = () => setIndex((i) => Math.min(i + 1, total - 1))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen()
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  const { Component, bg } = slides[index]

  return (
    <SlideFrame bg={bg}>
      <Component />

      <div
        style={{
          position: 'absolute',
          right: '3cqw',
          bottom: '3cqw',
          display: 'flex',
          gap: '1.5cqw',
        }}
      >
        <button onClick={prev} aria-label="Sebelumnya" style={btn}>
          <Chevron dir="left" />
        </button>
        <button onClick={next} aria-label="Berikutnya" style={btn}>
          <Chevron dir="right" />
        </button>
      </div>
    </SlideFrame>
  )
}