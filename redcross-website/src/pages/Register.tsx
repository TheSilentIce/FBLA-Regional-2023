import ShortInput from "../components/ShortInput";

export function Register() {
	return (
		<>
			<div className="pt-5"></div>
			<div className="container bg-light pt-3">
				<div className="container bg-white pb-1">
					<h1 className="d-flex justify-content-center">Register</h1>
				</div>
				<div className="py-3"></div>
				<div className="container">
					<form className="w-50">
						<div className="row">
							<div className="col">
								<ShortInput
									name="First Name"
									id="firstName"
									autocomplete="given-name"
								/>
							</div>
							<div className="col">
								<ShortInput
									name="Last Name"
									id="lastName"
									autocomplete="family-name"
								/>
							</div>
						</div>
						<div className="row pt-3">
							<div className="col">
								<ShortInput
									name="Email"
									id="email"
									autocomplete="email"
								/>
							</div>
						</div>
						<div className="row py-3">
							<div className="col">
								<ShortInput
									name="Phone Number"
									id="phoneNumber"
									autocomplete="tel"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
