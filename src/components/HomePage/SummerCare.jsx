const tips = [
  {
    title: "Stay Hydrated",
    desc: "Drink plenty of water to keep your body cool.",
  },
  {
    title: "Use Sunscreen",
    desc: "Protect your skin from harmful UV rays.",
  },
  {
    title: "Wear Light Clothes",
    desc: "Choose breathable fabrics like cotton.",
  },
];

const SummerCare = () => {

  return (
    <section className="space-y-6 mb-15">
      <div className="text-slate-800 text-center">
        <h2 className="font-bold text-3xl">Summer Care Tips</h2>
        <p className="max-w-lg mx-auto">Beat the heat with smart summer care. Stay hydrated, protect your skin, and keep yourself fresh all day long.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          tips.map((tip, index) => (
            <div
              key={index}
              className="border border-gray-300 duration-300 h-50 rounded-2xl shadow-lg transition hover:-translate-y-2"
            >
              <div 
                className="rounded-2xl flex flex-col h-full items-center text-center justify-center"
              >
                <h2 className="card-title">{tip.title}</h2>
                <p>{tip.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default SummerCare;