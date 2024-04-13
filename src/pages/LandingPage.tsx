import { animated, useScroll } from 'react-spring';
import ActionButton from '../components/common/ActionButton';
import SeparationLine from '../components/common/SeparationLine';
import LandingTitle from '../components/LandingPage/LandingTitle';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const mainRef = useRef<HTMLElement>(null!);
  const { scrollY } = useScroll({ container: mainRef, default: { immediate: true } });
  const navigate = useNavigate();

  return (
    <main
      ref={mainRef}
      className="scrollbar-hidden size-full snap-y snap-mandatory overflow-y-scroll"
    >
      <header className="flex h-[80dvh] snap-center flex-col justify-end overflow-hidden [background:radial-gradient(farthest-side_at_50%_0,#64e6b622,transparent)]">
        <animated.div
          style={{
            height: scrollY.to((value) => `calc(80dvh - ${value}px)`),
            opacity: scrollY.to((value) => {
              const start = 0.2 * window.innerHeight;
              const end = 0.4 * window.innerHeight;
              if (value > start) return 1 - (value - start) / (end - start);
              else return 1;
            }),
          }}
          className="flex h-[80dvh] flex-col items-center justify-center"
        >
          <LandingTitle>Артерия</LandingTitle>
          <h2 className="bg-gradient-green mb-8 bg-clip-text text-center text-3xl font-bold">
            Твой товар – твои правила
          </h2>
          <ActionButton onClick={() => navigate('/feed')}>Поехали</ActionButton>
        </animated.div>
      </header>

      <SeparationLine />

      <div className="mt-6 flex snap-center flex-col px-[12%]">
        <img src="/landing-screen-1.png" className="self-center px-[12%]" />
        <p className="px-[12%] py-10 text-center text-2xl font-bold">
          Огромный выбор товаров и тысячи поставщиков. Здесь найдётся всё: начиная с бытовой техники
          и заканчивая автомобилями
        </p>
      </div>

      <SeparationLine />

      <div className="mt-6 flex snap-center flex-col px-[12%]">
        <img src="/landing-screen-2.png" className="self-center px-[12%]" />
        <p className="px-[12%] py-10 text-center text-2xl font-bold">
          Доставим товар так, как Вам захочется. У нас вы можете легко выбрать склад, маршрут и
          стоимость доставки
        </p>
      </div>

      <div className="mb-20 mt-6 flex snap-center flex-col items-center px-[12%]">
        <div className="flex w-1/2 flex-col">
          <ActionButton onClick={() => navigate('/feed')}>Поехали</ActionButton>
        </div>
      </div>
    </main>
  );
};
export default LandingPage;
