import Link from 'next/link';
import React from 'react';

const TextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <div className="flex w-[60%] flex-col gap-16">
        <div>
          <p className="font-regular mb-2 text-start text-[16px] text-black">
            Welcome back
          </p>
          <h2 className="text-start text-[24px] font-semibold text-black">
            Murhula Metre
          </h2>
        </div>

        <form className="flex w-full flex-col gap-8 rounded-[5px] bg-white p-8 shadow-md">
          <div>
            <p className="mb-2 text-start text-[14px] font-semibold text-black">
              Text :
            </p>
            <textarea className="border-1 h-[300px] w-[100%] rounded-[10px] border-black" />
          </div>

          <div className="flex flex-row items-center justify-between gap-8">
            <button className="w-[50%] rounded-[10px] bg-black p-2 text-white">
              Regenerer le texte ( 2 essaie )
            </button>
            <button className="w-[50%] rounded-[10px] bg-black p-2 text-white">
              <Link href="/voice">Continuer</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { TextPage };
