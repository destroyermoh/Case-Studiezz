import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Nav from '../components/Nav'

const s = {
  page: { background: '#0A0A0C', minHeight: '100vh', color: '#F2EFE8' },
  hero: {
    padding: '180px 80px 120px',
    maxWidth: 1100, margin: '0 auto'
  },
  eyebrow: {
    fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
    color: '#5C5852', textTransform: 'uppercase', marginBottom: 24
  },
  title: {
    fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 700,
    lineHeight: 1.0, color: '#F2EFE8', marginBottom: 32
  },
  sub: {
    fontSize: 18, color: '#908C84', maxWidth: 560,
    lineHeight: 1.7, marginBottom: 80
  },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: 24, maxWidth: 1100, margin: '0 auto', padding: '0 80px 120px'
  },
  card: (accent, bg) => ({
    background: bg, borderRadius: 16, padding: '48px',
    border: `0.5px solid rgba(255,255,255,0.06)`,
    textDecoration: 'none', display: 'block',
    transition: 'transform 0.3s, border-color 0.3s',
    cursor: 'pointer', position: 'relative', overflow: 'hidden'
  }),
  cardNum: (ac) => ({
    fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
    color: ac, textTransform: 'uppercase', marginBottom: 24
  }),
  cardTitle: {
    fontSize: 32, fontWeight: 700, color: '#F2EFE8',
    lineHeight: 1.1, marginBottom: 16
  },
  cardDesc: (t2) => ({
    fontSize: 14, color: t2, lineHeight: 1.7, marginBottom: 32
  }),
  tags: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  tag: (ac) => ({
    fontSize: 10, fontWeight: 500, letterSpacing: '0.06em',
    color: ac, border: `0.5px solid ${ac}30`,
    borderRadius: 4, padding: '4px 10px', textTransform: 'uppercase'
  }),
  cta: (ac) => ({
    display: 'inline-block', marginTop: 32, fontSize: 13,
    fontWeight: 500, color: ac
  }),
  glow: (ac) => ({
    position: 'absolute', width: 300, height: 300,
    borderRadius: '50%', filter: 'blur(100px)',
    background: ac, opacity: 0.06, top: -80, right: -80,
    pointerEvents: 'none'
  })
}

function Card({ to, num, title, desc, tags, accent, bg, t2 }) {
  const ref = useRef(null)
  const handleEnter = () => gsap.to(ref.current, { y: -6, borderColor: `${accent}30`, duration: 0.3 })
  const handleLeave = () => gsap.to(ref.current, { y: 0, borderColor: 'rgba(255,255,255,0.06)', duration: 0.3 })

  return (
    <Link to={to} style={s.card(accent, bg)} ref={ref}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div style={s.glow(accent)} />
      <div style={s.cardNum(accent)}>{num}</div>
      <div style={s.cardTitle}>{title}</div>
      <div style={s.cardDesc(t2)}>{desc}</div>
      <div style={s.tags}>
        {tags.map(t => <span key={t} style={s.tag(accent)}>{t}</span>)}
      </div>
      <div style={s.cta(accent)}>Read case study →</div>
    </Link>
  )
}

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = 'Case Studies — Ayush Singh'
    const els = heroRef.current.querySelectorAll('.hi')
    gsap.fromTo(els,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  return (
    <div style={s.page}>
      <Nav theme="di" />
      <div style={s.hero} ref={heroRef}>
        <div className="hi" style={s.eyebrow}>Case Studies · UI/UX Design · 2024–2025</div>
        <h1 className="hi" style={s.title}>
          Work that<br />
          <span style={{ color: '#E8A44A' }}>thinks.</span>
        </h1>
        <p className="hi" style={s.sub}>
          Two projects. One is an experimental interface that dies when you leave it.
          The other puts the human body in your hands.
        </p>
      </div>

      <div style={s.grid}>
        <Card
          to="/dying-interface"
          num="Case Study 01"
          title="The Dying Interface"
          desc="A UI that deteriorates in real time based on neglect — and resurrects when you return. An experimental UX concept exploring consequential states."
          tags={['UI/UX', 'Experimental', 'Figma', 'Three.js', 'GSAP', 'WebGL']}
          accent="#E8A44A"
          bg="#161619"
          t2="#908C84"
        />
        <Card
          to="/anatomy-vr"
          num="Case Study 02"
          title="3D Human Anatomy VR Platform"
          desc="An immersive VR learning platform for anatomy education. SUS 82.5/100, 91% task completion, 45 participants. Published in IJCSER 2025."
          tags={['Spatial UI/UX', 'AR/VR', 'Unity 3D', 'Research', 'Published']}
          accent="#00D4FF"
          bg="#111827"
          t2="#7A8FA6"
        />
      </div>

      <div style={{ textAlign: 'center', padding: '0 0 80px', color: '#5C5852', fontSize: 12 }}>
        <a href="https://destroyermoh.github.io" style={{ color: '#5C5852', textDecoration: 'none' }}>
          ← Back to full portfolio
        </a>
      </div>
    </div>
  )
}
