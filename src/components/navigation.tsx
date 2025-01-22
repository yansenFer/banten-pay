import { useEffect, useState } from "react"
import { BerandaPage } from "../pages/beranda"
import { PrivasiPage } from "../pages/privasi"

export const NavigationTop = () => {
  const [menu, setMenu] = useState("beranda")

  const handleMenu = (value: string) => {
    setMenu(value)
  }
  useEffect(() => {
    window.history.pushState(null, "", `/${menu}`)
  }, [menu])

  return (
    <>
      <div className="fixed w-full xl:px-10 lg:px-10 md:px-0 sm:px-0 px-0 flex h-16 flex-row border-b-[1px] bg-white">
        <button
          onClick={() => handleMenu("beranda")}
          className={`w-fit px-4 hover:bg-gray-100 transition-all font-semibold`}
        >
          Beranda
        </button>
        <button
          onClick={() => handleMenu("privasi")}
          className={`w-fit px-4 hover:bg-gray-100 transition-all font-semibold `}
        >
          Privasi
        </button>
      </div>
      <div className="pt-20 pb-4 xl:px-20 lg:px-20 md:px-10 sm:px-5 px-0 flex w-full">
        {menu === "beranda" && <BerandaPage />}
        {menu === "privasi" && <PrivasiPage />}
      </div>
    </>
  )
}
