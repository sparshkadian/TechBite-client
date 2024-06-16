import { MouseEventHandler } from 'react';

const Button = ({
  children,
  type,
  className,
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
