const steps = [
  "Book Consultation",
  "Site Visit & Quote",
  "Material Selection",
  "Execution",
  "Final Inspection",
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Simple Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">
          {steps.map((step, index) => (
            <div key={step} className="p-4 border rounded-lg">
              <div className="text-orange-500 font-bold text-xl">
                {index + 1}
              </div>
              <p className="mt-2 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
