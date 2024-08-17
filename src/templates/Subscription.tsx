import React from 'react';

import { prices } from '@/utils/prices';

const SubscriptionPage: React.FC = () => {
  return (
    <div id="pricing" className="grid grid-cols-4 gap-8 bg-white p-16 ">
      {prices.map((p, index) => (
        <div
          key={p.id}
          className={`relative flex flex-col justify-between rounded-[5px] p-6 ${
            index === prices.length - 2
              ? 'border-[4px] border-black shadow-lg'
              : 'border-[2px] border-black shadow-sm'
          }
            ${
              index === prices.length - 1
                ? 'bg-black text-white shadow-lg'
                : 'border-[2px] border-black shadow-sm'
            }`}
        >
          {p.name && (
            <div
              className={`absolute left-1/2 top-[-16px] w-full -translate-x-1/2 text-center`}
            >
              <span
                className={`rounded-[5px] p-2 px-8 text-[16px]  font-medium ${
                  index === prices.length - 1
                    ? 'border-[1px] border-primary-500 bg-black text-[#fff]'
                    : 'bg-black text-white '
                }`}
              >
                {p.name}
              </span>
            </div>
          )}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 pt-4">
              <h2
                className={`text-center text-[40px] font-bold ${
                  index === prices.length - 1 ? 'text-white' : 'text-black '
                }`}
              >
                {p.price} <span className="text-[14px]">{p.frequency}</span>
              </h2>
              <p
                className={`text-center text-[24px] font-semibold ${
                  index === prices.length - 1 ? 'text-white' : 'text-black '
                }`}
              >
                {p.fiche} fiches
              </p>
            </div>
            <ul className="flex flex-col gap-6">
              {p.list.map((item, idx) => (
                <li key={idx} className="flex flex-row gap-2 text-[14px]">
                  <svg
                    className={`h-5 w-5 shrink-0 dark:text-green-400 ${
                      index === prices.length - 1 ? 'text-white' : 'text-white '
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`mt-5 rounded-lg px-4 py-2 font-semibold md:w-[40%] ${
              index === prices.length - 1
                ? 'bg-white text-black'
                : 'bg-black text-white'
            }`}
            onClick={() => {
              // handlePurchaseClick({
              //   subscriptionLength: p.selectedLength,
              //   paymentType: 'SUBSCRIPTION',
              // });
            }}
          >
            Acheter
          </button>
        </div>
      ))}
    </div>
  );
};

export { SubscriptionPage };
