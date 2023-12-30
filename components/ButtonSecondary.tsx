import Button from './Button';
import type { ButtonProps } from './Button';

export default function ButtonSecondary({ children, href, external }: Omit<ButtonProps, 'className'>) {
  return (
    <Button
      {...{
        href,
        external,
        className: 'text-teal-600 border-teal-600 border-2 hover:bg-gray-50',
      }}
    >
      {children}
    </Button>
  );
}
