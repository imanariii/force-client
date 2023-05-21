import axios from "axios";

const editAddressUser = (state, id, newAddress) => {
    axios.patch(`${state.address}/user/${id}`, {
      "address": newAddress
    }).then(res=>{
      state.setAddress(newAddress)
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
}

export default editAddressUser;