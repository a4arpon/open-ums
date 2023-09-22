import twClassName from '@/lib/twClassName'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'flex justify-center gap-2 items-center py-2 duration-200 ease-in-out transition uppercase',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary/95',
        secondary: 'bg-secondary hover:bg-secondary/95',
        dark: 'bg-dark hover:bg-dark/95 text-light',
        light: 'bg-light text-dark hover:bg-light/95',
        ghost: 'hover:bg-dark/10',
        warn: 'bg-warn hover:bg-warn/95',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        xl: 'rounded-2xl',
      },
      fontSize: {
        sm: 'text-base',
        md: 'text-lg',
        xl: 'text-xl',
      },
      fontWidth: {
        base: 'font-medium',
        bold: 'font-semibold',
      },
      scale: {
        in: 'active:scale-95',
        out: 'active:scale-105',
      },
      width: {
        full: 'w-full',
        fit: 'w-fit px-6',
        'fit-p4': 'w-fit px-4',
      },
    },

    defaultVariants: {
      variant: 'primary',
      fontSize: 'sm',
      rounded: 'md',
      fontWidth: 'base',
      scale: 'in',
      width: 'fit',
    },
  }
)

interface ButtonPropsWithVariants
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  link?: string
  target?: string
}

const Button: React.FC<ButtonPropsWithVariants> = ({
  children,
  variant,
  fontSize,
  disabled,
  onClick,
  link,
  fontWidth,
  rounded,
  scale,
  width,
}) => {
  if (!link) {
    return (
      <button
        className={twClassName(
          buttonVariants({
            variant,
            fontSize: fontSize,
            fontWidth,
            rounded,
            scale,
            width,
          })
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else {
    return (
      <button
        className={twClassName(
          buttonVariants({
            variant,
          })
        )}
      >
        {children}
      </button>
    )
  }
}

export default Button
