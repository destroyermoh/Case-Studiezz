import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import Section from '../components/Section'
gsap.registerPlugin(ScrollTrigger)

const BG     = '#0B0E1A'
const SF     = '#111827'
const SF2    = '#1E293B'
const T1     = '#E8F4F8'
const T2     = '#7A8FA6'
const T3     = '#3D5068'
const CYAN   = '#00D4FF'
const PURPLE = '#8B5CF6'
const TEAL   = '#0D9488'
const BD     = 'rgba(0,212,255,0.08)'

const s = {
  page:    { background:BG, color:T1, fontFamily:'Inter, sans-serif', minHeight:'100vh' },
  wrap:    { maxWidth:900, margin:'0 auto', padding:'0 48px' },
  eyebrow: { fontSize:11, fontWeight:500, letterSpacing:'0.12em', color:T3, textTransform:'uppercase', marginBottom:20 },
  heroTitle: { fontSize:'clamp(40px,7vw,100px)', fontWeight:700, lineHeight:0.95, marginBottom:32 },
  heroSub: { fontSize:19, color:T2, maxWidth:560, lineHeight:1.75, marginBottom:60 },
  label:   { fontSize:10, fontWeight:500, letterSpacing:'0.1em', color:CYAN, textTransform:'uppercase', marginBottom:10 },
  h2:      { fontSize:32, fontWeight:700, color:T1, lineHeight:1.15, marginBottom:20 },
  h3:      { fontSize:18, fontWeight:600, color:T1, lineHeight:1.3, marginBottom:12 },
  body:    { fontSize:16, color:T2, lineHeight:1.8, marginBottom:20 },
  quote: {
    borderLeft:`3px solid ${CYAN}`, paddingLeft:28,
    margin:'40px 0', color:T1, fontSize:22,
    fontStyle:'italic', fontWeight:500, lineHeight:1.5
  },
  grid2:   { display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, margin:'32px 0' },
  card:    { background:SF, borderRadius:12, padding:'28px 32px', border:`0.5px solid ${BD}` },
  metaGrid:{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, margin:'48px 0' },
  metaCard:{ background:SF, borderRadius:10, padding:'24px 28px', border:`0.5px solid ${BD}` },
  metaVal: { fontSize:36, fontWeight:700, color:T1, marginBottom:4 },
  metaLbl: { fontSize:12, color:T2 },
  metaSub: { fontSize:11, color:CYAN, marginTop:4 },
  tag:     { display:'inline-block', fontSize:10, fontWeight:500, letterSpacing:'0.06em', color:CYAN, border:`0.5px solid ${CYAN}30`, borderRadius:4, padding:'4px 10px', margin:'4px', textTransform:'uppercase' },
  heroMeta:{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:32, padding:'40px 0', borderTop:`0.5px solid ${BD}`, borderBottom:`0.5px solid ${BD}`, margin:'48px 0' },
  heroMetaK:{ fontSize:10, color:T3, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:6 },
  heroMetaV:{ fontSize:14, color:T1, fontWeight:500 },
  pill: (ac) => ({
    display:'inline-block', fontSize:10, fontWeight:500, letterSpacing:'0.06em',
    color:ac, border:`0.5px solid ${ac}40`, borderRadius:20, padding:'4px 12px',
    margin:'0 6px 6px 0', textTransform:'uppercase'
  }),
  screenCard:{ background:SF, borderRadius:12, padding:'28px', border:`0.5px solid ${BD}`, marginBottom:16 },
  screenNum: { fontSize:11, color:CYAN, fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:8 },
  principle:{ background:SF2, borderRadius:10, padding:'28px 32px', border:`0.5px solid ${BD}`, marginBottom:16 },
  bullet:  { fontSize:15, color:T2, lineHeight:1.7, paddingLeft:20, marginBottom:10, position:'relative' },
}

function Bullet({ text, ac=CYAN }) {
  return (
    <div style={s.bullet}>
      <span style={{ position:'absolute', left:0, color:ac }}>→</span>
      {text}
    </div>
  )
}

const SCREENS = [
  { n:'01', name:'Splash', desc:'3D rotating anatomy model. App name. Ambient cyan glow. No navigation. The first thing a student sees is the subject matter — not the interface.', ac:CYAN },
  { n:'02', name:'Mode Selection', desc:'Two cards. Study Mode (Cyan — guided, structured) vs Explore Mode (Purple — open, spatial). The only navigation decision before learning begins.', ac:PURPLE },
  { n:'03', name:'Study Mode', desc:'Colour-coded floating anatomy labels. Tap organ → info panel slides in with frosted glass so the 3D model stays visible behind the text. Progress bar tracks explored systems.', ac:TEAL },
  { n:'04', name:'Explore Mode', desc:'No labels. No panels. No guidance. Pinch to scale, two-hand rotate, index finger tap to isolate a system, layer slider from skin to bone. Pure spatial learning.', ac:CYAN },
]

export default function AnatomyVR() {
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = '3D Human Anatomy VR Platform — Case Study'
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
      <Nav theme="av" />

      {/* HERO */}
      <div style={{ ...s.wrap, paddingTop:160 }} ref={heroRef}>
        <div className="hi" style={s.eyebrow}>Case Study 02 — Spatial UI/UX · AR/VR Design · IJCSER 2025</div>
        <h1 className="hi" style={s.heroTitle}>
          3D Human<br />
          <span style={{ color:CYAN }}>Anatomy</span><br />
          VR Platform
        </h1>
        <p className="hi" style={s.heroSub}>
          An immersive VR learning platform for medical anatomy education — designed, tested, and published in peer-reviewed research.
        </p>

        <div className="hi" style={s.heroMeta}>
          {[
            ['Role','Spatial UI/UX Designer\n& AR/VR Developer'],
            ['Context','Parul University AR/VR Lab\nFeb 2024 – Jan 2025'],
            ['Published','IJCSER 2025\nQR-Triggered AR in Anatomy'],
          ].map(([k,v]) => (
            <div key={k}>
              <div style={s.heroMetaK}>{k}</div>
              <div style={{ ...s.heroMetaV, whiteSpace:'pre-line' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={s.wrap}>

        {/* 01 PROBLEM */}
        <Section>
          <div className="reveal" style={s.label}>01 — The Problem</div>
          <h2 className="reveal" style={s.h2}>Anatomy is 3D. The education isn't.</h2>
          <p className="reveal" style={s.body}>
            Medical students spend thousands of hours studying anatomy from flat diagrams. The human body is spatial, volumetric, and deeply interconnected — but the tools are flat, static, and fragmented.
          </p>
          <p className="reveal" style={s.body}>
            Spatial understanding of anatomy is one of the strongest predictors of surgical performance — yet it remains one of the least supported areas of medical curriculum design.
          </p>
          <blockquote className="reveal" style={s.quote}>
            "What if a student could reach into the body, rotate an organ, peel back layers, and explore anatomy the way a surgeon actually experiences it?"
          </blockquote>
        </Section>

        {/* 02 RESEARCH */}
        <Section>
          <div className="reveal" style={s.label}>02 — Research Foundation</div>
          <h2 className="reveal" style={s.h2}>Published in IJCSER 2025.</h2>
          <p className="reveal" style={s.body}>
            This project resulted in a peer-reviewed paper: <em>"QR-Triggered Augmented Reality as an Accessible Entry Point for Immersive Anatomy Education"</em> — documenting the design methodology, QR-triggered AR access system, and quantitative outcomes from the 45-participant study.
          </p>
          <div style={s.grid2}>
            <div className="reveal" style={s.card}>
              <div style={s.h3}>Gaps in existing tools</div>
              <Bullet text="All designed desktop-first — VR as an afterthought" />
              <Bullet text="Navigation borrowed from 2D UI: menus, lists, hierarchies" />
              <Bullet text="No spatial interaction grammar — you click, not reach" />
              <Bullet text="Aesthetic built for professionals, not learners" />
              <Bullet text="Everything visible at once — no progressive disclosure" />
            </div>
            <div className="reveal" style={s.card}>
              <div style={s.h3}>Opportunities found</div>
              <Bullet text="Spatial UI can replace flat menus entirely" ac={TEAL} />
              <Bullet text="Body layers map naturally to learning progression" ac={TEAL} />
              <Bullet text="Colour coding by system cuts cognitive load dramatically" ac={TEAL} />
              <Bullet text="Guided vs Free modes address two different learner types" ac={TEAL} />
              <Bullet text="QR-AR makes VR accessible without a headset" ac={TEAL} />
            </div>
          </div>
        </Section>

        {/* 03 DESIGN SYSTEM */}
        <Section>
          <div className="reveal" style={s.label}>03 — Design System</div>
          <h2 className="reveal" style={s.h2}>The interface should feel like it exists inside the body.</h2>
          <p className="reveal" style={s.body}>
            Deep navy backgrounds reference internal anatomy. Cyan and teal accents reference bioluminescence — light that exists inside living tissue.
          </p>
          <div className="reveal" style={{ display:'flex', gap:12, flexWrap:'wrap', margin:'24px 0 32px' }}>
            {[
              { n:'Background', c:'#0B0E1A' },
              { n:'Surface', c:'#111827' },
              { n:'Surface 2', c:'#1E293B' },
              { n:'Cyan Accent', c:'#00D4FF' },
              { n:'Purple Accent', c:'#8B5CF6' },
              { n:'Teal Accent', c:'#0D9488' },
              { n:'Text Primary', c:'#E8F4F8' },
              { n:'Text Secondary', c:'#7A8FA6' },
            ].map(({ n, c }) => (
              <div key={n} style={{ textAlign:'center' }}>
                <div style={{ width:52, height:52, borderRadius:10, background:c, border:'0.5px solid rgba(255,255,255,0.1)', margin:'0 auto 6px' }} />
                <div style={{ fontSize:10, color:T3, marginBottom:2 }}>{n}</div>
                <div style={{ fontSize:9, color:T3, fontFamily:'monospace' }}>{c}</div>
              </div>
            ))}
          </div>
          <p className="reveal" style={s.body}>
            The three-accent system maps to interaction types — <span style={{ color:CYAN }}>Cyan</span> for primary navigation, <span style={{ color:PURPLE }}>Purple</span> for mode indicators, <span style={{ color:TEAL }}>Teal</span> for anatomy labels and confirmed info.
          </p>
        </Section>

        {/* 04 SCREENS */}
        <Section>
          <div className="reveal" style={s.label}>04 — The Four Screens</div>
          <h2 className="reveal" style={s.h2}>Four screens. Near-zero interface learning curve.</h2>
          <p className="reveal" style={s.body}>
            Deliberately constrained to four core screens. The interaction should never compete with the anatomy.
          </p>
          {SCREENS.map(sc => (
            <div key={sc.n} className="reveal" style={{ ...s.screenCard, borderLeftColor:sc.ac, borderLeftWidth:2 }}>
              <div style={{ ...s.screenNum, color:sc.ac }}>Screen {sc.n} — {sc.name}</div>
              <p style={{ ...s.body, marginBottom:0 }}>{sc.desc}</p>
            </div>
          ))}
        </Section>

        {/* 05 SPATIAL INTERACTION */}
        <Section>
          <div className="reveal" style={s.label}>05 — Spatial Interaction Design</div>
          <h2 className="reveal" style={s.h2}>The hardest design problem in VR is not visual.</h2>
          <p className="reveal" style={s.body}>It's spatial. How does a user navigate an interface when there's no screen, no cursor, no scroll?</p>
          {[
            { n:'Presence over clicks', b:'Dwell for 1.5s triggers a radial progress indicator. In Explore Mode, reaching toward an organ activates its highlight before contact. The UI responds to approaching, not just touching.' },
            { n:'Layers as narrative', b:'The body\'s physical layers (skin → fascia → muscle → organ → bone) became the navigation structure. Students don\'t go to a menu — they peel the layer away. The act of navigating is the act of understanding.' },
            { n:'Ambient UI', b:'Information that doesn\'t need immediate attention exists in the periphery as ambient glow — colour coded by system type. A student always knows where they are in the body without checking a minimap.' },
          ].map(({ n, b }) => (
            <div key={n} className="reveal" style={s.principle}>
              <div style={s.h3}>{n}</div>
              <p style={{ ...s.body, marginBottom:0 }}>{b}</p>
            </div>
          ))}
        </Section>

        {/* 06 METRICS */}
        <Section>
          <div className="reveal" style={s.label}>06 — Validated Metrics</div>
          <h2 className="reveal" style={s.h2}>45 participants. Real numbers.</h2>
          <div className="reveal" style={s.metaGrid}>
            {[
              { v:'82.5/100', l:'SUS Score', s:'Industry "Good" = 68 · 82.5 = Excellent' },
              { v:'91%', l:'Task Completion Rate', s:'Across all 45 participants, 6 core tasks' },
              { v:'45', l:'Study Participants', s:'Medical & paramedical students' },
              { v:'4.4/5', l:'Spatial Comprehension', s:'Self-reported vs textbook-only study' },
              { v:'2.3×', l:'Recall Improvement', s:'Post-session quiz vs control group' },
              { v:'2025', l:'Year Published', s:'IJCSER peer-reviewed journal' },
            ].map(({ v, l, s: sub }) => (
              <div key={v} style={s.metaCard}>
                <div style={s.metaVal}>{v}</div>
                <div style={s.metaLbl}>{l}</div>
                <div style={s.metaSub}>{sub}</div>
              </div>
            ))}
          </div>
          <blockquote className="reveal" style={s.quote}>
            "I've been studying anatomy for two years. I understood the heart better in 10 minutes here than in any lecture."
          </blockquote>
          <p className="reveal" style={{ ...s.body, color:T3, fontSize:14 }}>— Participant 12, 2nd year MBBS student</p>
        </Section>

        {/* 07 QR-AR */}
        <Section>
          <div className="reveal" style={s.label}>07 — QR-Triggered AR System</div>
          <h2 className="reveal" style={s.h2}>Making VR accessible without a headset.</h2>
          <p className="reveal" style={s.body}>
            Full VR headsets are expensive. The platform uses a two-tier access model:
          </p>
          <div style={s.grid2}>
            <div className="reveal" style={s.card}>
              <div style={{ ...s.h3, color:CYAN }}>Tier 1 — Full VR</div>
              <p style={{ ...s.body, marginBottom:0 }}>Headset users get the complete spatial experience with 6DOF interaction, haptic feedback, and room-scale exploration.</p>
            </div>
            <div className="reveal" style={s.card}>
              <div style={{ ...s.h3, color:PURPLE }}>Tier 2 — QR-triggered AR</div>
              <p style={{ ...s.body, marginBottom:0 }}>Scan a QR code from a printed textbook page → the relevant 3D anatomy model appears overlaid on your desk via phone camera. No app install. No headset. Just a phone.</p>
            </div>
          </div>
          <p className="reveal" style={s.body}>
            This turned every printed textbook into an AR trigger — making the platform accessible to every student regardless of hardware.
          </p>
        </Section>

        {/* 08 REFLECTION */}
        <Section>
          <div className="reveal" style={s.label}>08 — Reflection</div>
          <h2 className="reveal" style={s.h2}>Design for the space between the hands and the object.</h2>
          <p className="reveal" style={s.body}>
            This was the project that taught me the difference between designing a UI and designing a space. Everything I knew about layout, hierarchy, and typography had to be relearned in three dimensions.
          </p>
          <p className="reveal" style={s.body}>
            The 82.5 SUS score meant more to me than any visual metric. It meant 45 people walked into an unfamiliar spatial environment and felt capable. That's the job.
          </p>
          <blockquote className="reveal" style={s.quote}>
            "Design for the space between the hands and the object. That's where learning happens."
          </blockquote>
          <div className="reveal" style={{ marginTop:40, display:'flex', gap:8, flexWrap:'wrap' }}>
            {['Spatial UI/UX','AR/VR','Figma','Unity 3D','WebXR','Design Systems','User Research','IJCSER 2025','SUS Testing'].map(t => (
              <span key={t} style={s.tag}>{t}</span>
            ))}
          </div>
        </Section>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop:`0.5px solid ${BD}`, padding:'48px', textAlign:'center' }}>
        <p style={{ color:T3, fontSize:13, marginBottom:16 }}>Ayush Singh · destroyermoh.github.io</p>
        <a href="https://destroyermoh.github.io" style={{ color:CYAN, fontSize:13, textDecoration:'none' }}>
          ← Back to portfolio
        </a>
      </div>
    </div>
  )
}
