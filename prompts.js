// PROMPT_X — prompt library data
// Images use Picsum's seeded placeholder service, giving each prompt a
// stable, unique image (not a copy of any reference site).

const PROMPTS = [
  // ===== 1. Viral Aesthetics & Time Travel =====
  {
    id: "y2k-party-camcorder",
    title: "Y2K Party Camcorder",
    category: "Viral Aesthetics",
    likes: 312,
    img: "https://picsum.photos/seed/y2kcamcorder1/600/750",
    prompt: "Edit this photo like it was captured on a cheap 2003 pocket camcorder. Add a bright flash overexposure, low-resolution grain, slight VHS color distortion, a subtle digital timestamp in the corner, and cool-toned indoor lighting. Keep the person's face structure and expression exactly the same."
  },
  {
    id: "90s-disposable-camera",
    title: "90s Disposable Camera",
    category: "Viral Aesthetics",
    likes: 421,
    img: "https://picsum.photos/seed/90sdisposable2/600/750",
    prompt: "Turn this photo into a faded late-90s disposable camera memory. Add dusty film grain, soft motion blur, uneven lighting, tiny scratches, and a warm sunset glow leaking from the right corner. Make it feel accidental, nostalgic, and raw. Preserve the original subject."
  },
  {
    id: "cyberpunk-neon-street",
    title: "Cyberpunk Neon Street",
    category: "Cinematic",
    likes: 598,
    img: "https://picsum.photos/seed/cyberpunkstreet3/600/750",
    prompt: "Place the subject inside a rainy Tokyo street at night. Add glowing holographic advertisements, pink and cyan neon reflections on the damp ground, cinematic street fog, and realistic rim lighting that naturally wraps around the subject's hair and clothes. Keep the original facial features and pose untouched."
  },
  {
    id: "wes-anderson-symmetry",
    title: "Wes Anderson Symmetry",
    category: "Cinematic",
    likes: 187,
    img: "https://picsum.photos/seed/wesanderson4/600/750",
    prompt: "Restyle this image in a strict Wes Anderson cinematic language. Apply a symmetrical composition, pastel color blocks of mustard yellow and dusty pink, flat front lighting, and a retro stylized backdrop. Keep the subject's face, clothing geometry, and exact pose unchanged."
  },
  {
    id: "old-money-dark-academia",
    title: "Old Money Dark Academia",
    category: "Lifestyle",
    likes: 245,
    img: "https://picsum.photos/seed/darkacademia5/600/750",
    prompt: "Modify the environment to look like an old, moody Ivy League library with floor-to-ceiling mahogany bookshelves and soft green banker lamps. Apply a deep, low-contrast color grade with warm leather tones. Keep the subject's head position and expression identical."
  },
  {
    id: "old-hollywood-noir",
    title: "Old Hollywood Noir",
    category: "Black & White",
    likes: 156,
    img: "https://picsum.photos/seed/hollywoodnoir6/600/750",
    prompt: "Convert this photo into a dramatic 1940s film noir still. Use high-contrast black and white chiaroscuro lighting, with sharp shadows casting blinds across the background wall. Keep the subject crisp and instantly recognizable."
  },
  {
    id: "pinterest-scrapbook-layout",
    title: "Pinterest Scrapbook Layout",
    category: "Digital Art",
    likes: 203,
    img: "https://picsum.photos/seed/scrapbook7/600/750",
    prompt: "Turn this image into a handmade scrapbook page collage. Add torn notebook paper edges, clear tape pieces holding the photo down, handwritten cursive notes, dried flowers, and a soft matte pastel texture overlaying the entire frame."
  },
  {
    id: "coquette-aesthetic",
    title: "Coquette Aesthetic",
    category: "Viral Aesthetics",
    likes: 389,
    img: "https://picsum.photos/seed/coquette8/600/750",
    prompt: "Apply a soft, airy coquette aesthetic. Change the background to a vintage floral wallpaper, add faint pink light leaks, soft-focus cream tones, and subtle pearl strings or silk ribbons draped near the edges of the frame. Do not change the person's face."
  },
  {
    id: "retro-synthwave-grid",
    title: "Retro Synthwave Grid",
    category: "Digital Art",
    likes: 271,
    img: "https://picsum.photos/seed/synthwave9/600/750",
    prompt: "Transform the background into a vibrant 1980s neon grid sunset with a glowing purple wireframe horizon and a massive digital sun. Infuse the subject with hot pink and electric blue ambient lighting. Keep the original pose intact."
  },
  {
    id: "streetwear-lookbook",
    title: "Streetwear Lookbook",
    category: "Fashion & Editorial",
    likes: 332,
    img: "https://picsum.photos/seed/streetwear10/600/750",
    prompt: "Keep the subject's face and hair identical, but seamlessly swap their outfit for an oversized cream-colored premium hoodie, relaxed dark wash vintage jeans, and clean chunky white sneakers. Set the background to a minimal, gritty industrial concrete wall."
  },

  // ===== 2. Cinematic & Pop Culture Masterpieces =====
  {
    id: "a24-indie-movie-poster",
    title: "A24 Indie Movie Poster",
    category: "Cinematic",
    likes: 467,
    img: "https://picsum.photos/seed/a24poster11/600/750",
    prompt: "Create a dramatic indie movie poster using this portrait. Add heavy cinematic shadows, subtle film grain, a sophisticated serif title typography layout at the bottom, and a moody, desaturated color grade. Preserve the exact facial identity and gaze of the subject."
  },
  {
    id: "action-movie-speed-blur",
    title: "Action Movie Speed Blur",
    category: "Cinematic",
    likes: 298,
    img: "https://picsum.photos/seed/speedblur12/600/750",
    prompt: "Keep the subject perfectly sharp and in focus, but apply dramatic radial motion blur to the background city lights. Include anamorphic streak lens flares, subtle camera shake artifacts, and high-octane cinematic color grading. Do not distort the person's body shape."
  },
  {
    id: "cybernetic-glitch-hacker",
    title: "Cybernetic Glitch Hacker",
    category: "Digital Art",
    likes: 214,
    img: "https://picsum.photos/seed/glitchhacker13/600/750",
    prompt: "Add a subtle cybernetic tech-overlay to the subject, featuring a glowing blue digital data stream reflecting onto their skin. The background should match a dark room illuminated solely by matrix-style cascading terminal code screens. Face and expression must remain clear."
  },
  {
    id: "fantasy-royalty",
    title: "Fantasy Royalty",
    category: "Cinematic",
    likes: 356,
    img: "https://picsum.photos/seed/fantasyroyalty14/600/750",
    prompt: "Transform the background into an elegant, massive medieval castle hall lit by hundreds of floating candles. Blend the lighting seamlessly with the subject's skin tones. Do not change the clothing or facial features; alter only the background environment."
  },
  {
    id: "studio-ghibli-magic",
    title: "Studio Ghibli Magic",
    category: "Digital Illustration",
    likes: 612,
    img: "https://picsum.photos/seed/ghiblimagic15/600/750",
    prompt: "Re-render the background of this photo into a beautiful, hand-painted anime landscape inspired by Studio Ghibli, featuring rolling green hills, a vibrant blue sky, and massive fluffy white clouds. Keep the subject sharp, realistic, and unaltered."
  },
  {
    id: "high-fashion-editorial-cover",
    title: "High-Fashion Editorial Cover",
    category: "Fashion & Editorial",
    likes: 289,
    img: "https://picsum.photos/seed/editorialcover16/600/750",
    prompt: "Apply a high-end fashion magazine look. Increase contrast, deepen the blacks, add sharp Rembrandt lighting across the subject's face, and introduce a crisp textured grey concrete background. Leave the facial structure completely organic and unchanged."
  },
  {
    id: "moody-detective-film-still",
    title: "Moody Detective Film Still",
    category: "Cinematic",
    likes: 178,
    img: "https://picsum.photos/seed/detectivefilm17/600/750",
    prompt: "Transform this photo into a cinematic frame from a detective thriller. Add heavy volumetric fog, streetlights cutting through mist behind the subject, and an intense teal and orange color grade. The subject's features must stay crisp and in focus."
  },
  {
    id: "post-apocalyptic-survivor",
    title: "Post-Apocalyptic Survivor",
    category: "Cinematic",
    likes: 224,
    img: "https://picsum.photos/seed/apocalypsesurvivor18/600/750",
    prompt: "Modify the environment into a cinematic, overgrown ruined city street with cracked pavement and vines crawling up abandoned buildings. Add a dusty, dramatic atmosphere with god-rays filtering through haze. Keep the subject's clothing and face identical."
  },
  {
    id: "mythical-god-light",
    title: "Mythical God Light",
    category: "Cinematic",
    likes: 401,
    img: "https://picsum.photos/seed/godlight19/600/750",
    prompt: "Introduce heavy, dramatic golden sunbeams (god-rays) bursting from the top left corner, creating a strong rim-light effect along the subject's silhouette and hair. Keep the composition and underlying facial details entirely untouched."
  },
  {
    id: "vintage-vinyl-album-cover",
    title: "Vintage Vinyl Album Cover",
    category: "Photography",
    likes: 167,
    img: "https://picsum.photos/seed/vinylcover20/600/750",
    prompt: "Reframe this photo to a perfect square aspect ratio. Apply a faded, low-contrast 1970s vinyl record texture with ring wear, warm analog color shifts, and a clean minimalist text placeholder at the top edge. Keep the original subject intact."
  },

  // ===== 3. Artistic Transformations & Alternate Realities =====
  {
    id: "toy-box-action-figure",
    title: "Toy Box Action Figure",
    category: "Digital Art",
    likes: 530,
    img: "https://picsum.photos/seed/actionfigure21/600/750",
    prompt: "Transform the subject into a stylized collectible toy figure with smooth, glossy plastic textures and clean lines. Place the figure inside an elegant, premium retail display window with studio box packaging and dramatic spotlighting. Keep the pose and likeness recognizable."
  },
  {
    id: "fine-art-oil-painting",
    title: "Fine Art Oil Painting",
    category: "Digital Illustration",
    likes: 195,
    img: "https://picsum.photos/seed/oilpainting22/600/750",
    prompt: "Render this photo in the style of a classical renaissance oil painting. Apply heavy, visible canvas textures, rich brush strokes, and deep earthy color tones while maintaining the distinct facial likeness and proportions of the person."
  },
  {
    id: "16bit-retro-pixel-art",
    title: "16-Bit Retro Pixel Art",
    category: "Digital Art",
    likes: 348,
    img: "https://picsum.photos/seed/pixelart23/600/750",
    prompt: "Convert this entire photo into a detailed 16-bit retro arcade pixel art style. Use a vibrant color palette, clear geometric grid layout, and stylized blocky shading, while ensuring the subject's expression and clothing colors remain distinct."
  },
  {
    id: "ethereal-watercolor-sketch",
    title: "Ethereal Watercolor Sketch",
    category: "Digital Illustration",
    likes: 142,
    img: "https://picsum.photos/seed/watercolorsketch24/600/750",
    prompt: "Turn this portrait into a delicate watercolor painting blended with fine ink linework. Use soft pastel color washes that gently bleed into a textured white paper background. Keep the facial features elegant and clearly defined."
  },
  {
    id: "double-exposure-forest",
    title: "Double Exposure Forest",
    category: "Digital Art",
    likes: 267,
    img: "https://picsum.photos/seed/doubleexposure25/600/750",
    prompt: "Apply a double exposure effect. Merge the subject's silhouette seamlessly with a dense, misty pine forest. The forest texture and trees should fill the dark areas of the clothing and hair, while keeping the face clear, sharp, and highly recognizable."
  },
  {
    id: "modern-vector-pop-art",
    title: "Modern Vector Pop Art",
    category: "Digital Art",
    likes: 233,
    img: "https://picsum.photos/seed/vectorpopart26/600/750",
    prompt: "Restyle this photo into a clean, modern vector illustration. Use bold, flat color patches, crisp clean outlines, a minimalist geometric background, and sharp shadows. Preserve the subject's exact hair style and profile shape."
  },
  {
    id: "hyper-realistic-3d-avatar",
    title: "Hyper-Realistic 3D Avatar",
    category: "Digital Illustration",
    likes: 489,
    img: "https://picsum.photos/seed/3davatar27/600/750",
    prompt: "Convert this person into a high-fidelity 3D animated character, matching the quality of modern feature films. Retain their exact facial structure, hair color, and expression, but apply smooth stylized skin and stylized large expressive eyes."
  },
  {
    id: "comic-book-pop-noir",
    title: "Comic Book Pop Noir",
    category: "Digital Art",
    likes: 176,
    img: "https://picsum.photos/seed/comicnoir28/600/750",
    prompt: "Transform this into a dramatic graphic novel panel. Apply heavy ink lines, retro halftone dot shading patterns, high contrast black-and-white art, and a stylized action border. Keep the person's identity perfectly clear."
  },
  {
    id: "surreal-glass-sculpture",
    title: "Surreal Glass Sculpture",
    category: "Digital Art",
    likes: 121,
    img: "https://picsum.photos/seed/glasssculpture29/600/750",
    prompt: "Re-render the subject as if they were constructed out of polished, iridescent blown glass. The body should refract the background light with subtle rainbow color shifts along the edges, while maintaining the exact original shape and silhouette."
  },
  {
    id: "cybernetic-neon-android",
    title: "Cybernetic Neon Android",
    category: "Digital Art",
    likes: 209,
    img: "https://picsum.photos/seed/neonandroid30/600/750",
    prompt: "Modify the subject by adding thin, glowing geometric cybernetic lines across their neck and jawline. Their eyes should have a subtle, soft electric glow. Keep all other facial structures and backgrounds exactly as they are."
  },

  // ===== 4. Commercial, Editorial & Object Cleanup =====
  {
    id: "clean-studio-product-shot",
    title: "Clean Studio Product Shot",
    category: "Business & Professional",
    likes: 158,
    img: "https://picsum.photos/seed/studioproduct31/600/750",
    prompt: "Convert the background into a perfectly clean, minimalist white studio setting. Add a soft, realistic drop shadow underneath the main subject that matches a natural overhead light source. Do not touch or modify the subject itself."
  },
  {
    id: "editorial-skin-texture-polish",
    title: "Editorial Skin & Texture Polish",
    category: "Portraits",
    likes: 274,
    img: "https://picsum.photos/seed/skinpolish32/600/750",
    prompt: "Enhance the portrait texture gently: soften distracting under-eye shadows and even out skin tones while keeping all natural skin pores, freckles, and core textures fully intact. Do not blur or make the face look artificial."
  },
  {
    id: "clean-desk-declutter",
    title: "Clean Desk Declutter",
    category: "Business & Professional",
    likes: 96,
    img: "https://picsum.photos/seed/deskdeclutter33/600/750",
    prompt: "Remove all scattered papers, stray cables, and random items from the table surface. Keep only the laptop and the main coffee mug exactly where they are, rebuilding the clean wood grain texture underneath flawlessly."
  },
  {
    id: "street-photobomb-removal",
    title: "Street Photobomb Removal",
    category: "Photography",
    likes: 112,
    img: "https://picsum.photos/seed/photobombremoval34/600/750",
    prompt: "Identify and completely remove the blurry bystander and car on the right edge of the frame. Flawlessly reconstruct the background brick wall and sidewalk pattern behind them with zero distortion or repeating patterns."
  },
  {
    id: "natural-teeth-brightening",
    title: "Natural Teeth Brightening",
    category: "Portraits",
    likes: 88,
    img: "https://picsum.photos/seed/teethbrightening35/600/750",
    prompt: "Brighten teeth naturally by removing any yellow color casts, while strictly preserving the original tooth shapes, natural enamel reflections, and original lip positions. Keep it looking organic, not fake."
  },
  {
    id: "sky-replacement-golden-hour",
    title: "Sky Replacement (Golden Hour)",
    category: "Photography",
    likes: 305,
    img: "https://picsum.photos/seed/skyreplacement36/600/750",
    prompt: "Replace the gray, overcast sky with a stunning, clear golden-hour sky featuring a warm setting sun near the horizon. Automatically match the ambient lighting and warm rim highlights on the subject to the new light direction."
  },
  {
    id: "luxury-marble-surface",
    title: "Luxury Marble Surface",
    category: "Business & Professional",
    likes: 134,
    img: "https://picsum.photos/seed/marblesurface37/600/750",
    prompt: "Isolate the product in the center and replace the current background surface with a high-end, polished white Carrara marble slab showing subtle gray veins and soft, elegant product reflections."
  },
  {
    id: "depth-of-field-blur-bokeh",
    title: "Depth of Field Blur (Bokeh)",
    category: "Photography",
    likes: 218,
    img: "https://picsum.photos/seed/bokehblur38/600/750",
    prompt: "Keep the main subject in the foreground ultra-sharp, but apply a smooth, creamy cinematic blur (shallow depth of field) to the entire background. Turn distant lights into soft, beautiful round bokeh circles."
  },
  {
    id: "highlight-shadow-recovery",
    title: "Highlight & Shadow Recovery",
    category: "Photography",
    likes: 77,
    img: "https://picsum.photos/seed/shadowrecovery39/600/750",
    prompt: "Recover the blown-out bright highlights in the sky and dark crushed shadows in the foreground. Re-balance the exposure across the image to bring back lost fine details while maintaining original colors."
  },
  {
    id: "matte-monochrome-conversion",
    title: "Matte Monochrome Conversion",
    category: "Black & White",
    likes: 149,
    img: "https://picsum.photos/seed/matteconversion40/600/750",
    prompt: "Convert this image into a fine-art monochrome photo. Focus on deep blacks, crisp brilliant highlights, and a full range of midtone grays with a subtle, professional matte finish. Keep the sharpness intact."
  },

  // ===== 5. Environment Swapping & Lighting Adjustments =====
  {
    id: "cozy-rainy-day-cafe",
    title: "Cozy Rainy Day Cafe",
    category: "Lifestyle",
    likes: 261,
    img: "https://picsum.photos/seed/rainycafe41/600/750",
    prompt: "Change the background to the interior of a cozy local coffee shop on a rainy afternoon, looking out a window covered in raindrops. Add warm, soft interior lighting that reflects gently onto the side of the subject."
  },
  {
    id: "neon-cyber-grid-stage",
    title: "Neon Cyber-Grid Stage",
    category: "Cinematic",
    likes: 192,
    img: "https://picsum.photos/seed/cybergridstage42/600/750",
    prompt: "Place the subject on a dark, minimalist concert stage with dramatic vertical laser lights shooting up behind them. Infuse the edges of the subject's silhouette with vibrant neon-blue lighting while keeping the face clear."
  },
  {
    id: "autumn-forest-walk",
    title: "Autumn Forest Walk",
    category: "Lifestyle",
    likes: 228,
    img: "https://picsum.photos/seed/autumnforest43/600/750",
    prompt: "Transform the current setting into a beautiful autumn path surrounded by golden orange aspen trees. Scatter a few fallen leaves on the ground. Adjust the image's overall color palette to match warm, cozy fall tones."
  },
  {
    id: "sunlit-minimal-loft",
    title: "Sunlit Minimal Loft",
    category: "Lifestyle",
    likes: 173,
    img: "https://picsum.photos/seed/minimalloft44/600/750",
    prompt: "Replace the background with a high-end, minimalist loft apartment featuring concrete walls and massive floor-to-ceiling windows. Introduce long, dramatic shadows and bright morning sunlight streaming across the floor."
  },
  {
    id: "summer-to-winter-shift",
    title: "Summer to Winter Shift",
    category: "Photography",
    likes: 144,
    img: "https://picsum.photos/seed/wintershift45/600/750",
    prompt: "Change the season of this photo to mid-winter. Cover the background trees and ground with a layer of crisp, fluffy snow. Add a soft, cool-toned winter haze to the air while keeping the subject completely dry and sharp."
  },
  {
    id: "sunset-desert-horizon",
    title: "Sunset Desert Horizon",
    category: "Cinematic",
    likes: 257,
    img: "https://picsum.photos/seed/deserthorizon46/600/750",
    prompt: "Place the subject inside an expansive, serene desert landscape during a deep purple and magenta twilight. Add warm, low-angle accent lighting on the subject that matches the setting sun."
  },
  {
    id: "tropical-jungle-oasis",
    title: "Tropical Jungle Oasis",
    category: "Lifestyle",
    likes: 199,
    img: "https://picsum.photos/seed/jungleoasis47/600/750",
    prompt: "Modify the environment into a dense, sun-dappled tropical jungle filled with lush green monstera plants and soft mist. Have subtle beams of light filter through the leaves behind the subject."
  },
  {
    id: "studio-rim-light-glow",
    title: "Studio Rim Light Glow",
    category: "Portraits",
    likes: 165,
    img: "https://picsum.photos/seed/rimlightglow48/600/750",
    prompt: "Add a crisp, powerful studio rim-light effect that traces along the entire silhouette of the subject, separating them cleanly from the background. Keep the background dark, minimal, and out of focus."
  },
  {
    id: "epic-mountain-peak",
    title: "Epic Mountain Peak",
    category: "Photography",
    likes: 313,
    img: "https://picsum.photos/seed/mountainpeak49/600/750",
    prompt: "Swap the background out for a breathtaking, panoramic view of jagged alpine mountain peaks covered in snow during sunrise. Add soft morning mist pooling in the valleys below. Keep the subject unchanged."
  },
  {
    id: "magical-fairy-light-vignette",
    title: "Magical Fairy Light Vignette",
    category: "Lifestyle",
    likes: 287,
    img: "https://picsum.photos/seed/fairylightvignette50/600/750",
    prompt: "Introduce strings of softly blurred, warm fairy lights into the background and foreground edges, creating an intimate vignette frame. Ensure the warm amber light glows naturally against the subject's skin."
  }
];

const STYLES = [
  { name: "Cinematic", count: 112, key: "cinematic" },
  { name: "Digital Art", count: 39, key: "digital-art" },
  { name: "Lifestyle", count: 74, key: "lifestyle" },
  { name: "Photography", count: 17, key: "photography" },
  { name: "Digital Illustration", count: 44, key: "digital-illustration" },
  { name: "Fashion & Editorial", count: 52, key: "fashion-editorial" },
  { name: "Portraits", count: 93, key: "portraits" },
  { name: "Business & Professional", count: 83, key: "business" },
  { name: "Black & White", count: 52, key: "black-and-white" },
  { name: "Viral Aesthetics", count: 23, key: "viral-aesthetics" }
];