import {
  LucideSunset,
  LucideSunrise,
  SunsetIcon,
  SunriseIcon,
} from "lucide-react";
import sun from "../assets/images/sun.gif"

const SunCycle = ({ weather }) => {
  const sunrise = weather?.sys?.sunrise * 1000;
  const sunset = weather?.sys?.sunset * 1000;
  const now = Date.now();

  let progress = 0;

  if (sunrise && sunset) {
    progress = ((now - sunrise) / (sunset - sunrise)) * 100;
    progress = Math.min(Math.max(progress, 0), 100);
  }

  const formatTime = (timestamp) => {
    if (!timestamp) return "--";
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Convert % → 0 to 1
  const t = progress / 100;

  // Curve points
  const startX = 0;
  const endX = 300;
  const peakY = 80;

  const x = startX + (endX - startX) * t;

  // Quadratic curve formula
  const y = peakY - 4 * peakY * t * (1 - t);

  return (
    <div className="mt-6 rounded-xl hover:bg-gray-100 transition">
      <h3 className="text-sm text-gray-500 mb-3">Sun Cycle</h3>

      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <div className="flex gap-2">
          <SunriseIcon size={20} />
          {"Sunrise: "}
          <span>{formatTime(weather?.sys?.sunrise)}</span>
        </div>
        <div className="flex gap-2">
          <SunsetIcon size={20} />{" "}
          <span>{formatTime(weather?.sys?.sunset)}</span>
        </div>
      </div>

      <div className="relative w-full h-28  rounded-xl overflow-hidden">
        {/* SVG Curve */}
        <svg viewBox="0 0 300 100" className="absolute w-full h-full">
          <path
            d="M 0 80 Q 150 0 300 80"
            stroke="#facc15"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Sun */}
        <svg viewBox="0 0 300 100" className="absolute w-full h-full">
          {/* Curve */}
          <path
            id="sunPath"
            d="M 0 80 Q 150 0 300 80"
            stroke="#facc15"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="5,5"
          />

          {/* Sun moving on curve */}
          <text fontSize="20">
            {/* 🌞 */}
            <img 
            src={sun}
            alt="sun" 
           />
            <animateMotion
              dur="10s"
              repeatCount="1"
              fill="freeze"
              path="M 0 80 Q 150 0 300 80"
              keyPoints={`${progress / 100};${progress / 100}`}
              keyTimes="0;1"
            />
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SunCycle;
