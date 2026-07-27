// --- PCB TRACE BACKGROUND ---
export default function PCBBackground() {
  const baseTraces = [
    // Bottom-left cluster
    'M 0,580 H 180 V 440 H 520',
    'M 180,580 V 765 H 400',
    'M 0,380 H 100 V 270 H 250',
    'M 250,270 V 120 H 430',
    'M 100,270 V 120 H 0',
    'M 520,440 V 310 H 660',
    'M 660,310 V 180 H 820',
    'M 430,120 H 580 V 40 H 0',
    // Top-right cluster
    'M 1440,185 H 1200 V 365 H 1055',
    'M 1055,365 V 525 H 865',
    'M 865,525 V 685 H 665',
    'M 1440,505 H 1325 V 725 H 1105',
    'M 1325,725 V 800',
    'M 1440,685 H 1365 V 560 H 1200',
    'M 1200,365 V 560',
    // Sparse mid edges
    'M 0,180 H 60 V 80 H 200 V 0',
    'M 1440,800 V 760 H 1385 V 710 H 1295',
  ]

  const activeTraces = [
    'M 180,440 H 520',
    'M 1200,365 H 1055 V 525',
  ]

  const vias: [number, number][] = [
    [180, 440], [520, 440], [180, 580], [180, 765],
    [100, 270], [250, 270], [250, 120], [430, 120],
    [520, 310], [660, 310], [820, 180], [580, 120],
    [1200, 365], [1055, 365], [865, 525], [665, 525],
    [1325, 505], [1105, 725], [1200, 560], [1365, 560],
    [1325, 725], [60, 180], [200, 80],
  ]

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="pcb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle
            cx="20"
            cy="20"
            r="0.8"
            fill="var(--color-tech-600)"
            opacity="0.55"
          />
        </pattern>
        <filter id="trace-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1440" height="800" fill="url(#pcb-grid)" />

      {/* Base traces */}
      <g
        stroke="var(--color-tech-600)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="square"
        opacity="0.85"
      >
        {baseTraces.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* Faint secondary traces */}
      <g
        stroke="var(--color-tech-700)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="square"
        opacity="0.8"
      >
        <path d="M 0,700 H 80 V 650 H 160 V 590" />
        <path d="M 0,480 H 50 V 430" />
        <path d="M 1440,600 H 1410 V 560" />
        <path d="M 750,0 V 80 H 850 V 140" />
      </g>

      {/* Active/glowing traces */}
      <g
        stroke="var(--color-tech-300)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="square"
        filter="url(#trace-glow)"
        opacity="0.95"
      >
        {activeTraces.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* Vias */}
      {vias.map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r="5.5"
            stroke="var(--color-tech-400)"
            strokeWidth="1.5"
            fill="var(--color-navy-800)"
          />
          <circle
            cx={cx}
            cy={cy}
            r="2.5"
            fill={
              i % 7 === 0
                ? "var(--color-signal-400)"
                : "var(--color-tech-300)"
            }
          />
        </g>
      ))}

      {/* IC footprint */}
      <g
        fill="var(--color-navy-800)"
        stroke="var(--color-tech-500)"
        strokeWidth="1.2"
      >
        {[-12, -6, 0, 6, 12].map((dy) => (
          <g key={dy}>
            <rect x={340} y={120 + dy - 3} width={14} height={6} rx="1" />
            <rect x={374} y={120 + dy - 3} width={14} height={6} rx="1" />
          </g>
        ))}
        <rect
          x={354}
          y={104}
          width={20}
          height={30}
          rx="1"
          stroke="var(--color-tech-400)"
        />
      </g>

      {/* Resistor pads */}
      <g
        fill="var(--color-navy-800)"
        stroke="var(--color-tech-400)"
        strokeWidth="1.2"
      >
        <rect x={833} y={172} width={10} height={14} rx="1" />
        <rect x={849} y={172} width={10} height={14} rx="1" />
      </g>

      {/* Silkscreen labels */}
      <g
        fill="var(--color-tech-300)"
        opacity="0.75"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="9"
      >
        <text x="330" y="103">U4</text>
        <text x="835" y="167">R22</text>
        <text x="838" y="540">J1</text>
        <text x="1108" y="738">C6</text>
      </g>
    </svg>
  )
}
