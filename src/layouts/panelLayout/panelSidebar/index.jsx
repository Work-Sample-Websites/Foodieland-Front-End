import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './panel-sidebar.css';
import OptionCard from './optionCard';
import SidebarHeader from './sidebarHeader';

function PanelSidebar() {
  const [open, setOpen] = useState(true);
  const sidebarOptions = [
    {
      id: 1,
      option: 'posts',
      icon: 'lists',
      route: '/panel/posts',
    },
    {
      id: 2,
      option: 'New Post',
      icon: 'circlePlus',
      route: '/panel/newPost',
    },
    {
      id: 3,
      option: 'contact',
      icon: 'inbox',
      route: '/panel/contact',
    },
    {
      id: 4,
      option: 'statistic',
      icon: 'chart',
      route: '/panel/statistic',
    },
    {
      id: 5,
      option: 'settings',
      icon: 'gear',
      route: '/panel/settings',
    },
    {
      id: 6,
      option: 'exit account',
      icon: 'exit',
      route: '/',
    },
  ];

  return (
    <div>
      <SidebarHeader />
      <ul
        onClick={() => setOpen((prev) => !prev)}
        className={`cursor-pointer option-selected active justify-center h-[50px] my-4 items-center md:hidden  flex  flex-col ${
          open ? '' : ''
        }`}
      >
        <li
          className={`w-[30px] h-[5px] bg-white  rounded-md inline mb-1 transition-all ${
            open ? ' hidden rotate-90' : ''
          }`}
        ></li>
        <li
          className={`w-[30px] h-[5px] bg-white  rounded-md inline mb-1 transition-all	 ${
            open ? ' rotate-45  absolute' : ''
          }`}
        ></li>
        <li
          className={`w-[30px] h-[5px] bg-white  rounded-md inline mb-1  transition-all ${
            open ? ' rotate-135' : ''
          }`}
        ></li>
      </ul>

      <div className="overflow-hidden">
        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={open}
          timeout={200}
          classNames={{
            enter: '',
            enterActive: 'open-panel-sidebar',
            exit: '',
            exitActive: 'close-panel-sidebar',
          }}
        >
          <div>
            {sidebarOptions.map(({ route, id, option, icon }) => (
              <OptionCard
                key={id}
                option={option}
                id={id}
                icon={icon}
                route={route}
              />
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default PanelSidebar;
