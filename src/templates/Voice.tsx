import Link from 'next/link';
import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

const VoicePage: React.FC = () => {
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

        <div className="flex w-full flex-col gap-8 rounded-[5px] bg-white p-8 shadow-md">
          <div>
            <p className="mb-8 text-start text-[14px] font-semibold text-black">
              Choisir la voix :
            </p>
            <div className="h-[200px] w-[100%]">
              <div className="flex flex-row items-center gap-10">
                <button className="flex flex-row items-center gap-3 rounded-[5px] bg-gray px-6 py-1 text-black">
                  <FiPlayCircle />
                  <p className="font-semibold">Voix 1</p>
                </button>

                <button className="flex flex-row items-center gap-3 rounded-[5px] bg-gray px-6 py-1 text-black">
                  <FiPlayCircle />
                  <p className="font-semibold">Voix 1</p>
                </button>

                <button className="flex flex-row items-center gap-3 rounded-[5px] bg-gray px-6 py-1 text-black">
                  <FiPlayCircle />
                  <p className="font-semibold">Voix 1</p>
                </button>

                <button className="flex flex-row items-center gap-3 rounded-[5px] bg-gray px-6 py-1 text-black">
                  <FiPlayCircle />
                  <p className="font-semibold">Voix 1</p>
                </button>

                <button className="flex flex-row items-center gap-3 rounded-[5px] bg-gray px-6 py-1 text-black">
                  <FiPlayCircle />
                  <p className="font-semibold">Voix 1</p>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-8">
            <button className="w-[50%] rounded-[10px] bg-black p-2 text-white">
              Regenerer le texte ( 2 essaie )
            </button>
            <button className="w-[50%] rounded-[10px] bg-black p-2 text-white">
              <Link href="/result">Continuer</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VoicePage };
