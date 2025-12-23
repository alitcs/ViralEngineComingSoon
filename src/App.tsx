import logoUrl from "./assets/logo.png";
import { Countdown } from "./Countdown";

function App() {
  return (
    <div className="App">
      <div className="timer">
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
          <div className="w-full max-w-xl flex flex-col items-center gap-6 p-8">
            <img
              src={logoUrl}
              alt="Viral Engine Logo"
              className="h-20 w-20 mb-2 rounded-full"
            />
            <h1 className="text-4xl sm:text-5xl font-semibold text-center">
              Viral Engine
            </h1>
            <p className="text-muted-foreground text-center">
              Performance-boosting video analytics
            </p>

            <Countdown target="2026-03-31T00:00:00" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
