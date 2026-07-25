
const Button = ({ children, variant = "primary", size = "md", className= "", ...props }) => {

    const variants = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "border border-primary text-primary hover:bg-primary hover:text-white",
        accent: "bg-accent text-blue-950 hover:opacity-90",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-7 py-4 text-lg",
    };
  return (
    <button className={`rounded-md font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
    </button>
  );
};

export default Button;