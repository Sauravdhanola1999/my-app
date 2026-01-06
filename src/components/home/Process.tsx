import {
  CalendarCheck,
  MapPin,
  Palette,
  Hammer,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Book Consultation",
    icon: CalendarCheck,
  },
  {
    title: "Site Visit & Quote",
    icon: MapPin,
  },
  {
    title: "Material Selection",
    icon: Palette,
  },
  {
    title: "Execution",
    icon: Hammer,
  },
  {
    title: "Final Inspection",
    icon: CheckCircle,
  },
];

export default function Process() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Our Simple Process
          </h2>
          <p className="text-base text-gray-600">From consultation to completion</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isBlue = index % 2 === 1;
            const bgColor = isBlue ? 'bg-brand-blue/10' : 'bg-brand-orange/10';
            const iconColor = isBlue ? 'text-brand-blue' : 'text-brand-orange';

            return (
              <div
                key={step.title}
                className="bg-brand-light rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-white hover:shadow-[var(--shadow-card)] transition-all border border-gray-200 hover:border-brand-orange/30"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>

                {/* Title */}
                <p className="font-medium text-brand-dark text-sm text-center leading-snug">
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
