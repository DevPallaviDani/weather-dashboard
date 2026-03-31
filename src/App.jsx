import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import { useLocation } from "./hooks/useLocation";
import { useWeather } from "./hooks/useWeather";

function App() {
  const location = useLocation();
  const {
    weather,
    foreCast,
    weeklyForeCast,
    loading,
    city,
    error,
    handleSearch,
    handleUseLocation,
  } = useWeather(location);
  const weatherData = {
    weather,
    foreCast,
    weeklyForeCast,
    loading,
    city,
    error,
  };
  return (
    <>
      {location ? (
        <div
          className="flex flex-row  dark:text-gray-400
             bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)]
             dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]"
        >
          <NavBar
            onSearch={handleSearch}
            onUseLocation={handleUseLocation}
            error={error}
            loading={loading}
          />

          <main
            className=" mt-[60px] sm:mt-[80px] md:mt-[70px] lg:mt-[100px] 
             w-full transition-all duration-700"
          >
            <Dashboard {...weatherData} />
          </main>
        </div>
      ) : (
        <p>Fetching location....</p>
      )}
    </>
  );
}

export default App;
