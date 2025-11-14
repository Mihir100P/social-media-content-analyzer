export default function TextDisplay({ text }) {
  if (!text) return null;

  return (
    <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg shadow-sm text-left">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Extracted Text:</h3>
      <div className="whitespace-pre-wrap text-gray-800">{text}</div>
    </div>
  );
}
