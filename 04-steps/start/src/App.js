import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]; 

const App = () => {
  return <div>
    <Steps />
  </div> 
}
const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep(s=> s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(s => s + 1);
  };

  const handleClose = () => {
      setIsOpen(is => !is);
  };
  return (
    <> 
    <button className="close" onClick={handleClose}>&times;</button>
    {isOpen ? 
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : null}>1</div>
        <div className={step >= 2 ? "active" : null}>2</div>
        <div className={step >= 3 ? "active" : null}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}{" "}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div> : null}
    </>
  );
};

export default App;
