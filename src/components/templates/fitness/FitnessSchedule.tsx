import ScrollReveal from "@/components/shared/ScrollReveal";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = ["6:00 AM", "9:00 AM", "12:00 PM", "5:00 PM", "7:00 PM"];

interface ClassSlot {
  name: string;
  featured?: boolean;
}

const schedule: Record<string, Record<string, ClassSlot>> = {
  "6:00 AM": {
    Mon: { name: "HIIT Burn", featured: true },
    Tue: { name: "Strength" },
    Wed: { name: "HIIT Burn", featured: true },
    Thu: { name: "Strength" },
    Fri: { name: "HIIT Burn", featured: true },
    Sat: { name: "Open Gym" },
  },
  "9:00 AM": {
    Mon: { name: "Yoga Flow" },
    Tue: { name: "Boxing" },
    Wed: { name: "Yoga Flow" },
    Thu: { name: "Boxing" },
    Fri: { name: "Mobility" },
    Sat: { name: "Boxing", featured: true },
  },
  "12:00 PM": {
    Mon: { name: "Express Lift" },
    Tue: { name: "Core Blast" },
    Wed: { name: "Express Lift" },
    Thu: { name: "Core Blast" },
    Fri: { name: "Express Lift" },
    Sat: { name: "Open Gym" },
  },
  "5:00 PM": {
    Mon: { name: "Boxing", featured: true },
    Tue: { name: "HIIT Burn", featured: true },
    Wed: { name: "Boxing", featured: true },
    Thu: { name: "HIIT Burn", featured: true },
    Fri: { name: "Strength" },
    Sat: { name: "Yoga Flow" },
  },
  "7:00 PM": {
    Mon: { name: "Strength" },
    Tue: { name: "Yoga Flow" },
    Wed: { name: "Strength" },
    Thu: { name: "Open Gym" },
    Fri: { name: "Fight Night", featured: true },
    Sat: { name: "—" },
  },
};

export default function FitnessSchedule() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-fitness-bg overflow-hidden">
      {/* Diagonal top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-fitness-surface"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 pt-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-oswald text-sm uppercase tracking-[0.3em] text-fitness-neon mb-3">
              Weekly Schedule
            </p>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white">
              Class Timetable
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[560px] border-collapse">
              <caption className="sr-only">Weekly class timetable — Monday through Saturday</caption>
              <thead>
                <tr>
                  <th className="font-oswald text-sm uppercase tracking-wider text-zinc-500 py-4 px-3 text-left border-b border-fitness-border">
                    Time
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="font-oswald text-sm uppercase tracking-wider text-white py-4 px-3 text-center border-b border-fitness-border"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {times.map((time) => (
                  <tr key={time} className="border-b border-fitness-border/50 hover:bg-fitness-surface/30 transition-colors">
                    <td className="font-oswald text-sm text-zinc-500 py-4 px-3 whitespace-nowrap">
                      {time}
                    </td>
                    {days.map((day) => {
                      const slot = schedule[time]?.[day];
                      return (
                        <td key={day} className="py-4 px-3 text-center">
                          {slot ? (
                            <span
                              className={`text-sm font-medium ${
                                slot.featured
                                  ? "text-fitness-neon font-oswald uppercase tracking-wide"
                                  : slot.name === "—"
                                  ? "text-zinc-600"
                                  : "text-zinc-300"
                              }`}
                            >
                              {slot.name}
                            </span>
                          ) : (
                            <span className="text-zinc-700">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
