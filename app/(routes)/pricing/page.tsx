import { PricingTable } from "@clerk/nextjs";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,200,0,0.08),transparent_45%)]" />

      <div className="relative z-10 px-6 py-24 flex justify-center">
        <div className="w-full max-w-6xl text-center">
          {/* Heading */}
          <h1 className="text-5xl font-game font-bold mb-4 tracking-wide">
            Pricing
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            Unlock <span className="text-yellow-400 font-medium">unlimited access</span> to all
            courses, projects, quizzes, and future updates.
            Level up your skills with one simple plan.
          </p>

          {/* Pricing Card Wrapper */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <PricingTable />
          </div>

          {/* Footer note */}
          <div className="mt-16 text-sm text-muted-foreground">
            <p>
              No hidden charges. Cancel anytime.  
              New content added regularly at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
