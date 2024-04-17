import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useLoadingStore } from "../../store/store";

const Formcontrol = () => {
	const setLoading = useLoadingStore((state) => state.setIsLoading);
	const loading = useLoadingStore((state) => state.loading);
	const form = useRef();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();
	const name = useRef();
	const sendEmail = (data) => {
		setLoading(true);
		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				(result) => {
					if (result.status === 200) {
						setLoading(false);
						reset()
					}
				},
				(error) => {
					if (error) throw error;
				}
			);
	};

	return (
		<>
			<form
				ref={form}
				onSubmit={handleSubmit(sendEmail)}
				className="flex gap-2 flex-col w-full p-6"
			>
				<div>
					<label htmlFor="name" className="text-xl font-bold text-purple-300">
						Name :{" "}
					</label>
					<input
						type="text"
						ref={name}
						{...register("name", {
							minLength: 2,
							required: true,
						})}
						className="w-full rounded-md p-2 text-sm"
						placeholder="John Doe"
					/>
					<p className="mt-2 ml-2 text-red-600 font-bold">
						{errors.name?.type === "required" && "Please Enter Your Name"}
						{errors.name?.type === "minLength" &&
							"Name must be at least 2 characters long"}
					</p>
				</div>
				<div className="col-start-1 col-end-3 row-end-2">
					<label htmlFor="email" className="text-xl font-bold text-purple-300">
						Email :{" "}
					</label>
					<input
						id="email"
						type="email"
						{...register("email", {
							minLength: 2,
							required: true,
							pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/,
						})}
						className="w-full rounded-md p-2 text-sm"
						placeholder="example@gmail.com"
					/>
					<p className="mt-2 ml-2 text-red-600 font-bold">
						{errors.email?.type === "required" && "Please Enter Your Email"}
						{errors.email?.type === "minLength" &&
							"Email must be at least 2 characters long"}
						{errors.email?.type === "pattern" && "Please Enter a valid email"}
					</p>
				</div>

				<div className="col-start-4 col-end-6 row-span-5">
					<label
						htmlFor="message"
						className="text-xl font-bold text-purple-300"
					>
						Message :{" "}
					</label>
					<textarea
						id="message"
						type="text"
						name="message"
						{...register("message", {
							minLength: 2,
							required: false,
						})}
						className="w-full rounded-md p-2 text-sm"
						placeholder="Write Your Message Here"
					/>
					<p className="mt-2 ml-2 text-red-600 font-bold">
						{errors.message?.type === "minLength" &&
							"Message must be at least 2 characters long"}
					</p>
				</div>
				<div className="text-right mt-2">
					<button
						type="submit"
						disabled={loading ? true : false}
						className="rounded-md bg-gray-200 text-purple-900 py-2 px-8 shadow-xl font-bold text-md"
					>
						Send
					</button>
				</div>
			</form>
		</>
	);
};

export default Formcontrol;
