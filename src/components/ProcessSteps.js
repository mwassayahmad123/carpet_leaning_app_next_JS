// Numbered step-by-step customer journey.
const ProcessSteps = ({ steps }) => (
  <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    {steps.map((step, index) => (
      <li key={step.title} className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mb-4">
          {index + 1}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{step.text}</p>
      </li>
    ))}
  </ol>
);

export default ProcessSteps;
