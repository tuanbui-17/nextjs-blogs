import { SVGAttributes } from "react";

type MoonIconProps = Pick<
  SVGAttributes<SVGElement>,
  "className" | "width" | "height"
>;

export function MoonIcon(props: Readonly<MoonIconProps>) {
  const { className, width = "20", height = "20" } = props;

  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
      />
    </svg>
  );
}
