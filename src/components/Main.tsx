import { useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    imageUrl: "https://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

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
            onChange={handleChange}
            value={meme.topText}
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
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
      </div>
      <button className="w-full rounded bg-linear-to-r from-purple-800 to-purple-400 px-4 py-2 text-white">
        Get a new meme image 🖼️
      </button>
      <div className="relative">
        <img src={meme.imageUrl} alt="Meme" className="w-full rounded" />
        <span className="absolute inset-x-0 top-0 z-50 py-3 text-center text-4xl font-extrabold text-white uppercase [-webkit-text-stroke:2px_black]">
          {meme.topText}
        </span>
        <span className="absolute inset-x-0 bottom-0 z-50 py-3 text-center text-4xl font-extrabold text-white uppercase [-webkit-text-stroke:2px_black]">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
};

export default Main;
