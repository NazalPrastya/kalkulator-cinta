import { addDoc, collection } from "firebase/firestore";
import { database } from "./fireBase/config";

export default function App() {
  const value = collection(database, "users");
  const handleCreate = async () => {
    await addDoc(value, { cowo: "tes", cewe: "tes", hasil: 20 });
  };
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <button onClick={handleCreate}>Addd</button>
    </h1>
  );
}
