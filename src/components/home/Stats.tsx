import { Users, Award, Home, Star } from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Happy Customers",
    icon: Users,
    color: "text-brand-orange",
  },
  {
    value: "50K+",
    label: "Projects Completed",
    icon: Home,
    color: "text-brand-blue",
  },
  {
    value: "4.8/5",
    label: "Average Rating",
    icon: Star,
    color: "text-brand-orange",
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: Award,
    color: "text-brand-blue",
  },
];

export default function Stats() {
  return (
    <section className="py-8 md:py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  index % 2 === 0 ? 'bg-brand-orange/10' : 'bg-brand-blue/10'
                }`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
