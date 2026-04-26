"use client";
import React, { useState } from "react";
import Link from "next/link";
import CinematicHero from "@/app/components/CinematicHero";
import SplitScreenHero from "@/app/components/SplitScreenHero";
import BentoHero from "@/app/components/BentoHero";
import MinimalHero from "@/app/components/MinimalHero";
import GradientMeshHero from "@/app/components/GradientMeshHero";
import VideoHero from "@/app/components/VideoHero";
import InteractiveHero from "@/app/components/InteractiveHero";

const HeroShowcase = () => {
  const [selectedHero, setSelectedHero] = useState("cinematic");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const heroes = [
    {
      id: "cinematic",
      name: "Cinematic Hero",
      component: CinematicHero,
      description: "Full-screen with floating stats and mouse-tracking effects",
      features: ["Mouse Parallax", "Animated Stats", "Gradient Orbs", "Trust Indicators"],
      recommended: true,
      preview: "/previews/cinematic.jpg"
    },
    {
      id: "split",
      name: "Split Screen Hero",
      component: SplitScreenHero,
      description: "Asymmetric layout with features list and visual",
      features: ["60/40 Split", "Feature Checklist", "Floating Cards", "Social Proof"],
      recommended: false,
      preview: "/previews/split.jpg"
    },
    {
      id: "bento",
      name: "Bento Grid Hero",
      component: BentoHero,
      description: "Modern grid layout with multiple interactive cards",
      features: ["Grid Layout", "Testimonials", "Color-Coded", "Multi-Feature"],
      recommended: false,
      preview: "/previews/bento.jpg"
    },
    {
      id: "minimal",
      name: "Minimal Hero",
      component: MinimalHero,
      description: "Clean, centered design with floating stat cards",
      features: ["Minimalist", "Floating Stats", "Center-Aligned", "Clean Design"],
      recommended: false,
      preview: "/previews/minimal.jpg"
    },
    {
      id: "gradient",
      name: "Gradient Mesh Hero",
      component: GradientMeshHero,
      description: "Glassmorphism card with animated gradient background",
      features: ["Gradient Mesh", "Glassmorphism", "Animated Blobs", "Modern"],
      recommended: false,
      preview: "/previews/gradient.jpg"
    },
    {
      id: "video",
      name: "Video Hero",
      component: VideoHero,
      description: "Dark theme with video background and play button",
      features: ["Video BG", "Dark Theme", "Play Button", "Cinematic"],
      recommended: false,
      preview: "/previews/video.jpg"
    },
    {
      id: "interactive",
      name: "Interactive Hero",
      component: InteractiveHero,
      description: "Tab-based hero with multiple user paths",
      features: ["Interactive Tabs", "User Paths", "Dynamic Content", "Engaging"],
      recommended: false,
      preview: "/previews/interactive.jpg"
    }
  ];

  const selectedHeroData = heroes.find(h => h.id === selectedHero);
  const SelectedComponent = selectedHeroData?.component;

  const copyCode = (heroId) => {
    const codeMap = {
      cinematic: `import CinematicHero from "./components/CinematicHero";\n\n<CinematicHero />`,
      split: `import SplitScreenHero from "./components/SplitScreenHero";\n\n<SplitScreenHero />`,
      bento: `import BentoHero from "./components/BentoHero";\n\n<BentoHero />`,
      minimal: `import MinimalHero from "./components/MinimalHero";\n\n<MinimalHero />`,
      gradient: `import GradientMeshHero from "./components/GradientMeshHero";\n\n<GradientMeshHero />`,
      video: `import VideoHero from "./components/VideoHero";\n\n<VideoHero />`,
      interactive: `import InteractiveHero from "./components/InteractiveHero";\n\n<InteractiveHero />`
    };
    
    navigator.clipboard.writeText(codeMap[heroId]);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primaryLight/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-primary hover:text-purple-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-textDefault">Hero Design Gallery</h1>
          </div>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-purple-700 transition-all duration-300 flex items-center gap-2"
          >
            {isFullscreen ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Exit Fullscreen
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                Fullscreen Preview
              </>
            )}
          </button>
        </div>
      </header>

      {isFullscreen ? (
        // Fullscreen Preview
        <div className="fixed inset-0 z-40 bg-white overflow-auto">
          <button
            onClick={() => setIsFullscreen(false)}
            className="fixed top-4 right-4 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
          >
            <svg className="w-6 h-6 text-textDefault" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {SelectedComponent && <SelectedComponent />}
        </div>
      ) : (
        // Gallery View
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Hero Selection Cards */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 pc:grid-cols-3 gap-6 mb-12">
            {heroes.map((hero) => (
              <div
                key={hero.id}
                onClick={() => setSelectedHero(hero.id)}
                className={`group relative cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  selectedHero === hero.id
                    ? "bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl scale-105"
                    : "bg-white hover:shadow-xl hover:-translate-y-1 border border-gray-200"
                }`}
              >
                {hero.recommended && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Recommended
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-bold ${selectedHero === hero.id ? "text-white" : "text-textDefault"}`}>
                    {hero.name}
                  </h3>
                  {selectedHero === hero.id && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                <p className={`text-sm mb-4 ${selectedHero === hero.id ? "text-white/90" : "text-textNeutral"}`}>
                  {hero.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {hero.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full ${
                        selectedHero === hero.id
                          ? "bg-white/20 text-white"
                          : "bg-primaryLight text-primary"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-primary to-purple-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-white font-semibold">{selectedHeroData?.name} Preview</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => copyCode(selectedHero)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Code
                </button>
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="px-4 py-2 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  View Fullscreen
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 overflow-auto" style={{ maxHeight: "70vh" }}>
              {SelectedComponent && <SelectedComponent />}
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="mt-12 bg-gradient-to-br from-primaryLight to-purple-50 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-textDefault mb-4">How to Implement</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-textDefault mb-1">Choose Your Hero</h3>
                  <p className="text-textNeutral">Select one of the three hero designs above</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-textDefault mb-1">Copy the Code</h3>
                  <p className="text-textNeutral">Click &ldquo;Copy Code&rdquo; button to get the import statement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-textDefault mb-1">Replace in page.js</h3>
                  <p className="text-textNeutral">Replace your current hero section with the copied code</p>
                  <div className="mt-2 bg-white rounded-lg p-4 font-mono text-sm text-textDefault border border-gray-200">
                    <div className="text-green-600">{"// In app/page.js"}</div>
                    <div className="text-blue-600">import</div> {selectedHeroData?.name.replace(" ", "")} <div className="text-blue-600 inline">from</div> <div className="text-orange-600 inline">&ldquo;./components/{selectedHeroData?.name.replace(" ", "")}&rdquo;</div>;
                    <br /><br />
                    <div className="text-gray-600">{"// Replace current hero with:"}</div>
                    {"<"}{selectedHeroData?.name.replace(" ", "")} {"/>"}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-textDefault mb-1">Customize</h3>
                  <p className="text-textNeutral">Edit the component file to update text, images, and colors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Links */}
          <div className="mt-8 grid grid-cols-1 tablet:grid-cols-2 gap-6">
            <Link
              href="/HERO_IMPLEMENTATION_GUIDE.md"
              target="_blank"
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-textDefault mb-2 group-hover:text-primary transition-colors">
                    Implementation Guide
                  </h3>
                  <p className="text-textNeutral text-sm">
                    Complete guide with customization options, performance tips, and troubleshooting
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/HERO_REDESIGN_IDEAS.md"
              target="_blank"
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-textDefault mb-2 group-hover:text-primary transition-colors">
                    Design Ideas
                  </h3>
                  <p className="text-textNeutral text-sm">
                    10 hero design concepts with visual diagrams and best practices
                  </p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      )}
    </div>
  );
};

export default HeroShowcase;
