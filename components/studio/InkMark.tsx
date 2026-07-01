// "ink wash ბ" — ხელნაწერი მონოგრამა: ბ ცურავს ქარვისფერ, მოსუნთქე ლაქაზე.
// გამოიყენება nav-სა და footer-ში (hero-ს/contact-ს აქვთ საკუთარი, დიდი ვარიანტი).
// სუფთა CSS ანიმაცია (wash + floaty) — JS არ სჭირდება.

export default function InkMark({
  width = 48,
  height = 48,
  rx = 27,
  ry = 24,
  fontSize = 52,
  washDur = "6s",
  className,
}: {
  width?: number;
  height?: number;
  rx?: number;
  ry?: number;
  fontSize?: number;
  washDur?: string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 66"
      fill="none"
      aria-label="ბესო"
      className={className}
      style={{ overflow: "visible" }}
    >
      <ellipse
        cx="32"
        cy="38"
        rx={rx}
        ry={ry}
        fill="var(--ac)"
        style={{ transformOrigin: "32px 38px", animation: `wash ${washDur} ease-in-out infinite` }}
      />
      <text
        x="32"
        y="35"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-serif)"
        fontWeight="700"
        fontSize={fontSize}
        fill="#f3ebdd"
      >
        ბ
      </text>
    </svg>
  );
}
