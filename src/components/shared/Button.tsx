import { ButtonProps } from '@/interfaces/Shared-Interface'
import twClassName from '@/lib/twClassName'
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex text-light justify-center gap-2 items-center py-2 rounded-md  duration-150 ease-in-out transition font-semibold uppercase',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary/90',
        secondary: 'bg-secondary hover:bg-secondary/90',
        dark: 'bg-dark hover:bg-dark/90',
        light: 'bg-light text-dark hover:bg-light/90',
        ghost: 'hover:bg-dark/10 text-dark',
        warn: 'bg-warn text-dark hover:bg-warn/90',
      },
      fSize: {
        sm: 'text-base',
        md: 'text-lg',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        xl: 'rounded-2xl',
      },
      fw: {
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
        'fit-4': 'w-fit px-4',
      },
    },

    defaultVariants: {
      variant: 'primary',
      fSize: 'sm',
      rounded: 'sm',
      fw: 'base',
      scale: 'in',
      width: 'fit',
    },
  }
)

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  fSize,
  disabled,
  onClick,
  link,
  fw,
  rounded,
  scale,
  width,
}) => {
  if (!link) {
    return (
      <button
        className={twClassName(
          buttonVariants({ variant, fSize, fw, rounded, scale, width })
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
          buttonVariants({ variant, fSize, fw, rounded, scale, width })
        )}
      >
        {children}
      </button>
    )
  }
}

export default Button
