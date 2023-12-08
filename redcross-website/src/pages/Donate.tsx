import { Button, ButtonGroup } from "reactstrap";
import ShortInput from "../components/ShortInput";
import SubmitButton from "../components/SubmitButton";
import { useState } from "react";
import GroupedButtons from "../components/GroupedButtons";

export function Donate() {
  const [amount, setAmount] = useState<number>(0.0);

  const buttonLeft = {
    gridColumn: "1",
    gridRow: "2",
    border: "none",
    marginRight: "3px",
  };

  const buttonRight = {
    gridColumn: "2",
    gridRow: "2",
  };

  const amountClick = (value: number) => {
    setAmount(value);
  };

  return (
    <>
      <div className="pt-5"></div>
      <div className="container bg-light pt-3">
        <div className="container bg-white pb-1">
          <h1 className="d-flex justify-content-center">Donate</h1>
        </div>
        <div className="py-3"></div>
        <div className="container text-center">
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
            <div className="row py-3">
              <div className="col">
                <div className="donation-box">
                  <div className="left-donation">
                    <ShortInput name="Donation Amount: " id="donation-text" autocomplete="$0.00" value={amount}/>
                    <GroupedButtons options={["$10", "$25", "$50", "$100"]}/>
                    <Button
                      style={buttonLeft}
                      color="success"
                      onClick={() => amountClick(10)}
                    >
                      $10
                    </Button>
                    <Button
                      style={buttonRight}
                      color="success"
                      onClick={() => amountClick(25)}
                    >
                      $25
                    </Button>
                  </div>

                  <div className="right-donation">
                    <Button
                      style={buttonLeft}
                      color="success"
                      onClick={() => amountClick(50)}
                    >
                      $50
                    </Button>
                    <Button
                      style={buttonRight}
                      color="success"
                      onClick={() => amountClick(100)}
                    >
                      $100
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-3 pt-5">
              <div className="col">
                <SubmitButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
