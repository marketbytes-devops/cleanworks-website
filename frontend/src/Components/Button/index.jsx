const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} transition-colors duration-600`}
    >
      {children}
    </button>
  );
};

export default Button;
