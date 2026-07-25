

const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-border p-5 transition-all duration-300 hover:shadow-lg ${className} `} {...props}>
        {children}
    </div>
  );
};

export default Card