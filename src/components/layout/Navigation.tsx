import { Link, useLocation } from 'react-router-dom';
import SeparationLine from '../common/SeparationLine';
import { animated, useSpring } from 'react-spring';
import { useMemo } from 'react';

interface Tab {
  title: string;
  link: string;
}
const tabs: Tab[] = [
  { title: 'Главная', link: '/feed' },
  { title: 'Корзина', link: '/cart' },
  { title: 'Профиль', link: '/profile' },
];

const Navigation = () => {
  const location = useLocation();
  const activeIndex = useMemo(
    () => tabs.findIndex((tab) => location.pathname.includes(tab.link, 0)),
    [location],
  );
  const selectorSpring = useSpring({
    left: `calc((100% + 0.5rem) / ${tabs.length} * ${activeIndex})`,
    width: `calc((100% + 0.5rem) / ${tabs.length} - 0.5rem)`,
  });

  return (
    <>
      <SeparationLine />
      <nav role="navigation" className="px-[12%] py-2">
        <div className="relative size-full">
          <ul
            style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
            className="grid size-full grid-flow-col gap-2"
          >
            {tabs.map((tab) => (
              <li key={tab.title} className="flex">
                <Link
                  to={tab.link}
                  className="flex h-10 grow items-center justify-center rounded-lg hover:bg-teal-100/[2.5%] hover:no-underline"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
          {activeIndex !== -1 && (
            <animated.div
              style={selectorSpring}
              className="pointer-events-none absolute top-0 h-10 rounded-lg bg-teal-100/5"
            />
          )}
        </div>
      </nav>
    </>
  );
};
export default Navigation;
