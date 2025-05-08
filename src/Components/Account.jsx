import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FaHospital, FaFlask, FaXRay, FaProcedures, FaChartLine, FaRupeeSign } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Color scheme
const primaryColor = "#C4A65E";
const colors = {
  healthcare: "#C4A65E",
  lab: "#7C3AED",
  sonography: "#10B981",
  xray: "#F59E0B",
  other: "#6B7280"
};

const medicalData = [
  {
    name: "Healthcare",
    patients: 95312,
    guruLabh: 11953,
    reportLabh: 2376196,
    icon: <FaHospital className="text-xl" />,
    color: colors.healthcare
  },
  {
    name: "Lab",
    patients: 70854,
    guruLabh: 6342,
    reportLabh: 4992119,
    icon: <FaFlask className="text-xl" />,
    color: colors.lab
  },
  {
    name: "Sonography",
    patients: 2660,
    guruLabh: 319,
    reportLabh: 175650,
    icon: <FaProcedures className="text-xl" />,
    color: colors.sonography
  },
  {
    name: "X-Ray",
    patients: 2873,
    guruLabh: 163,
    reportLabh: 72400,
    icon: <FaXRay className="text-xl" />,
    color: colors.xray
  },
  {
    name: "Other",
    patients: 0,
    guruLabh: 0,
    reportLabh: 2295926,
    icon: <FaChartLine className="text-xl" />,
    color: colors.other
  },
];

const CountUpAnimation = ({ value, duration = 2000, prefix = "", suffix = "", startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let start = 0;
    const end = value;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 16.67)); // 60fps
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16.67);

    return () => clearInterval(timer);
  }, [value, duration, startCounting]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const MedicalReport = () => {
  const [activeMetric, setActiveMetric] = useState("patients");
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const metricLabels = {
    patients: "દર્દીઓ",
    guruLabh: "ગુરુ લાભ",
    reportLabh: "રીપોર્ટ લાભ"
  };

  const formatValue = (value) => {
    if (activeMetric === "reportLabh") {
      return `₹ ${value.toLocaleString()}`;
    }
    return value.toLocaleString();
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <span style={{ color: data.color }}>{data.icon}</span>
            <span className="ml-2 font-bold">{data.name}</span>
          </div>
          <p className="text-sm">
            {metricLabels[activeMetric]}: <strong>{formatValue(payload[0].value)}</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto p-4" ref={componentRef}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: "#B08C36" }}>
          ટ્રસ્ટ દ્વારા મેડીકલ ક્ષેત્રે કરવામાં આવેલ કાર્યોની એક ઝાંખી
        </h2>
        <p className="text-gray-600">July 2024 સુધીની માહિતી</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            title: "Total Revenue",
            value: 200056396,
            description: "Medical Department",
            color: "from-[#C4A65E] to-[#B08C36]",
            prefix: "₹ "
          },
          {
            title: "Total Discount",
            value: 51455237,
            description: "Patient Benefits",
            color: "from-[#7C3AED] to-[#5B21B6]",
            prefix: "₹ "
          },
          {
            title: "Vaiyavach",
            value: 14540218,
            description: "Community Service",
            color: "from-[#10B981] to-[#059669]",
            prefix: "₹ "
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`bg-gradient-to-r ${card.color} rounded-xl shadow-lg p-6 text-white`}
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-3xl font-bold">
              <CountUpAnimation
                value={card.value}
                prefix={card.prefix}
                duration={1500}
                startCounting={isVisible}
              />
            </p>
            <p className="opacity-90 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Column Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-8 border-t-4"
        style={{ borderColor: primaryColor }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0">
            વૈયાવચ્ય ક્ષેત્રની વિગતો
          </h3>
          <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
            {Object.keys(metricLabels).map((metric) => (
              <button
                key={metric}
                onClick={() => setActiveMetric(metric)}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${activeMetric === metric
                    ? "bg-white shadow text-gray-800"
                    : "text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {metricLabels[metric]}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={medicalData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              layout="horizontal"
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={({ payload, x, y, index }) => (
                  <g transform={`translate(${x},${y})`}>
                    <foreignObject width={100} height={40} x={-50} y={10}>
                      <div className="flex flex-col items-center">
                        <span style={{ color: medicalData[index].color }}>
                          {medicalData[index].icon}
                        </span>
                        <span className="text-xs mt-1">{payload.value}</span>
                      </div>
                    </foreignObject>
                  </g>
                )}
              />
              <YAxis
                tickFormatter={(value) => value.toLocaleString()}
                width={80}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey={activeMetric}
                name={metricLabels[activeMetric]}
                barSize={40}
                label={{
                  position: "top",
                  formatter: (value) => activeMetric === "reportLabh" ? `₹ ${value.toLocaleString()}` : value.toLocaleString(),
                  fill: "#374151",
                  fontSize: 12,
                }}
              >
                {medicalData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    radius={[4, 4, 0, 0]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Department Details Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6 border-t-4"
        style={{ borderColor: primaryColor }}
      >
        <h3 className="text-xl font-bold mb-6" style={{ color: "#B08C36" }}>વિભાગવાર વિગતો</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  વિભાગ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  દર્દીઓ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ગુરુ લાભ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  રીપોર્ટ લાભ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {medicalData.map((item, index) => (
                <motion.tr
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <CountUpAnimation value={item.patients} duration={1500} startCounting={isVisible} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <CountUpAnimation value={item.guruLabh} duration={1500} startCounting={isVisible} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <FaRupeeSign className="inline mr-1" />
                      <CountUpAnimation value={item.reportLabh} duration={1500} startCounting={isVisible} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default MedicalReport;