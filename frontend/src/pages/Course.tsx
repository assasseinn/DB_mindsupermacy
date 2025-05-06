import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { chapters, ChapterData } from "utils/courseData";
import { PrincipleIcon } from "components/PrincipleIcon";

const audiobookSessions = [
  { time: "00:00", seconds: 0, title: "Introduction" },
  { time: "39:35", seconds: 2375, title: "What is a Drifter" },
  { time: "41:46", seconds: 2506, title: "What is a Non-Drifter" },
  { time: "01:07:57", seconds: 4077, title: "What to do against Drifting" },
  { time: "01:24:39", seconds: 5079, title: "What's the first step to break the Habit of Drifting" },
  { time: "01:45:43", seconds: 6343, title: "The 1st Principle: Definiteness" },
  { time: "02:08:50", seconds: 7730, title: "The Public School System" },
  { time: "02:19:38", seconds: 8378, title: "Sin" },
  { time: "02:22:27", seconds: 8547, title: "The 2nd Principle: Mastery over Self" },
  { time: "02:40:54", seconds: 9654, title: "The 3rd Principle: Learning from Adversity" },
  { time: "02:47:50", seconds: 10170, title: "Hypnotic Rhythm and Relationships" },
  { time: "03:04:05", seconds: 11045, title: "The 4th Principle: Environmental Influence" },
  { time: "03:16:04", seconds: 11764, title: "The 5th Principle: Time" },
  { time: "03:21:43", seconds: 12043, title: "The 6th Principle: Harmony" },
  { time: "03:25:28", seconds: 12328, title: "The 7th Principle: Caution" },
  { time: "03:29:35", seconds: 12575, title: "Summary" }
];

const AUDIOBOOK_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Replace with your actual audiobook URL

import { ProtectedRoute } from "../components/ProtectedRoute";

export default function CoursePage() {
  const [searchParams] = useSearchParams();
  const principleId = searchParams.get("id") || "three-feet";
  const navigate = useNavigate();
  
  // Find the current chapter
  const currentChapter = chapters.find(chapter => chapter.id === principleId) || chapters[0];
  
  // Find the index of the current chapter
  const currentIndex = chapters.findIndex(chapter => chapter.id === principleId);
  
  // Determine previous and next chapters for navigation
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  
  // Function to handle navigation to another principle
  const navigateToPrinciple = (id: string) => {
    navigate(`/Course?id=${id}`);
    window.scrollTo(0, 0);
  };

  // Audiobook player state
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSessionIdx, setCurrentSessionIdx] = useState(0);

  // Setup audio element
  React.useEffect(() => {
    const audioEl = new Audio(AUDIOBOOK_URL);
    setAudio(audioEl);
    audioEl.addEventListener("loadedmetadata", () => setDuration(audioEl.duration));
    audioEl.addEventListener("timeupdate", () => setCurrentTime(audioEl.currentTime));
    audioEl.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audioEl.pause();
      audioEl.src = "";
      setAudio(null);
    };
  }, []);

  // Sync current session index as audio plays
  React.useEffect(() => {
    const idx = audiobookSessions.findIndex((s, i) =>
      currentTime >= s.seconds && (i === audiobookSessions.length - 1 || currentTime < audiobookSessions[i + 1].seconds)
    );
    setCurrentSessionIdx(idx === -1 ? 0 : idx);
  }, [currentTime]);

  // Play/pause controls
  const handlePlayPause = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  // Seek to session
  const handleSessionClick = (idx: number) => {
    if (!audio) return;
    audio.currentTime = audiobookSessions[idx].seconds;
    setCurrentTime(audio.currentTime);
    setCurrentSessionIdx(idx);
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Audiobook player */}
      <div className="container mx-auto px-4 pt-8 md:pt-12">
        <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-6 mb-10 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Audiobook Course</h2>
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={handlePlayPause}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/30 hover:bg-accent/50 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg width="32" height="32" fill="currentColor"><rect x="8" y="8" width="5" height="16" rx="2"/><rect x="19" y="8" width="5" height="16" rx="2"/></svg>
              ) : (
                <svg width="32" height="32" fill="currentColor"><polygon points="10,8 26,16 10,24"/></svg>
              )}
            </button>
            <div className="text-lg font-mono">
              {new Date(currentTime * 1000).toISOString().substr(11, 8)} / {duration ? new Date(duration * 1000).toISOString().substr(11, 8) : "--:--:--"}
            </div>
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={e => {
                if (!audio) return;
                audio.currentTime = Number(e.target.value);
                setCurrentTime(audio.currentTime);
              }}
              className="w-64 accent-accent"
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            {audiobookSessions.map((session, idx) => (
              <button
                key={session.time}
                onClick={() => handleSessionClick(idx)}
                className={`flex items-center space-x-4 px-4 py-2 rounded transition-all duration-300 text-left ${idx === currentSessionIdx ? 'bg-accent/30 text-accent font-bold' : 'hover:bg-secondary/20 text-white/80'}`}
              >
                <span className="font-mono w-20">{session.time}</span>
                <span>{session.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent/10 rounded-full"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-accent/10 rounded-full -translate-x-1/4 -translate-y-1/4 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-accent/10 rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header with navigation */}
        <header className="w-full bg-black/80 backdrop-blur-sm sticky top-0 z-20 border-b border-accent/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a 
              href="/"
              className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <span>MindSupremacy</span>
            </a>
            
            <nav>
              <a 
                href="/"
                className="px-4 py-2 text-white/80 hover:text-accent transition-colors duration-300"
              >
                Home
              </a>
            </nav>
          </div>
        </header>
        
        {/* Main content */}
        <main className="container mx-auto px-4 pt-8 md:pt-12">
          {/* Principle navigation */}
          <div className="mb-12 overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => navigateToPrinciple(chapter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${chapter.id === principleId ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-secondary/10 hover:bg-secondary/20 text-white/70 hover:text-white border border-secondary/10'}`}
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10">
                    {index + 1}
                  </span>
                  <span className="text-sm md:text-base font-medium whitespace-nowrap">{chapter.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Principle content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                {currentChapter.title}
              </h1>
              
              <div className="prose prose-invert prose-lg max-w-none mb-8">
                <p className="text-xl text-accent/90 mb-6 italic">
                  "{currentChapter.shortDescription}"
                </p>
                <p className="mb-8">
                  {currentChapter.fullDescription}
                </p>
              </div>
              
              {/* Key Takeaways */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-10 h-10 mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Key Takeaways
                </h2>
                <ul className="space-y-4">
                  {currentChapter.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-white/90">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Real World Example */}
              <div className="mb-12 bg-gradient-to-br from-secondary/20 to-transparent p-6 rounded-lg border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center">
                  <span className="w-10 h-10 mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </span>
                  Real World Example
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p>{currentChapter.realWorldExample}</p>
                </div>
              </div>
              
              {/* Implementation Steps */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-10 h-10 mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Implementation Steps
                </h2>
                <div className="relative pl-8 border-l border-accent/30">
                  {currentChapter.implementationSteps.map((step, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center border border-accent/30">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step}</h3>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Practice Exercise */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center">
                  <span className="w-10 h-10 mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Practice Exercise
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p>{currentChapter.practiceExercise}</p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="grid grid-cols-2 gap-4">
                {prevChapter && (
                  <button
                    onClick={() => navigateToPrinciple(prevChapter.id)}
                    className="flex items-center justify-start space-x-2 p-4 rounded-lg border border-secondary/10 bg-secondary/5 hover:bg-secondary/10 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/60">Previous</div>
                      <div className="text-sm md:text-base font-medium text-white">{prevChapter.title}</div>
                    </div>
                  </button>
                )}
                
                {nextChapter && (
                  <button
                    onClick={() => navigateToPrinciple(nextChapter.id)}
                    className="flex items-center justify-end space-x-2 p-4 rounded-lg border border-secondary/10 bg-secondary/5 hover:bg-secondary/10 transition-all duration-300"
                  >
                    <div className="text-right">
                      <div className="text-xs text-white/60">Next</div>
                      <div className="text-sm md:text-base font-medium text-white">{nextChapter.title}</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-24 space-y-8">
                {/* Chapter card */}
                <div className="bg-secondary/10 backdrop-blur-sm rounded-lg border border-secondary/20 overflow-hidden">
                  <div className="bg-accent/10 p-6 flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                      <PrincipleIcon type={currentChapter.iconType} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{currentChapter.title}</h3>
                      <p className="text-white/60 text-sm">Chapter {currentIndex + 1} of {chapters.length}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Audio Length:</span>
                      <span className="text-white font-medium">{currentChapter.audioLength}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Starts at:</span>
                      <span className="text-white font-medium">{currentChapter.timestamp}</span>
                    </div>
                    <button className="w-full py-3 px-4 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 mt-2 group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Play Audio Sample</span>
                    </button>
                  </div>
                </div>
                
                {/* Journey Map */}
                <div className="bg-secondary/10 backdrop-blur-sm rounded-lg border border-secondary/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Learning Journey Map</h3>
                  <div className="space-y-3">
                    {chapters.map((chapter, index) => {
                      const isCompleted = index < currentIndex;
                      const isCurrent = index === currentIndex;
                      const isUpcoming = index > currentIndex;
                      
                      return (
                        <button
                          key={chapter.id}
                          onClick={() => navigateToPrinciple(chapter.id)}
                          className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${isCurrent ? 'bg-accent/20 border border-accent/30' : isCompleted ? 'bg-success/10 border border-success/30' : 'bg-secondary/5 border border-secondary/10 opacity-70'}`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${isCurrent ? 'bg-accent/20 text-accent' : isCompleted ? 'bg-success/20 text-success' : 'bg-secondary/20 text-white/60'}`}>
                            {isCompleted ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>
                          <div className="text-left">
                            <p className={`text-sm font-medium ${isCurrent ? 'text-accent' : isCompleted ? 'text-success' : 'text-white/70'}`}>
                              {chapter.title}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg border border-accent/30 p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">Ready to Master All Principles?</h3>
                  <p className="text-white/80 mb-6">Unlock the complete audio program and start your journey to success mastery.</p>
                  <a 
                    href="/Payment"
                    className="block w-full py-3 px-6 bg-accent text-black font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 group"
                  >
                    Secure Your Copy Now
                    <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-white opacity-10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
          
          {/* FAQ Section */}
          <section className="mt-20 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">FEAR-BUSTING FAQ</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto text-center mb-12">
              Common questions answered by those who've already transformed their lives
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-white">How is this different from other success programs?</h3>
                <p className="text-white/80">
                  Unlike conventional programs that focus on surface-level tactics, MindSupremacy addresses the root mental patterns that govern all achievement. These principles were intentionally suppressed because they provide too much power when properly applied, allowing you to achieve results that others might consider impossible.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-white">What if I've failed repeatedly before?</h3>
                <p className="text-white/80">
                  Previous failures are often the result of working with incomplete information or following principles that were intentionally designed to limit your success. The 3 Feet from Gold and Adversity Alchemy principles specifically address how to transform past failures into your greatest advantage, making previous setbacks actually valuable for your future success.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Is this just another motivational program?</h3>
                <p className="text-white/80">
                  Absolutely not. While motivation can provide a temporary boost, these principles establish permanent mental patterns that produce results automatically. The Hypnotic Rhythm principle specifically addresses why motivation always fails and how to create success momentum that doesn't rely on fluctuating emotional states.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-white">How quickly will I see results?</h3>
                <p className="text-white/80">
                  Many participants report significant mental shifts within the first week of implementation. The principles are designed to work in sequence, with each one building upon the previous. Most people experience their first tangible breakthrough within 21-30 days by following the implementation steps and practice exercises provided with each principle.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-white">What makes this knowledge 'forbidden'?</h3>
                <p className="text-white/80">
                  These principles were documented in the early 1900s but deliberately suppressed because they threatened established power structures. While elements have appeared in various success literature over the decades, the complete system and specific implementation methods were reserved for private mastermind groups and select individuals. This program represents the first time these principles have been made available in their complete, integrated form.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-white">What if it doesn't work for me?</h3>
                <p className="text-white/80">
                  The principles work universally when properly applied, but individual implementation can vary. That's why we offer a 60-day "Soul Guarantee" – if you don't experience measurable improvement after sincerely implementing these principles for 60 days, we'll refund your investment completely. We can make this guarantee confidently because the historical success rate exceeds 90% among those who follow the implementation steps.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
