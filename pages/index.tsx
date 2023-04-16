import { Inter } from "next/font/google";
import { RotateAvatar } from "@/components/RotateAvatar";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-violet-600">
      <h1 className="p-4 text-xl font-bold text-white">fuku710.dev</h1>
      <RotateAvatar src="https://avatars.githubusercontent.com/u/13159978?s=96&v=4" />
      <h2 className="p-4 text-xl font-bold text-white">Products</h2>
      <ul>
        <li className="w-64 flex items-center justify-center ">
          <a
            href="https://github.com/fuku710/gh-today-pr"
            className="flex flex-row items-center justify-center px-4 bg-violet-300 rounded text-violet-900 shadow-lg transition duration-500 hover:text-violet-600"
          >
            <WrenchScrewdriverIcon className="h-8 w-8 pr-2" />
            gh-today-pr
          </a>
        </li>
      </ul>
    </main>
  );
}
