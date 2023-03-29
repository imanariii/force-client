import axios from "axios";
import { useContext } from "react";
import { Api } from "../context/Api";

const FetchCreateCategory = ({name, setFetching}) => {
  const state = useContext(Api)
  const axiosCreate = async () => {
    await axios.post('http://localhost:5000/api/category', { name: name }, {
      headers: {
        Authorization: 'Bearer ' + state.token
      }
      }).then((res) => {
        res.data.message ? state.notifyErr(res.data.message) :
          state.notifySuc('Успешно!')
      })

    setFetching(true)
    }
  return (
    <button onClick={()=>axiosCreate()}>
      Добавить
    </button>
  )
}


export default FetchCreateCategory;