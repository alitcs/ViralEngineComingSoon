import logoUrl from "./assets/logo.png";

function App() {
  return (
    <div className=" min-w-screen min-h-screen bg-background text-foreground flex items-center justify-center display-flex flex-col gap-4">
      <div className="flex flex-row items-center justify-center gap-10">
        <img
          src={logoUrl}
          alt="Viral Engine Logo"
          className="justify-content-center mb-8 h-32 w-32 animate-fade-in"
        />
        <div className="text-6xl font-semibold mb-6">Viral Engine</div>
      </div>
      <div className="text-xl">Coming Soon...</div>
    </div>
  );
}

export default App;
