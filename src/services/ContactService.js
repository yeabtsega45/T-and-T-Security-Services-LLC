import axios from "axios";


const sendContactMessage = async ({ full_name, email, phone, title, body}) => {
    try{
        const response = await axios.post("http://api.ttsecurityservicesllc.com/api/send_contact_mail", { full_name, email, phone, title, body});
        return response.data
    }catch (e) {
        throw new Error(e);
    }
}

const ContactService = {
    sendContactMessage,
}

export default ContactService;