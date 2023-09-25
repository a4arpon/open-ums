import { ClassValue } from 'class-variance-authority/types'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function twClassName(...input: ClassValue[]) {
  // clsx utility to merge class names from the input and then merge them with Tailwind CSS classes using twMerge. Inspired form https://ui.shadcn.com/
  return twMerge(clsx(input))
}
