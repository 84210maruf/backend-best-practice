import Image from "next/image";
import Input from "@/componants/input/input";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl p-10 font-bold">TODO APP</h1>

      <Input
        name="IMpt"
        type="text"
        placeholder="halow"
        value="alllll" />
    </div>
  );
}
