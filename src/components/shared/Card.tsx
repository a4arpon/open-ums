import { ReactChildren } from '@/interfaces/Children-Interface'
import twClassName from '@/lib/twClassName'
import { VariantProps, cva } from 'class-variance-authority'

const cardVariants = cva('p-3 text-light w-full', {
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
    fontSize: {
      sm: 'text-base',
      md: 'text-lg',
    },
    fontWidth: {
      base: 'font-base',
      md: 'font-medium',
      bold: 'font-semibold',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      full: 'rounded-full',
    },
    type: {
      flex: 'flex flex-col gap-2',
      'flex-no-pad': 'flex flex-col gap-2 p-0',
      'flex-3': 'flex flex-col gap-3',
      'flex-row': 'flex gap-2',
      'flex-row-3': 'flex gap-3',
    },
    align: {
      center: 'justify-center items-center',
      between: 'justify-between',
      'center-start': 'justify-center items-start',
      'center-end': 'justify-center items-end',
    },
  },

  defaultVariants: {
    variant: 'ghost',
    fontSize: 'sm',
    rounded: 'sm',
    fontWidth: 'base',
    type: 'flex',
    align: 'between',
  },
})
interface CardProps extends ReactChildren, VariantProps<typeof cardVariants> {}

const Card: React.FC<CardProps> = ({
  children,
  variant,
  fontSize,
  rounded,
  fontWidth,
  type,
}) => {
  return (
    <div
      className={twClassName(
        cardVariants({ variant, fontSize, rounded, fontWidth, type })
      )}
    >
      {children}
    </div>
  )
}

export default Card
