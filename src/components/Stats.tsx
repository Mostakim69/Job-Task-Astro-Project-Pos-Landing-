import React from 'react'
import { motion } from "framer-motion";
import {
  
  Users,
  CheckCircle2,
  Zap,
} from "lucide-react";

function Stats() {
      const primaryLight = "bg-blue-50";
      const primaryText = "text-blue-600";

      const stats = [
        { icon: Users, value: "10,000+", label: "Businesses Served" },
        { icon: CheckCircle2, value: "50M+", label: "Transactions Processed" },
        { icon: Zap, value: "99.9%", label: "Uptime" },
      ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className={`${primaryLight} rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl transition-shadow`}
            >
              <stat.icon className={`w-14 h-14 ${primaryText} mx-auto mb-4`} />
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                {stat.value}
              </h3>
              <p className="mt-3 text-gray-700 font-medium text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats
