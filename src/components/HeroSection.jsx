import { Link } from "react-router";

export default function HeroSectionDark() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100 py-24 lg:py-32">
      {/* Background Neon Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-7">
            {/* Dark Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-indigo-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
              Next-Gen Architecture
            </div>

            {/* Main Headline with Gradient */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Scale your vision into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                limitless reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience ultra-fast deployments, high-availability clusters, and an effortless developer interface built for the dark-mode generation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/signup"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium text-center shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02]"
              >
                Get Started
              </Link>
              <a
                href="#docs"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-center border border-slate-800 transition-all duration-200"
              >
                Read Documentation
              </a>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">99.99%</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Uptime Record</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">40M+</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Requests/sec</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">&lt; 15ms</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Global Latency</p>
              </div>
            </div>
          </div>

          {/* Right Visual Element (Mock Dark UI / Terminal Card) */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-1 border border-slate-800 shadow-2xl backdrop-blur-xl">
              <div className="rounded-xl bg-slate-950/90 p-5 sm:p-6 overflow-hidden">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800/60">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-500 ml-2 font-mono">cluster-config.ts</span>
                </div>
                
                {/* Code / Visual Preview */}
                <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                  <p className="text-slate-500">// Initialize cluster setup</p>
                  <p><span className="text-purple-400">const</span> cluster = <span className="text-purple-400">new</span> <span className="text-yellow-400">EdgeNetwork</span>({"{"}</p>
                  <p className="pl-4">region: <span className="text-emerald-400">'ap-southeast'</span>,</p>
                  <p className="pl-4">ssl: <span className="text-indigo-400">true</span>,</p>
                  <p className="pl-4">autoScale: <span className="text-indigo-400">true</span>,</p>
                  <p>{"}"});</p>
                  <p className="pt-2 text-slate-500">// Status: Ready to deploy</p>
                  <p className="text-emerald-400 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    System optimized (2.1ms)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}