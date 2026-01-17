import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Activity, ChevronUp, ChevronDown, MapPin, Thermometer, AlertTriangle, Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const getAQIColor = (aqi) => {
  if (aqi <= 50) return 'text-green-400';
  if (aqi <= 100) return 'text-yellow-400';
  if (aqi <= 150) return 'text-orange-400';
  if (aqi <= 200) return 'text-red-400';
  if (aqi <= 300) return 'text-purple-400';
  return 'text-rose-400';
};

const getAQIBackground = (aqi) => {
  if (aqi <= 50) return 'from-green-500/20 to-green-600/10';
  if (aqi <= 100) return 'from-yellow-500/20 to-yellow-600/10';
  if (aqi <= 150) return 'from-orange-500/20 to-orange-600/10';
  if (aqi <= 200) return 'from-red-500/20 to-red-600/10';
  if (aqi <= 300) return 'from-purple-500/20 to-purple-600/10';
  return 'from-rose-500/20 to-rose-600/10';
};

export default function AirQualityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const [healthRisk, setHealthRisk] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && !forecastData) {
      fetchAirQuality();
    }
  }, [isOpen]);

  const fetchAirQuality = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Get user's location
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      // Mock data for demonstration - replace with actual API calls
      const mockData = {
        current: {
          aqi: Math.floor(Math.random() * 200) + 1,
          category: 'Moderate',
          dominantPollutant: 'PM2.5',
          pollutants: {
            pm25: 35.2,
            pm10: 45.8,
            o3: 28.4,
            no2: 22.1,
            so2: 12.5,
            co: 0.8
          }
        },
        hourly: Array.from({ length: 24 }, (_, i) => ({
          time: `${i}:00`,
          aqi: Math.floor(Math.random() * 150) + 1,
          category: 'Good'
        })),
        location: {
          city: 'Houston',
          country: 'United States'
        }
      };

      const mockHealthRisk = {
        analysis: {
          riskScore: 65,
          riskLevel: 'Moderate',
          recommendations: [
            'Consider reducing prolonged outdoor activities',
            'Sensitive groups should limit outdoor exposure',
            'Keep windows closed during peak pollution hours'
          ]
        }
      };

      setForecastData(mockData);
      setHealthRisk(mockHealthRisk);
    } catch (err) {
      setError('Unable to fetch air quality data. Please enable location access.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-16 h-16 rounded-full",
          "bg-gradient-to-br from-blue-600 to-blue-700",
          "shadow-lg hover:shadow-xl",
          "flex items-center justify-center",
          "transition-all duration-300",
          "border-2 border-blue-400/50"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Wind className="w-8 h-8 text-white" />
      </motion.button>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className={cn(
                "fixed bottom-6 right-6 z-50",
                "w-[400px] max-h-[600px]",
                "bg-gray-950 border-2 border-blue-400",
                "rounded-xl overflow-hidden",
                "shadow-2xl"
              )}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wind className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-black text-white uppercase">Air Quality</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[500px]">
                {loading && (
                  <div className="text-center py-12">
                    <div className="animate-spin w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4" />
                    <p className="text-gray-400">Loading air quality data...</p>
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {forecastData && !loading && (
                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {forecastData.location.city}, {forecastData.location.country}
                      </span>
                    </div>

                    {/* Current AQI */}
                    <div className={cn(
                      "bg-gradient-to-br rounded-lg p-6",
                      getAQIBackground(forecastData.current.aqi)
                    )}>
                      <div className="text-center">
                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Current AQI</p>
                        <p className={cn(
                          "text-6xl font-black mb-2",
                          getAQIColor(forecastData.current.aqi)
                        )}>
                          {forecastData.current.aqi}
                        </p>
                        <p className="text-sm font-bold text-white uppercase">
                          {forecastData.current.category}
                        </p>
                      </div>
                    </div>

                    {/* Pollutants */}
                    <div>
                      <h4 className="text-sm font-black text-yellow-400 uppercase mb-3">
                        Pollutant Levels
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(forecastData.current.pollutants).map(([key, value]) => (
                          <div key={key} className="bg-gray-900 border border-gray-800 rounded p-3">
                            <p className="text-xs text-gray-500 uppercase mb-1">{key}</p>
                            <p className="text-lg font-bold text-white">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Health Recommendations */}
                    {healthRisk && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Heart className="w-4 h-4 text-red-400" />
                          <h4 className="text-sm font-black text-yellow-400 uppercase">
                            Health Impact
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {healthRisk.analysis.recommendations.map((rec, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-yellow-400 mt-1">•</span>
                              <span>{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hourly Forecast Preview */}
                    <div>
                      <h4 className="text-sm font-black text-yellow-400 uppercase mb-3">
                        24-Hour Forecast
                      </h4>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {forecastData.hourly.slice(0, 8).map((hour, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-900 border border-gray-800 rounded p-2 min-w-[60px] text-center"
                          >
                            <p className="text-xs text-gray-500 mb-1">{hour.time}</p>
                            <p className={cn("text-sm font-bold", getAQIColor(hour.aqi))}>
                              {hour.aqi}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Link to EnviroCast */}
                    <a
                      href="https://www.envirocast.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 rounded transition-colors uppercase text-sm"
                    >
                      View Full Report on EnviroCast
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
