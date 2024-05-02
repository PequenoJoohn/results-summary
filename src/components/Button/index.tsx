interface IButton {
  title: string;
}

export const Button = ({ title }: IButton) => {
  return (
    <button className="rounded-full p-4 bg-[#303b5a] text-white w-full md:p-2 hover:bg-[#2421ca] transition duration-100">
      {title}
    </button>
  );
};
