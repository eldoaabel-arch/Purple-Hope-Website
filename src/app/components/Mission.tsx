'use client';

export default function Mission() {
  const goal = 1000;
  const raised = 0;
  const percentage = Math.min((raised / goal) * 100, 100);
  const donors = 0;

  return (
    <section id="mission" className="bg-zinc-900 text-white py-24 px-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2
            className="text-6xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Our Goal
          </h2>
          <div className="w-16 h-1 bg-purple-500 mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Every dollar we raise goes directly to the Canadian Cancer Society to fund pancreatic cancer research. Help us hit our goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-800 rounded-lg p-8 text-center">
            <p className="text-5xl font-black text-purple-400 mb-2">${raised.toLocaleString()}</p>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Raised So Far</p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-8 text-center">
            <p className="text-5xl font-black text-purple-400 mb-2">${goal.toLocaleString()}</p>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Our Goal</p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-8 text-center">
            <p className="text-5xl font-black text-purple-400 mb-2">{donors}</p>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Donors</p>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span>{percentage.toFixed(0)}% of goal reached</span>
            <span>${raised.toLocaleString()} / ${goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-zinc-700 rounded-full h-5">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-400 h-5 rounded-full transition-all duration-700"
              style={{ width: `${percentage === 0 ? 1 : percentage}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-800 rounded-lg p-10">
          <div>
            <h3
              className="text-3xl mb-2"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              Ready to make a difference?
            </h3>
            <p className="text-gray-400 text-sm max-w-lg">
              Your donation goes directly to the Canadian Cancer Society. No middlemen, no fees.
            </p>
          </div>
          
            <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-400 hover:opacity-90 text-white px-8 py-4 text-lg font-bold uppercase rounded-full tracking-wide whitespace-nowrap cursor-pointer"
          >
            Donate Now
          </a>
        </div>

      </div>
    </section>
  );
}