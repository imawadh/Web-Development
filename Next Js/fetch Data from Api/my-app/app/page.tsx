import axios from "axios";

async function getUserDetails() {
    await new Promise ((r)=>setTimeout(r,3000));
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
}

// asynsc component
export default async function Home() {
  const userdeatils = await getUserDetails();

  return (
    <>
      Hi there ! 
      <br />
      {userdeatils.name}
      <br />
      {userdeatils.email}
    </>
  );
}
