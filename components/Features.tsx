import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { FEATURES, PERFORMANCE_DATA } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Text Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
            Why Choose Our Panels?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-2">
            Experience the perfect blend of functionality and style.
          </p>
          <p className="text-gray-500 font-medium">
            ለምን የእኛን ምርት ይመርጣሉ?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="w-14 h-14 bg-luxury-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title.en}</h3>
                <h4 className="text-md text-gold-600 mb-3">{feature.title.am}</h4>
                <p className="text-gray-600 text-sm mb-2">{feature.description.en}</p>
                <p className="text-gray-500 text-sm font-amharic">{feature.description.am}</p>
              </div>
            );
          })}
        </div>

        {/* Data Visualization */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <h3 className="text-2xl font-bold text-luxury-dark mb-4">
                Performance Comparison
              </h3>
              <p className="text-gray-600 mb-6">
                See how our 3D High Panels compare to standard painted walls in terms of durability, sound dampening, and overall value.
              </p>
               <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gold-500"></span>
                    <span className="text-gray-700"><strong>98%</strong> Aesthetic Improvement</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gold-500"></span>
                    <span className="text-gray-700"><strong>85%</strong> Noise Reduction</span>
                </li>
               </ul>
            </div>
            
            <div className="w-full lg:w-2/3 h-[300px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={PERFORMANCE_DATA}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                  <Tooltip 
                    cursor={{fill: '#f3f4f6'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Bar dataKey="value" name="High 3D Panels" fill="#f59e0b" radius={[6, 6, 0, 0]} barSize={40} />
                  <Bar dataKey="comparison" name="Standard Wall" fill="#94a3b8" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;