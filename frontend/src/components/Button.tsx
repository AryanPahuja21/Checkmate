interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 sm:px-4 sm:py-3 sm:text-xl text-white font-semibold font-mono tracking-wide bg-gradient-to-r from-green-600 to-emerald-800 rounded-lg "
    >
      {children}
    </button>
  );
};

export default Button;
