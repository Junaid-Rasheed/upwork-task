import React from "react";

function App() {
  return (
    <>
      <div className="bg-white m-5 ">
        <div className="flex  justify-center h-[140vh]">
          <div className="lg:w-full w-[100%] mx-auto rounded-md shadow-lg ">
            <span className="flex  w-full bg-[#262626] md:justify-between p-4">
              <h1 className="text-xl tracking-wider justify-between flex  text-white  font-bold mb-4  ">
                Choose the form of payment
              </h1>
              <div className=" font-bold mb-4  text-white ">X</div>
            </span>
            <div className="my-4 mx-4 rounded-md bg-[#f8fafc] gap-y-6 outline outline-offset-1 outline-gray-300 outline-1 	 h-20 p-2">
              <div
                className="flex justify-between items-center py-auto "
                style={{ paddingTop: "inherit" }}
              >
                <span className="flex justify-around gap-4 items-center">
                  <div className="w-3/16 flex   font-bold justify-center items-center bg-[#edf2f8] w-10 h-10 rounded-full">
                    J
                  </div>
                  <div className="w-12/16 t flex flex-col font-semibold">
                    John{" "}
                    <span className="font-normal text-gray-600 ">
                      (88) 99602-2404
                    </span>
                  </div>
                </span>
                <div className="w-5/16  bg-[#edf2f8] w-20 h-12 font-semibold justify-center rounded-lg items-center flex">
                  Log out
                </div>{" "}
              </div>
            </div>
            {/* selected services  */}
            <div>
              <div className="mx-4 text-xl tracking-wide font-bold">
                Selected services
              </div>
              <div className="my-5 mx-4 rounded-md bg-[#f8fafc] gap-y-6 outline outline-offset-1 outline-gray-300 outline-1 	 h-28 p-2">
                <div
                  className="flex justify-between items-center py-auto "
                  // style={{ marginTop: "inherit" }}
                >
                  <span className="flex justify-around gap-4 items-center">
                    <div className="flex   font-bold justify-center items-center bg-[#edf2f8] w-16  rounded-xl">
                      <img src="/mini.jpg" className="h-14 rounded-lg" />
                    </div>
                    <div className="w-10/16 flex flex-col font-semibold">
                      Japanese lessons
                      <span className="font-normal text-gray-600 ">
                        Nov 7, 2020 . 11:30
                      </span>
                      <span className="font-normal text-gray-600 ">
                        Client's place
                      </span>
                      <span className="font-semibold  ">Rp 350.000</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            {/* inputs  */}
            <div className="mx-4 ">
              <div>
                <div className="text-lg tracking-wide font-bold">
                  Enter your location
                </div>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full h-10 px-2 mt-2 outline outline-offset-1 outline-gray-300 outline-1 rounded-lg"
                />
              </div>
              <div className="pt-2">
                <div className="text-lg tracking-wide font-bold ">
                  Note (optional)
                </div>
                <input
                  type="text"
                  placeholder="Enter text here "
                  className="w-full h-10 px-2 mt-2 outline outline-offset-1 outline-gray-300 outline-1 rounded-lg"
                />
              </div>
            </div>

            {/* pay way  */}
            <div className="m-4">
              <div className=" text-xl tracking-wide font-bold">
                Choose a way to pay
              </div>
              <div className="flex flex-wrap mt-2">
                <button className="bg-[#edf2f8] w-[43%] md:w-auto  font-bold py-2 px-6 rounded m-2">
                  Cash
                </button>
                <button className="bg-[#edf2f8] w-[46%] md:w-auto  font-bold py-2 px-6 rounded m-2">
                  Credit card
                </button>
                <button className="bg-[#edf2f8] w-[47%] md:w-auto   font-bold py-2 px-6 rounded m-2">
                  eWallet/ <br /> Virtual bank
                </button>
              </div>
            </div>
            {/* Accept all  */}
            <div className="m-4 mb-10 ">
              <label className="flex items-center ">
                <input
                  type="checkbox"
                  // style={{ marginBottom: "20px" }}
                  className="form-checkbox h-5 w-5 mb-6 sm:mb-0 text-gray-600"
                />
                <span className="ml-2 text-gray-700 ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed{" "}
                  <a href="/" className="text-[#1f21ff] underline">
                    do eiusmod
                  </a>
                </span>
              </label>
            </div>
            <hr />

            {/* Last button  */}
            <div>
              <div className="flex flex-wrap mt-2">
                <button className=" w-[43%] md:w-auto  text-xl font-semibold py-4 px-6 rounded m-2">
                  Previous
                </button>
                <button className="bg-[#1f21ff] text-white w-[46%] md:w-auto  text-xl font-semibold py-4 px-6 rounded m-2">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
