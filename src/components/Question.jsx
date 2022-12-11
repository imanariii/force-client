import { Button } from "@mui/material";
import { useState } from "react"
const Question = ({question}) => {
  const [quest, setQuest] = useState(false);
  return (
    <div className="question-item">
      <h3>{question.title}</h3>
      <Button variant="contained" onClick={()=>setQuest(!quest)}>{ quest ? 'Закрыть ответ' : 'Посмотреть ответ' }</Button>
      <h4 style={{opacity: `${quest ? 1 : 0}`}}>{question.otvet}</h4>
    </div>
  )
}

export default Question;