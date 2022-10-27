import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import { useCheckoutMutation } from "@framework/checkout/use-checkout";
import { CheckBox } from "@components/ui/checkbox";
import Button from "@components/ui/button";
import Router from "next/router";
import { ROUTES } from "@utils/routes";

interface CheckoutInputType {
	fullName: string;
	phone: string;
	email: string;
	address: string;
	city: string;
	zipCode: string;
	save: boolean;
	note: string;
}

const CheckoutForm: React.FC = () => {
	const { mutate: updateUser, isLoading } = useCheckoutMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CheckoutInputType>();
	function onSubmit(input: CheckoutInputType) {
		updateUser(input);
		Router.push(ROUTES.ORDER);
	}

	return (
		<>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{"Endereço para entrega"}
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full mx-auto flex flex-col justify-center "
				noValidate
			>
				<div className="flex flex-col space-y-4 lg:space-y-5">
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							labelKey="Nome completo *"
							{...register("fullName", {
								required: "Este campo é obrigatorio",
							})}
							errorKey={errors.fullName?.message}
							variant="solid"
							className="w-full lg:w-1/2 "
						/><Input
							labelKey="CEP *"
							{...register("zipCode", {
								required: "Este campo é obrigatorio",
							})}
							errorKey={errors.zipCode?.message}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
						/>
					</div>
					<Input
						labelKey="Endereço *"
						{...register("address", {
							required: "Este campo é obrigatorio",
						})}
						errorKey={errors.address?.message}
						variant="solid"
					/>
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							type="tel"
							labelKey="Némero *"
							{...register("phone", {
								required: "Este campo é obrigatorio",
							})}
							errorKey={errors.phone?.message}
							variant="solid"
							className="w-full lg:w-1/2 "
						/>

						<Input
							type="email"
							labelKey="forms:label-email-star"
							{...register("email", {
								required: "Este campo é obrigatorio",
								pattern: {
									value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "Porfavor informe um email valido",
								},
							})}
							errorKey={errors.email?.message}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
						/>
					</div>
					<div className="relative flex items-center ">
						<CheckBox labelKey="Salvar Informacoes para a Proxima Compra" />
					</div>
					<TextArea
						labelKey="Notas para o vendedor (Opcional)"
						{...register("note")}
						placeholderKey="Notas para o vendedor, como algo que precisamos saber na entrega"
						className="relative pt-3 xl:pt-6"
					/>
					<div className="flex w-full">
						<Button
							className="w-full sm:w-auto"
							loading={isLoading}
							disabled={isLoading}
						>
							{"Comprar"}
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
