// მობილურზე მორგებული მოძრაობის სისტემა — ერთი წყარო ყველა ანიმაციისთვის.
// პრინციპები:
//  1) სპრინგ ფიზიკა, რომ შეხება "ნამდვილ" მობილურ აპად აღიქმებოდეს (არა CSS-ის წრფივი ease).
//  2) მკაცრი ბიუჯეტი — ვამოძრავებთ მხოლოდ transform / scale / opacity (GPU). არასდროს width/height/top/left.
//  3) მობილური ეკრანი პირველ ადგილზე — hover-ზე არაფერი არ არის დამოკიდებული.
import type { Transition, Variants } from "motion/react";

// — სპრინგ პრესეტები ————————————————————————————————————————
export const spring = {
  /** ღილაკის ტაქტილური დაჭერა — მკვრივი და სწრაფი, "ნეიტივ" შეგრძნება */
  tactile: { type: "spring", stiffness: 400, damping: 15 } as Transition,
  /** რბილი შემოსვლა — ელეგანტური, დამამშვიდებელი */
  gentle: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 } as Transition,
  /** მკვეთრი, ენერგიული — ბარებისა და გადასვლებისთვის */
  snappy: { type: "spring", stiffness: 300, damping: 26 } as Transition,
};

// — ტაქტილური დაჭერა (whileTap) ———————————————————————————————
// პრემიუმ მობილური ღილაკის უკუკავშირი — ვრთავთ ყველა ღილაკზე, ბმულსა და ბარათზე.
export const tapScale = { scale: 0.95, transition: spring.tactile };

/** უფრო ნაზი ვარიანტი დიდი ზედაპირებისთვის (ბარათები) */
export const tapScaleSubtle = { scale: 0.97, transition: spring.tactile };

// — viewport-ში შემოსვლის ანიმაციები (whileInView) ————————————————
// ერთხელ ეშვება და ეშვება ოდნავ ადრე, ვიდრე ბლოკი სრულად გამოჩნდება ეკრანზე.
export const viewportOnce = { once: true, margin: "-10% 0px" };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring.gentle },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: spring.gentle },
};

// — დაგვირგვინებული (staggered) კონტეინერი —————————————————————————
// მშობელი ცვლის "hidden" → "show"-ს, შვილები მისდევენ თანმიმდევრობით.
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const staggerItem = fadeUp;
