type GraphSVGProps = {
  width: string;
  height: string;
};
export default function GraphSVG({ width, height, ...props }: GraphSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="57.7769"
        y="40"
        width="40"
        height="6.22302"
        rx="3.11151"
        transform="rotate(-90 57.7769 40)"
        fill="#E9EDF7"
      />
      <rect
        x="57.7769"
        y="40"
        width="9.53846"
        height="6.22306"
        rx="3.11153"
        transform="rotate(-90 57.7769 40)"
        fill="#0097FE"
      />
      <rect
        x="43.3325"
        y="40"
        width="40"
        height="6.22299"
        rx="3.11149"
        transform="rotate(-90 43.3325 40)"
        fill="#E9EDF7"
      />
      <rect
        x="43.3325"
        y="40"
        width="36.3077"
        height="6.2231"
        rx="3.11155"
        transform="rotate(-90 43.3325 40)"
        fill="#0097FE"
      />
      <rect
        x="28.8884"
        y="40"
        width="40"
        height="6.22302"
        rx="3.11151"
        transform="rotate(-90 28.8884 40)"
        fill="#E9EDF7"
      />
      <rect
        x="28.8884"
        y="40"
        width="27.6923"
        height="6.22302"
        rx="3.11151"
        transform="rotate(-90 28.8884 40)"
        fill="#0097FE"
      />
      <rect
        x="14.4441"
        y="40"
        width="40"
        height="6.223"
        rx="3.1115"
        transform="rotate(-90 14.4441 40)"
        fill="#E9EDF7"
      />
      <rect
        x="14.4441"
        y="40"
        width="20.6154"
        height="6.22302"
        rx="3.11151"
        transform="rotate(-90 14.4441 40)"
        fill="#0097FE"
      />
      <rect
        y="40"
        width="40"
        height="6.22304"
        rx="3.11152"
        transform="rotate(-90 0 40)"
        fill="#E9EDF7"
      />
      <rect
        y="40"
        width="32.9231"
        height="6.22305"
        rx="3.11153"
        transform="rotate(-90 0 40)"
        fill="#0097FE"
      />
    </svg>
  );
}
