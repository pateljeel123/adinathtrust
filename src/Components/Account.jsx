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
} from "recharts";

const medicalData = [
  {
    name: "Healthcare",
    patients: 95312,
    guruLabh: 11953,
    reportLabh: 2376196,
  },
  {
    name: "Lab",
    patients: 70854,
    guruLabh: 6342,
    reportLabh: 4992119,
  },
  {
    name: "Sonography",
    patients: 2660,
    guruLabh: 319,
    reportLabh: 175650,
  },
  {
    name: "X-Ray",
    patients: 2873,
    guruLabh: 163,
    reportLabh: 72400,
  },
  {
    name: "Other",
    patients: 0,
    guruLabh: 0,
    reportLabh: 2295926,
  },
];

const MedicalReport = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        ટ્રસ્ટ દ્વારા મેડીકલ ક્ષેત્રે કરવામાં આવેલ કાર્યોની એક ઝાંખી
      </h2>

      {/* Account Summary Table */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Account Summary (Up to July 2024)</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">વિભાગ</th>
                <th className="p-2 border">Total Sale</th>
                <th className="p-2 border">Total Discount</th>
                <th className="p-2 border">Vaiyavach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Medical</td>
                <td className="p-2 border">₹ 20,00,56,396</td>
                <td className="p-2 border">₹ 5,14,55,237</td>
                <td className="p-2 border">₹ 1,45,40,218</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4">વૈયાવચ્ય ક્ષેત્રની વિગતો (Chart View)</h3>

        <div className="w-full h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={medicalData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Legend />
              <Bar dataKey="patients" fill="#4F46E5" name="દર્દીઓ" />
              <Bar dataKey="guruLabh" fill="#10B981" name="ગુરુ લાભ" />
              <Bar dataKey="reportLabh" fill="#F59E0B" name="રીપોર્ટ લાભ" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
