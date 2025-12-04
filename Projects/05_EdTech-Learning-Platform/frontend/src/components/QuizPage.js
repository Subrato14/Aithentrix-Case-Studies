import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { useParams } from "react-router-dom";

function QuizPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    API.get(`/quiz/${id}`).then(res => setQuiz(res.data));
  }, [id]);

  const submit = () => {
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    alert(`You scored ${score} / ${quiz.questions.length}`);
  };

  if (!quiz) return <p>Loading...</p>;
  return (
    <div style={{ padding: 20 }}>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((q, idx) => (
        <div key={idx}>
          <p>{q.question}</p>
          {q.options.map(opt => (
            <label key={opt}>
              <input type="radio" name={`q${idx}`} onChange={() => setAnswers({...answers, [idx]: opt})} />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default QuizPage;
