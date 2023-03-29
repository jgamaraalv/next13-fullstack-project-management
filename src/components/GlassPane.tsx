import clsx from "clsx";
import React from "react";

const GlassPane: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassPane;
