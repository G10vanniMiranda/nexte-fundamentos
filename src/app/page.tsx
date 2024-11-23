'use client'

import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6"

export default function Home() {
  const [item, setItem] = useState(0)

  const handleSubtrair = () => {

    if (item > 0) {
      setItem(item - 1)
    }

  }
  return (
    <div>
      <div className=" flex justify-around items-center bg-blue-700 h-24">
        <h1 className="bg-black text-white px-10 py-2 rounded-md cursor-pointer">Hello World!</h1>

        <div className="flex items-center">
          <button className="bg-green-600 p-2 px-4 rounded-full -mr-3 cursor-pointer hover:scale-125 duration-300"
            onClick={() => setItem(item + 1)}
          >+</button>

          <div className="p-5 rounded-full relative">
            <FaCartShopping className="text-3xl" />
            <div className="
              text-sm 
              h-7 w-7 
              absolute top-1 right-1
              rounded-full 
              bg-red-500 
              flex items-center justify-center 
              "> {item} </div>
          </div>

          <button className="bg-red-600 p-2 px-4 ml-1 rounded-full cursor-pointer hover:scale-125 duration-300"
            onClick={handleSubtrair}
          >-</button>
        </div>

      </div>

      <div className="container w-screen flex gap-5 flex-wrap px-10 justify-center items-center mt-5">

        <div className="bg-slate-800 w-64 h-[420px] flex flex-col justify-center relative cursor-pointer hover:scale-110 duration-300 hover:rounded-md">

          <img width={230} height={100} className="ml-2  absolute top-0" src="https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_slim_500_gb_1613_1_6ae62a7ee6c15d552f078426bf076fac.png" alt="sem imagem do produto" />

          <h3 className="text p-2 px-5 pt-44">PS4 Slim 2TB</h3>

          <p className="text-xs px-5">
            ou 10x de R$ 150,00 Sem juros Cartão MasterCard ou 10x de R$ 150,00 Sem juros Cartão VisaR$ 1.349,99 à vista com desconto Boleto Bancário
          </p>

          <div className="flex absolute bottom-0 w-full justify-between p-2 px-5">
            <h3 className="text-sm">R$ 2399,00</h3>
            <button className="p-2 py-1 bg-green-700 hover:bg-blue-700 duration-300 rounded-lg text-sm">Adicionar</button>
          </div>

        </div>

        <div className="bg-slate-800 w-64 h-[420px] flex flex-col justify-center relative cursor-pointer hover:scale-110 duration-300 hover:rounded-md">

          <img width={230} height={100} className="ml-2  absolute top-0" src="https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_slim_500_gb_1613_1_6ae62a7ee6c15d552f078426bf076fac.png" alt="sem imagem do produto" />

          <h3 className="text p-2 px-5 pt-44">PS4 Slim 2TB</h3>

          <p className="text-xs px-5">
            ou 10x de R$ 150,00 Sem juros Cartão MasterCard ou 10x de R$ 150,00 Sem juros Cartão VisaR$ 1.349,99 à vista com desconto Boleto Bancário
          </p>

          <div className="flex absolute bottom-0 w-full justify-between p-2 px-5">
            <h3 className="text-sm">R$ 2399,00</h3>
            <button className="p-2 py-1 bg-green-700 hover:bg-blue-700 duration-300 rounded-lg text-sm">Adicionar</button>
          </div>

        </div>

        <div className="bg-slate-800 w-64 h-[420px] flex flex-col justify-center relative cursor-pointer hover:scale-110 duration-300 hover:rounded-md">

          <img width={230} height={100} className="ml-2  absolute top-0" src="https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_slim_500_gb_1613_1_6ae62a7ee6c15d552f078426bf076fac.png" alt="sem imagem do produto" />

          <h3 className="text p-2 px-5 pt-44">PS4 Slim 2TB</h3>

          <p className="text-xs px-5">
            ou 10x de R$ 150,00 Sem juros Cartão MasterCard ou 10x de R$ 150,00 Sem juros Cartão VisaR$ 1.349,99 à vista com desconto Boleto Bancário
          </p>

          <div className="flex absolute bottom-0 w-full justify-between p-2 px-5">
            <h3 className="text-sm">R$ 2399,00</h3>
            <button className="p-2 py-1 bg-green-700 hover:bg-blue-700 duration-300 rounded-lg text-sm">Adicionar</button>
          </div>

        </div>

        <div className="bg-slate-800 w-64 h-[420px] flex flex-col justify-center relative cursor-pointer hover:scale-110 duration-300 hover:rounded-md">

          <img width={230} height={100} className="ml-2  absolute top-0" src="https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_slim_500_gb_1613_1_6ae62a7ee6c15d552f078426bf076fac.png" alt="sem imagem do produto" />

          <h3 className="text p-2 px-5 pt-44">PS4 Slim 2TB</h3>

          <p className="text-xs px-5">
            ou 10x de R$ 150,00 Sem juros Cartão MasterCard ou 10x de R$ 150,00 Sem juros Cartão VisaR$ 1.349,99 à vista com desconto Boleto Bancário
          </p>

          <div className="flex absolute bottom-0 w-full justify-between p-2 px-5">
            <h3 className="text-sm">R$ 2399,00</h3>
            <button className="p-2 py-1 bg-green-700 hover:bg-blue-700 duration-300 rounded-lg text-sm">Adicionar</button>
          </div>

        </div>

        <div className="bg-slate-800 w-64 h-[420px] flex flex-col justify-center relative cursor-pointer hover:scale-110 duration-300 hover:rounded-md">

          <img width={230} height={100} className="ml-2  absolute top-0" src="https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_slim_500_gb_1613_1_6ae62a7ee6c15d552f078426bf076fac.png" alt="sem imagem do produto" />

          <h3 className="text p-2 px-5 pt-44">PS4 Slim 2TB</h3>

          <p className="text-xs px-5">
            ou 10x de R$ 150,00 Sem juros Cartão MasterCard ou 10x de R$ 150,00 Sem juros Cartão VisaR$ 1.349,99 à vista com desconto Boleto Bancário
          </p>

          <div className="flex absolute bottom-0 w-full justify-between p-2 px-5">
            <h3 className="text-sm">R$ 2399,00</h3>
            <button className="p-2 py-1 bg-green-700 hover:bg-blue-700 duration-300 rounded-lg text-sm">Adicionar</button>
          </div>

        </div>

      </div>



    </div>
  );
}
