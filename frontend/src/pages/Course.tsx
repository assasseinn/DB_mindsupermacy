import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { chapters, ChapterData } from "utils/courseData";
import { PrincipleIcon } from "components/PrincipleIcon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProtectedRoute } from "../components/ProtectedRoute";

const videoCourseData = [
  { time: "00:00", title: "Introduction" },
  { time: "39:35", title: "What is a Drifter" },
  { time: "01:45:43", title: "The 1st Principle: Definiteness" },
  { time: "02:22:27", title: "The 2nd Principle: Mastery over Self" },
  { time: "02:40:54", title: "The 3rd Principle: Learning from Adversity" },
  { time: "03:04:05", title: "The 4/5/6/7th Principle: Environmental Influence/Time/Harmony/Caution" },
  { time: "03:29:35", title: "Summary" }
];

const YOUTUBE_VIDEOS = {
  0: "cvzRTv9HHWs", // Introduction
  1: "", // What is a Drifter - add video ID here
  2: "", // The 1st Principle: Definiteness - add video ID here
  3: "", // The 2nd Principle: Mastery over Self - add video ID here
  4: "", // The 3rd Principle: Learning from Adversity - add video ID here
  5: "", // The 4/5/6/7th Principle - add video ID here
  6: "", // Summary - add video ID here
};

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

  // Video course state
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);

  // Handle video selection
  const handleVideoSelect = (idx: number) => {
    setCurrentVideoIdx(idx);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neural-gradient text-white overflow-hidden">
      <Header />
      
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] border border-accent/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border border-accent/10 rounded-full"></div>
        <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] border border-accent/10 rounded-full -translate-x-1/4 -translate-y-1/4 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] border border-accent/10 rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 flex-grow">
        {/* Video Course Player */}
        <div className="container mx-auto px-4 pt-6 md:pt-8">
          <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-4 md:p-6 mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Video Course</h2>
            
            {/* Video Player */}
            <div className="w-full max-w-5xl mx-auto mb-4 md:mb-6">
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-black">
                {YOUTUBE_VIDEOS[currentVideoIdx] ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[currentVideoIdx]}`}
                    title={`${videoCourseData[currentVideoIdx].title} - MindSupremacy Course`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-secondary/20 border border-accent/20 rounded-lg">
                    <div className="text-center p-4">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 text-accent/50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <p className="text-white/70 text-sm md:text-base">Video Coming Soon</p>
                      <p className="text-white/50 text-xs md:text-sm mt-1 md:mt-2">{videoCourseData[currentVideoIdx].title}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Playlist */}
            <div className="w-full max-w-5xl mx-auto">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Course Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                {videoCourseData.map((video, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleVideoSelect(idx)}
                    className={`flex items-center space-x-2 md:space-x-3 p-3 md:p-4 rounded-lg transition-all duration-300 text-left ${
                      idx === currentVideoIdx 
                        ? 'bg-accent/20 text-accent border border-accent/30' 
                        : 'bg-secondary/10 hover:bg-secondary/20 text-white/80 hover:text-white border border-secondary/10'
                    }`}
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      idx === currentVideoIdx ? 'bg-accent/20' : 'bg-secondary/20'
                    }`}>
                      {YOUTUBE_VIDEOS[idx] ? (
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      ) : (
                        <span className="text-xs md:text-sm font-mono">{idx + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate text-sm md:text-base">{video.title}</p>
                      <p className="text-xs md:text-sm opacity-70 font-mono">{video.time}</p>
                      {!YOUTUBE_VIDEOS[idx] && (
                        <p className="text-xs text-accent/70 mt-1">Coming Soon</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="container mx-auto px-4 pt-6 md:pt-8">
          {/* Principle navigation */}
          <div className="mb-8 md:mb-12 overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => navigateToPrinciple(chapter.id)}
                  className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 ${
                    chapter.id === principleId 
                      ? 'bg-accent/20 text-accent border border-accent/30' 
                      : 'bg-secondary/10 hover:bg-secondary/20 text-white/70 hover:text-white border border-secondary/10'
                  }`}
                >
                  <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-accent/10 text-xs md:text-sm">
                    {index + 1}
                  </span>
                  <span className="text-xs md:text-sm lg:text-base font-medium whitespace-nowrap">{chapter.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Principle content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 md:mb-6 text-white leading-tight">
                {currentChapter.title}
              </h1>
              
              <div className="prose prose-invert prose-sm md:prose-lg max-w-none mb-6 md:mb-8">
                <p className="text-lg md:text-xl text-accent/90 mb-4 md:mb-6 italic">
                  "{currentChapter.shortDescription}"
                </p>
                <p className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                  {currentChapter.fullDescription}
                </p>
              </div>
              
              {/* Key Takeaways */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                  <span className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Key Takeaways
                </h2>
                <ul className="space-y-3 md:space-y-4">
                  {currentChapter.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5 mr-2 md:mr-3 flex-shrink-0 text-xs md:text-sm">
                        {index + 1}
                      </span>
                      <span className="text-white/90 text-sm md:text-base leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Real World Example */}
              <div className="mb-8 md:mb-12 bg-gradient-to-br from-secondary/20 to-transparent p-4 md:p-6 rounded-lg border border-secondary/10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white flex items-center">
                  <span className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </span>
                  Real World Example
                </h2>
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                  <p className="text-sm md:text-base leading-relaxed">{currentChapter.realWorldExample}</p>
                </div>
              </div>
              
              {/* Implementation Steps */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                  <span className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Implementation Steps
                </h2>
                <div className="relative pl-6 md:pl-8 border-l border-accent/30">
                  {currentChapter.implementationSteps.map((step, index) => (
                    <div key={index} className="mb-6 md:mb-8 relative">
                      <div className="absolute -left-[29px] md:-left-[41px] w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center border border-accent/30 text-xs md:text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{step}</h3>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Practice Exercise */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 md:p-6 mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white flex items-center">
                  <span className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Practice Exercise
                </h2>
                <div className="prose prose-invert prose-sm md:prose-lg max-w-none">
                  <p className="text-sm md:text-base leading-relaxed">{currentChapter.practiceExercise}</p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {prevChapter && (
                  <button
                    onClick={() => navigateToPrinciple(prevChapter.id)}
                    className="flex items-center justify-start space-x-2 p-3 md:p-4 rounded-lg border border-secondary/10 bg-secondary/5 hover:bg-secondary/10 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div className="text-left min-w-0">
                      <div className="text-xs text-white/60">Previous</div>
                      <div className="text-sm md:text-base font-medium text-white truncate">{prevChapter.title}</div>
                    </div>
                  </button>
                )}
                
                {nextChapter && (
                  <button
                    onClick={() => navigateToPrinciple(nextChapter.id)}
                    className="flex items-center justify-end space-x-2 p-3 md:p-4 rounded-lg border border-secondary/10 bg-secondary/5 hover:bg-secondary/10 transition-all duration-300"
                  >
                    <div className="text-right min-w-0">
                      <div className="text-xs text-white/60">Next</div>
                      <div className="text-sm md:text-base font-medium text-white truncate">{nextChapter.title}</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6 md:space-y-8">
                {/* Chapter card */}
                <div className="bg-secondary/10 backdrop-blur-sm rounded-lg border border-secondary/20 overflow-hidden">
                  <div className="bg-accent/10 p-4 md:p-6 flex items-center space-x-3 md:space-x-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                      <PrincipleIcon type={currentChapter.iconType} className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white truncate">{currentChapter.title}</h3>
                      <p className="text-white/60 text-xs md:text-sm">Chapter {currentIndex + 1} of {chapters.length}</p>
                    </div>
                  </div>
                </div>
                
                {/* Journey Map */}
                <div className="bg-secondary/10 backdrop-blur-sm rounded-lg border border-secondary/20 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Learning Journey Map</h3>
                  <div className="space-y-2 md:space-y-3">
                    {chapters.map((chapter, index) => {
                      const isCompleted = index < currentIndex;
                      const isCurrent = index === currentIndex;
                      const isUpcoming = index > currentIndex;
                      
                      return (
                        <button
                          key={chapter.id}
                          onClick={() => navigateToPrinciple(chapter.id)}
                          className={`w-full flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 ${
                            isCurrent ? 'bg-accent/20 border border-accent/30' : 
                            isCompleted ? 'bg-success/10 border border-success/30' : 
                            'bg-secondary/5 border border-secondary/10 opacity-70'
                          }`}
                        >
                          <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 ${
                            isCurrent ? 'bg-accent/20 text-accent' : 
                            isCompleted ? 'bg-success/20 text-success' : 
                            'bg-secondary/20 text-white/60'
                          }`}>
                            {isCompleted ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <span className="text-xs md:text-sm">{index + 1}</span>
                            )}
                          </div>
                          <div className="text-left min-w-0">
                            <p className={`text-xs md:text-sm font-medium truncate ${
                              isCurrent ? 'text-accent' : 
                              isCompleted ? 'text-success' : 
                              'text-white/70'
                            }`}>
                              {chapter.title}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg border border-accent/30 p-4 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Share the wisdom and earn good karma.</h3>
                  <a 
                    href="/Payment"
                    className="block w-full py-2 md:py-3 px-4 md:px-6 bg-accent text-black font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 group text-sm md:text-base"
                  >
                    Share Now
                    <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-white opacity-10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
          
          {/* FAQ Section */}
          <section className="mt-12 md:mt-16 lg:mt-20 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center text-white">FEAR-BUSTING FAQ</h2>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
              Common questions answered by those who've already transformed their lives
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">How is this different from other success programs?</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Unlike conventional programs that focus on surface-level tactics, MindSupremacy addresses the root mental patterns that govern all achievement. These principles were intentionally suppressed because they provide too much power when properly applied, allowing you to achieve results that others might consider impossible.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">What if I've failed repeatedly before?</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Previous failures are often the result of working with incomplete information or following principles that were intentionally designed to limit your success. The 3 Feet from Gold and Adversity Alchemy principles specifically address how to transform past failures into your greatest advantage, making previous setbacks actually valuable for your future success.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Is this just another motivational program?</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Absolutely not. While motivation can provide a temporary boost, these principles establish permanent mental patterns that produce results automatically. The Hypnotic Rhythm principle specifically addresses why motivation always fails and how to create success momentum that doesn't rely on fluctuating emotional states.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">How quickly will I see results?</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Many participants report significant mental shifts within the first week of implementation. The principles are designed to work in sequence, with each one building upon the previous. Most people experience their first tangible breakthrough within 21-30 days by following the implementation steps and practice exercises provided with each principle.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">What makes this knowledge 'forbidden'?</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  These principles were documented in the early 1900s but deliberately suppressed because they threatened established power structures. While elements have appeared in various success literature over the decades, the complete system and specific implementation methods were reserved for private mastermind groups and select individuals. This program represents the first time these principles have been made available in their complete, integrated form.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg border border-secondary/20 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">What if it doesn't work for me?</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  The principles work universally when properly applied, but individual implementation can vary. That's why we offer a 60-day "Soul Guarantee" – if you don't experience measurable improvement after sincerely implementing these principles for 60 days, we'll refund your investment completely. We can make this guarantee confidently because the historical success rate exceeds 90% among those who follow the implementation steps.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
