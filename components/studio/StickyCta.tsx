"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Pressable from "@/components/motion/Pressable";
import { site, whatsappLink } from "@/lib/site";
import { spring } from "@/lib/motion";

// მობილური სტიკი-ბარი — გადახვევის შემდეგ ჩნდება, შუშისებრი ფონით.
export default function StickyCta() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 640));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={spring.snappy}
          className="glass fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 md:hidden"
        >
          <Pressable
            href={whatsappLink}
            external
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-accent text-base font-semibold text-white shadow-lg shadow-accent/25"
          >
            WhatsApp
          </Pressable>
          <Pressable
            href={site.phoneHref}
            aria-label="დარეკვა"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-ink/15 text-base font-medium text-ink"
          >
            დარეკვა
          </Pressable>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
