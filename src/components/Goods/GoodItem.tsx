import { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom";

const GoodItem = ({children}: PropsWithChildren) => {
    const navigate = useNavigate()
    //console.log(children);
  return (
    <>
        <div className=" rounded-lg bg-blue-600 flex flex-col items-center w-44">
            <a href="#" >
                <img className="rounded-t-lg max-h-24 w-44" src={children[4]} alt="pic" />
            </a>
            <div className="p-6 text-center">
                <h4 className="mb-2 text-orange-400 text-xl font-medium leading-tight">{children[1]}</h4>
                <p className="mb-4 text-base">{children[2]}</p>
                <h5 className="text-red-400">{children[3]} RUB</h5>
                <button className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-red-300 " onClick={() =>navigate(`feed/${children[0]}`)}>View</button>
            </div>
        </div>
    </>
  )
}

export default GoodItem