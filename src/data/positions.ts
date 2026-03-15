export interface Position {
  id: number;
  name: string;
  intensity: number;
  category: "Intimate" | "Sensual" | "Adventurous" | "Romantic";
  description: string;
  tips: string;
  prompt: string;
}

export const POSITIONS: Position[] = [
  {
    id: 1,
    name: "The Lotus (Padmasana)",
    intensity: 2,
    category: "Intimate",
    description: "A deep connection position derived from yoga. Partners sit facing each other, legs intertwined in a meditative embrace.",
    tips: "Focus on eye contact and synchronized breathing. This is about emotional and physical unity.",
    prompt: "Artistic minimalist line art of a couple in the Lotus Kamasutra position. Sitting facing each other, legs crossed and intertwined. Soft ambient lighting, white background, discrete and elegant, high-end aesthetic."
  },
  {
    id: 2,
    name: "The Curled Angel (Spooning)",
    intensity: 1,
    category: "Romantic",
    description: "Both partners lie on their sides, one cradling the other from behind. A tender, safe position for gentle intimacy.",
    tips: "Perfect for whispering secrets and light touches. Focus on the warmth of the embrace.",
    prompt: "Minimalist silhouette of a couple in a spooning position. Soft shadows, moonlit atmosphere, artistic and discrete. Focus on the curve of the bodies, high-end digital art style."
  },
  {
    id: 3,
    name: "The Rider (Cowgirl)",
    intensity: 3,
    category: "Sensual",
    description: "The classic 'woman on top' position where she straddles her partner, allowing for full eye contact and control.",
    tips: "Explore different angles and speeds. Use your hands to connect with your partner's chest and face.",
    prompt: "Artistic, high-end illustration of the Rider Kamasutra position. One partner sitting up, straddling the other. Abstract silhouette, warm amber tones, discrete but passionate, cinematic lighting."
  },
  {
    id: 4,
    name: "The Arch (Indrani)",
    intensity: 4,
    category: "Adventurous",
    description: "The woman arches her back while her partner supports her, creating a beautiful physical arc and deep connection.",
    tips: "Communication is key for balance. Use a pillow for lower back support if needed.",
    prompt: "Elegant, minimalist oil painting style of a couple in the Arch Kamasutra position. Focus on the strength and curve of the back, soft focus, tasteful and discrete, muted earthy tones."
  },
  {
    id: 5,
    name: "Splitting the Bamboo",
    intensity: 4,
    category: "Adventurous",
    description: "An athletic position where one leg is raised, providing a unique angle of intimacy and a visual display of flexibility.",
    tips: "Take it slow and focus on the sensation of the stretch and the depth of the connection.",
    prompt: "Modern abstract line art illustration of the 'Splitting the Bamboo' Kamasutra position. Minimalist aesthetic, clean lines, focus on geometry and movement, discrete, professional art style."
  },
  {
    id: 6,
    name: "The Fusion (The Twining)",
    intensity: 2,
    category: "Intimate",
    description: "Partners lie face-to-face, legs completely intertwined. This position maximizes skin contact and emotional closeness.",
    tips: "Wrap your arms around each other and let your bodies melt into one. Slow and steady wins.",
    prompt: "Artistic close-up of intertwined limbs and bodies in the Fusion Kamasutra position. Soft silk sheets texture, warm lighting, focus on the intimacy of touch, high-end photography style, discrete."
  },
  {
    id: 7,
    name: "Standing Embrace",
    intensity: 4,
    category: "Adventurous",
    description: "A passionate, upright position against a wall or pillar. It brings a sense of urgency and vertical exploration.",
    tips: "The partner being held should wrap their legs tightly. Use the standing partner's strength for support.",
    prompt: "Sultry, artistic silhouette of a couple in a standing embrace against a wall. Shadows and light play, high-contrast, moody atmosphere, discrete and tasteful, cinematic composition."
  },
  {
    id: 8,
    name: "The Butterfly",
    intensity: 5,
    category: "Adventurous",
    description: "An athletic position involving a table or the edge of a bed, allowing for a flutter of sensations and deep intimacy.",
    tips: "Ensure stability and focus on the rhythmic connection. It's about grace and power.",
    prompt: "Artistic, abstract illustration of the Butterfly Kamasutra position. Minimalist aesthetic, fluid lines, soft glowing aura, high-end digital painting, discrete but intense."
  },
  {
    id: 9,
    name: "The Bridge",
    intensity: 5,
    category: "Adventurous",
    description: "A powerful position where the partner on the bottom arches up to meet the other, forming a bridge of desire.",
    tips: "Engage your core. This position is as much a workout as it is an intimate experience.",
    prompt: "Minimalist line art of a couple in a bridge-like intimate position. Clean, modern aesthetic, white and gold color palette, discrete, focus on form and balance."
  },
  {
    id: 10,
    name: "The Missionary (Sambhoga)",
    intensity: 2,
    category: "Intimate",
    description: "The timeless classic of face-to-face intimacy. It's about pure eye contact and the simplest, deepest bond.",
    tips: "Use a pillow to change the angle. Keep your eyes open to truly see your partner.",
    prompt: "Tasteful, artistic illustration of a couple in a classic intimate embrace. Soft focus on faces, warm heart-centered lighting, high-end editorial style, discrete and romantic."
  },
  {
    id: 11,
    name: "The Widely Open",
    intensity: 3,
    category: "Sensual",
    description: "A position that emphasizes visibility and vulnerability, allowing for a unique visual connection.",
    tips: "Maintain eye contact and explore with your hands. Focus on the openness of the moment.",
    prompt: "Artistic, minimalist line art of an open, intimate embrace. High-end aesthetic, soft focus, discrete and tasteful, muted tones, professional illustration."
  },
  {
    id: 12,
    name: "The Yawning",
    intensity: 4,
    category: "Adventurous",
    description: "An elevation of the traditional missionary, where the partner's legs are raised to the shoulders for deeper intimacy.",
    tips: "Use cushions for support. Focus on the rhythmic breathing and the intensity of the gaze.",
    prompt: "Modern abstract silhouette of the 'Yawning' Kamasutra position. Minimalist curves, warm lighting, discrete, elegant, high-end digital art style."
  },
  {
    id: 13,
    name: "The Crab",
    intensity: 5,
    category: "Adventurous",
    description: "A compact and intense position that requires close bodily coordination and strength.",
    tips: "Focus on the balance and the physical proximity. Let the tension build slowly.",
    prompt: "Abstract artistic illustration of the 'Crab' Kamasutra position. Focus on geometry and intertwining forms, discrete, high-end aesthetic, earthy color palette."
  },
  {
    id: 14,
    name: "The Packed Position",
    intensity: 3,
    category: "Intimate",
    description: "A very close-knit position where bodies are compressed together for maximum pressure and sensation.",
    tips: "Breathe together and feel the weight of your partner. Focus on the sense of being 'packed' in love.",
    prompt: "Artistic minimalist photography style of a close, compressed embrace. Soft shadows, focus on texture of skin and sheets, high-end editorial style, discrete."
  },
  {
    id: 15,
    name: "The Twining Position",
    intensity: 2,
    category: "Intimate",
    description: "One leg is placed across the partner's thigh, creating a sense of being 'twined' together like vines.",
    tips: "Feel the connection in every point of contact. This is about being inseparable.",
    prompt: "Minimalist line art of intertwined legs and bodies in the Twining Kamasutra position. White background, soft focus, elegant and discrete, high-end aesthetic."
  }
];
