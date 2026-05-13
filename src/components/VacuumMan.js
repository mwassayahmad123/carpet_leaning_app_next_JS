"use client";

const VacuumMan = () => {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello! I'd like to book a carpet cleaning appointment in London."
    );
    window.open(`https://wa.me/447871062227?text=${msg}`, '_blank');
  };

  return (
    <>
      <div
        className="fixed bottom-6 right-5 z-[90] cursor-pointer group select-none"
        onClick={openWhatsApp}
        role="button"
        aria-label="Book carpet cleaning via WhatsApp"
      >
        {/* Tooltip */}
        <div
          className="absolute bottom-full right-0 mb-3 pointer-events-none
                     opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                     transition-all duration-200"
        >
          <div className="bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-xl whitespace-nowrap">
            Chat with us on WhatsApp! 💬
          </div>
          <div className="absolute top-full right-6 border-[6px] border-transparent border-t-gray-900" />
        </div>

        {/* Live green ping dot */}
        <div className="absolute -top-1 -right-1 z-10">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
          </span>
        </div>

        {/* Card */}
        <div className="vm-card bg-white rounded-2xl border border-gray-100 px-2 pt-2 pb-1 transition-transform duration-300">
          <svg
            viewBox="0 0 100 108"
            width="82"
            height="89"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ── Everything bobs together ── */}
            <g className="vm-body">

              {/* ── VACUUM UNIT + HOSE + ARM — all slide left/right ── */}
              <g className="vm-push">
                {/* Dashed hose from arm to vacuum */}
                <path
                  d="M 43 54 Q 30 63 18 73"
                  stroke="#CBD5E1" strokeWidth="4" fill="none"
                  strokeLinecap="round" strokeDasharray="5 3.5"
                />

                {/* Vacuum body */}
                <rect x="2" y="65" width="34" height="20" rx="10" fill="#64748B"/>
                <rect x="4" y="67" width="30" height="16" rx="9"  fill="#94A3B8"/>
                {/* Label band */}
                <rect x="7" y="71" width="19" height="5" rx="2.5" fill="#475569"/>
                {/* Power-on LED */}
                <circle cx="30" cy="73.5" r="3" fill="#4ADE80"/>
                <circle cx="30" cy="73.5" r="1.5" fill="#BBF7D0"/>

                {/* Nozzle */}
                <rect x="0" y="82" width="16" height="7" rx="3.5" fill="#334155"/>

                {/* Wheels */}
                <circle cx="11" cy="88" r="5.5" fill="#1E293B"/>
                <circle cx="11" cy="88" r="2.5" fill="#64748B"/>
                <circle cx="29" cy="88" r="5.5" fill="#1E293B"/>
                <circle cx="29" cy="88" r="2.5" fill="#64748B"/>

                {/* Dust particles sucked into nozzle */}
                <circle className="vm-d1" cx="18" cy="79" r="3"   fill="#BAE6FD"/>
                <circle className="vm-d2" cx="11" cy="76" r="2.2" fill="#C4B5FD"/>
                <circle className="vm-d3" cx="25" cy="74" r="2"   fill="#FCA5A5"/>

                {/* Arm — runs from shoulder region to vacuum handle */}
                <line x1="55" y1="46" x2="43" y2="55"
                      stroke="#FDBCB4" strokeWidth="6" strokeLinecap="round"/>
                {/* Grip hand */}
                <circle cx="43" cy="55" r="4" fill="#FDBCB4"/>
              </g>

              {/* ── PERSON (static within bob) ── */}

              {/* Head — skin base */}
              <circle cx="75" cy="20" r="13" fill="#FDBCB4"/>
              {/* Hair — drawn over top of head */}
              <path d="M 63 18 Q 65 5 75 6 Q 85 5 87 18 Z" fill="#1E293B"/>
              {/* Left eye */}
              <circle cx="71" cy="19" r="2.5" fill="#1E293B"/>
              <circle cx="72" cy="18" r="1"   fill="white"/>
              {/* Right eye */}
              <circle cx="80" cy="19" r="2.5" fill="#1E293B"/>
              <circle cx="81" cy="18" r="1"   fill="white"/>
              {/* Smile */}
              <path d="M 69 24 Q 75 29 81 24"
                    stroke="#1E293B" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

              {/* Shirt */}
              <rect x="61" y="33" width="28" height="26" rx="6" fill="#2563EB"/>
              {/* Shirt stripe */}
              <rect x="63" y="39" width="24" height="3" rx="1.5" fill="#1D4ED8"/>
              {/* Breast pocket */}
              <rect x="63" y="45" width="8" height="7" rx="1.5" fill="#1D4ED8"/>

              {/* Back arm (right side, hangs naturally) */}
              <line x1="87" y1="40" x2="95" y2="54"
                    stroke="#FDBCB4" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="95" cy="55" r="4" fill="#FDBCB4"/>

              {/* Belt */}
              <rect x="61" y="58" width="28" height="5" rx="2.5" fill="#374151"/>
              {/* Belt buckle */}
              <rect x="72" y="58.5" width="7" height="4" rx="1" fill="#6B7280"/>

              {/* Left leg (forward) */}
              <line x1="67" y1="62" x2="62" y2="80"
                    stroke="#374151" strokeWidth="7" strokeLinecap="round"/>
              <line x1="62" y1="80" x2="57" y2="97"
                    stroke="#374151" strokeWidth="6" strokeLinecap="round"/>
              <ellipse cx="53" cy="100" rx="11" ry="5" fill="#111827"/>

              {/* Right leg (behind) */}
              <line x1="77" y1="62" x2="82" y2="79"
                    stroke="#1F2937" strokeWidth="7" strokeLinecap="round"/>
              <line x1="82" y1="79" x2="84" y2="95"
                    stroke="#1F2937" strokeWidth="6" strokeLinecap="round"/>
              <ellipse cx="85" cy="98" rx="10" ry="4.5" fill="#0F172A"/>

            </g>
          </svg>

          {/* Label */}
          <p className="text-center text-[10px] font-bold text-green-600 tracking-widest uppercase pb-1">
            Book Now
          </p>
        </div>
      </div>
    </>
  );
};

export default VacuumMan;
