"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// გლობალური "ნაკადური" გადახვევა — პრემიუმ მომენტუმი მთელ გვერდზე.
// touch-ზე განზრახ ვტოვებთ ნეიტიურ გადახვევას (Lenis-ის რეკომენდაცია — მობილურზე ასე ბუნებრივია),
// anchors: true კი #ბმულებს გლუვ გადახვევას ანიჭებს.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, smoothWheel: true, anchors: true }}
    >
      {children}
    </ReactLenis>
  );
}
