import { Navbar } from "@/components/navbar";

const Topic = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen text-white mt-4 py-12 px-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-4xl">#021924</h3>
            <h2 className="text-8xl font-bold my-2">Air Jordan</h2>
            <h2 className="text-8xl font-bold mb-4">Jordan 13</h2>
            <p className="text-2xl">Checked @ Jun 5, 2023 7:59 PM</p>
          </div>
          <div className="bg-[#66BB6A] text-white text-2xl font-bold p-4 rounded-md">
            PASS
          </div>
        </div>
      </div>
    </>
  );
};
export default Topic;
