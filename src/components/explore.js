import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { HiCheck } from "react-icons/hi";

export const Explore = () => {
  const sneakers = [
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbNQe8niok07YzyJDwV7w5JJbDxL455WepOjdjXaGg2jxwrEBR1JXMmgXx_TB5n1XFmc&usqp=CAU",
      status: true,
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqEwFRf23yteGLYLjQMywMrxmMuOo_YZxUIcDImB3Zga3qFHEWwujFg9TwF4oyhTzAmM&usqp=CAU",
      status: true,
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZBxk202p517bHqThvM72K40Oqh4vK3vncPAwl5QkVGLU_Nm208fZxhDX_pyDkTGSxS8&usqp=CAU",
      status: false,
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://ae01.alicdn.com/kf/S55a616a40f9c4f03871d71358c7b7ccfC/2022-New-Trend-Casual-Shoes-for-Men-Designer-Sneakers-Outdoor-Walking-Trainers-Outdoor-Skateboard-Footwear-Zapatillas.jpg",
      status: true,
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbNQe8niok07YzyJDwV7w5JJbDxL455WepOjdjXaGg2jxwrEBR1JXMmgXx_TB5n1XFmc&usqp=CAU",
      status: true,
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      status: false,
      image: "https://i.ebayimg.com/images/g/rNwAAOSw9tdkQMDg/s-l1600.jpg",
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://images.yaoota.com/kLJ7x8flyOD2YK8r468upK5VLCI=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ng/media/crawledproductimages/b0f5106418611e5e664fdbfaf2e2923d4c3f3ebd.jpg",
      status: true,
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbNQe8niok07YzyJDwV7w5JJbDxL455WepOjdjXaGg2jxwrEBR1JXMmgXx_TB5n1XFmc&usqp=CAU",
      status: false,
    },
    {
      name: "lorem ipsum",
      date: "lorem ipsum",
      image:
        "https://ae01.alicdn.com/kf/HTB1WtMiXMmH3KVjSZKzq6z2OXXaI/2019-Men-Women-Running-Shoes-Hot-Sale-Sport-Shoe-For-Unisex-INS-Vintage-Chunky-Dad-Lover.jpg",
      status: false,
    },
  ];
  return (
    <div>
      <div className="bg-black min-h-screen text-white mt-4 py-6 px-8">
        <div className="md:text-7xl font-bold mb-4">Explore</div>
        <div className="md:text-7xl font-bold">
          What We <span className="text-[#90CAF9]">Checked.</span>
        </div>
        <div className="mt-7 md:text-2xl">
          We've authenticated 1336172+ pairs of sneakers.
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {sneakers.map((item, idx) => (
            <Link href={"/topic/1"} key={idx}>
              <div className="mb-2 cursor-pointer">
                <div className="bg-white text-black rounded-lg ">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt="img"
                      className="rounded-lg w-full transition duration-100 ease-out-in h-[200px] "
                    />
                    <div className="absolute top-0 ">
                      {item.status ? (
                        <div className="bg-[#66BB6A] p-1  rounded-tl-lg rounded-br-2xl">
                          <BsCheck color="white" />
                        </div>
                      ) : (
                        <div className="bg-[#B71C1C] p-1  rounded-tl-lg rounded-br-2xl">
                          <HiCheck color="white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm font-normal">{item.date}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
