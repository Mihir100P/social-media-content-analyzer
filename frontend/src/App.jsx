import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">📊 Social Media Content Analyzer</h1>
      <FileUpload />
    </div>
  );
}
export default App;
