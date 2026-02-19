import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-30T09:00:00");

function useCountdown(target) {
  const calc = () => {
    const diff = target - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm" />
      <span className="relative text-2xl md:text-3xl font-bold text-white tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-xs tracking-widest uppercase text-[#5DB8E8]/80">{label}</span>
  </div>
);

const UpcomingEventsSection = () => {
  const countdown = useCountdown(TARGET_DATE);

  const highlights = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      label: "Global Innovators",
      value: "30,000+",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
        </svg>
      ),
      label: "Countries",
      value: "150+",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      ),
      label: "Solution Exhibitors",
      value: "1,000+",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
      ),
      label: "Days of Impact",
      value: "3",
    },
  ];

  return (
    <section className="relative py-28 bg-[#061018] overflow-hidden">

      {/* ── Atmospheric background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#185B8D] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#5DB8E8] opacity-5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500 opacity-5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="evgrid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#evgrid)" />
        </svg>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5DB8E8]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5DB8E8]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Upcoming Event
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            We'll Be at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DB8E8] to-emerald-400">
              ChangeNOW 2026
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Come find us at the most impactful summit for the planet.
          </p>
        </motion.div>

        {/* ── Main event card ── */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 18 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5DB8E8]/20 via-transparent to-emerald-500/10 pointer-events-none" />
            <div className="h-1.5 w-full bg-gradient-to-r from-[#185B8D] via-[#5DB8E8] to-emerald-400" />

            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12">

              {/* ── Event identity row ── */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Confirmed
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#185B8D]/50 text-[#5DB8E8] border border-[#5DB8E8]/20">
                      Global Summit
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    ChangeNOW
                  </h3>
                  <p className="text-[#5DB8E8] font-semibold text-lg mt-1">2026 Edition</p>
                </div>

                <a
                  href="https://www.changenow-summit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start md:self-center inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#185B8D] to-[#2A7EB3] hover:from-[#2A7EB3] hover:to-[#3a9ed4] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#185B8D]/30 hover:shadow-[#185B8D]/50 hover:-translate-y-0.5"
                >
                  Visit Event Site
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              {/* ── Info pills ── */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#185B8D]/40 text-[#5DB8E8]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Dates</p>
                    <p className="text-white font-bold text-sm">30–31 March & 1 April 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#185B8D]/40 text-[#5DB8E8]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.943-5.228 3.943-9.577a8.25 8.25 0 00-16.5 0c0 4.349 1.998 7.498 3.942 9.577a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Venue</p>
                    <p className="text-white font-bold text-sm">Grand Palais, Paris, France</p>
                  </div>
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

              {/* ── Quote / description ── */}
              <div className="relative mb-10">
                <div className="absolute -top-3 -left-2 text-6xl text-[#5DB8E8]/20 font-serif leading-none select-none">"</div>
                <blockquote className="pl-6 border-l-2 border-[#5DB8E8]/40">
                  <p className="text-gray-300 text-lg leading-relaxed italic mb-4">
                    Be part of the Change. Join us at the iconic Grand Palais in Paris for the most impactful event for the planet — where meaningful connections are made and actionable ideas are set in motion.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    More than just an event, ChangeNOW is an experience to be lived — a real dive into a sustainable world.
                  </p>
                </blockquote>
              </div>

              {/* ── Stats row ── */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5DB8E8]/30 hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#185B8D]/30 text-[#5DB8E8] mb-3">
                      {h.icon}
                    </div>
                    <p className="text-2xl font-extrabold text-white">{h.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5 tracking-wide">{h.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* ── Divider ── */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

              {/* ── Live Countdown ── */}
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
                  Event Starts In
                </p>
                <div className="flex items-start justify-center gap-3 md:gap-6">
                  <CountdownUnit value={countdown.days} label="Days" />
                  <span className="text-3xl text-[#5DB8E8]/40 font-light mt-3">:</span>
                  <CountdownUnit value={countdown.hours} label="Hours" />
                  <span className="text-3xl text-[#5DB8E8]/40 font-light mt-3">:</span>
                  <CountdownUnit value={countdown.minutes} label="Minutes" />
                  <span className="text-3xl text-[#5DB8E8]/40 font-light mt-3">:</span>
                  <CountdownUnit value={countdown.seconds} label="Seconds" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Footer note ── */}
        <motion.p
          className="text-center text-gray-600 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          More events will be announced — stay tuned.
        </motion.p>

      </div>
    </section>
  );
};

export default UpcomingEventsSection;
