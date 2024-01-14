import React from 'react'

const ButtonCheckout = () => {
  return (
    <div className='flexBetween py-4 px-4'>
      <div className='flex gap-3'>
        <span>Total : </span>
        <span className='font-medium'>Rp. 9000000</span>
      </div>
      <button
      className='w-fit px-5 py-2 rounded text-white font-medium bg-blue-500'
      >
      Bayar Sekarang
      </button>
    </div>

  )
}

export default ButtonCheckout
