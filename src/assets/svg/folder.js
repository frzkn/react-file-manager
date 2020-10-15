import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 80 80" width={46} height={46} {...props}>
      <path fill="rgb(159,205,250)" d="M2.5 71.5v-63h21.293l6 6H77.5v57z" />
      <path
        fill="rgb(104,171,241)"
        d="M23.586 9l5.707 5.707.293.293H77v56H3V9h20.586M24 8H2v64h76V14H30l-6-6z"
      />
      <path fill="rgb(104,171,241)" d="M2.5 71.5v-53h21.651l6-4H77.5v57z" />
      <path
        fill="rgb(104,171,241)"
        d="M77 15v56H3V19h21.303l.252-.168L30.303 15H77m1-1H30l-6 4H2v54h76V14z"
      />
    </svg>
  )
}

export default SvgComponent
