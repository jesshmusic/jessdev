import { useEffect } from 'react'
import gsap from 'gsap'
import styles from './Logo.module.scss'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

export default function Logo () {
  useEffect(() => {
    gsap.from(['.logo-circle', '.logo-path'], {
      duration: 1,
      stagger: 0.5,
      drawSVG: 0,
      ease: 'power1.in'
    })
  })

  return (
    <svg width="100%"
      height="100%"
      viewBox="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      id="backgroundLogo"
      className={styles.logo}>
      <g id="Layer-1" transform="matrix(1,0,0,1,-336.8,-534.49)">
        <g opacity="0.75">
          <path id="path3768-2"
            className={`logo-path ${styles.logoPath1}`}
            d="M444.193,620.829L398.17,647.407L352.137,620.829L398.166,594.257L444.193,620.829Z"/>
          <path id="path3770-1"
            className={`logo-path ${styles.logoPath2}`}
            d="M398.166,594.257L398.166,541.107L352.137,567.679L352.137,620.829L398.166,594.257Z"/>
          <path id="path3766-7"
            className={`logo-path ${styles.logoPath3}`}
            d="M367.48,611.97L398.166,629.687L398.166,594.254L367.48,576.537L367.48,611.97Z"/>
          <path id="path3780-9"
            className={`logo-path ${styles.logoPath4}`}
            d="M444.193,620.829L398.17,594.259L398.164,541.106L444.193,567.681L444.193,620.829Z"/>
          <path id="path3772-4"
            className={`logo-path ${styles.logoPath5}`} d="M367.48,576.54L398.166,594.257L428.852,576.54L398.166,558.823L367.48,576.54Z"/>
          <path id="path3774-4"
            className={`logo-path ${styles.logoPath6}`}
            d="M398.17,629.69L428.856,611.973L428.856,576.54L398.17,594.257L398.17,629.69Z"/>
        </g>
      </g>
    </svg>
  )
}
