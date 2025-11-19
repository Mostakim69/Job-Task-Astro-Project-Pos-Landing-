import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, CheckCircle2, Zap, Package } from "lucide-react";

export default function Stats() {
  const primaryLight = "bg-blue-50";
  const primaryText = "text-blue-600";

  const stats = [
    { icon: Users, value: 1000, label: "Businesses Served", suffix: "+" },
    {
      icon: CheckCircle2,
      value: 500000,
      label: "Transactions Processed",
      suffix: "+",
    },
    { icon: Zap, value: 99.9, label: "Uptime", suffix: "%" },
    { icon: Package, value: 1200, label: "Products Delivered", suffix: "+" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              stat={stat}
              index={i}
              primaryLight={primaryLight}
              primaryText={primaryText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, primaryLight, primaryText }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = progress * end;
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      className={`${primaryLight} rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all`}
    >
      <stat.icon className={`w-10 h-10 ${primaryText} mx-auto mb-3`} />
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {stat.value > 1000
          ? Math.floor(count).toLocaleString()
          : count.toFixed(1)}
        {stat.suffix}
      </h3>
      <p className="mt-1 text-gray-600 text-sm md:text-base font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
}
