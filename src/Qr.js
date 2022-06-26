import qr from "./images/image-qr-code.png";

export default function Qr() {
  return (
    <div className="flex justify-center items-center container mx-auto ">
      <section className=" max-w-xs mx-3">
        <div className=" bg-white p-4  rounded-2xl shadow-lg shadow-slate-350">
          <img src={qr} alt="" className="rounded-2xl" />
          <div className="p-3 text-center flex flex-col gap-4 mt-3">
            <h1 className="outfit text-xl font-bold text-[#161D30]">
              Improve your front-end skills by building projects
            </h1>

            <p className="text-[#7C8798] outfit">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
