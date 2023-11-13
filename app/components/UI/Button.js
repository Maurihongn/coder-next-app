const Button = ({ children, className = '', ...args }) => {
  return (
    <button
      className={`rounded-lg py-2 px-4 bg-neutral-900 text-center text-white hover:bg-neutral-800 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};
export default Button;
