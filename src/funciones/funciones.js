import axios from "axios"

const miIP = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");

    return(res.data);
}

export const consultaDatos = async (ip) => {

    let ipConfig = "";
    if (ip == "") {
        const x = await miIP();
        ipConfig = x.ip;
    }else {
        ipConfig = ip;
    }

    const res = await axios.get(`https://api.geoapify.com/v1/ipinfo?ip=${ipConfig}&apiKey=dffae92e2da845b0865737de791b3b91`);

    return(res);
}
