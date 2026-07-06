import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Section({ children, style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const items = el.querySelectorAll('.reveal')
    if (!items.length) return
    gsap.fromTo(items,
      { opacity: 0, y: 36 },
      {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true }
      }
    )
  }, [])

  return (
    <section ref={ref} style={{ padding: '80px 0', ...style }}>
      {children}
    </section>
  )
}
