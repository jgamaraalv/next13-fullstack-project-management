import clsx from "clsx";
import { FC } from "react";

const GlassPane: FC<React.HTMLAttributes<HTMLDivElement>> = ({
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
