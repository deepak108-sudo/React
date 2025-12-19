import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./search";

export default function Body() {
  const [Profile, setProfile] = useState([]);
  const [value,setValue]=useState("");

  async function generateProfile(count) {
    const response = await fetch(`https://api.github.com/users?per_page=${Number(count)}`);
    const data = await response.json();

    setProfile(data);
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  function handleClick(){
    generateProfile(Number(value));
  }

  return (
    <>
        <Search
            value={value}
            setValue={setValue}
            handleClick={handleClick}
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 m-4">
        {
            Profile.map(user=>(
                <Card key={user.id} user={user}/>
            ))
        }
        </div>
    </>
  );
}
