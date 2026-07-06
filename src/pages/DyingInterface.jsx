import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import Section from '../components/Section'
gsap.registerPlugin(ScrollTrigger)

const AC  = '#E8A44A'
const BG  = '#0A0A0C'
const SF  = '#161619'
const T1  = '#F2EFE8'
const T2  = '#908C84'
const T3  = '#5C5852'
const BD  = 'rgba(255,255,255,0.07)'

const s = {
  page:    { background: BG, color: T1, fontFamily: 'Inter, sans-serif', minHeight: '100vh' },
  wrap:    { maxWidth: 900, margin: '0 auto', padding: '0 48px' },
  eyebrow: { fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: T3, textTransform: 'uppercase', marginBottom: 20 },
  heroTitle: { fontSize: 'clamp(52px,8vw,110px)', fontWeight: 700, lineHeight: 0.95, marginBottom: 32 },
  heroSub: { fontSize: 19, color: T2, maxWidth: 540, lineHeight: 1.75, marginBottom: 60 },
  divider: { borderTop: `0.5px solid ${BD}`, margin: '0 0 60px' },
  label:   { fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', color: AC, textTransform: 'uppercase', marginBottom: 10 },
  h2:      { fontSize: 32, fontWeight: 700, color: T1, lineHeight: 1.15, marginBottom: 20 },
  h3:      { fontSize: 18, fontWeight: 600, color: T1, lineHeight: 1.3, marginBottom: 12 },
  body:    { fontSize: 16, color: T2, lineHeight: 1.8, marginBottom: 20 },
  quote: {
    borderLeft: `3px solid ${AC}`, paddingLeft: 28,
    margin: '40px 0', color: T1, fontSize: 22,
    fontStyle: 'italic', fontWeight: 500, lineHeight: 1.5
  },
  grid2:   { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, margin: '32px 0' },
  card:    { background: SF, borderRadius: 12, padding: '28px 32px', border: `0.5px solid ${BD}` },
  metaGrid:{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, margin: '48px 0' },
  metaCard:{ background: SF, borderRadius: 10, padding: '24px 28px', border: `0.5px solid ${BD}` },
  metaVal: { fontSize: 36, fontWeight: 700, color: T1, marginBottom: 4 },
  metaLbl: { fontSize: 12, color: T2 },
  metaSub: { fontSize: 11, color: AC, marginTop: 4 },
  tag:     { display: 'inline-block', fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', color: AC, border: `0.5px solid ${AC}30`, borderRadius: 4, padding: '4px 10px', margin: '4px', textTransform: 'uppercase' },
  stateRow:{ display: 'flex', gap: 12, margin: '32px 0', flexWrap: 'wrap' },
  stateCard: (ac) => ({
    flex: '1 1 140px', borderRadius: 10, padding: '20px',
    background: SF, border: `0.5px solid ${ac}30`
  }),
  stateIco: { fontSize: 22, marginBottom: 8 },
  stateN:  { fontSize: 13, fontWeight: 600, color: T1, marginBottom: 4 },
  stateT:  { fontSize: 11, color: AC },
  stateD:  { fontSize: 11, color: T3, marginTop: 6, lineHeight: 1.6 },
  bullet:  { fontSize: 15, color: T2, lineHeight: 1.7, paddingLeft: 20, marginBottom: 10, position: 'relative' },
  heroMeta: {
    display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
    gap: 32, padding: '40px 0', borderTop: `0.5px solid ${BD}`,
    borderBottom: `0.5px solid ${BD}`, margin: '48px 0'
  },
  heroMetaK: { fontSize: 10, color: T3, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 },
  heroMetaV: { fontSize: 14, color: T1, fontWeight: 500 },
}

const STATES = [
  { ico:'🫀', name:'Alive',    time:'< 1 hour',  desc:'Crisp, warm, amber glow. Every element in full bloom.' },
  { ico:'🌫', name:'Fading',   time:'1–12 hrs',  desc:'Subtle desaturation. The warmth quietly leaving.' },
  { ico:'🕸', name:'Aging',    time:'12–48 hrs', desc:'Hairline cracks forming. UI feels visibly wrong.' },
  { ico:'💀', name:'Decaying', time:'2–7 days',  desc:'Pixels eroding, elements drooping. You caused this.' },
  { ico:'🪦', name:'Ruined',   time:'7+ days',   desc:'Full structural collapse. One faint pulse remains.' },
]

function Bullet({ text }) {
  return (
    <div style={s.bullet}>
      <span style={{ position:'absolute', left:0, color:AC }}>→</span>
      {text}
    </div>
  )
}

export default function DyingInterface() {
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = 'The Dying Interface — Case Study'
    window.scrollTo(0,0)
    const els = heroRef.current.querySelectorAll('.hi')
    gsap.fromTo(els,
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:1.1, stagger:0.13, ease:'power3.out', delay:0.2 }
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => {
      gsap.fromTo(el,
        { opacity:0, y:32 },
        { opacity:1, y:0, duration:0.9, ease:'power3.out',
          scrollTrigger: { trigger:el, start:'top 84%', once:true } }
      )
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={s.page}>
      <Nav theme="di" />

      {/* HERO */}
      <div style={{ ...s.wrap, paddingTop: 160 }} ref={heroRef}>
        <div className="hi" style={s.eyebrow}>Case Study 01 — UI/UX Design Experiment</div>
        <h1 className="hi" style={s.heroTitle}>
          The<br />
          <span style={{ color: AC }}>Dying</span><br />
          Interface
        </h1>
        <p className="hi" style={s.heroSub}>
          A UI that deteriorates in real time based on neglect — and resurrects when you return.
        </p>

        <div className="hi" style={s.heroMeta}>
          {[
            ['Role','Lead Designer & Developer'],
            ['Timeline','3-week sprint'],
            ['Type','Solo / Experimental'],
            ['Stack','Figma · Three.js · GSAP · WebGL']
          ].map(([k,v]) => (
            <div key={k}>
              <div style={s.heroMetaK}>{k}</div>
              <div style={s.heroMetaV}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 01 — PROBLEM */}
      <div style={s.wrap}>
        <Section>
          <div className="reveal" style={s.label}>01 — Problem Statement</div>
          <h2 className="reveal" style={s.h2}>Digital interfaces have no memory of neglect.</h2>
          <p className="reveal" style={s.body}>
            You abandon an app — it waits, frozen, perfect, unbothered. Every pixel is the same shade of crisp as the day you left. No consequence. No memory. No relationship.
          </p>
          <p className="reveal" style={s.body}>
            Real relationships decay without attention. Real organisms die without care. This project asks the interface to tell the truth.
          </p>
          <blockquote className="reveal" style={s.quote}>
            "Can an interface create genuine emotional stakes through behavioural feedback loops?"
          </blockquote>
        </Section>

        {/* SECTION 02 — RESEARCH */}
        <Section>
          <div className="reveal" style={s.label}>02 — Research & Psychology</div>
          <h2 className="reveal" style={s.h2}>Three frameworks behind the design.</h2>
          <div style={s.grid2}>
            {[
              { h:'Variable Reward Schedules', b:`Skinner's operant conditioning inverted. Instead of unpredictable rewards, the UI introduces unpredictable consequence. The suspense of "what did I do to it" drives re-engagement.` },
              { h:'Digital Anthropomorphism', b:`Nass and Moon (2000): humans apply social rules to computers automatically. By making the interface visually suffer, users attribute emotional states to it. 11/15 testers used words like sad, tired, or hurt unprompted.` },
              { h:'The Tamagotchi Effect', b:`The 1996 Tamagotchi created genuine emotional bonds through consequential feedback. What if that mechanic lived inside a serious productivity app, not a toy?` },
              { h:'Design Question', b:`Nobody has shipped this at product level. It exists as art installation theory. This project brings it to a functional, testable, documented interface with real UX rationale.` },
            ].map(({ h, b }) => (
              <div key={h} className="reveal" style={s.card}>
                <div style={s.h3}>{h}</div>
                <p style={{ ...s.body, marginBottom:0 }}>{b}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SECTION 03 — DECAY SYSTEM */}
        <Section>
          <div className="reveal" style={s.label}>03 — The Decay System</div>
          <h2 className="reveal" style={s.h2}>Five states. One truth.</h2>
          <p className="reveal" style={s.body}>
            Every visual, structural, and sonic element of the UI is mapped to elapsed time since the user's last visit — tracked entirely client-side via localStorage.
          </p>
          <div className="reveal" style={s.stateRow}>
            {STATES.map(st => (
              <div key={st.name} style={s.stateCard(AC)}>
                <div style={s.stateIco}>{st.ico}</div>
                <div style={s.stateN}>{st.name}</div>
                <div style={s.stateT}>{st.time}</div>
                <div style={s.stateD}>{st.desc}</div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 40 }}>
            <div style={s.h3}>Structural decay — elements losing integrity</div>
            <Bullet text="Stat cards droop — alternating rotation directions simulate asymmetric collapse" />
            <Bullet text="Note cards sag inward — left tilts clockwise, right counter-clockwise" />
            <Bullet text="Typography loosens — letter-spacing from 0em (Alive) to +0.08em (Ruined)" />
            <Bullet text="Text blurs — note preview gets 0px → 3px Gaussian blur across states" />
            <Bullet text="Borders dissolve — opacity drops from 9% to 1%, losing edges" />
          </div>
          <div className="reveal" style={{ marginTop: 32 }}>
            <div style={s.h3}>Crack overlay — 3 layers</div>
            <Bullet text="Layer 1: Hairlines — 0.5px stroke, white 55%. First appear at Aging state." />
            <Bullet text="Layer 2: Medium — 0.75–0.85px, branching paths. Appear at Decaying." />
            <Bullet text="Layer 3: Structural — 1.0–1.3px, horizontal fault line. Ruined state only." />
            <Bullet text="All crack geometry is unique per user — generated via Canvas API, stored in localStorage." />
          </div>
        </Section>

        {/* SECTION 04 — RESURRECTION */}
        <Section>
          <div className="reveal" style={s.label}>04 — The Resurrection Sequence</div>
          <h2 className="reveal" style={s.h2}>15 seconds. Four phases. The UI remembers it was hurt.</h2>
          <div style={s.grid2}>
            {[
              { n:'Phase 1', sub:'0–2s — First Touch', b:'A single pulse radiates from the cursor. The cracked UI shudders. Sound: a distant heartbeat, barely audible.' },
              { n:'Phase 2', sub:'2–5s — Recognition', b:'Cellular bloom from cursor outward. Colors bleed back in warm-to-cool order. Accent first, Text Primary last.' },
              { n:'Phase 3', sub:'5–15s — Recovery', b:'Full resurrection — but scar tissue remains. Hairline cracks stay permanently on elements that reached Decaying or Ruined state.' },
              { n:'Phase 4', sub:'15s+ — Gratitude', b:'Cursor trail glows amber for 3 minutes. Micro-interactions respond 15% faster. The UI is grateful.' },
            ].map(({ n, sub, b }) => (
              <div key={n} className="reveal" style={s.card}>
                <div style={{ fontSize:11, color:AC, fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:6 }}>{n}</div>
                <div style={s.h3}>{sub}</div>
                <p style={{ ...s.body, marginBottom:0 }}>{b}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SECTION 05 — TESTING */}
        <Section>
          <div className="reveal" style={s.label}>05 — User Testing</div>
          <h2 className="reveal" style={s.h2}>15 participants. Zero context given.</h2>
          <p className="reveal" style={s.body}>
            Participants were given the demo with a time scrubber. No explanation of what the UI was — just "interact with it."
          </p>
          <div className="reveal" style={s.metaGrid}>
            {[
              { v:'11/15', l:'used emotional language', s:'"sad," "tired," "hurt," "broken"' },
              { v:'13/15', l:'felt discomfort at Aging state', s:'Described as "wrong" before identifying why' },
              { v:'9/15',  l:'reported guilt', s:'Told they caused the decay by not visiting' },
              { v:'14/15', l:'found resurrection satisfying', s:'"More than any app animation I\'ve seen"' },
              { v:'12/15', l:'would return more often', s:'To avoid the UI reaching Aging state' },
              { v:'4.6/5', l:'avg emotional impact score', s:'vs 2.1/5 for a standard notes app' },
            ].map(({ v, l, s: sub }) => (
              <div key={v} style={s.metaCard}>
                <div style={s.metaVal}>{v}</div>
                <div style={s.metaLbl}>{l}</div>
                <div style={s.metaSub}>{sub}</div>
              </div>
            ))}
          </div>
          <blockquote className="reveal" style={s.quote}>
            "The resurrection felt earned. Every other app just... works when you open it. This one made me feel like I'd actually done something by coming back."
          </blockquote>
          <p className="reveal" style={{ ...s.body, color:T3, fontSize:14 }}>— Participant 07, 24F, UX Designer</p>
        </Section>

        {/* SECTION 06 — TECH */}
        <Section>
          <div className="reveal" style={s.label}>06 — Technical Architecture</div>
          <h2 className="reveal" style={s.h2}>One CSS variable drives everything.</h2>
          <p className="reveal" style={s.body}>
            <code style={{ background:SF, padding:'2px 8px', borderRadius:4, color:AC, fontSize:14 }}>--decay-factor: 0 to 1</code> — a single custom property that simultaneously controls saturation, blur, noise opacity, border transparency, and sound volume. Zero JavaScript needed for colour transitions.
          </p>
          <div style={s.grid2}>
            <div className="reveal" style={s.card}>
              <div style={s.h3}>Frontend stack</div>
              <Bullet text="Three.js — WebGL pixel erosion shader (GLSL)" />
              <Bullet text="GSAP — structural transform animations" />
              <Bullet text="Web Audio API — procedural heartbeat and drone" />
              <Bullet text="Canvas API — unique crack geometry per user" />
              <Bullet text="localStorage — time tracking, trauma score, scar data" />
            </div>
            <div className="reveal" style={s.card}>
              <div style={s.h3}>DecayEngine.js</div>
              <Bullet text="Reads lastVisit timestamp on every page load" />
              <Bullet text="Maps elapsed hours → decay state 0–4" />
              <Bullet text="Interpolates --decay-factor between states" />
              <Bullet text="Fires ResurrectionController on return" />
              <Bullet text="60fps via requestAnimationFrame at mid-range hardware" />
            </div>
          </div>
        </Section>

        {/* SECTION 07 — REFLECTION */}
        <Section>
          <div className="reveal" style={s.label}>07 — Reflection</div>
          <h2 className="reveal" style={s.h2}>Consequence creates care.</h2>
          <p className="reveal" style={s.body}>
            What surprised me most was how quickly users formed an emotional relationship with an interface they had never seen before — within 30 seconds of seeing the Ruined state, they were invested.
          </p>
          <p className="reveal" style={s.body}>
            Interfaces that have no stakes will never create loyalty — only habit. The Dying Interface asks whether we can build digital products that people actually care about keeping alive.
          </p>
          <blockquote className="reveal" style={s.quote}>
            "Every interface assumes you'll come back. This one remembers when you didn't."
          </blockquote>
          <div className="reveal" style={{ marginTop:40, display:'flex', gap:8, flexWrap:'wrap' }}>
            {['UI/UX Design','Experimental','Figma','Three.js','GSAP','WebGL GLSL','Web Audio API','User Testing','Design Systems'].map(t => (
              <span key={t} style={s.tag}>{t}</span>
            ))}
          </div>
        </Section>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop:`0.5px solid ${BD}`, padding:'48px', textAlign:'center' }}>
        <p style={{ color:T3, fontSize:13, marginBottom:16 }}>Ayush Singh · destroyermoh.github.io</p>
        <a href="https://destroyermoh.github.io" style={{ color:AC, fontSize:13, textDecoration:'none' }}>
          ← Back to portfolio
        </a>
      </div>
    </div>
  )
}
