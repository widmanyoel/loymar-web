import { useState } from "react";
import DatePicker from "react-datepicker";
import { es } from "date-fns/locale";

import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
	const [form, setForm] = useState({
		service: "Transporte Personal",
		passengers: 1,
		origin: "",
		destination: "",
		date: null as Date | null,
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

		const formattedDate = form.date.toLocaleDateString("es-PE");

		const message = `*Nueva Cotización*

		Servicio: ${form.service}
	  Pasajeros: ${form.passengers}
 		Origen: ${form.origin}
 		Destino: ${form.destination}
 		Fecha: ${formattedDate}`;

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
					{/* Servicio */}
					<div className="space-y-2">
						<label className="text-[10px] uppercase text-slate-400 font-bold">
							Servicio
						</label>

						<select
							name="service"
							value={form.service}
							onChange={handleChange}
							className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 text-white"
						>
							<option>Transporte Personal</option>
							<option>Traslado Aeropuerto</option>
							<option>VIP Ejecutivo</option>
						</select>
					</div>

					{/* Pasajeros */}
					<div className="space-y-2">
						<label className="text-[10px] uppercase text-slate-400 font-bold">
							Pasajeros
						</label>

						<input
							type="number"
							name="passengers"
							min={1}
							value={form.passengers}
							onChange={handleChange}
							className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 text-white"
						/>
					</div>

					{/* Origen */}
					<div className="space-y-2">
						<label className="text-[10px] uppercase text-slate-400 font-bold">
							Origen
						</label>

						<input
							type="text"
							name="origin"
							value={form.origin}
							onChange={handleChange}
							placeholder="Punto de recogida"
							className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 text-white"
						/>
					</div>

					{/* Destino */}
					<div className="space-y-2">
						<label className="text-[10px] uppercase text-slate-400 font-bold">
							Destino
						</label>

						<input
							type="text"
							name="destination"
							value={form.destination}
							onChange={handleChange}
							placeholder="¿A dónde vas?"
							className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 text-white"
						/>
					</div>

					{/* FECHA EN ESPAÑOL */}
					<div className="space-y-2">
						<label className="text-[10px] uppercase text-slate-400 font-bold">
							Fecha
						</label>

						<DatePicker
							selected={form.date}
							onChange={(date: any) => setForm({ ...form, date })}
							locale={es}
							dateFormat="dd/MM/yyyy"
							placeholderText="Selecciona una fecha"
							className="w-full bg-[#0a0a0a] border border-slate-700 rounded-lg text-sm px-3 py-2.5 text-white"
						/>
					</div>

					{/* Botón */}
					<div className="flex items-end">
						<button
							type="submit"
							className="w-full bg-[#f4c025] text-[#0a0a0a] font-bold py-2.5 rounded-lg uppercase text-xs"
						>
							Cotizar
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}