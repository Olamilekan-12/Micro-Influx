const DesktopSearchBar = () => {
  return (
    <div className="hidden xl:flex w-[450px] h-full  items-center justify-between overflow-hidden rounded-md">
      <input
        className="bg-[#E7F5FF] h-full w-[calc(100%-50px)] px-2 border-none outline-none"
        placeholder="Search Campaigns"
      />
      <button className="w-[50px] h-[50px] flex items-center justify-center rounded-md bg-[#053559]">
        <img src="/assets/search-light.svg" alt="" />
      </button>
    </div>
  );
};

export default DesktopSearchBar;
