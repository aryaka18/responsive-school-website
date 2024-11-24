import React from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8fba8f5e-bb6d-424d-ae7c-64ef750501aa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
        jangan ragu untuk menghubungi kami melalui formulir kontak atau temukan informasi kontak kami di bawah ini. umpan balik, pertanyaan, dan saran Anda sangat penting bagi kami karena kami berusaha untuk memberikan layanan yang luar biasa kepada komunitas universitas kami
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            8397913
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            jakarta barat <br />
            indonesia
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Nama anda</label>
            <input type="text" name="name" placeholder="masukkan nama anda" required />
            <label> nomer telepon</label>
            <input type="tel" name="phone" placeholder="masukkan nomer hp anda" required/>
            <label>tulis pesan disini</label>
            <textarea name="message" rows="10" placeholder="tulis pesanmu disini"></textarea>
            <button type="submit" className="btn dark-btn">
                Kirim 
                <img src={white_arrow} alt=""/>                
            </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
