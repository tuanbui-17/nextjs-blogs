import { IconProps } from "@/interface/icon.interface";

export function SunIcon(props: Readonly<IconProps>) {
  const { className, fill, width = "20", height = "20" } = props;

  return (
    <div className={className}>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    </div>
  );
}
