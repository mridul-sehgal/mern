import { githubInfoLoader } from "../githubInfoLoader"
import { useLoaderData } from "react-router-dom"
function Github() {
    const data=useLoaderData(githubInfoLoader)
  return (
    <div className=" text-center m-4 bg-gray-400 text-white p-4 text-3xl">Github Followers: {data.followers}</div>
  )
}

export default Github

