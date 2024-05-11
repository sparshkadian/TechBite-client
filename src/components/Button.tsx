const Button = ({
  children,
  type,
}: {
  type: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
}) => {
  return (
    <button type={type} className='signButton manrope-normal self-center'>
      {children}
    </button>
  );
};

export default Button;
