import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const rotate    = useTransform(scrollYProgress, [0, 1], [18, 0])
  const scale     = useTransform(scrollYProgress, [0, 1], isMobile ? [0.75, 0.95] : [1.04, 1])
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <div
      className="h-[60rem] md:h-[75rem] flex items-center justify-center relative p-2 md:p-16"
      ref={containerRef}
    >
      <div className="py-8 md:py-32 w-full relative" style={{ perspective: '1000px' }}>
        <ScrollHeader translate={translate} titleComponent={titleComponent} />
        <ScrollCard rotate={rotate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </div>
  )
}

function ScrollHeader({ translate, titleComponent }) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center mb-4"
    >
      {titleComponent}
    </motion.div>
  )
}

function ScrollCard({ rotate, scale, children }) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        background: '#13131f',
        border: '2px solid rgba(212,160,23,0.3)',
        boxShadow: '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 0 60px rgba(212,160,23,0.08)',
      }}
      className="max-w-5xl -mt-10 mx-auto h-[32rem] md:h-[42rem] w-full rounded-[24px] overflow-y-auto p-4 md:p-8"
    >
      {children}
    </motion.div>
  )
}
