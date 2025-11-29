import { useEffect, useState } from "react";

type TimeLeft = {
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(target: Date): TimeLeft {
  const now = new Date().getTime();
  let diff = Math.max(0, Math.floor((target.getTime() - now) / 1000)); // in seconds

  const seconds = diff % 60;
  diff = Math.floor(diff / 60);

  const minutes = diff % 60;
  diff = Math.floor(diff / 60);

  const hours = diff % 24;
  diff = Math.floor(diff / 24);

  const daysTotal = diff;
  const weeks = daysTotal >= 7 ? Math.floor(daysTotal / 7) : 0;
  const days = daysTotal % 7;

  // Approximate months as 4 weeks
  const months = weeks >= 4 ? Math.floor(weeks / 4) : 0;
  const adjustedWeeks = weeks % 4;

  return {
    months,
    weeks: adjustedWeeks,
    days,
    hours,
    minutes,
    seconds,
  };
}

type CountdownProps = {
  // Example: "2025-12-31T00:00:00"
  target: string;
};

export function Countdown({ target }: CountdownProps) {
  const targetDate = new Date(target);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  const isOver =
    timeLeft.months === 0 &&
    timeLeft.weeks === 0 &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isOver) {
    return (
      <div className="text-center text-lg font-semibold">We are live.</div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {[
          { label: "Months", value: timeLeft.months },
          { label: "Weeks", value: timeLeft.weeks },
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center rounded-xl bg-card/60 border border-card-border px-3 py-2 shadow-sm"
          >
            <span className="text-2xl font-semibold tabular-nums">
              {item.value.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xl text-muted-foreground">Until Beta</p>
    </div>
  );
}
