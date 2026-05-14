import homeBIcon from '../../assets/homeBIcon.svg';
import homeGIcon from '../../assets/homeGIcon.svg';
import upIcon from '../../assets/upIcon.svg';
import cameraIcon from '../../assets/cameraIcon.svg';
import archiveIcon from '../../assets/archiveIcon.svg';
import profileIcon from '../../assets/profileIcon.svg';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-[83px] bg-white border-t border-[#E5E5E5] flex items-center justify-around pt-14px z-50 max-w-[390px] left-1/2 -translate-x-1/2 px-[16px]">
      <div className="flex flex items-center text-center h-[42px]">
        <div className="w-[72px] h-[42px] flex-shrink-0">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div>
              <img src={homeBIcon} alt="홈" className="w-[24px] h-[24px]" />
            </div>
            <div className="h-[16px pt-[5px]">
              <p className="text-center text-[10px]">홈</p>
            </div>
          </div>
        </div>

        <div className="w-[72px] h-[42px] flex-shrink-0">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div>
              <img src={upIcon} alt="비교" className="w-[24px] h-[24px]" />
            </div>
            <div className="h-[16px] pt-[5px]">
              <p className="text-center text-[10px] text-[#999999]">비교</p>
            </div>
          </div>
        </div>

        <div className="w-[72px] h-[42px] flex-shrink-0">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div>
              <img src={cameraIcon} alt="스캔" className="w-[24px] h-[24px]" />
            </div>
            <div className="h-[16px] pt-[5px]">
              <p className="text-center text-[10px] text-[#999999]">스캔</p>
            </div>
          </div>
        </div>

        <div className="w-[72px] h-[42px] flex-shrink-0">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div>
              <img
                src={archiveIcon}
                alt="나의 냉장고"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="h-[16px] pt-[5px]">
              <p className="text-center text-[10px] text-[#999999]">
                나의 냉장고
              </p>
            </div>
          </div>
        </div>

        <div className="w-[72px] h-[42px] flex-shrink-0">
          <div className="cursor-pointer flex flex-col items-center justify-center ">
            <div>
              <img src={profileIcon} alt="마이" className="w-[24px] h-[24px]" />
            </div>
            <div className="h-[16px] pt-[5px]">
              <p className="text-center text-[10px] text-[#999999]">마이</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
