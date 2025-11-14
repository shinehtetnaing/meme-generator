import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-3 py-10">
      <div className="max-w-2xl overflow-hidden rounded-xl border border-gray-300">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
