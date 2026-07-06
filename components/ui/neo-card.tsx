import { cn } from '@/lib/utils'

type NeoCardShadow = 'none' | 'sm' | 'md' | 'lg'

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: NeoCardShadow
  accent?: boolean
  press?: boolean
}

const shadowClasses: Record<NeoCardShadow, string> = {
  none: '',
  sm: 'neo-shadow-sm',
  md: 'neo-shadow',
  lg: 'neo-shadow-lg',
}

export function NeoCard({
  className,
  shadow = 'md',
  accent = false,
  press = false,
  children,
  ...props
}: NeoCardProps) {
  return (
    <div
      className={cn(
        'rounded-none border-2 border-border',
        accent ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground',
        shadowClasses[shadow],
        press && 'neo-press',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
