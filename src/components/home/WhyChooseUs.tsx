import { Users, Clock, ShieldCheck, Sofa, Sparkles } from "lucide-react";

const points = [
  { label: "Trained Professionals", icon: Users, description: "Verified & skilled experts" },
  { label: "On-Time Completion", icon: Clock, description: "Stick to deadlines" },
  { label: "Premium Quality Materials", icon: ShieldCheck, description: "Trusted brands only" },
  { label: "Furniture Protection", icon: Sofa, description: "Complete care" },
  { label: "Post-Service Cleaning", icon: Sparkles, description: "Spotless finish" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brand-dark">
            Why Choose Colourfull Homes?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We make home improvement simple, reliable, and hassle-free
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map(({ label, icon: Icon, description }, index) => (
            <div 
              key={label} 
              className="bg-gray-50 rounded-xl p-5 text-center hover:bg-white hover:shadow-md transition-all border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-3 ${
                index % 2 === 0 ? 'bg-brand-orange/10' : 'bg-brand-blue/10'
              }`}>
                <Icon className={`w-7 h-7 ${index % 2 === 0 ? 'text-brand-orange' : 'text-brand-blue'}`} />
              </div>
              <h3 className="font-semibold text-brand-dark mb-1.5 text-sm">
                {label}
              </h3>
              <p className="text-xs text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
