import Link from 'next/link';
import React from 'react';

import Input from '@/components/input';

const PricingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-[60%] flex-col gap-16">
        <h2 className="text-start text-[24px] text-black">Pricing</h2>

        <form className="flex w-full flex-row gap-16 rounded-[5px] bg-white p-8 shadow-md">
          <div className="flex w-[50%] flex-col gap-2">
            <Input
              label="Je veux creer"
              placeholder={''}
              name={''}
              style="w-full"
            />
            <Input label="Je veux creer" placeholder={''} name={''} />
            <Input label="Je veux creer" placeholder={''} name={''} />
          </div>

          <div className="flex w-[50%] flex-col gap-2">
            <Input label="Je veux creer" placeholder={''} name={''} />
            <Input label="Je veux creer" placeholder={''} name={''} />
            <button className="rounded-[5px] bg-black px-8 py-2 text-white">
              <Link href="/text">Continuer</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PricingPage;
