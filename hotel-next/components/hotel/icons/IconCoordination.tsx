export function IconCoordination({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="10.6" cy="10.8" r="4.2" fill="none" stroke="#7de6ff" strokeWidth="1.7" />
      <circle cx="10.6" cy="10.8" r="1.9" fill="none" stroke="#2b4357" strokeWidth="1.6" />
      <path
        d="M10.6 5.2 V3.7 M10.6 17.9 V16.4 M5 10.8 H3.5 M17.7 10.8 H16.2"
        fill="none"
        stroke="#7de6ff"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.6 6.9 L5.5 5.8 M15.7 15.8 L14.6 14.7 M14.6 6.9 L15.7 5.8 M5.5 15.8 L6.6 14.7"
        fill="none"
        stroke="#7de6ff"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <circle cx="17.2" cy="15.8" r="2.9" fill="none" stroke="#7de6ff" strokeWidth="1.6" />
      <circle cx="17.2" cy="15.8" r="1.25" fill="none" stroke="#2b4357" strokeWidth="1.4" />
      <path
        d="M17.2 12.7 V11.7 M17.2 20.0 V19.0 M14.1 15.8 H13.1 M21.3 15.8 H20.3"
        fill="none"
        stroke="#7de6ff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M4.2 18.6 L20.6 4.6" fill="none" stroke="#ff8a2e" strokeWidth="2" strokeLinecap="round" />
      <circle
        cx="12.6"
        cy="12.6"
        r="8.6"
        fill="none"
        stroke="#ff7a1a"
        strokeOpacity="0.16"
        strokeWidth="1.2"
      />
    </svg>
  );
}
