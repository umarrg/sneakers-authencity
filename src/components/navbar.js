import Link from "next/link";

export const Navbar = () => {
  const navs = [
    {
      name: "HOW IT WORKS",
      to: "",
    },
    {
      name: "RECENT CHECKS",
      to: "",
    },
    {
      name: "FAQ",
      to: "",
    },
  ];
  return (
    <div className="bg-white shadow-lg py-4 px-6 flex items-center justify-between ">
      <div className="text-[#90CAF9] font-black ">
        <Link href={"/"}>Legit-check</Link>
      </div>
      <div className="flex items-center justify-center gap-6  ">
        {navs.map((item, idx) => (
          <div key={idx} className="cursor-pointer text-sm font-bold">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
