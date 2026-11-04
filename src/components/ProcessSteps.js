import LinkedText from './LinkedText';

// Numbered step-by-step customer journey. A step may carry an optional `link` ({ text, href }).
// `columns` lets pages with longer step text use fewer, wider columns.
const ProcessSteps = ({ steps, columns = 'lg:grid-cols-5' }) => (
  <ol className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-6`}>
    {steps.map((step, index) => (
      <li key={step.title} className="relative bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-900 text-gold-300 font-display font-bold text-xl mb-5 ring-4 ring-gold-100">
          {index + 1}
        </span>
        <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          <LinkedText text={step.text} link={step.link} />
        </p>
      </li>
    ))}
  </ol>
);

export default ProcessSteps;
