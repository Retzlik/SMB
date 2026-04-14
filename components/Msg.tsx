import { C, sn, mono } from '@/lib/design'

interface MsgProps {
  from: 'karl' | 'you'
  children: React.ReactNode
  time?: string
}

export default function Msg({ from, children, time }: MsgProps) {
  const isYou = from === 'you'
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isYou ? 'flex-end' : 'flex-start',
        marginBottom: 8,
      }}
    >
      <div
        style={{
          maxWidth: 260,
          padding: '10px 14px',
          borderRadius: isYou ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
          background: isYou ? C.wg : C.f,
          color: isYou ? C.ink : C.st,
          fontFamily: sn,
          fontSize: 13,
          lineHeight: 1.5,
        }}
      >
        {children}
        {time && (
          <div
            style={{
              fontFamily: mono,
              fontSize: 9,
              marginTop: 4,
              opacity: 0.5,
              textAlign: isYou ? 'right' : 'left',
            }}
          >
            {time}
          </div>
        )}
      </div>
    </div>
  )
}
