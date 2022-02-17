

function Question({data}) {
    console.log("question data is: ", data)
    return (
      <div className="App">
          {data.question_text}
      </div>
    );
  }
  
  export default Question;
  