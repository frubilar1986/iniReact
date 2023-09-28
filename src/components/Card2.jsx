import React from 'react'

export default function Card2() {
  return (
    <div>
      <div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl">
  <div className="py-4 px-6 flex flex-col gap-2">
      <a href="#" className="text-2xl font-bold text-gray-700">Adidas</a>
      <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          aliquam ligula.
      </p>
  </div>
  <div>
      <img
        src="https://img.freepik.com/foto-gratis/zapatos-deportivos-correr_1203-7549.jpg?w=2000&t=st=1660341556~exp=1660342156~hmac=c7d13c9ad31180c781643f1734272498db39b21af8b9dd20f735e5e509c8ba02"
        alt="Adidas"
        className="w-full object-cover"
      />
  </div>
  <div className="py-4 px-6 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg">
      <span className="text-white font-bold">$1,500.00</span>
      <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
          Agregar al carrito
      </button>
  </div>
</div>
    </div>
  )
}
