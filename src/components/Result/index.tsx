export const Result = () => {
  return (
    <div className="flex flex-col items-center gap-4 from-[#2e2be9] bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-b-[1rem] text-center pt-4 pb-8 md:rounded-[1rem] md:max-w-[280px] md:w-full">
      <p className="text-white md:py-2">Your Result</p>

      <div className="rounded-full bg-gradient-to-b from-[#4e21ca] to-[#2e2be9] w-[120px] h-[100px] h-fit py-4 mx-auto">
        <p className="text-white text-[42px] font-bold">76</p>
        <p className="text-[#ebf1ff] text-[14px]">of 100</p>
      </div>

      <div>
        <p className="text-white font-bold pb-2">Great</p>
        <p className="text-white max-w-[240px] md:max-w-[170px] text-[14px] md:text-[12px] bg-[#2421ca00]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};
