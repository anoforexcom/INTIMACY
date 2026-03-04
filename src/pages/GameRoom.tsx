import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Flame, Star, ArrowLeft, ChevronRight, ChevronLeft, Info, Shield, Lock, Sparkles, Loader2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { GoogleGenAI } from "@google/genai";

export default function GameRoom() {
  const [currentLevel, setCurrentLevel] = React.useState(12);
  const [showDetails, setShowDetails] = React.useState(false);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const location = useLocation();
  const isDemo = !location.pathname.includes('dashboard');

  const [positions, setPositions] = React.useState([
    {
      id: 1,
      name: "The Lotus Bloom",
      intensity: 2,
      category: "Intimate",
      description: "A deep connection position that emphasizes eye contact and synchronized breathing. Sit facing each other with legs intertwined.",
      tips: "Focus on slow movements and maintaining a steady rhythm together. Let your breath guide the pace.",
      image: null,
      prompt: "An artistic, minimalist line art illustration of a couple in a sitting intimate embrace, facing each other, legs intertwined, soft romantic lighting, high-end aesthetic, discrete and tasteful."
    },
    {
      id: 2,
      name: "Midnight Whisper",
      intensity: 3,
      category: "Sensual",
      description: "Designed for maximum skin-to-skin contact. One partner lies down while the other mirrors them closely, whispering desires.",
      tips: "Use light touches and focus on the sensory experience of being close. Explore the power of soft words.",
      image: null,
      prompt: "A high-end, artistic photography style illustration of a couple lying close together in a dark, moody bedroom with moonlight shadows, focusing on the intimacy of a whisper, tasteful and discrete."
    },
    {
      id: 3,
      name: "The Velvet Wrap",
      intensity: 4,
      category: "Adventurous",
      description: "A dynamic position involving a chair or the edge of the bed, allowing for deep penetration and varied angles.",
      tips: "Ensure both partners are comfortable with the height. Use pillows for extra support where needed.",
      image: null,
      prompt: "An abstract, artistic silhouette of a couple in a dynamic intimate position near a bed, warm amber lighting, elegant shadows, professional photography style, discrete."
    },
    {
      id: 4,
      name: "Golden Hour Glow",
      intensity: 1,
      category: "Romantic",
      description: "A gentle massage-focused challenge. Spend 10 minutes exploring each other's tension points with warm oil.",
      tips: "Start with the shoulders and move slowly down the back. Use long, sweeping strokes.",
      image: null,
      prompt: "A beautiful, warm-toned illustration of hands massaging a back with glowing oil, golden hour sunlight, peaceful and romantic atmosphere, high-end spa aesthetic."
    },
    {
      id: 5,
      name: "The Arching Bridge",
      intensity: 5,
      category: "Adventurous",
      description: "An athletic position that requires core strength and flexibility, offering a unique visual perspective for both.",
      tips: "Take it slow. Communication is key to finding the right balance and depth.",
      image: null,
      prompt: "A minimalist, artistic line drawing of a couple in an athletic, flexible intimate position, clean white background, elegant curves, modern art style."
    },
    {
      id: 6,
      name: "Tangled Silk",
      intensity: 3,
      category: "Intimate",
      description: "Lying on your sides, facing each other, with legs completely locked. This position is about closeness and endurance.",
      tips: "Perfect for long sessions where the focus is on the emotional bond rather than speed.",
      image: null,
      prompt: "An artistic, close-up illustration of two people's legs intertwined under silk sheets, soft morning light, focus on texture and intimacy, high-end editorial style."
    },
    {
      id: 7,
      name: "The Butterfly Kiss",
      intensity: 2,
      category: "Sensual",
      description: "A challenge focused on the face and neck. Use only your eyelashes and lips to explore your partner's skin.",
      tips: "Close your eyes to heighten your other senses. It's about the anticipation of touch.",
      image: null,
      prompt: "A macro, artistic photography style of a soft kiss on the neck, extreme close-up, shallow depth of field, romantic and sensual lighting, high-end aesthetic."
    },
    {
      id: 8,
      name: "Starlit Ascent",
      intensity: 4,
      category: "Adventurous",
      description: "Utilizing the standing position against a wall, providing a sense of urgency and raw passion.",
      tips: "The partner being lifted should wrap their legs tightly. Use the wall for stability.",
      image: null,
      prompt: "An artistic silhouette of a couple standing against a wall in a passionate embrace, starlit night background through a window, deep blue and silver tones, elegant and discrete."
    }
  ]);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const activePosition = positions[activeIndex];

  const generateImage = async (index: number) => {
    if (positions[index].image || isGenerating) return;

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: positions[index].prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "3:4",
          },
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          const imageUrl = `data:image/png;base64,${base64Data}`;
          
          const newPositions = [...positions];
          newPositions[index].image = imageUrl;
          setPositions(newPositions);
          break;
        }
      }
    } catch (error) {
      console.error("Error generating image:", error);
      // Fallback to picsum if AI fails
      const newPositions = [...positions];
      newPositions[index].image = `https://picsum.photos/seed/${positions[index].name.replace(/\s/g, '')}/600/800`;
      setPositions(newPositions);
    } finally {
      setIsGenerating(false);
    }
  };

  React.useEffect(() => {
    generateImage(activeIndex);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % positions.length);
    setCurrentLevel((prev) => Math.min(prev + 1, 50));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + positions.length) % positions.length);
    setCurrentLevel((prev) => Math.max(prev - 1, 1));
  };


  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      {/* Header */}
      <header className="p-6 border-b border-white/5 flex justify-between items-center bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <Link to={isDemo ? "/" : "/dashboard"} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold text-sm uppercase tracking-widest">{isDemo ? "Back to Home" : "Back to Dashboard"}</span>
        </Link>
        {isDemo && (
          <div className="absolute left-1/2 -translate-x-1/2 bg-primary/20 border border-primary/30 px-4 py-1 rounded-full">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Demo Mode</span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Sensual Nights Pack</span>
            <span className="text-sm font-bold">Level {currentLevel} of 50</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Flame className="w-6 h-6 fill-current" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Game Area */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary blur-[150px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600 blur-[150px] rounded-full"></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePosition.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group bg-slate-900"
            >
              {activePosition.image ? (
                <img 
                  src={activePosition.image} 
                  alt={activePosition.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  <div className="text-center px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Generating Illustration</p>
                    <p className="text-slate-500 text-[10px]">Creating a discrete, artistic visual for this position...</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {activePosition.category}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("w-3 h-3", i < activePosition.intensity ? "text-yellow-500 fill-current" : "text-white/20")} />
                    ))}
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-4">{activePosition.name}</h2>
                <button 
                  onClick={() => setShowDetails(true)}
                  className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all"
                >
                  <Info className="w-4 h-4" />
                  View Instructions
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-12 flex items-center gap-8">
            <button 
              onClick={handlePrev}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={handleNext}
              className="btn-primary px-12 py-4 rounded-full flex items-center gap-2"
            >
              Next Challenge
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sidebar Info */}
        <aside className="w-full lg:w-96 bg-white/5 border-l border-white/5 p-8 lg:p-12 overflow-y-auto">
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">Current Session</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-bold">Connection Mode</p>
                  <p className="text-xs text-slate-500">Focusing on emotional intimacy</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Flame className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-bold">Intensity: Medium</p>
                  <p className="text-xs text-slate-500">Perfect for a relaxed evening</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-primary transition-all">
                <Star className="w-5 h-5 mx-auto mb-2 text-yellow-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Favorite</span>
              </button>
              <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-primary transition-all">
                <Shield className="w-5 h-5 mx-auto mb-2 text-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Discrete</span>
              </button>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
            <Lock className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold mb-2">Privacy Active</h4>
            <p className="text-xs text-slate-400 leading-relaxed">This session is end-to-end encrypted. No data leaves your devices.</p>
          </div>
        </aside>
      </main>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-background-dark border border-white/10 w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Position Guide</span>
                    <h2 className="text-4xl font-bold">{activePosition.name}</h2>
                  </div>
                  <button 
                    onClick={() => setShowDetails(false)}
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <ArrowLeft className="rotate-90 w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Description</h4>
                    <p className="text-lg text-slate-300 leading-relaxed">{activePosition.description}</p>
                  </div>
                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Pro Tip</h4>
                    <p className="text-slate-300">{activePosition.tips}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setShowDetails(false)}
                  className="btn-primary w-full mt-12 py-4"
                >
                  I'm Ready
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
