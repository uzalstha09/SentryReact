import axios from "axios";

const httpLogin = (email,password) => {
    return axios({
        method: "post",
        url: "",
        data: { email: email,password:password },
        config: {
            headers: { "Content-Type": "application/json" }
        }
    })
}

export default httpLogin;