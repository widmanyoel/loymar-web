import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    service: "Transporte Personal",
    passengers: 1,
    origin: "",
    destination: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "passengers"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación
    if (
      !form.origin.trim() ||
      !form.destination.trim() ||
      !form.date ||
      form.passengers < 1
    ) {
      alert("Por favor complete todos los campos para solicitar una cotización.");
      return;
    }

    const phone = "51915060725";

    const message = `🚖 *Nueva Cotización*

📌 Servicio: ${form.service}
👥 Pasajeros: ${form.passengers}
📍 Origen: ${form.origin}
📍 Destino: ${form.destination}
📅 Fecha: ${form.date}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 relative z-30">
      <div className="bg-[#161616] border border-[#f4c025]/20 rounded-xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-[#f4c025]">
            calendar_month
          </span>

          <h3 className="font-serif text-2xl text-white">
            Reserva tu Viaje
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
              Servicio
            </label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 focus:border-[#f4c025] focus:ring-[#f4c025] text-white"
            >
              <option>Transporte Personal</option>
              <option>Traslado Aeropuerto</option>
              <option>VIP Ejecutivo</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
              Pasajeros
            </label>

            <input
              type="number"
              name="passengers"
              min={1}
              required
              value={form.passengers}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 focus:border-[#f4c025] text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
              Origen
            </label>

            <input
              type="text"
              name="origin"
              required
              value={form.origin}
              onChange={handleChange}
              placeholder="Punto de recogida"
              className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 focus:border-[#f4c025] text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
              Destino
            </label>

            <input
              type="text"
              name="destination"
              required
              value={form.destination}
              onChange={handleChange}
              placeholder="¿A dónde vas?"
              className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 focus:border-[#f4c025] text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
              Fecha
            </label>

            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 focus:border-[#f4c025] text-white"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-[#f4c025] text-[#0a0a0a] font-bold py-2.5 rounded-lg hover:brightness-110 transition-all uppercase text-xs tracking-wider"
            >
              Cotizar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}