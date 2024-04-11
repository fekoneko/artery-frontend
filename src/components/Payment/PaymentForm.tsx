import { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
  const [payed, setPayed] = useState(false);
  const onSubmit = () => {
    setPayed(!payed);
    localStorage.removeItem('cart');
  };

  return (
    <div>
      {!payed ? (
        <>
          <form className="mx-auto flex w-full max-w-3xl rounded-md bg-white px-6 py-8 shadow-md">
            <div className="w-1/2 border-r-2 border-slate-300 pr-8">
              <label className="mb-2 block text-sm font-bold text-neutral-800">Card number:</label>
              <input
                type="text"
                className="mb-4 flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:border-purple-600  focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <div className="mb-4 flex gap-x-2">
                <div className="flex-1">
                  <label className="mb-2 block text-sm font-bold text-neutral-800">
                    Exp. date:
                  </label>
                  <input
                    type="text"
                    className="mb-4 flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:border-purple-600 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-2 block text-sm font-bold text-neutral-800">CCV:</label>
                  <input
                    type="text"
                    className="mb-4 flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:border-purple-600 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <label className="mb-2 block text-sm font-bold text-neutral-800">Card holder:</label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:border-purple-600 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="w-1/2 pl-8">
              <div className="h-56 w-full">
                <div className="relative cursor-pointer transition-transform duration-500">
                  <div className="absolute m-auto w-full rounded-xl shadow-2xl">
                    <img
                      src="https://i.ibb.co/B2vQ0xG/Card-1.jpg"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="absolute m-auto w-full rounded-xl shadow-2xl">
                    <img
                      src="https://i.ibb.co/ThGc8mn/Card-2.jpg"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button onClick={onSubmit}>Pay</button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          Successful payed
          <Link to="/">Home</Link>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
