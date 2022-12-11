import { Header, Question } from "../components";
import '../styles/sign.css';
import { useContext } from "react";
import { Api } from "../context/Api";

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
      <div className={`sign__wrapper-${state.theme}`}>
        <div className={`sign__body-${state.theme}`}>
          <h1>Ответы на частые вопросы</h1>
          <div className="questions__list">
            {questions.map(question=> <Question question={question} />) }
          </div>
        </div>
      </div>
    </main>
    <Header />
  </>
  )
}

export default QuestionsPage;