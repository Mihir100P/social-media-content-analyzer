export default function Suggestions({ suggestions }) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="w-full mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">💡 Engagement Suggestions:</h3>
      <ul className="list-disc pl-5 text-green-700">
        {suggestions.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}
