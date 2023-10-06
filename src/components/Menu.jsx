import React from "react";

const Menu = (props) => {
  const { onSectionChange, onMenuOpened, setOnMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setOnMenuOpened(!onMenuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-slate-700 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            onMenuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all my-1 ${
            onMenuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            onMenuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${
          onMenuOpened ? "w-full md:w-80" : "w-0"
        }`}
      >
        <div className="flex-1 flex flex-col items-start justify-center gap-6 p-8">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
          <img
            src="/logo.png"
            alt=""
            className="rounded-lg w-16 h-16 absolute bottom-8 right-8"
          />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-slate-600 transition-colors"
    >
      {label}
    </button>
  );
};

export default Menu;
