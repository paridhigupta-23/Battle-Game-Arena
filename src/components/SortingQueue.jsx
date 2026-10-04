function SortingQueue({ steps }) {

  return (

    <div className="queue-box">

      <h2>
        ⚔ Sorting Queue
      </h2>

      {steps.map(
        (step,index)=>(
      <div
        key={index}
        className="queue-step"
      >

        Step {index+1}

        {" → "}

        {step.join(" , ")}

      </div>
      ))}

    </div>

  );

}

export default SortingQueue;