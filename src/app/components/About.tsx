export default function About() {
  return (
    <section id="about" className="bg-zinc-900 text-white py-24 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Top heading */}
        <div className="mb-16">
          <h2
            className="text-6xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            We Are Purple Hope.
          </h2>
          <div className="w-16 h-1 bg-purple-500 mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            We are five high school students from London, Ontario, united by loss, purpose, and the belief that no family should go through what ours did. When one of our own lost his aunt to pancreatic cancer, we knew we had to do something. Purple Hope is our answer.
          </p>
        </div>

        {/* Two column: story + stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              Our Story
            </h3>
            <div className="w-10 h-1 bg-purple-500 mb-4" />
            <p className="text-gray-300 leading-relaxed mb-4">
              Pancreatic cancer is one of the deadliest and most underfunded cancers in Canada. It took someone we loved. It has taken too many others. We refuse to stand by and do nothing.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              As students in high school, we partnered with the Canadian Cancer Society to launch Purple Hope — a fundraising campaign dedicated to funding pancreatic cancer research. Every dollar raised goes directly to the Canadian Cancer Society's research programs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We may be young, but we know that change starts somewhere. This is where ours starts.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center gap-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-6xl font-black text-white">88%</p>
              <p className="text-gray-400 mt-1">of pancreatic cancer patients do not survive past 5 years</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-6xl font-black text-white">#1</p>
              <p className="text-gray-400 mt-1">most lethal major cancer — the lowest survival rate of any common cancer</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-6xl font-black text-white">$1,000</p>
              <p className="text-gray-400 mt-1">our fundraising goal — every dollar goes directly to the Canadian Cancer Society</p>
            </div>
          </div>
        </div>

        {/* Meet the team */}
        <div>
          <h3
            className="text-4xl mb-4"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Meet The Team
          </h3>
          <div className="w-10 h-1 bg-purple-500 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Ajil', role: 'Campaign Coordinator', photo: '/images/team/placeholder.JPG' },
              { name: 'Aabel', role: 'Web Developer & Campaign Registrar', photo: '/images/team/placeholder.JPG' },
              { name: 'Zac', role: 'Digital Marketing & Social Media', photo: '/images/team/placeholder.JPG' },
              { name: 'Noel', role: 'Graphic Designer & Branding', photo: '/images/team/placeholder.JPG' },
              { name: 'Kevin', role: 'Accounting & Bookkeeping', photo: '/images/team/placeholder.JPG' },
            ].map(({ name, role, photo }) => (
              <div key={name} className="flex flex-col items-center text-center">
                <img
                  src={photo}
                  alt={name}
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />
                <p className="text-white font-semibold text-lg">{name}</p>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}