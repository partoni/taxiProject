
type IconLoveProps = {
  width?:string,
  height?:string
}

export const IconLove:React.FC<IconLoveProps> = ({width,height,...rest})=>{

  return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // width={128}
    // height={128}
    width={width}
    height={height}
    {...rest}
    
  >
    <path
      fill="current"
      d="M76.16 72.01c-3.35 0-6.1-2.74-6.1-6.1V62.1c0-3.35 2.74-6.1 6.1-6.1 3.35 0 6.1 2.74 6.1 6.1v3.81c-.01 3.36-2.75 6.1-6.1 6.1z"
    />
    <g
      style={{
        opacity: 0.2,
      }}
    >
      <path
        d="M76.16 58.01c2.26 0 4.1 1.84 4.1 4.1v3.81c0 2.26-1.84 4.1-4.1 4.1s-4.1-1.84-4.1-4.1v-3.81c0-2.26 1.84-4.1 4.1-4.1m0-2c-3.35 0-6.1 2.74-6.1 6.1v3.81c0 3.35 2.74 6.1 6.1 6.1 3.35 0 6.1-2.74 6.1-6.1v-3.81c-.01-3.36-2.75-6.1-6.1-6.1z"
        style={{
          fill: "#424242",
        }}
      />
    </g>
    <linearGradient
      id="a"
      x1={63.996}
      x2={63.996}
      y1={67.667}
      y2={115.708}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ffee58",
        }}
      />
      <stop
        offset={0.349}
        style={{
          stopColor: "#ffe950",
        }}
      />
      <stop
        offset={0.887}
        style={{
          stopColor: "#fddb3a",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#fdd835",
        }}
      />
    </linearGradient>
    <path
      d="M124 90.05v20.62c0 2.83-1.08 5.26-4 5.26l-106.85.29c-3.5 0-9.4-1.01-9.15-7.84 0 0 .25-8.95.41-11.38.46-7 4.71-9.58 15.17-10.91 13.43-1.71 14.73-5.73 18.67-8.67C47.1 70.82 52 66 75.46 66c17.3 0 30.41 5.81 38.74 15.89.38.46 2.95 1.76 7.05 3.35 1.47.57 2.75 1.68 2.75 4.81z"
      style={{
        fill: "url(#a)",
      }}
    />
    <defs>
      <path
        id="b"
        d="M124 90.05v20.62c0 2.83-1.08 5.26-4 5.26l-106.85.29c-3.5 0-9.4-1.01-9.15-7.84 0 0 .25-8.95.41-11.38.46-7 4.71-9.58 15.17-10.91 13.43-1.71 14.73-5.73 18.67-8.67C47.1 70.82 52 66 75.46 66c17.3 0 30.41 5.81 38.74 15.89.38.46 2.95 1.76 7.05 3.35 1.47.57 2.75 1.68 2.75 4.81z"
      />
    </defs>
    <clipPath id="c">
      <use
        xlinkHref="#b"
        style={{
          overflow: "visible",
        }}
      />
    </clipPath>
    <path
      d="M0 101.99h9.7c4.63 0 5.81-1.31 6.76-3.69 0 0 2.28-4.3-3.47-4.3H4.3c-.31 0-.63.03-.93.08C1.74 96.02.3 98.53 0 101.99z"
      style={{
        clipPath: "url(#c)",
        fill: "#fff9c4",
      }}
    />
    <path
      d="M122.9 99.46h-1.27c-.82 0-1.23-.53-1.49-1.93l-.73-6.47c-.26-1.93.67-1.93 1.49-1.93h2c1.4 0 1.49.87 1.49 1.93v6.47c0 1.07.07 1.93-1.49 1.93z"
      style={{
        clipPath: "url(#c)",
        fill: "#e53935",
      }}
    />
    <path
      d="M73.05 71.85c-15.05-.02-30.18 7.62-34.4 15.42-.53.99.28 2.13 1.5 2.13H73.3c.91 0 1.65-.66 1.65-1.48v-14.6c0-.91-.89-1.47-1.9-1.47zM81.85 71.85c13.72 0 21.49 7.62 25.33 15.42.49.99-.25 2.13-1.36 2.13H81.64c-.83 0-1.51-.66-1.51-1.48V76.25c0-3.13.16-4.4 1.72-4.4z"
      style={{
        fill: "#546e7a",
      }}
    />
    <g
      style={{
        opacity: 0.2,
      }}
    >
      <path
        d="M75.47 69c15.83 0 28.43 5.12 36.43 14.8.34.41 1.24 1.49 8.27 4.23.45.18.84.33.84 2.02v20.62c0 2.26-.68 2.26-1.01 2.26l-106.84.29c-1.4 0-3.93-.2-5.22-1.53-.68-.71-.99-1.75-.93-3.23 0-.09.25-8.92.41-11.26.3-4.56 2.18-6.82 12.56-8.14 11.62-1.48 15.21-4.83 18.1-7.52.67-.62 1.3-1.21 1.98-1.72.53-.4 1.05-.79 1.56-1.17C49.31 72.84 54.41 69 75.47 69m0-3C52 66 47.1 70.82 38.25 77.42c-3.94 2.94-5.23 6.96-18.67 8.67C9.13 87.42 4.88 90 4.42 97 4.26 99.43 4 108.38 4 108.38c-.25 6.83 5.65 7.84 9.15 7.84l106.85-.29c2.92 0 4-2.42 4-5.26V90.05c0-3.13-1.28-4.24-2.75-4.81-4.09-1.59-6.67-2.89-7.05-3.35C105.88 71.81 92.77 66 75.47 66z"
        style={{
          fill: "#424242",
        }}
      />
    </g>
    <path
      d="M50.58 94.25h6.04v6.04h-6.04zM62.66 94.25h6.04v6.04h-6.04zM74.74 94.25h6.04v6.04h-6.04zM44.55 100.29h6.04v6.04h-6.04zM56.62 100.29h6.04v6.04h-6.04zM68.7 100.29h6.04v6.04H68.7zM80.78 100.29h6.04v6.04h-6.04z"
      style={{
        fill: "#6d4c41",
      }}
    />
    <g
      style={{
        opacity: 0.2,
      }}
    >
      <path
        d="M72.95 73.85V87.4H40.9c2.09-3.2 6.3-6.43 11.72-8.95 6.34-2.96 13.56-4.59 20.33-4.6m.07-2c-15.04 0-30.15 7.63-34.37 15.42-.53.99.28 2.13 1.5 2.13H73.3c.91 0 1.65-.66 1.65-1.48v-14.6c0-.9-.89-1.47-1.89-1.47h-.04z"
        style={{
          fill: "#424242",
        }}
      />
    </g>
    <g
      style={{
        opacity: 0.2,
      }}
    >
      <path
        d="M82.23 73.85C95.66 74 102.17 82.06 105 87.4H82.13V76.25c0-.47 0-1.72.1-2.4m-.38-2c-1.56 0-1.72 1.28-1.72 4.4v11.67c0 .82.67 1.48 1.51 1.48h24.18c1.11 0 1.85-1.15 1.36-2.13-3.84-7.8-11.61-15.42-25.33-15.42z"
        style={{
          fill: "#424242",
        }}
      />
    </g>
    <circle
      cx={31.73}
      cy={114.02}
      r={10}
      style={{
        fill: "#4e342e",
      }}
    />
    <g
      style={{
        opacity: 0.2,
      }}
    >
      <path
        d="M31.73 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z"
        style={{
          fill: "#eee",
        }}
      />
    </g>
    <circle
      cx={31.73}
      cy={114.02}
      r={5.65}
      style={{
        fill: "#bdbdbd",
      }}
    />
    <circle
      cx={102.85}
      cy={114.02}
      r={10}
      style={{
        fill: "#4e342e",
      }}
    />
    <g
      style={{
        opacity: 0.2,
      }}
    >
      <path
        d="M102.85 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z"
        style={{
          fill: "#eee",
        }}
      />
    </g>
    <circle
      cx={102.85}
      cy={114.02}
      r={5.65}
      style={{
        fill: "#bdbdbd",
      }}
    />
  </svg>)
}

