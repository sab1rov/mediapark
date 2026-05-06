import * as React from 'react'
const EyeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className="w-4 h-4"
    {...props}
  >
    <path
      stroke="#686C74"
      strokeWidth={1.5}
      d="M2.183 10.197c-.566-.736-.85-1.104-.85-2.197s.284-1.46.85-2.197C3.315 4.333 5.213 2.667 8 2.667c2.788 0 4.685 1.666 5.817 3.136.566.736.85 1.104.85 2.197s-.284 1.461-.85 2.197c-1.132 1.47-3.029 3.137-5.817 3.137-2.788 0-4.685-1.667-5.817-3.137Z"
    />
    <path
      stroke="#686C74"
      strokeWidth={1.5}
      d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
)
export default EyeIcon
