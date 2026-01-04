const points = [
  "Experienced Professionals",
  "Premium Quality Materials",
  "Transparent Pricing",
  "On-Time Project Delivery",
  "Clean & Hassle-Free Work",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Colourfull Homes?</h2>

        <ul className="grid md:grid-cols-2 gap-6 text-lg">
          {points.map((point) => (
            <li key={point} className="bg-white p-4 rounded-lg shadow-sm">
              ✅ {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
