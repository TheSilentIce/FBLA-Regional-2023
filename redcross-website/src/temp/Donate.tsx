import { Button, FormGroup, Input, Label, Progress } from "reactstrap";
import "../styles/Donate.css";
import React from "react";
import { useState } from "react";

function Donate() {
  const [amount, setAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const firstItem = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginLeft: "2rem",
    marginRight: "2rem",
  };

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

  //COPY THIS
  const reset = () => {
    setTotal(total + amount);
    setAmount(0);
  };

  return (
    <>
      <div className="donate-banner">Donate</div>
      <div className="main">
        <div className="left-body">
          <div className="input-body">
            <div style={firstItem}>
              <Input className="text-box-name" placeholder="First Name"></Input>
              <Input className="text-box-name" placeholder="Last Name"></Input>
            </div>
            <Input className="text-box" placeholder="Email"></Input>
            <Input className="text-box" placeholder="Phone Number"></Input>

            <div className="donation-box">
              <div className="left-donation">
                <div className="donation-text">Donation Amount:</div>
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
                <div className="donation-text">${amount}</div>
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

            <div className="donation-type">
              <div className="donation-type-header">Donation Type</div>
              <div className="donation-type-options">
                <FormGroup check>
                  <Input type="radio" name="1" />
                  <Label check>One Time</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="radio" name="2" />
                  <Label check>Monthly</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="radio" name="3" />
                  <Label check>Annually</Label>
                </FormGroup>
              </div>
            </div>
            <Button color="primary" size="lg" onClick={reset}>
              DONATE
            </Button>
          </div>
        </div>

        {/* THIS PART TOO */}

        <div className="right-body">
          <div className="redcross-image">a</div>
          <div className="spacer">s</div>
          <div className="progress1-bar">
            <Progress value={total} max={200} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
