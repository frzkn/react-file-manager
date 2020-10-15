import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" {...props}>
      <title>{"React Logo"}</title>
      <circle r={2.05} fill="#61dafb" />
      <g stroke="#61dafb" fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  )
}

export default SvgComponent
