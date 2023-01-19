interface FcTypes {
  children: React.ReactNode;
  className?: string;
  justify?: string;
}

function Box({ children, className, justify = "between" }: FcTypes) {
  return (
    <div
      className={` ${className} flex flex-wrap flex-col md:flex-row-reverse justify-${justify} items-center gap-2`}
    >
      {children}
    </div>
  );
}

export default Box;
