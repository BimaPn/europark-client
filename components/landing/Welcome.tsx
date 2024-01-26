import Image from "next/image"

const Welcome = () => {
  return (
    <section className="boxWidth min-h-screen flexCenter gap-[70px] my-32 flex-col">
      <div className="flexBetween gap-2">
        <div className="basis-[60%] -mt-3">
          <span className="font-bold text-[42px] leading-[52px]">Selamat Datang Di Museum Seni Terbaik di Indonesia</span>
        </div>
        <div className="basis-[40%] leading-[28px]">
          <span className="text-justify block">Europark adalah museum pertama di Indonesia yang memiliki seni lukisan legendaris dan terbaik di dunia. Lebih dari 7 lukisan legendaris yang kami simpan seperti Monalisa, jajang dan dudung</span>
        </div>
      </div>

      <div className="w-full flexCenter gap-5">
        <div 
        className="bg-[url('/images/about/1.jpg')] background-cover basis-[31.5%] shadow aspect-square"/>
        <div 
        className="bg-[url('/images/about/2.jpg')] bg-no-repeat bg-cover bg-center basis-1/3 shadow aspect-square"/>
        <div 
        className="bg-[url('/images/about/3.jpg')] backgroud-cover basis-[31.5%] aspect-square shadow"/>
      </div>

    </section>
  )
}

export default Welcome
