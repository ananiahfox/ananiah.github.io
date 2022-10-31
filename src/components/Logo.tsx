import Cat from "../assets/icon/cat.svg";

export const Logo = () => {
  return (
    <a href="/" class="w-32 flex h-10 items-center justify-around cursor-pointer">
      <img src={Cat} />
      <div class="text-black font-medium italic text-base">Ananiah</div>
    </a>
  );
};
