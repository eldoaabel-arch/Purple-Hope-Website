export default function Research() {
  return (
    <section id="research" className="bg-zinc-800 text-white py-24 px-6 md:px-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Why Pancreatic Cancer?
          </h2>
          <div className="w-16 h-1 bg-purple-500 mb-6" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Pancreatic cancer is one of the most devastating diagnoses a person can receive. Yet it remains one of the least talked about and least funded cancers in Canada. Here is why that needs to change.
          </p>
        </div>

        {/* Stats grid — 1 col on mobile, 2 on small, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-zinc-900 p-4 md:p-8 rounded-lg">
            <p className="text-4xl md:text-5xl font-black text-purple-400 mb-2">11%</p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">5-year survival rate — one of the lowest of any cancer</p>
          </div>
          <div className="bg-zinc-900 p-4 md:p-8 rounded-lg">
            <p className="text-4xl md:text-5xl font-black text-purple-400 mb-2">7,100+</p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">Canadians diagnosed with pancreatic cancer every year</p>
          </div>
          <div className="bg-zinc-900 p-4 md:p-8 rounded-lg">
            <p className="text-4xl md:text-5xl font-black text-purple-400 mb-2">80%</p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">of cases are diagnosed at a late stage when treatment is least effective</p>
          </div>
          <div className="bg-zinc-900 p-4 md:p-8 rounded-lg">
            <p className="text-4xl md:text-5xl font-black text-purple-400 mb-2">#4</p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">leading cause of cancer death in Canada despite relatively lower incidence</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>The Detection Problem</h3>
            <div className="w-10 h-1 bg-purple-500 mb-4" />
            <p className="text-gray-300 leading-relaxed text-sm">
              The pancreas is located deep within the abdomen, making tumours nearly impossible to detect early. There is currently no standard screening test for pancreatic cancer. Most patients have no symptoms until the cancer has already spread, which is why so many cases are caught too late for surgery or curative treatment.
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>The Funding Gap</h3>
            <div className="w-10 h-1 bg-purple-500 mb-4" />
            <p className="text-gray-300 leading-relaxed text-sm">
              Despite being the fourth leading cause of cancer death in Canada, pancreatic cancer receives a disproportionately small share of cancer research funding compared to cancers like breast or prostate cancer. This means fewer clinical trials, fewer treatment breakthroughs, and fewer options for patients and their families.
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>How Your Donation Helps</h3>
            <div className="w-10 h-1 bg-purple-500 mb-4" />
            <p className="text-gray-300 leading-relaxed text-sm">
              Every dollar raised through Purple Hope goes directly to the Canadian Cancer Society, one of Canada's most trusted and transparent charitable organizations. Your donation funds research into earlier detection methods, new treatments, and improved care for patients and families affected by pancreatic cancer across Canada.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to make a difference?</h3>
            <p className="text-gray-400 text-sm">Your donation goes directly to the Canadian Cancer Society's pancreatic cancer research programs.</p>
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