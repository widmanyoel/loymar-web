import { useState } from 'react';
import '../../styles/global.css'

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log({
			email,
			password,
		});

		// TODO:
		// login API
		// navigate('/dashboard')
	};

	return (
		<div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
			<div className="w-full max-w-md">
				{/* Card */}
				<div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-white">
							Taxi Drive
						</h1>

						<p className="text-slate-400 mt-2">
							Inicia sesión para continuar
						</p>
					</div>

					<form
						onSubmit={handleSubmit}
						className="space-y-5"
					>
						{/* Email */}
						<div>
							<label className="block text-sm text-slate-300 mb-2">
								Correo electrónico
							</label>

							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="correo@empresa.com"
								className="
									w-full
									px-4
									py-3
									bg-slate-800
									border
									border-slate-700
									rounded-xl
									text-white
									outline-none
									focus:border-indigo-500
									focus:ring-2
									focus:ring-indigo-500/30
									transition
								"
								required
							/>
						</div>

						{/* Password */}
						<div>
							<label className="block text-sm text-slate-300 mb-2">
								Contraseña
							</label>

							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="********"
								className="
									w-full
									px-4
									py-3
									bg-slate-800
									border
									border-slate-700
									rounded-xl
									text-white
									outline-none
									focus:border-indigo-500
									focus:ring-2
									focus:ring-indigo-500/30
									transition
								"
								required
							/>
						</div>

						{/* Remember */}
						<div className="flex items-center justify-between text-sm">
							<label className="flex items-center gap-2 text-slate-400">
								<input
									type="checkbox"
									className="rounded"
								/>
								Recordarme
							</label>

							<button
								type="button"
								className="text-indigo-400 hover:text-indigo-300"
							>
								¿Olvidaste tu contraseña?
							</button>
						</div>

						{/* Submit */}
						<button
							type="submit"
							className="
								w-full
								py-3
								bg-indigo-600
								hover:bg-indigo-700
								text-white
								font-semibold
								rounded-xl
								transition
							"
						>
							Iniciar sesión
						</button>
					</form>
				</div>

				{/* Footer */}
				<p className="text-center text-slate-500 text-sm mt-6">
					© 2026 Loymar
				</p>
			</div>
		</div>
	);
}