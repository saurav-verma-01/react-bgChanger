import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("seagreen");
  return (
    <div style={{ backgroundColor: color }} className="w-full h-screen px-4 ">
      <div className=" w-full px-8 py-4 fixed bottom-12 inset-x-0  ">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#1e40af", color: "#dbeafe" }}
            onClick={() => setColor("#1e40af")}
          >
            Blue
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#b91c1c", color: "#fee2e2" }}
            onClick={() => setColor("#b91c1c")}
          >
            Red
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#166534", color: "#dcfce7" }}
            onClick={() => setColor("#166534")}
          >
            Green
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#0f766e", color: "#ccfbf1" }}
            onClick={() => setColor("#0f766e")}
          >
            Teal
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#6b21a8", color: "#f3e8ff" }}
            onClick={() => setColor("#6b21a8")}
          >
            Purple
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#a3e635", color: "#ecfccb" }}
            onClick={() => setColor("#a3e635")}
          >
            Lime
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#facc15", color: "#fef3c7" }}
            onClick={() => setColor("#facc15")}
          >
            Yellow
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#404040", color: "#f5f5f5" }}
            onClick={() => setColor("#404040")}
          >
            Neutral
          </button>
          <button
            className="px-8 py-2 border-none rounded-xl outline-none text-xl uppercase font-bold"
            style={{ backgroundColor: "#ec4899", color: "#fce7f3" }}
            onClick={() => setColor("#ec4899")}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
