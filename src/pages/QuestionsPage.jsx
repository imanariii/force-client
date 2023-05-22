import { Header } from "../components";
import { useContext } from "react";
import { Api } from "../context/Api";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/question.css'

const QuestionsPage = () => {
  const state = useContext(Api)
  const questions = [
    {
      title: 'Сколько стоит доставка по Ростову-На-Дону?',
      otvet: 'Для получения заказа из РНД мы с вами можем встретится лично, или же отправить ваш товар такси'
    },
    {
      title: 'Вернут ли мне деньги если я получу брак?',
      otvet: 'Мы всегда готовы пойти на встречу своим покупателям'
    },
    {
      title: 'Как мне быть уверенным, что вы меня не обманете?',
      otvet: 'Гарантом служат встреча лично, множества отзывов довольных покупателей и конечно то,что мы не скрываем наши лица в инстаграмм(Запрещенной соц. сети в РФ)'
    },
  ]

  return (
  <>
    <Header />
    <main>
      <div className={`question__wrapper-${state.theme}`}>
        <div className={`question__body-${state.theme}`}>
          <h1>Ответы на частые вопросы</h1>
          <div className="questions__list">
            {questions.map((question, i)=> (
              <Accordion style={{width: '100%'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>{question.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {question.otvet}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              ))}
          </div>
        </div>
      </div>
    </main>
    <Header />
  </>
  )
}

export default QuestionsPage;