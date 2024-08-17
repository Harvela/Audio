import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';

const Base = () => {
  return (
    <div className="text-gray-600 p-16 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
    </div>
  );
};

export { Base };
