import { useEffect } from 'react'
import gsap from 'gsap'
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
      viewBox="0 0 1200 1200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={'logo-svg'}>
      <g className={'logoGroup1'}>
        <g transform="matrix(1,0,0,1,-49,49)">
          <circle cx="649"
            cy="610"
            r="257"
            className={'logo-circle logo-circle__outer'}/>
          <g transform="matrix(0.904669,0,0,0.904669,61.8696,58.1518)">
            <circle cx="649"
              cy="610"
              r="257"
              className={'logo-circle logo-circle__mid'}/>
          </g>
          <g transform="matrix(0.854086,0,0,0.854086,94.6984,89.0078)">
            <circle cx="649"
              cy="610"
              r="257"
              className={'logo-circle logo-circle__inner'}/>
          </g>
        </g>
        <g transform="matrix(1,0,0,1,0,29.5)">
          <path d="M168.5,639.825L168.5,659L139,629.5L168.5,600L168.5,619.175L380.5,619.175L380.5,639.825L168.5,639.825Z"
            className={'logo-path'}/>
        </g>
        <g transform="matrix(-1,0,0,1,1200,29.5)">
          <path d="M168.5,639.825L168.5,659L139,629.5L168.5,600L168.5,619.175L380.5,619.175L380.5,639.825L168.5,639.825Z"
            className={'logo-path'}/>
        </g>
        <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-29.5,1259)">
          <path d="M168.5,639.825L168.5,659C152.219,659 139,645.781 139,629.5C139,613.219 152.219,600 168.5,600L168.5,619.175L380.5,619.175L380.5,639.825L168.5,639.825Z"
            className={'logo-path'}/>
        </g>
        <g transform="matrix(-1.0104e-16,1.6501,1.47458,9.02918e-17,-328.246,-188.364)">
          <path d="M174.589,639.825L191.724,659L165.362,659L139,629.5L165.362,600L191.724,600L174.589,619.175L380.5,619.175L380.5,639.825L174.589,639.825Z"
            className={'logo-path logo-path__top'}/>
        </g>
        <g transform="matrix(1,0,0,1,-185,-185)">
          <path d="M785,659L810.173,750.054L847.797,735.232L853.773,775.227L945.215,751.5L878.946,818.827L910.594,844L878.946,869.173L945.215,936.5L853.773,912.773L847.797,952.768L810.173,937.946L785,1029L759.827,937.946L722.203,952.768L716.227,912.773L624.785,936.5L691.054,869.173L659.406,844L691.054,818.827L624.785,751.5L716.227,775.227L722.203,735.232L759.827,750.054L785,659Z"
            className={'logo-path'}/>
        </g>
      </g>
    </svg>
  )
}
