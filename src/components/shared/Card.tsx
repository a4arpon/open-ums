import { CardProps } from '@/interfaces/Shared-Interface'
import twClassName from '@/lib/twClassName'
import { cva } from 'class-variance-authority'

export const cardVariants = cva('p-3 text-light w-full', {
  variants: {
    variant: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      dark: 'bg-dark ',
      light: 'bg-light text-dark',
      ghost: 'bg-dark/5 text-dark',
      'ghost-dark': 'bg-dark/10 text-dark',
      warn: 'bg-warn text-dark',
    },
    fSize: {
      sm: 'text-base',
      md: 'text-lg',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      full: 'rounded-full',
    },
    fw: {
      base: 'font-base',
      md: 'font-medium',
      bold: 'font-semibold',
    },
    type: {
      flex: 'flex flex-col gap-2',
      'flex-no-pad': 'flex flex-col gap-2 p-0',
      'flex-md': 'flex flex-col gap-3',
    },
  },

  defaultVariants: {
    variant: 'ghost',
    fSize: 'sm',
    rounded: 'sm',
    fw: 'base',
    type: 'flex',
  },
})
const Card: React.FC<CardProps> = ({
  children,
  variant,
  fSize,
  rounded,
  fw,
  type,
}) => {
  return (
    <div
      className={twClassName(
        cardVariants({ variant, fSize, rounded, fw, type })
      )}
    >
      {children}
    </div>
  )
}

export default Card
