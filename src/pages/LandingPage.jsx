import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      <div className="w-[320px] h-[100px] md:w-[590px] md:h-[400px] bg-purple-800 rounded-full absolute  top-[50%] left-[50%] translate-x-[70%] translate-y-[-50%] blur-[200px] z-[1]"></div>
      <div className="w-[320px] h-[100px] md:w-[590px] md:h-[400px] bg-cyan-600 rounded-full absolute  top-[50%] left-[-10%] translate-x-[0%] translate-y-[-50%] blur-[200px] z-[1]"></div>

      <div className="container">
        <div className="py-20 relative z-10 flex flex-col justify-center">
          <h1 className=" text-[5rem] text-center font-bold uppercase bg-gradient-to-r from-blue-800  to-cyan-400 inline-block text-transparent bg-clip-text mx-auto font-kanit">
            Najal Gamess
          </h1>
          <div className="flex flex-wrap justify-around mt-10 gap-10">
            <Link
              to={"/check-khodam"}
              className="w-full md:w-1/3 shadow-md bg-black bg-opacity-40 rounded-md duration-300 group overflow-hidden"
            >
              <img
                src="/img/check-khodam.png"
                alt="check-khodam"
                className="rounded-md group-hover:scale-110 duration-300"
              />
              <p className="font-kanit text-3xl text-center p-5 underline">
                Check Khodam
              </p>
            </Link>

            <Link
              to={"/kalkulator-cinta"}
              className="w-full md:w-1/3 shadow-md bg-black bg-opacity-40 rounded-md duration-300 group overflow-hidden"
            >
              <img
                src="/img/kalkulator-cinta.png"
                alt="kalkulator-cinta"
                className="rounded-md group-hover:scale-110 duration-300"
              />
              <p className="font-kanit text-3xl text-center p-5 underline">
                Kalkulator Cinta
              </p>
            </Link>
          </div>
        </div>
      </div>

      <footer className="absolute left-0 right-0 bottom-4">
        <p className="text-center italic">
          created by{" "}
          <a href="" className="underline">
            nazal
          </a>
        </p>
      </footer>
    </div>
  );
}
