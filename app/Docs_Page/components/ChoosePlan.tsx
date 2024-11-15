'use client';

import React, { useState } from 'react';

const monthlyPlans = [
  { name: 'Bronze', price: 3, features: ['3 Charging per day', '2 TPS', 'Integration with MA system', '2 Working days'] },
  { name: 'Silver', price: 7.5, features: ['8 Charging per day', '12 TPS', 'Integration with MA system', '2 working days'] },
  { name: 'Gold', price: 10, features: ['Unlimited Charging', '100 TPS', 'Integration with MA System', 'Working days support', 'Unlimited Products', 'Stable SMS auto reply'] },
  { name: 'Premium', price: 20, features: ['Unlimited Charging', 'Unlimited TPS', 'Integration with MA System', '24/7 Support', 'Unlimited Products', 'Stable SMS auto reply'] },
];

const yearlyPlans = monthlyPlans.map(plan => ({ ...plan, price: plan.price * 12 - plan.price * 2 })); // e.g., a 2-month discount for yearly plans

const ChoosePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('Gold');
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const handleClick = (planName: string) => {
    setSelectedPlan(planName);
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  const plans = billingCycle === 'monthly' ? monthlyPlans : yearlyPlans;

  return (
    <section className="bg-white p-6 sm:p-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D121F]">Ready to Get Started?</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-2">Choose a plan that suits your business needs</p>
      </div>

      {/* Toggle for Monthly/Yearly billing cycle */}
      <div className="flex justify-center items-center mb-8">
        <span className={`text-base sm:text-lg font-semibold ${billingCycle === 'monthly' ? 'text-green-500' : 'text-gray-500'}`}>
          Monthly
        </span>
        <button
          onClick={toggleBillingCycle}
          className={`mx-4 bg-[#37AE37] rounded-full p-1 flex ${billingCycle === 'yearly' ? 'justify-end' : 'justify-start'}`}
          style={{ width: '60px' }}
        >
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </button>
        <span className={`text-base sm:text-lg font-semibold ${billingCycle === 'yearly' ? 'text-green-500' : 'text-gray-500'}`}>
          Yearly
        </span>
      </div>

      {/* Plan Cards */}
      <div className="flex flex-col sm:flex-row sm:justify-around space-y-4 sm:space-y-0 sm:space-x-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => handleClick(plan.name)}
            className={`cursor-pointer p-6 sm:p-12 border rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out ${
              selectedPlan === plan.name
                ? 'scale-100 z-10 border-4 border-green-500'
                : 'scale-90'
            } h-96 sm:h-auto`} // Added height for small screens (h-96) and kept auto for larger screens
            style={{ margin: selectedPlan === plan.name ? '0' : '0 8px' }}
          >
            <h3 className="text-[#18181B] font-[Inter] text-[18px] sm:text-[20px] font-bold leading-[23px]">{plan.name}</h3>
            <p className="text-[#18181B] font-[Inter] text-[24px] sm:text-[32px] font-bold leading-[36.8px] custom-leading-trim">
              ${plan.price}K/{billingCycle}
            </p>

            <button className="mt-4 sm:mt-6 px-8 sm:px-12 py-2 bg-[#37AE37] rounded-3xl text-white font-[Inter] text-[14px] sm:text-[16px] font-semibold leading-[18.4px]">
              Get Started
            </button>
            <div className="mt-6 sm:mt-8">
              <h4 className="text-sm sm:text-[16px] font-semibold text-center text-[#18181B] font-[Inter] leading-[18.4px]">What You Get</h4>
              <ul className="list-disc pl-6 mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center  text-[14] sm:text-[16px] text-[#18181B] font-[Inter] sm:font-semibold leading-[18.4px] mt-2 ">
                    <span className="mr-5 text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChoosePlan;
