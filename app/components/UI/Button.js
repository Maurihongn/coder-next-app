const Button = ({ children, className = '', ...args }) => {
  return (
    <button
      className={`rounded-lg py-2 px-4 bg-blue-400 text-center text-white hover:bg-blue-500 hover:text-gray-50 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};
export default Button;
