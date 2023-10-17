import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;
  return (
    <div>
      <BillPrice bill={bill} onSetBill={setBill} />
      <YourRate percentage={percentage1} onSelect={setPercentage1} />
      <FriendRate percentage={percentage2} onSelect={setPercentage2} />
      <FullPayment bill={bill} tip={tip} />
      <Reset />
    </div>
  );
}

const BillPrice = ({ bill, onSetBill }) => {
  return (
    <>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </>
  );
};

const YourRate = ({ percentage, onSelect }) => {
  return (
    <div>
      <label>How did u like the service?</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Disatisfied(0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const FriendRate = ({ percentage, onSelect }) => {
  return (
    <div>
      <label>How did your friend like the service?</label>

      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Disatisfied(0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const FullPayment = ({ bill, tip }) => {
  return (
    <div>
      <h1>
        You pay {bill + tip}$({bill}$ + {tip}tip)
      </h1>
    </div>
  );
};

const Reset = () => {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
};
