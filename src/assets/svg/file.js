import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 80 80" width={46} height={46} {...props}>
      <path fill="#ebf4ff" d="M12.5 75.5v-71h37.293L67.5 22.207V75.5z" />
      <path
        fill="rgb(104,171,241)"
        d="M49.586 5L67 22.414V75H13V5h36.586M50 4H12v72h56V22L50 4z"
      />
      <path fill="rgb(159,205,250)" d="M49.5 22.5v-18h.293L67.5 22.207v.293z" />
      <path
        fill="rgb(104,171,241)"
        d="M50 5.414L66.586 22H50V5.414M50 4h-1v19h19v-1L50 4zM24 32h32v1H24zm0 6h24v1H24zm0 6h32v1H24zm0 6h24v1H24zm0 6h32v1H24z"
      />
    </svg>
  )
}

export default SvgComponent
