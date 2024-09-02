export default function SocialMedia() {
  return (
    <section className="w-full relative flex items-center justify-center">
      <SocialMediaBg className="w-full h-full max-w-[1440px] max-h-[1050px]" />
      <p className="absolute text-sm text-white">card here</p>
    </section>
  );
}

function SocialMediaBg({ className }: { className?: string }) {
  return (
    <svg
      width="1440"
      height="1050"
      viewBox="0 0 1440 1050"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 203L1451.5 0V851.5L0 1050V203Z"
        fill="url(#paint0_linear_1397_52)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1397_52"
          x1="-3.21068e-06"
          y1="718.801"
          x2="1464.79"
          y2="510.396"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1B45B4" />
          <stop offset="1" stop-color="#1C2792" />
        </linearGradient>
      </defs>
    </svg>
  );
}
