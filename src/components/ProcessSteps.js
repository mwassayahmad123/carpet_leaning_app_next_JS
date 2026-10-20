import LinkedText from './LinkedText';

// Numbered step-by-step customer journey. A step may carry an optional `link` ({ text, href }).
// `columns` lets pages with longer step text use fewer, wider columns.
const ProcessSteps = ({ steps, columns = 'lg:grid-cols-5' }) => (
  <ol className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-6`}>
    {steps.map((step, index) => (
      <li key={step.title} className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mb-4">
          {index + 1}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          <LinkedText text={step.text} link={step.link} />
        </p>
      </li>
    ))}
  </ol>
);

export default ProcessSteps;
