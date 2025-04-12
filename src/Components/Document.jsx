import React from 'react';
import { FaHospital } from 'react-icons/fa';

const Document = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full py-8 px-4 bg-gray-50 min-h-screen pt-25"> 
            {/* Header - Matching your gallery style */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                    <FaHospital className="text-[#727B4E] text-4xl mr-3" />
                </div>
                <h1 className="text-4xl font-bold text-[#727B4E] tracking-wide uppercase mb-2">
                    TRUST LEGAL DETAILS
                </h1>
                <div className="w-24 h-1 bg-[#A48B4B] mx-auto"></div>
            </div>

            {/* Documents Table */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#727B4E] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">NO.</th>
                                <th className="py-3 px-4 text-left">CERTIFICATES</th>
                                <th className="py-3 px-4 text-left">NUMBER</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">1</td>
                                <td className="py-4 px-4">TRUST REGISTRATION</td>
                                <td className="py-4 px-4 font-mono">E/6940/SURAT</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">2</td>
                                <td className="py-4 px-4">PAN NUMBER</td>
                                <td className="py-4 px-4 font-mono">AAJTS1872R</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">3</td>
                                <td className="py-4 px-4">80G</td>
                                <td className="py-4 px-4 font-mono">AAJTS1872RF20214</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">4</td>
                                <td className="py-4 px-4">12AA</td>
                                <td className="py-4 px-4 font-mono">AAJTS1872RE20214</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">5</td>
                                <td className="py-4 px-4">CSR</td>
                                <td className="py-4 px-4 font-mono">CSR00003910</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">6</td>
                                <td className="py-4 px-4">NITI AAYOG</td>
                                <td className="py-4 px-4 font-mono">GJ/2019/0242579</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">7</td>
                                <td className="py-4 px-4">FCRA</td>
                                <td className="py-4 px-4 font-mono">042100215</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-6 border-t border-gray-200">
                <p className="text-gray-600">
                    © Copyright {currentYear}. All Rights Reserved | Designed by Omprakash & Niraj
                </p>
            </footer>
        </div>
    );
};

export default Document;