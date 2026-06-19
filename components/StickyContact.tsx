import { site, whatsappLink } from "@/lib/site";

// მობილურზე ქვედა ფიქსირებული ზოლი — ვიზიტორების უმეტესობა Instagram/Facebook-იდან
// ტელეფონით შემოდის და კონტაქტი ერთ შეხებაზე უნდა იყოს.
export default function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-stone-900 py-3 text-sm font-semibold text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4Zm-3.1 4.2c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5v-.5L9.6 8.6c-.2-.4-.4-.4-.6-.4h-.1Z" />
          </svg>
          WhatsApp
        </a>
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-800"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.7 2Z" />
          </svg>
          დარეკვა
        </a>
      </div>
    </div>
  );
}
