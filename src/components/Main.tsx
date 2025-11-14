const Main = () => {
  return (
    <main className="space-y-5 p-7">
      <div className="flex gap-5">
        <label className="w-full">
          <span className="font-semibold">Top text</span>
          <br />
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            className="mt-2 w-full rounded border border-gray-300 p-3"
          />
        </label>

        <label className="w-full">
          <span className="font-semibold">Bottom text</span>
          <br />
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            className="mt-2 w-full rounded border border-gray-300 p-3"
          />
        </label>
      </div>
      <button className="w-full rounded bg-linear-to-r from-purple-800 to-purple-400 px-4 py-2 text-white">
        Get a new meme image 🖼️
      </button>
      <div className="relative">
        <img
          src="https://i.imgflip.com/1bij.jpg"
          alt="Meme"
          className="w-full rounded"
        />
        <span className="absolute inset-x-0 top-0 z-50 py-3 text-center text-4xl font-extrabold text-white uppercase [-webkit-text-stroke:2px_black]">
          One does not simply
        </span>
        <span className="absolute inset-x-0 bottom-0 z-50 py-3 text-center text-4xl font-extrabold text-white uppercase [-webkit-text-stroke:2px_black]">
          Walk into Mordor
        </span>
      </div>
    </main>
  );
};

export default Main;
