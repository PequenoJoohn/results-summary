import results from "../../data/data.json";
import { Button } from "../Button";

export const Summary = () => {
  const colors = (category: string) => {
    console.log("Category", category === "Reaction");
    const objectValues: { [key: string]: string } = {
      Reaction: "bg-[#ff575710] text-[#ff5757]",
      Memory: "bg-[#ffb01f10] text-[#ffb01f]",
      Verbal: "bg-[#00bd9110] text-[#00bd91]",
      Visual: "bg-[#1125d410] text-[#1125d4]",
    };

    console.log("###", objectValues[category]);

    return objectValues[category] || "";
  };

  return (
    <div className="px-6 py-4">
      <p className="pb-2">Summary</p>
      <div className="flex flex-col gap-2 mb-6">
        {results.map((result) => (
          <div
            className={`rounded-md ${colors(result.category)} 
            min-w-[300px] w-full`}
          >
            <div
              className={`bg-[${colors(
                result.category
              )}] flex justify-between p-2`}
            >
              <div className="flex gap-3">
                <img src={result.icon} />
                <p className={`text-[${colors(result.category)}] font-bold`}>
                  {result.category}
                </p>
              </div>

              <div>
                <p>
                  <span className="text-black font-bold">{result.score}</span>
                  <span className="text-[#00000050] px-2">/</span>
                  <span className="text-[#00000050] font-bold">100</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button title="Continue" />
    </div>
  );
};
