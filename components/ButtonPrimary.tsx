import Button from './Button';
import type { ButtonProps } from './Button';
import { twMerge } from 'tailwind-merge';

export default function ButtonPrimary({ children, href, external, className }: ButtonProps) {
  return (
    <Button
      {...{
        href,
        external,
        className: twMerge('text-white bg-teal-600 hover:bg-teal-700', className),
      }}
    >
      {children}
    </Button>
  );
}
