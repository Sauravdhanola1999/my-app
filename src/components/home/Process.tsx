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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Simple Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="border rounded-xl p-6 flex flex-col items-center gap-4 hover:shadow-md transition"
              >

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>

                {/* Title */}
                <p className="font-medium text-brand-dark">
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
