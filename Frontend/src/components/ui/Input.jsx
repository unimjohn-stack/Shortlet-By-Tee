const Input = ({ label, error, className = "", ...props}) => {
    return (
        <div className="flex flex-col gap-2">
            {
            label && ( 
            <label className="text-sm font-medium text-heading">
                {label}
            </label>
        )}
        <input className={`w-full rounded-md border border-border bg-white px-4 py-3 text-body outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted 
            ${error ? "border-red-500" : ""}
             ${className}`} {...props} />
            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;