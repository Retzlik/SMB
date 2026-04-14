export const C = {
  f: '#2A4636',
  ink: '#1A1C1A',
  mid: '#787874',
  brd: '#C4C3BE',
  wg: '#E6E5E1',
  st: '#F4F4F1',
  pp: '#FAFAF8',
  mt: '#9BA69E',
} as const

export type ColorKey = keyof typeof C

// CSS variable font stacks — populated by next/font in layout.tsx
export const se = 'var(--font-serif), Georgia, serif'
export const sn = 'var(--font-sans), "Helvetica Neue", sans-serif'
export const mono = '"Courier New", Consolas, monospace'
