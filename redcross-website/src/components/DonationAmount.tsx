import ShortInput from "./ShortInput";

interface DonationAmountProps {
  options: string[];
}

var donationAmount = "";

function setAmount(amount: string) {
  donationAmount = amount;
}

function DonationAmount(properties: DonationAmountProps) {
  return (
    <>
      <ShortInput
        name="Donation Amount: "
        id="donation-text"
        autocomplete="$0.00"
        value={""}
      />
      <div className="btn-group">
        {properties.options.map((optionValue, index) => (
          <button type="button" className="btn btn-primary" onClick={() => setAmount(optionValue)} key={index}>
            {optionValue}
          </button>
        ))}
      </div>
    </>
  );
}

export default DonationAmount;
