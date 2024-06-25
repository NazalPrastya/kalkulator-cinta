/* eslint-disable react/prop-types */
import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const ListKhodam = [
  "Sepeda Listrik",
  "Harimau Sumatra",
  "Kereta Api",
  "Macan Garut",
  "Domba Kuring",
  "Singa",
  "Jerapah",
  "Kucing Oren",
  "Vina Garut",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Ayam Geprek",
  "Ayam Warna Warni",
  "Gajah Duduk",
  "Kambing Guling",
  "Babi Hutan",
  "Cangkul",
  "Pop Mie",
  "Ikan Cakalang",
  "Belut",
  "Koaci",
  "Batu Bata",
  "Kolor",
  "Merpati",
  "Aligator",
  "Tisu Basah",
  "Galon",
  "Ember",
  "Sarden",
  "Kaos Kaki",
  "Tusuk Sate",
  "Dont Look Back in Anger",
  "Naga Dragon Ball",
  "Rawa Rontek",

  "Nyi Roro Kidul",
  "Ular Kadut",
  "Gatot Kaca",
  "Tikus Berdasi",
  "El Bola Bali",
  "El Gasing",
  "Kura Kura Ninja",
  "Kecoa Terbang",
];

export default function CheckKhodamPage() {
  const [nama, setNama] = useState("");
  const [khodamImageUrl, setKhodamImageUrl] = useState("");
  const [khodam, setKhodam] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = () => {
    if (nama) {
      const filteredKhodam = ListKhodam.filter((k) => k);
      const randomKhodam =
        filteredKhodam[Math.floor(Math.random() * filteredKhodam.length)];
      let imageUrl = "";
      setKhodam(randomKhodam);
      if (randomKhodam === "Tidak Ada") {
        imageUrl = "/assets/khodam/tidakada.jpeg";
      } else {
        const formattedKhodam = randomKhodam.toLowerCase().replace(/ /g, "-");
        imageUrl = `/assets/khodam/${encodeURIComponent(formattedKhodam)}.jpeg`;
      }

      setKhodamImageUrl(imageUrl);
      handleOpen();
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black relative overflow-hidden">
      <div className="w-[320px] h-[100px] md:w-[590px] md:h-[400px] bg-purple-800 rounded-full absolute  top-[50%] left-[50%] translate-x-[70%] translate-y-[-50%] blur-[200px] z-[1]"></div>
      <div className="w-[320px] h-[100px] md:w-[590px] md:h-[400px] bg-cyan-600 rounded-full absolute  top-[50%] left-[-10%] translate-x-[0%] translate-y-[-50%] blur-[200px] z-[1]"></div>
      <div className="container max-w-md">
        <div className="bg-gradient-to-br from-blue-700 to-purple-600 p-5 rounded-lg shadow-xl bg-opacity-40">
          <h1 className="text-5xl font-bold bg-gradient-to-r text-white inline-block text-transparent bg-clip-text">
            Check Khodam
          </h1>
          <div className="w-full mt-10">
            <p className="text-white mb-1">Nama:</p>
            <Input
              // label="Nama"
              autoFocus
              color="green"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="border-white focus:border-white placeholder:text-white "
            />
            <Button className="w-full mt-5" onClick={handleSubmit}>
              Submit
            </Button>
            <div className="mt-5">
              <p className="italic text-center">
                Created by{" "}
                <a href="https://www.instagram.com/nazalprastya/?hl=id">
                  Nazal
                </a>
              </p>
            </div>
            <Result
              open={open}
              handleOpen={handleOpen}
              nama={nama}
              khodam={khodamImageUrl}
              namaKhodam={khodam}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Result({ open, handleOpen, nama, khodam, namaKhodam }) {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="max-h-[90vh] overflow-y-scroll"
    >
      <DialogHeader>Hasil</DialogHeader>
      <DialogBody>
        <h3 className="text-xl font-medium">Nama: {nama}</h3>
        <h4 className="text-xl font-medium">
          Khodam: <span className="font-semibold">{namaKhodam}</span>
        </h4>
        <div className="flex justify-center">
          <img
            src={khodam}
            alt={namaKhodam}
            className="mt-5 rounded-lg shadow-md text-center justify-center"
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
