import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("")

    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        }

        emailjs.send("service_r6jbblp", "template_12o5b0e", templateParams, "_jqi8JIXD90RD2hhQ")
            .then((response) => {
                console.log('Mensaje enviado exitosamente!', response.status);
            })
            .catch((error) => {
                console.error('Error al enviar el mensaje:', error);
            })

            setNombre("");
            setEmail("");
            setMensaje("");
    }

  return (
    <form onSubmit={enviarMensaje}>
        <label >Nombre:</label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        <br /><br />

        <label >Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <br /><br />

        <label >Mensaje:</label>
        <input type="text" onChange={(e) => setMensaje(e.target.value)} value={mensaje}/>
        <br /><br />

        <button type='submit'>Enviar mensaje</button>
    </form>
  )
}

export default ContactForm