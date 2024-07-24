import SingleQuestion from "./SingleQuestion"

function Questions({questions,activeId,toggleQuestion}) {
  return (
    <section className="container">
        <h1>Questions</h1>
        {questions.map((question)=>{
            return <SingleQuestion {...question} key={question.id} toggleQuestion={toggleQuestion} activeId={activeId}/>
        })}
    </section>
  )
}
export default Questions