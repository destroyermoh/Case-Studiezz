import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Nav({ theme = 'di' }) {
  const ac  = theme === 'di' ? '#E8A44A' : '#00D4FF'
  const bg  = theme === 'di' ? 'rgba(10,10,12,0.85)' : 'rgba(11,14,26,0.85)'
  const t2  = theme === 'di' ? '#908C84' : '#7A8FA6'
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '18px 48px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)', background: bg,
      borderBottom: `0.5px solid rgba(255,255,255,0.06)`
    },
    logo: {
      fontFamily: 'Inter', fontSize: 13, fontWeight: 500,
      color: ac, textDecoration: 'none', letterSpacing: '0.04em'
    },
    links: { display: 'flex', gap: 32, alignItems: 'center' },
    link: {
      fontFamily: 'Inter', fontSize: 12, color: t2,
      textDecoration: 'none', letterSpacing: '0.04em',
      transition: 'color 0.2s'
    },
    back: {
      fontFamily: 'Inter', fontSize: 12, fontWeight: 500,
      color: ac, textDecoration: 'none', letterSpacing: '0.04em',
      padding: '6px 14px', border: `0.5px solid ${ac}`,
      borderRadius: 6, transition: 'all 0.2s'
    }
  }

  return (
    <nav style={s.nav} ref={ref}>
      <Link to="/" style={s.logo}>DESTROYERMOH</Link>
      <div style={s.links}>
        <Link to="/dying-interface" style={s.link}>Dying Interface</Link>
        <Link to="/anatomy-vr" style={s.link}>Anatomy VR</Link>
        <a href="https://destroyermoh.github.io" style={s.back} target="_blank" rel="noreferrer">
          Portfolio ↗
        </a>
      </div>
    </nav>
  )
}
