import NextImg from "../next-img";

export default function Header() {
  return (
    <header className="w-[80%] mx-auto mt-[64px] container">
      <div className="flex items-center justify-between">
        <div className="relative w-[275px] h-[36px] cursor-pointer">
          <NextImg
            src="/assets/icon/Horizontal Logo.svg"
            alt="BannerHeader"
            objectFit="cover"
          />
        </div>
        <div className="flex items-center gap-10">
          <div className="relative inline-block min-w-[50px]">
            <select className="appearance-none block w-full rounded-md h-[50px] pl-5 pr-5 text-[#000] font-semibold leading-[36px] text-sm focus:outline-none bg-transparent cursor-pointer">
              <option value="1" className="cursor-pointer">Eng</option>
              <option value="2" className="cursor-pointer">Vie</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <svg
                className="w-[18px] h-[18px] text-[#000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10l5 5 5-5"
                />
              </svg>
            </div>
          </div>

          <div className="relative h-[27px] w-[27px] cursor-pointer">
            <NextImg
              src="/assets/icon/density_medium.svg"
              alt="Header"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
