// ერთი ადგილი საკონტაქტო ინფორმაციისთვის — შეცვალე აქ და ყველგან განახლდება.
export const site = {
  name: "Beso Surmava",
  nameKa: "ბესო სურმავა",
  tagline: "ვებსაიტები ქართული ბიზნესებისთვის",
  phoneDisplay: "+995 596 85 50 50",
  phoneHref: "tel:+995596855050",
  whatsappNumber: "995596855050",
  instagram: "beso_surmava",
  email: "besosurm12@gmail.com",
  city: "ქუთაისი, საქართველო",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "გამარჯობა, ბესო! ვებსაიტი მაინტერესებს ჩემი ბიზნესისთვის."
)}`;

// უფასო რჩევის შეთავაზება — მომხმარებელი აგზავნის თავის გვერდს
export const auditWhatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "გამარჯობა, ბესო! აი ჩემი ბიზნესის გვერდი: "
)}`;

export const instagramLink = `https://instagram.com/${site.instagram}`;

export const navLinks = [
  { href: "#services", label: "სერვისები" },
  { href: "#portfolio", label: "ნამუშევრები" },
  { href: "#pricing", label: "ფასები" },
  { href: "#process", label: "პროცესი" },
  { href: "#faq", label: "კითხვები" },
] as const;
