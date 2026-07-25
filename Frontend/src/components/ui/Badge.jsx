
const Badge = ({ children, variant="primary", className = "", ...props}) => {
    const variants = {
        primary: "bg-primary/10 text-primary",
        secondary: "bg-secondary/10 text-accent",
        success: "bg-green-100 text-green-700",
        danger: "bg-red-100 text-red-700",
        premium:"bg-accent/20 text-yellow-400 border border-accent/30 backdrop-blur-xs shadow-sm",
        clear: "bg-black-900 backdrop-blur-xs text-white",
        // premium:`
        //     bg-white/20
        //     text-white
        //     border border-white/30
        //     backdrop-blur-md
        //     shadow-lg
        //     `
    };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variants[variant]} ${className} `} {...props}>
        {children}
    </span>
  );
};

export default Badge;