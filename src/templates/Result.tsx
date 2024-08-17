import React from 'react';
import { FaRegFrown, FaRegMeh, FaRegSmile } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const ResultPage: React.FC = () => {
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

        <div className="flex w-full flex-col gap-12 rounded-[5px] bg-white p-8 shadow-md">
          <div>
            <p className="mb-8 text-start text-[24px] font-semibold text-black">
              Merci d&apos;avoir essayer
            </p>
            <div className="w-[100%]">
              <div className="flex flex-col gap-10">
                <div className="flex flex-row items-center justify-between rounded-[5px] bg-gray px-6 py-3 text-black">
                  <div className="flex flex-row items-center gap-4 rounded-[5px] text-black">
                    <FiPlayCircle className="text-[24px]" />
                    <p className="text-[20px] font-semibold">Result 1</p>
                  </div>
                  <PiDownloadSimpleBold className="text-[24px]" />
                </div>

                <div className="flex flex-row items-center justify-between rounded-[5px] bg-gray px-6 py-3 text-black">
                  <div className="flex flex-row items-center gap-4 rounded-[5px] text-black">
                    <FiPlayCircle className="text-[24px]" />
                    <p className="text-[20px] font-semibold">Result 2</p>
                  </div>
                  <PiDownloadSimpleBold className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-8">
            <p className="text-[20px] font-semibold text-black">
              Comment trouvez-vous la qualite ?
            </p>
            <div className="flex flex-row items-center gap-8">
              <FaRegSmile className="text-[32px] text-[#0E9F90]" />
              <FaRegMeh className="text-[32px] text-[#6DAFA7]" />
              <FaRegFrown className="text-[32px] text-[#5e0802]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ResultPage };
