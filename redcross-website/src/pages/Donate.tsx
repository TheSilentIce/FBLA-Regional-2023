import RadioInput from "../components/RadioInput";
import ShortInput from "../components/ShortInput";
import SubmitButton from "../components/SubmitButton";
import { useState } from "react";

export function Donate() {
  const [amount, setAmount] = useState<number>(0.0);
  const [total, setTotal] = useState<number>(0);
  
  const FUNDRAISER_GOAL = 500;

  const amountClick = (value: number) => {
    setAmount(value);
  };

  const reset = () => {
    setTotal(total + amount);
    setAmount(0);
  };



  return (
    <>
      <div className="pt-5" />
      <div className="container bg-light pt-3">
        <div className="bg-white pb-1">
          <h1 className="d-flex justify-content-center">Donate</h1>
        </div>
        <div className="py-3"></div>
        <div className="row w-100">
          <div className="col">
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
                  <ShortInput name="Email" id="email" autocomplete="email" />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col">
                  <ShortInput
                    name="Phone Number"
                    id="phoneNumber"
                    autocomplete="tel"
                  />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col">
                  <ShortInput
                    name="Donation Amount: "
                    id="donation-text"
                    autocomplete="text"
                    value={new String("$" + amount)}
                  />
                </div>
              </div>
              <div className="row pt-2">
                <div className="col">
                  <div className="btn-group w-100" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="donationAmount"
                      id="donationAmount1"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="donationAmount1"
                      onClick={() => amountClick(10)}
                    >
                      $10
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="donationAmount"
                      id="donationAmount2"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="donationAmount2"
                      onClick={() => amountClick(25)}
                    >
                      $25
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="donationAmount"
                      id="donationAmount3"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="donationAmount3"
                      onClick={() => amountClick(50)}
                    >
                      $50
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="donationAmount"
                      id="donationAmount4"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="donationAmount4"
                      onClick={() => amountClick(100)}
                    >
                      $100
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <RadioInput
                    name="Donation Type"
                    id="donationType"
                    options={["One Time", "Monthly", "Annually"]}
                  />
                </div>
              </div>
              <div className="row pb-3 pt-5">
                <div className="col">
                  <div className="btn btn-primary w-100" onClick={() => reset()}>
                    Submit
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col w-50">
            <img style={{ background: "red" }} />

            <div
              className="progress"
              role="progressbar"
              aria-valuenow={total}
              aria-valuemin={0}
              aria-valuemax={FUNDRAISER_GOAL}
            >
              <div className="progress-bar" style={{ width: (total * 100 / FUNDRAISER_GOAL + "%") }}>{total * 100 / FUNDRAISER_GOAL}% </div>
            </div>
            <h5 className="pt-2 text-center">${total} of ${FUNDRAISER_GOAL} goal reached</h5>
          </div>
        </div>
      </div>
    </>
  );
}
