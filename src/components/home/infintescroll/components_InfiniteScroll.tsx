'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './InfiniteScroll.module.css'

const InfiniteScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const scrollContent = contentRef.current
    if (!scrollContainer || !scrollContent) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContent.offsetWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const intervalId = setInterval(scroll, 20)

    return () => clearInterval(intervalId)
  }, [])

  const content = (
    <>
      <span className={styles.text}>Recognised by: </span>
      <Image src="images/scrolllogos/startupbihar.jpg" alt="Logo 3" width={100} height={50} className={styles.logo} />
      <Image src="images/scrolllogos/startupindia.jpg" alt="Logo 4" width={100} height={50} className={styles.logo} />
      <Image src="images/scrolllogos/msme.jpg" alt="Logo 2" width={100} height={50} className={styles.logo} />
   </>
  )

  return (
    <div className="mt-2">
      <div className={styles.scrollContainer} ref={scrollRef}>
        <div className={styles.scrollContent} ref={contentRef}>
          {content}
          {content}
          {content}
          {content} {/* Added one more repeat for smoother transition */}
        </div>  
      </div>
    </div>
  )
}

export default InfiniteScroll