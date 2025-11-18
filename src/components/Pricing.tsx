import { Check } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Starter",
    description: "For small cafes & shops",
    price: "29",
    features: ["1 Location", "Basic Reporting", "Inventory Management"],
    buttonText: "Choose Plan",
  },
  {
    name: "Growth",
    popular: true,
    description: "For established businesses",
    price: "79",
    features: [
      "Up to 3 Locations",
      "Advanced Reporting",
      "Customer Loyalty",
      "3rd Party Integrations",
    ],
    buttonText: "Choose Plan",
  },
  {
    name: "Enterprise",
    description: "For chains & custom needs",
    price: "Custom",
    features: [
      "Unlimited Locations",
      "Dedicated Account Manager",
      "API Access",
      "Custom Features",
    ],
    buttonText: "Contact Us",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">
            Choose the plan that’s right for your business.
          </p>
        </motion.div>

        {/* Pricing Cards – সুপার রেসপন্সিভ */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:gap-6 lg:gap-8 max-w-lg sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex justify-center"
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`
                  w-full 
                  max-w-md 
                  sm:max-w-none 
                  bg-white 
                  rounded-2xl 
                  px-6 py-8 sm:px-8 sm:py-10 
                  ${
                    plan.popular
                      ? "ring-2 ring-blue-600 ring-offset-2 shadow-2xl"
                      : "shadow-xl border border-gray-100"
                  }
                  relative
                `}
              >
                {/* Mobile-এ ব্যাজ */}
                {plan.popular && (
                  <div className="sm:hidden mb-4 text-center">
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 sm:mt-8">
                    {plan.price === "Custom" ? (
                      <p className="text-4xl font-extrabold text-gray-900">
                        Custom
                      </p>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-extrabold text-gray-900">
                          ${plan.price}
                        </span>
                        <span className="ml-1 text-xl text-gray-500">/mo</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-3 text-sm sm:text-base text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`
                      mt-8 w-full py-3.5 cursor-pointer sm:py-4 rounded-xl font-semibold transition-all
                      ${
                        plan.popular
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                          : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
                      }
                    `}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
