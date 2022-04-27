import { icons } from "../../../../utils/icons";
function PanelHeader() {
  return (
    <section className="bg-lightPurple">
      <div className="flex justify-between p-3 font-lobster px-6">
        <div className="flex basis-[20%] items-center justify-between">
          <a href="" className="font-bold text-2xl ">
            <span>Foodieland.</span>
          </a>
          <span>{icons.radioButtonChecked()}</span>
        </div>
        <div className="flex items-center basis-[80%] justify-end">
          <span>{icons.NotificationBell()}</span>
          <div className="ml-4 relative">
            <img src="./images/panel/Avatar.png" alt="avatar" />
            <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelHeader;
