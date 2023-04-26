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

    const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_GPAOxXtP7h3UjoV6YursmPFBQUg6a&ipAddress=${ipConfig}`);

    return(res);
}
