import React, { useState, useRef, useEffect } from "react";
import {
  GraduationCap,
  Award,
  Diamond,
  Briefcase,
  Code,
  Trophy,
} from "lucide-react";

const ScrollableTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const milestones = [
    {
      id: 1,
      year: 2020,
      icon: Code,
      title: "Started Programming",
      description: "First line of code",
      color: "#8b5cf6",
      dateRange: "2020-2021",
    },
    {
      id: 2,
      year: 2021,
      icon: GraduationCap,
      title: "Bachelor's in Computer Science",
      description: "University of Punjab",
      color: "#a855f7",
      dateRange: "2020-2024",
    },
    {
      id: 3,
      year: 2022,
      icon: Briefcase,
      title: "First Job",
      description: "Software Developer",
      color: "#c084fc",
      dateRange: "2022-2023",
    },
    {
      id: 4,
      year: 2023,
      icon: Award,
      title: "Achievement Unlocked",
      description: "Best Developer Award",
      color: "#fbbf24",
      dateRange: "2022-2024",
    },
    {
      id: 5,
      year: 2024,
      icon: Diamond,
      title: "Senior Position",
      description: "Promoted to Lead",
      color: "#60a5fa",
      dateRange: "2024-2025",
    },
    {
      id: 6,
      year: 2025,
      icon: Trophy,
      title: "Current",
      description: "Building amazing things",
      color: "#34d399",
      dateRange: "2024-2025",
    },
  ];

  const scrollToMilestone = (index) => {
    const container = containerRef.current;
    if (container) {
      const targetScroll = index * 300 - container.clientWidth / 2 + 150;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container && !isDragging) {
      const scrollPosition = container.scrollLeft + container.clientWidth / 2;
      const newActiveIndex = Math.round(scrollPosition / 300);
      if (
        newActiveIndex !== activeIndex &&
        newActiveIndex >= 0 &&
        newActiveIndex < milestones.length
      ) {
        setActiveIndex(newActiveIndex);
      }
    }
  };

  useEffect(() => {
    scrollToMilestone(1);
  }, []);

  const currentMilestone = milestones[activeIndex];
  const CurrentIcon = currentMilestone?.icon || Code;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Date Range Label */}
      <div className="text-center mb-12 z-10">
        <span className="text-gray-400 text-xl font-light tracking-widest">
          {currentMilestone?.dateRange}
        </span>
      </div>

      {/* Scrollable Timeline Container */}
      <div className="w-full relative">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onScroll={handleScroll}
          className="overflow-x-scroll overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="relative h-80 flex items-center"
            style={{ width: `${milestones.length * 300 + 600}px` }}
          >
            {/* Timeline Ticks Background */}
            <div className="absolute top-16 left-0 right-0 flex items-end h-24 px-8">
              {[...Array(100)].map((_, i) => {
                const distanceFromActive = Math.abs(i - activeIndex * 8);
                const opacity = Math.max(0.1, 1 - distanceFromActive * 0.08);
                return (
                  <div
                    key={i}
                    className="shrink-0 bg-gray-500 mx-1 transition-all duration-300"
                    style={{
                      width: "2px",
                      height:
                        i % 10 === 0 ? "56px" : i % 5 === 0 ? "40px" : "24px",
                      opacity: opacity,
                    }}
                  />
                );
              })}
            </div>

            {/* Central Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-purple-500/40 to-transparent" />

            {/* Milestone Markers */}
            <div className="flex items-center gap-0 pl-80">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = index === activeIndex;
                const distance = Math.abs(index - activeIndex);
                const scale = isActive ? 1 : Math.max(0.5, 1 - distance * 0.2);
                const opacity = Math.max(0.4, 1 - distance * 0.3);

                return (
                  <div
                    key={milestone.id}
                    className="relative shrink-0 transition-all duration-500 ease-out"
                    style={{
                      width: "300px",
                      transform: `scale(${scale})`,
                      opacity: opacity,
                    }}
                  >
                    {/* Vertical Line */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-transparent via-purple-400 to-transparent transition-all duration-500"
                      style={{
                        height: isActive ? "90px" : "50px",
                        top: isActive ? "-95px" : "-55px",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    />

                    {/* Icon Container */}
                    <button
                      onClick={() => scrollToMilestone(index)}
                      className="relative mx-auto w-20 h-20 group block"
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 shadow-2xl"
                        style={{
                          backgroundColor: milestone.color,
                          boxShadow: isActive
                            ? `0 0 50px ${milestone.color}`
                            : `0 0 20px ${milestone.color}60`,
                        }}
                      >
                        <Icon
                          className={`${isActive ? "w-10 h-10" : "w-8 h-8"} text-white transition-all duration-500`}
                        />
                      </div>

                      {/* Animated Rings for Active */}
                      {isActive && (
                        <>
                          <div
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{
                              backgroundColor: milestone.color,
                              opacity: 0.3,
                              animationDuration: "2s",
                            }}
                          />
                          <div
                            className="absolute -inset-2 rounded-full animate-pulse"
                            style={{
                              backgroundColor: milestone.color,
                              opacity: 0.2,
                              animationDuration: "1.5s",
                            }}
                          />
                        </>
                      )}
                    </button>

                    {/* Year Label */}
                    <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span
                        className={`${isActive ? "text-white text-base" : "text-gray-500 text-sm"} font-light transition-all duration-500`}
                      >
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-40 h-full bg-linear-to-r from-slate-950 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-40 h-full bg-linear-to-l from-slate-950 to-transparent pointer-events-none z-10" />
      </div>

      {/* Info Card */}
      {currentMilestone && (
        <div className="max-w-md mx-auto mt-16 bg-slate-800/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-purple-500/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-lg"
              style={{
                backgroundColor: currentMilestone.color,
                boxShadow: `0 0 25px ${currentMilestone.color}80`,
              }}
            >
              <CurrentIcon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-xl mb-2">
                {currentMilestone.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                {currentMilestone.description}
              </p>
              <span className="text-purple-400 text-xs font-medium px-3 py-1 bg-purple-500/20 rounded-full">
                {currentMilestone.year}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>Drag to scroll or click any milestone</p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ScrollableTimeline;
