import { addDoc, collection } from "firebase/firestore";
import { database } from "../fireBase/config";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function KalkulatorCintaPage() {
  const [loading, setLoading] = useState(false);
  const [point, setPoint] = useState(null);
  const value = collection(database, "users");

  const handleCreate = async () => {
    setPoint(null);
    setLoading(true);
    setTimeout(async () => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      setPoint(randomNumber);
      await addDoc(value, {
        cowo: formik.values.cowo,
        cewe: formik.values.cewe,
        hasil: randomNumber,
      });
      setLoading(false);
    }, 10000);
  };

  const formik = useFormik({
    initialValues: {
      cowo: "",
      cewe: "",
    },
    onSubmit: handleCreate,
    validationSchema: yup.object({
      cowo: yup.string().required("Wajib diisi"),
      cewe: yup.string().required("Wajib diisi"),
    }),
  });

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      <div className="w-[320px] h-[100px] md:w-[590px] md:h-[400px] bg-purple-800 rounded-full absolute  top-[50%] left-[50%] translate-x-[70%] translate-y-[-50%] blur-[200px] z-[1]"></div>
      <div className="w-[320px] h-[100px] md:w-[590px] md:h-[400px] bg-cyan-600 rounded-full absolute  top-[50%] left-[-10%] translate-x-[0%] translate-y-[-50%] blur-[200px] z-[1]"></div>

      {/* Button create */}
      {/* <button onClick={handleCreate}>Addd</button> */}
      <div className="container py-20">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl font-kanit text-center bg-gradient-to-r from-blue-800  to-cyan-400 inline-block text-transparent bg-clip-text font-bold">
            Kalkulator{" "}
            <span className="bg-gradient-to-r from-red-800  to-pink-700 inline-block text-transparent bg-clip-text font-bold">
              Cina
            </span>
          </h1>
          <form
            className="max-w-xl mx-auto mt-5 "
            onSubmit={formik.handleSubmit}
          >
            <div className="max-w-xl w-72 md:w-96">
              <Input
                label="Cowo"
                size="lg"
                name="cowo"
                onChange={formik.handleChange}
                error={formik.touched.cowo && formik.errors.cowo}
                className="focus:border-white focus:text-white "
              />
              {formik.touched.cowo && formik.errors.cowo && (
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center gap-1 font-normal text-red-600 italic"
                >
                  {formik.errors.cowo}
                </Typography>
              )}
            </div>

            <div className="max-w-xl w-72 md:w-96 mt-5">
              <Input
                label="Cewe"
                size="lg"
                name="cewe"
                onChange={formik.handleChange}
                error={formik.touched.cewe && formik.errors.cewe}
                className="focus:border-white focus:text-white "
              />
            </div>

            <div className="">
              <Button
                color="blue"
                className="w-full mt-5"
                type="submit"
                disabled={loading}
              >
                SUBMIT
              </Button>
            </div>
          </form>
          {loading === true && (
            <div className="mt-5">
              <img
                src="/assets/kalkulator/loading.gif"
                alt=""
                className="mx-auto"
                width={300}
              />
              <p className="animate-pulse text-center text-lg">
                Menghitung....
              </p>
            </div>
          )}
          {point && (
            <div className="">
              <h2 className="text-2xl font-kanit text-center text-white mt-10">
                Hasil :
              </h2>
              <div className="">
                <img
                  src="/assets/kalkulator/result.gif"
                  alt="hasil"
                  className="mx-auto"
                  width={100}
                />
                <p className="text-center text-4xl font-bold mt-5">
                  Kalian Punyaa {point}% Cinta
                </p>
                <div className="flex flex-col justify-center mt-5">
                  <Link
                    to="/check-khodam"
                    className="text-center italic underline text-blue-800"
                  >
                    Coba Check Khodam
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="absolute left-0 right-0 bottom-4">
        <p className="text-center italic">
          created by{" "}
          <a
            href="https://www.instagram.com/nazalprastya/?hl=id"
            target="_blank"
            className="underline"
          >
            nazal
          </a>
        </p>
      </footer>
    </div>
  );
}
