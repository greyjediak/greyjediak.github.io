// --- PCB TRACE BACKGROUND ---
function PCBBackground() {
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
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="pcb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="0.7" fill="#1a2e44" />
        </pattern>
        <filter id="trace-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="center-vignette" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#080c12" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#080c12" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="800" fill="url(#pcb-grid)" />

      {/* Base traces */}
      <g stroke="#1a3352" strokeWidth="1.5" fill="none" strokeLinecap="square">
        {baseTraces.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* Faint secondary traces */}
      <g stroke="#12243a" strokeWidth="1" fill="none" strokeLinecap="square" opacity="0.7">
        <path d="M 0,700 H 80 V 650 H 160 V 590" />
        <path d="M 0,480 H 50 V 430" />
        <path d="M 1440,600 H 1410 V 560" />
        <path d="M 750,0 V 80 H 850 V 140" />
      </g>

      {/* Active/glowing traces */}
      <g stroke="#2d6a8a" strokeWidth="2" fill="none" strokeLinecap="square" filter="url(#trace-glow)" opacity="0.65">
        {activeTraces.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* Vias */}
      {vias.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5.5" stroke="#1e3d5c" strokeWidth="1.5" fill="#0a1020" />
          <circle cx={cx} cy={cy} r="2.5" fill="#1a3352" />
        </g>
      ))}

      {/* IC footprint */}
      <g fill="#0a1020" stroke="#1e3d5c" strokeWidth="1">
        {[-12, -6, 0, 6, 12].map((dy) => (
          <g key={dy}>
            <rect x={340} y={120 + dy - 3} width={14} height={6} rx="1" />
            <rect x={374} y={120 + dy - 3} width={14} height={6} rx="1" />
          </g>
        ))}
        <rect x={354} y={104} width={20} height={30} rx="1" stroke="#162840" />
      </g>

      {/* Resistor pads */}
      <g fill="#0a1020" stroke="#1e3d5c" strokeWidth="1">
        <rect x={833} y={172} width={10} height={14} rx="1" />
        <rect x={849} y={172} width={10} height={14} rx="1" />
      </g>

      {/* Silkscreen labels */}
      <text x="330" y="103" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#1a3352" opacity="0.9">U4</text>
      <text x="835" y="167" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#1a3352" opacity="0.9">R22</text>
      <text x="838" y="540" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#1a3352" opacity="0.9">J1</text>
      <text x="1108" y="738" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#1a3352" opacity="0.9">C6</text>

      {/* Center vignette for text contrast */}
      <rect width="1440" height="800" fill="url(#center-vignette)" />
    </svg>
  )
}