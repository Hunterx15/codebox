import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,200,0,0.08),transparent_45%)]" />

      <div className="relative z-10 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-4xl text-center">
          {/* Title */}
          <h1 className="text-5xl font-game font-bold mb-4 tracking-wide">
            Contact
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed">
            Have a question, feedback, or collaboration idea?  
            Feel free to reach out — I usually respond within  
            <span className="text-yellow-400 font-medium"> 24 hours</span>.
          </p>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Email */}
            <div className="group bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,200,0,0.15)]">
              <div className="text-3xl mb-4">📧</div>
              <h2 className="text-xl font-game mb-2">Email</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Fastest way to reach me
              </p>
              <a
                href="mailto:pankaj.jangid.work@gmail.com"
                className="text-yellow-400 font-medium break-all hover:underline"
              >
                pankaj.jangid.work@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="group bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,200,0,0.15)]">
              <div className="text-3xl mb-4">💻</div>
              <h2 className="text-xl font-game mb-2">GitHub</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Open-source & projects
              </p>
              <Link
                href="https://github.com/Hunterx15"
                target="_blank"
                className="text-yellow-400 font-medium hover:underline"
              >
                github.com/Hunterx15
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="group bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,200,0,0.15)]">
              <div className="text-3xl mb-4">🔗</div>
              <h2 className="text-xl font-game mb-2">LinkedIn</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Professional network
              </p>
              <Link
                href="https://www.linkedin.com/in/pankaj-jangid-1a5320280/"
                target="_blank"
                className="text-yellow-400 font-medium hover:underline"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-20 text-sm text-muted-foreground">
            <p>
              For business inquiries, partnerships, or support,  
              email is the fastest and most reliable way to reach me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
