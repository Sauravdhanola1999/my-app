import { Users, Clock, ShieldCheck, Sofa, Sparkles } from "lucide-react";
const points = [
  { label: "Trained Professionals", icon: Users },
  { label: "On-Time Completion", icon: Clock },
  { label: "Premium Quality Materials", icon: ShieldCheck },
  { label: "Furniture Protection", icon: Sofa },
  { label: "Post-Service Cleaning", icon: Sparkles },
];
export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#EAF6F8]">
      <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8">Why Colourfull Homes?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {points.map(({ label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Icon className="w-6 h-6 text-brand-blue" />{" "}
              </div>
              <p className="text-sm font-medium text-brand-dark">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
