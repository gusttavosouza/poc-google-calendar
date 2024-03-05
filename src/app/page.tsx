'use client'


export default function Home() {
  return (
    <div className="bg-slate-300 w-screen h-screen p-4">
      <h1 className="text-[30px] font-bold text-black">Agenda</h1>
      <div className="bg-white w-full h-[900px] rounded-xl">
        <iframe src="https://calendar.google.com/calendar/embed?src=gustavo.souza%40portobello.com.br&ctz=America%2FSao_Paulo" width="800" height="600" scrolling="no"></iframe>
      </div>
    </div>
  );
}
