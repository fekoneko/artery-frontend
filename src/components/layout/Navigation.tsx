import { Link, useLocation } from 'react-router-dom';
import SeparationLine from '../common/SeparationLine';
import { animated, useSpring } from 'react-spring';
import { useMemo } from 'react';

export interface NavigationTab {
  title: string;
  link: string;
}

interface NavigationProps {
  navigationTabs: NavigationTab[];
}
const Navigation = ({ navigationTabs }: NavigationProps) => {
  const location = useLocation();
  const activeIndex = useMemo(
    () => navigationTabs.findIndex((tab) => location.pathname.includes(tab.link, 0)),
    [location, navigationTabs],
  );
  const selectorSpring = useSpring({
    left: `calc((100% + 0.5rem) / ${navigationTabs.length} * ${activeIndex})`,
    width: `calc((100% + 0.5rem) / ${navigationTabs.length} - 0.5rem)`,
  });

  return (
    <>
      <SeparationLine />
      <nav role="navigation" className="px-[12%] py-2">
        <div className="relative size-full">
          <div className="pointer-events-none absolute left-0 top-[calc(-3rem-2px)] z-50 h-10 w-full bg-gradient-to-t from-slate-800/60" />

          <ul
            style={{ gridTemplateColumns: `repeat(${navigationTabs.length}, 1fr)` }}
            className="grid size-full grid-flow-col gap-2"
          >
            {navigationTabs.map((tab) => (
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
