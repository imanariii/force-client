import axios from "axios";
import { useContext } from "react";
import { Api } from "../context/Api";
import { Button } from "@mui/material";

const FetchCreateCategory = ({name, setFetching, description}) => {
  const state = useContext(Api)
  console.log(name, description)
  const axiosCreate = async () => {
    await axios.post(`${state.address}/category`, {
      name: name,
      description: description
    }, {
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
    <Button variant="contained" id="btn" color="success" onClick={()=>axiosCreate()}>
      Добавить
    </Button>
  )
}


export default FetchCreateCategory;