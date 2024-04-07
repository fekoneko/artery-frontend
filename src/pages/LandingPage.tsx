import { animated, useScroll } from 'react-spring';
import LandingActionButton from '../components/LandingPage/LandingActionButton';
import LandingSeparationLine from '../components/LandingPage/LandingSeparationLine';
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
          <LandingActionButton onClick={() => navigate('/register')}>Поехали</LandingActionButton>
        </animated.div>
      </header>
      <LandingSeparationLine />

      <div className="snap-center">
        {[0, 0, 0, 0, 0].map((_, index) => (
          <p key={index} className="px-[12%] py-10 text-2xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo porro officiis quae ea nam
            voluptate magni veniam beatae architecto ex explicabo cum doloremque recusandae facere
            nostrum, obcaecati adipisci perspiciatis quis!
          </p>
        ))}
      </div>
    </main>
  );
};
export default LandingPage;
