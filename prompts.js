// PROMPT_X — prompt library data
// Images use Picsum's seeded placeholder service, giving each prompt a
// stable, unique image (not a copy of any reference site).

const PROMPTS = [
  {
    id: "liquid-sunbeam",
    title: "Liquid Sunbeam",
    category: "Cinematic",
    likes: 39,
    img: "https://picsum.photos/seed/liquidsunbeam1/600/750",
    prompt: "Create a cinematic underwater portrait shot from a low-angle perspective looking upward toward the surface. Show a person with wet, naturally textured hair, head gently tilted back, sunlight breaking through the water in soft golden shafts. Add fine bubbles drifting around the subject, a teal-to-amber color grade, and a shallow depth of field that keeps the face crisp while the background dissolves into light and water."
  },
  {
    id: "misty-mountain",
    title: "Misty Mountain Pit Stop",
    category: "Lifestyle",
    likes: 7,
    img: "https://picsum.photos/seed/mistymountain2/600/750",
    prompt: "Use the uploaded photo strictly for face and identity reference only. Preserve the person's real facial features, skin tone, age, hairstyle and expression. Place them on a misty mountain overlook at dawn, wearing a relaxed travel jacket, leaning against a parked vehicle with a thermos in hand. Add cool blue-grey fog, soft diffused light, and a candid, unposed travel-photography feel."
  },
  {
    id: "young-man-camera",
    title: "Young Man with Camera",
    category: "Cinematic",
    likes: 576,
    img: "https://picsum.photos/seed/youngmancamera3/600/750",
    prompt: "Use the provided reference image strictly only for facial identity. Generate an 8K hyper-realistic cinematic outdoor portrait of the subject holding a vintage film camera, standing in golden-hour light on a quiet city street. Keep the original facial structure, skin tone and hairstyle untouched. Add warm rim lighting, gentle film grain, and a slightly desaturated cinematic color grade."
  },
  {
    id: "scarlet-ivory",
    title: "Scarlet & Ivory",
    category: "Fashion & Editorial",
    likes: 20,
    img: "https://picsum.photos/seed/scarletivory4/600/750",
    prompt: "If a reference face is provided, preserve it exactly. Create a high-resolution, ultra-realistic cinematic portrait inspired by Golden Age Hollywood glamour (1940s-1950s). Style the subject in a deep scarlet gown against an ivory studio backdrop, with classic Hollywood lighting — soft key light, gentle shadow falloff, and a polished black-and-white-to-color hybrid grade with rich red accents."
  },
  {
    id: "focused-framed",
    title: "Focused and Framed",
    category: "Black & White",
    likes: 41,
    img: "https://picsum.photos/seed/focusedframed5/600/750",
    prompt: "Use the uploaded image strictly only for face and identity reference. Preserve the subject's facial structure, skin tone, age, hairstyle and natural expression. Render a high-contrast black-and-white studio portrait, subject wearing glasses and a wristwatch resting near the jaw, with dramatic Rembrandt-style side lighting and a deep charcoal backdrop."
  },
  {
    id: "indian-couple-red-saree",
    title: "Indian Couple Red Saree",
    category: "Cinematic",
    likes: 288,
    img: "https://picsum.photos/seed/indiancouple6/600/750",
    prompt: "Use uploaded images strictly for 100% face and identity match of both subjects. Create an ultra-realistic romantic portrait of a couple standing close together at golden hour. Style the woman in a flowing red saree with gold embroidery and the man in a matching cream kurta. Add warm cinematic backlight, soft bokeh from string lights, and a rich, festive color grade."
  },
  {
    id: "friendly-creative",
    title: "The Friendly Creative",
    category: "Digital Art",
    likes: 41,
    img: "https://picsum.photos/seed/friendlycreative7/600/750",
    prompt: "Create a high-quality 3D stylized character portrait in a premium modern animation style, similar to Pixar or DreamWorks, based on the provided reference photo. Keep recognizable facial proportions and hairstyle from the reference. Dress the character in a bright red hoodie, add round glasses, soft studio rim lighting, and a warm pastel gradient background with subtle bokeh shapes."
  },
  {
    id: "creator-and-creation",
    title: "Creator and Creation",
    category: "Digital Illustration",
    likes: 15,
    img: "https://picsum.photos/seed/creatorcreation8/600/750",
    prompt: "Create a highly polished, ultra-detailed 3D animated scene in a premium Pixar-inspired style, blending stylized character animation with traditional pencil-sketch elements. Show the subject mid-sketch at a wooden desk, with their drawing coming subtly to life in soft glowing outlines above the page. Use warm desk-lamp lighting and a cozy, creative-studio atmosphere."
  },
  {
    id: "shades-of-happiness",
    title: "Shades of Happiness",
    category: "Portrait Photography",
    likes: 204,
    img: "https://picsum.photos/seed/shadeshappiness9/600/750",
    prompt: "Use the provided reference image strictly for face and identity reference. Create a 4:5 professional-grade studio photograph in a dramatic colour-splash style: subject laughing naturally against a vivid two-tone studio backdrop (magenta fading into cyan), crisp beauty lighting on the face, and a high-fashion editorial finish."
  },
  {
    id: "brazilian-number-10",
    title: "The Brazilian Number 10",
    category: "Fashion & Editorial",
    likes: 28,
    img: "https://picsum.photos/seed/brazilnumber10/600/750",
    prompt: "Create a full-body, ultra-realistic 4K studio portrait of a professional male football player standing centered against a seamless deep royal-blue studio backdrop, wearing a bright yellow jersey with the number 10. Use confident athletic posture, dramatic three-point studio lighting, and a clean editorial composition with generous negative space."
  },
  {
    id: "stand-out-from-crowd",
    title: "Stand Out From Crowd",
    category: "Digital Art",
    likes: 33,
    img: "https://picsum.photos/seed/standoutcrowd11/600/750",
    prompt: "Use the uploaded image only for the face and identity of the central figure. Preserve their facial features, skin tone, hairstyle and overall likeness accurately. Place them in sharp color in the center of a busy city crowd rendered in muted grayscale, creating a striking conceptual 'stand out' composition. Add subtle volumetric light rays converging on the subject."
  },
  {
    id: "soulmate-horizon",
    title: "Soulmate Horizon",
    category: "Cinematic",
    likes: 253,
    img: "https://picsum.photos/seed/soulmatehorizon12/600/750",
    prompt: "Create a hyper-realistic cinematic couple photography poster in 2:3 portrait format with a dual-zone composite layout. Top zone: a close-up of both faces lit in cool blue cinematic tones. Bottom zone: a wide shot of the couple walking along a beach at sunset, silhouetted against warm orange light. Blend the zones with a soft horizon gradient transition."
  },
  {
    id: "shades-of-brown",
    title: "Shades of Brown",
    category: "Cinematic",
    likes: 134,
    img: "https://picsum.photos/seed/shadesbrown13/600/750",
    prompt: "Create a 2:3 ultra-realistic cinematic movie-poster portrait of a powerful lead character using the provided reference image of the subject. Preserve their facial identity precisely. Apply a warm monochrome brown-and-amber color grade, dramatic side lighting with deep shadows, and subtle film grain for a vintage poster finish."
  },
  {
    id: "dramatic-split-lighting",
    title: "Dramatic Split Lighting Portrait",
    category: "Photography",
    likes: 84,
    img: "https://picsum.photos/seed/dramaticsplit14/600/750",
    prompt: "Render an 8K ultra-realistic close-up of a subject (preserve facial characteristics exactly as in the uploaded image) with windswept hair partially covering one eye. Use dramatic split lighting — one side of the face fully lit, the other in deep shadow — against a pure black background, for a moody low-key photography aesthetic."
  },
  {
    id: "neon-noir-city",
    title: "Neon Noir City Walk",
    category: "Cinematic",
    likes: 162,
    img: "https://picsum.photos/seed/neonnoircity15/600/750",
    prompt: "Use the uploaded photo strictly for face and identity reference. Place the subject walking through a rain-slicked neon-lit city street at night, wearing a long dark coat. Reflect pink and cyan neon signage in puddles and on wet pavement. Use a cinematic anamorphic look with shallow depth of field and soft lens flares."
  },
  {
    id: "studio-minimalist-beauty",
    title: "Studio Minimalist Beauty",
    category: "Portraits",
    likes: 97,
    img: "https://picsum.photos/seed/studiobeauty16/600/750",
    prompt: "Preserve the subject's exact facial identity from the uploaded image. Create a minimalist beauty portrait against a soft sand-beige seamless backdrop, with clean diffused butterfly lighting, natural makeup, and a calm, confident expression. Keep the composition centered with generous negative space for an editorial cover look."
  },
  {
    id: "vintage-polaroid",
    title: "Vintage Polaroid Memory",
    category: "Lifestyle",
    likes: 58,
    img: "https://picsum.photos/seed/vintagepolaroid17/600/750",
    prompt: "Transform the uploaded photo into a vintage Polaroid-style snapshot. Preserve all subjects' faces and identities exactly. Apply warm faded colors, soft vignette corners, light film grain, and a classic white polaroid border with a slightly tilted frame, as if it were taken candidly in the late 1990s."
  },
  {
    id: "executive-portrait",
    title: "Modern Executive Portrait",
    category: "Business & Professional",
    likes: 112,
    img: "https://picsum.photos/seed/executiveport18/600/750",
    prompt: "Use the uploaded image strictly for facial identity reference, keeping facial structure, skin tone and hairstyle unchanged. Create a polished corporate headshot with the subject in a tailored charcoal blazer, arms crossed confidently, against a softly blurred modern office background. Use bright, even studio lighting with a subtle blue-grey color grade."
  }
];

const STYLES = [
  { name: "Portraits", count: 244, key: "portraits" },
  { name: "Fashion & Editorial", count: 186, key: "fashion-editorial" },
  { name: "Photography", count: 163, key: "photography" },
  { name: "Cinematic", count: 129, key: "cinematic" },
  { name: "Digital Art", count: 124, key: "digital-art" },
  { name: "Lifestyle", count: 117, key: "lifestyle" },
  { name: "Digital Illustration", count: 100, key: "digital-illustration" },
  { name: "Black & White", count: 54, key: "black-and-white" },
  { name: "Business & Professional", count: 71, key: "business" },
  { name: "Portrait Photography", count: 71, key: "portrait-photography" }
];