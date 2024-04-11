import { useState } from "react"
import { Link } from "react-router-dom"

const PaymentForm = () => {
    const [payed, setPayed] = useState(false)
    const onSubmit = () => {
        setPayed(!payed)
        localStorage.clear()
    }
  return (
    <div>
    {!payed? 
        <>
            <form className="bg-white w-full max-w-3xl mx-auto px-6 py-8 shadow-md rounded-md flex">
                <div className="w-1/2 pr-8 border-r-2 border-slate-300">
                    <label className="text-neutral-800 font-bold text-sm mb-2 block">Card number:</label>
                    <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" />
                    <div className="flex gap-x-2 mb-4">
                            <div className="flex-1">
                                <label className="text-neutral-800 font-bold text-sm mb-2 block">Exp. date:</label>
                                <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" />
                            </div>
                            <div className="flex-1">
                                <label className="text-neutral-800 font-bold text-sm mb-2 block">CCV:</label>
                                <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" />
                            </div>
                    </div>

                    <label className="text-neutral-800 font-bold text-sm mb-2 block">Card holder:</label>
                    <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div className="w-1/2 pl-8">
                    <div className="w-full h-56" >
                        <div className="relative cursor-pointer transition-transform duration-500" >
                        <div className="w-full m-auto rounded-xl shadow-2xl absolute">
                            <img src="https://i.ibb.co/B2vQ0xG/Card-1.jpg" className="object-cover size-full" />
                        </div>
                        <div className="w-full m-auto rounded-xl shadow-2xl absolute" >
                            <img src="https://i.ibb.co/ThGc8mn/Card-2.jpg" className="object-cover size-full" />
                        </div>
                        </div>
                    </div>
                
                </div>
            </form>
            <button onClick={onSubmit}>Pay</button> 
        </>
        :  
        <div className="flex flex-col items-center justify-center">
            Successful payed
            <Link to='/'>Home</Link>
        </div> 
    }
    </div>
  )
}

export default PaymentForm