
const SuccessIcon = ({width = 500, className}:{width?:number, className?:string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} className={className}  viewBox="0 0 100 100"><path fill="#f1bc19" d="M78 13A1 1 0 1 0 78 15A1 1 0 1 0 78 13Z"/><path fill="#f9dbd2" d="M50 12A38 38 0 1 0 50 88A38 38 0 1 0 50 12Z"/><path fill="#f1bc19" d="M84 12A4 4 0 1 0 84 20A4 4 0 1 0 84 12Z"/><path fill="#ee3e54" d="M14 24A2 2 0 1 0 14 28A2 2 0 1 0 14 24Z"/><path fill="#fbcd59" d="M78 75A2 2 0 1 0 78 79 2 2 0 1 0 78 75zM17 74A4 4 0 1 0 17 82 4 4 0 1 0 17 74z"/><path fill="#ee3e54" d="M24 81A2 2 0 1 0 24 85A2 2 0 1 0 24 81Z"/><path fill="#fff" d="M66.5 76A2.5 2.5 0 1 0 66.5 81 2.5 2.5 0 1 0 66.5 76zM16 47A1 1 0 1 0 16 49 1 1 0 1 0 16 47z"/><path fill="#f1bc19" d="M86 30A1 1 0 1 0 86 32A1 1 0 1 0 86 30Z"/><path fill="#fff" d="M80 64A2 2 0 1 0 80 68A2 2 0 1 0 80 64Z"/><path fill="#78a2d2" d="M50 25.7A24.3 24.3 0 1 0 50 74.3A24.3 24.3 0 1 0 50 25.7Z"/><path fill="#472b29" d="M50,75c-13.8,0-25-11.2-25-25c0-13.8,11.2-25,25-25c13.8,0,25,11.2,25,25C75,63.8,63.8,75,50,75z M50,26.5 C37,26.5,26.5,37,26.5,50S37,73.5,50,73.5S73.5,63,73.5,50S63,26.5,50,26.5z"/><path fill="#78a2d2" d="M49.9 29.700000000000003A20.4 20.4 0 1 0 49.9 70.5A20.4 20.4 0 1 0 49.9 29.700000000000003Z"/><path fill="#472b29" d="M69.4,44.8c-0.2,0-0.4-0.1-0.5-0.4c-0.1-0.3-0.2-0.6-0.3-0.9c-0.4-1.1-0.9-2.2-1.5-3.2 c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.6,1.1,1.1,2.2,1.5,3.3c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.3-0.1,0.5-0.3,0.6 C69.5,44.7,69.5,44.8,69.4,44.8z"/><path fill="#472b29" d="M50,70.9c-11.5,0-20.9-9.3-20.9-20.8c0-11.5,9.4-20.8,20.9-20.8c6,0,11.7,2.6,15.6,7c0.3,0.3,0.6,0.7,0.9,1 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.2-0.5,0.1-0.7-0.1c-0.3-0.3-0.5-0.7-0.8-1c-3.8-4.2-9.2-6.7-14.9-6.7c-11,0-19.9,8.9-19.9,19.8 C30.1,61,39,69.9,50,69.9S69.9,61,69.9,50.1c0-1-0.1-2-0.2-3c0-0.3,0.1-0.5,0.4-0.6c0.3,0,0.5,0.1,0.6,0.4c0.2,1,0.2,2.1,0.2,3.1 C70.9,61.5,61.5,70.9,50,70.9z"/><g><path fill="#ceccbe" d="M48.4,58.4c-0.5,0-0.9-0.2-1.3-0.5l-8.4-8.4c-0.8-0.7-0.8-1.9-0.1-2.7c0.4-0.4,0.9-0.6,1.4-0.6 c0.5,0,0.9,0.2,1.3,0.5l7.1,7.2l12-12c0.4-0.3,0.8-0.5,1.3-0.5c0.5,0,1,0.2,1.4,0.6c0.3,0.4,0.5,0.9,0.5,1.4s-0.2,1-0.6,1.3 L49.8,57.8C49.4,58.2,48.9,58.4,48.4,58.4z"/><path fill="#472b29" d="M61.7,41.8c0.4,0,0.7,0.1,1,0.4c0.5,0.6,0.5,1.4-0.1,2L49.4,57.5c-0.3,0.3-0.6,0.4-1,0.4 c-0.3,0-0.7-0.1-0.9-0.4l-8.4-8.4c-0.6-0.5-0.6-1.4-0.1-2c0.3-0.3,0.7-0.5,1-0.5c0.3,0,0.7,0.1,0.9,0.4l7.4,7.5l12.4-12.4 C61,41.9,61.4,41.8,61.7,41.8 M61.7,40.8L61.7,40.8c-0.6,0-1.2,0.2-1.6,0.7L48.4,53.1l-6.7-6.8l0,0l0,0c-0.4-0.4-1-0.6-1.6-0.6 c-0.7,0-1.3,0.3-1.8,0.8c-0.4,0.5-0.7,1.1-0.6,1.7c0,0.6,0.3,1.2,0.8,1.7l8.4,8.4c0.5,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7 l13.3-13.3c0.4-0.4,0.7-1,0.7-1.7s-0.2-1.3-0.7-1.7C63,41,62.4,40.8,61.7,40.8L61.7,40.8z"/></g></svg>
  )
}

export default SuccessIcon
