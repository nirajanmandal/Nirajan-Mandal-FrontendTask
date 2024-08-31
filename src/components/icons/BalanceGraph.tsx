type BalanceGraphProps = {
  width: string;
  height: string;
};

export default function BalanceGraph({
  width,
  height,
  ...props
}: BalanceGraphProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 68 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 9.61167C2.7619 13.4175 5.79661 20.5006 12.8475 19.972C19.8983 19.4434 20.7429 2 33.0857 2C45.4286 2 45.4286 22.1166 66 4.71845"
        stroke="white"
        stroke-width="2.11969"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
