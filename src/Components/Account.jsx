import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { FaHospital, FaFlask, FaXRay, FaProcedures, FaChartLine } from "react-icons/fa";

// Primary color
const primaryColor = "#C4A65E";
const primaryLight = "#D8C48A";
const primaryDark = "#B08C36";

const medicalData = [
  {
    name: "Healthcare",
    patients: 95312,
    guruLabh: 11953,
    reportLabh: 2376196,
    icon: <FaHospital className="text-xl" style={{ color: primaryColor }} />,
    color: primaryColor
  },
  {
    name: "Lab",
    patients: 70854,
    guruLabh: 6342,
    reportLabh: 4992119,
    icon: <FaFlask className="text-xl" style={{ color: "#7C3AED" }} />,
    color: "#7C3AED"
  },
  {
    name: "Sonography",
    patients: 2660,
    guruLabh: 319,
    reportLabh: 175650,
    icon: <FaProcedures className="text-xl" style={{ color: "#10B981" }} />,
    color: "#10B981"
  },
  {
    name: "X-Ray",
    patients: 2873,
    guruLabh: 163,
    reportLabh: 72400,
    icon: <FaXRay className="text-xl" style={{ color: "#F59E0B" }} />,
    color: "#F59E0B"
  },
  {
    name: "Other",
    patients: 0,
    guruLabh: 0,
    reportLabh: 2295926,
    icon: <FaChartLine className="text-xl" style={{ color: "#6B7280" }} />,
    color: "#6B7280"
  },
];

const MedicalReport = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: primaryDark }}>
          ટ્રસ્ટ દ્વારા મેડીકલ ક્ષેત્રે કરવામાં આવેલ કાર્યોની એક ઝાંખી
        </h2>
        <p className="text-gray-600">July 2024 સુધીની માહિતી</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-r from-[#C4A65E] to-[#B08C36] rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold">₹ 20,00,56,396</p>
          <p className="text-[#D8C48A] mt-2">Medical Department</p>
        </div>
        
        <div className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Total Discount</h3>
          <p className="text-3xl font-bold">₹ 5,14,55,237</p>
          <p className="text-purple-200 mt-2">Patient Benefits</p>
        </div>
        
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Vaiyavach</h3>
          <p className="text-3xl font-bold">₹ 1,45,40,218</p>
          <p className="text-green-200 mt-2">Community Service</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-xl p-6 mb-8" style={{ borderTop: `4px solid ${primaryColor}` }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0">
            વૈયાવચ્ય ક્ષેત્રની વિગતો
          </h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded-md text-sm" 
              style={{ backgroundColor: `${primaryLight}20`, color: primaryDark }}>
              Patients
            </button>
            <button className="px-3 py-1 rounded-md text-sm" 
              style={{ backgroundColor: `${primaryLight}20`, color: primaryDark }}>
              Guru Labh
            </button>
            <button className="px-3 py-1 rounded-md text-sm" 
              style={{ backgroundColor: `${primaryLight}20`, color: primaryDark }}>
              Report Labh
            </button>
          </div>
        </div>

        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={medicalData}
              margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={100}
                tick={({ payload, x, y, index }) => (
                  <g transform={`translate(${x},${y})`}>
                    <foreignObject width={100} height={30} x={-90} y={-15}>
                      <div className="flex items-center">
                        {medicalData[index].icon}
                        <span className="ml-2 text-sm">{payload.value}</span>
                      </div>
                    </foreignObject>
                  </g>
                )}
              />
              <Tooltip 
                formatter={(value) => value.toLocaleString()}
                contentStyle={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value) => (
                  <span className="text-gray-600 text-sm">{value}</span>
                )}
              />
              <Bar dataKey="patients" name="દર્દીઓ">
                {medicalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Details */}
      <div className="bg-white rounded-xl shadow-xl p-6" style={{ borderTop: `4px solid ${primaryColor}` }}>
        <h3 className="text-xl font-bold mb-6" style={{ color: primaryDark }}>વિભાગવાર વિગતો</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" 
                    style={{ color: primaryDark }}>
                  વિભાગ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" 
                    style={{ color: primaryDark }}>
                  દર્દીઓ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" 
                    style={{ color: primaryDark }}>
                  ગુરુ લાભ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" 
                    style={{ color: primaryDark }}>
                  રીપોર્ટ લાભ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {medicalData.map((item) => (
                <tr key={item.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
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
                      {item.patients.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.guruLabh.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ₹ {item.reportLabh.toLocaleString()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;