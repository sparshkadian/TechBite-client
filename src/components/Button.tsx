const Button = ({
  children,
  type,
  className,
}: {
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
