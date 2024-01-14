import React from 'react'

const TicketPreview = () => {
  return (
    <section>
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-xl'>Ringkasan Pembelian</h1>
        <span className='text-sm'>Mohon periksa kembali pesanan sebelum menyelesaikan tahap pembelian.</span>

        <div className='flex flex-col gap-6 mt-5 text-sm text-gray-800'>
          <div className='flex flex-col gap-2'>
            <span className='font-medium text-base text-black'>Tanggal Kunjungan</span>
            <span>Sunday, 14 Jan 2024</span> 
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-medium text-base text-black'>Jadwal Kunjungan</span>
            <span>14.00 PM - 15.00 PM</span> 
          </div>
          <div className='flex flex-col gap-3'>
            <span className='font-medium text-base text-black'>Jumlah dan Categori Ticket</span>

            <div className='flexBetween -mt-1'>
              <div className='basis-1/3'>
                <span>Anak-anak</span>
              </div>
              <div className='basis-1/3 text-center'>
                <span>Rp. 115000  x 3</span>
              </div>
              <div className='basis-1/3 text-end'>
                <span>Rp. 475000</span>
              </div>
            </div>  

            <div className='flexBetween'>
              <div className='basis-1/3'>
                <span>Dewasa</span>
              </div>
              <div className='basis-1/3 text-center'>
                <span>Rp. 120000  x 3</span>
              </div>
              <div className='basis-1/3 text-end'>
                <span>Rp. 675000</span>
              </div>
            </div>  

            <div className='flexBetween'>
              <div className='basis-1/3'>
                <span>Lansia</span>
              </div>
              <div className='basis-1/3 text-center'>
                <span>Rp. 150000  x 3</span>
              </div>
              <div className='basis-1/3 text-end'>
                <span>Rp. 775000</span>
              </div>
            </div>  
          </div>
          
          <div className='flex flex-col gap-2'>
            <span className='font-medium text-base text-black'>Total</span>
            <span className='font-medium text-black -mt-1 text-lg'>Rp. 2500.000</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default TicketPreview
