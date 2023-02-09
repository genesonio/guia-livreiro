import { type NextPage } from "next";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <div className="flex justify-between">
      <div className="relative h-[5rem] w-[5rem]">
        <Image
          src="/logo.svg"
          alt="logo"
          fill
          className="object-cover drop-shadow-custom"
        />
      </div>
      <div className="flex w-[20rem] items-center justify-center">
        <Image
          alt=""
          src="/search.svg"
          width={16}
          height={16}
          className="absolute mr-[285px]"
        />
        <input
          type="text"
          className="w-full rounded-2xl border-2 border-[#272727] bg-transparent px-2 py-1 pl-8 outline-none placeholder:text-[#666]"
          placeholder="Procure o nome do livro"
        />
      </div>
    </div>
  );
};

export default Header;
