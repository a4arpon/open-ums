import { buttonVariants } from '@/components/shared/Button'
import { cardVariants } from '@/components/shared/Card'
import { VariantProps } from 'class-variance-authority'

export interface ReactChildren {
  children: React.ReactNode
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  link?: string
  target?: string
}

export interface CardProps
  extends ReactChildren,
    VariantProps<typeof cardVariants> {}
