import { useState } from "react";
import axios from "axios";
import TextDisplay from "./TextDisplay";
import Suggestions from "./Suggestion";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file.");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/analyze", formData);
      setResult(res.data);
    } catch (err) {
      alert("Error analyzing file. Check console for details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-center w-full max-w-2xl">
      <input
        type="file"
        accept=".pdf,image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleUpload}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {result && (
        <>
          <TextDisplay text={result.extractedText} />
          <Suggestions suggestions={result.suggestions} />
        </>
      )}
    </div>
  );
}
