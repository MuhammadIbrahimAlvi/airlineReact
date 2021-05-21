import axios from 'axios';

const instance = axios.create({
    baseURl:"https://react-c5c41-default-rtdb.firebaseio.com/"
}
)
export default instance;