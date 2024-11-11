import React, { useState } from 'react';
import { hello } from '../assets/images/importImages';
import { vehicleData } from '../assets/js/DataHino';

export default function InfoLengkapComp() {
  const [formData, setFormData] = useState({
    inputName: '',
    inputEmail: '',
    inputNoWhatsapp: '',
    typeUnit: 'Pilih Type Unit',
    inputMessage: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dapatkan data dari state
    const { inputName, inputEmail, inputNoWhatsapp, typeUnit, inputMessage } = formData;

    const whatsappNumber = '+6281248857822';

    const message = `Halo, Saya ingin melakukan konsultasi.\nNama: ${inputName}.\nEmail: ${inputEmail}\nNo Whatsapp: ${inputNoWhatsapp}\nType Unit: ${typeUnit}\nPesan: ${inputMessage}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect ke URL WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='container shadow p-3' id='infoLengkap'>
      <h3 className='anton-regular'>
        INFORMASI KURANG LENGKAP..? <br />
        YUK HUBUNGI KAMI <img src={hello} alt="Hino-ak hello" className='img-fluid' />
      </h3>

      <form onSubmit={handleSubmit} target="_blank">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="inputName"
            value={formData.inputName}
            onChange={handleInputChange}
            aria-describedby="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="inputEmail"
            value={formData.inputEmail}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputNoWhatsapp" className="form-label">No Whatsapp</label>
          <input
            type="tel"
            className="form-control"
            id="inputNoWhatsapp"
            name="inputNoWhatsapp"
            value={formData.inputNoWhatsapp}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="typeUnit"
            value={formData.typeUnit}
            onChange={handleInputChange}
          >
            <option disabled>Pilih Type Unit</option>
            {vehicleData.map((item, index) => (
              <optgroup key={index} label={item.type}>
                {item.models.map((model, modelIndex) => (
                  <option key={modelIndex} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputMessage" className="form-label">Pesan</label>
          <textarea
            className="form-control"
            id="inputMessage"
            name="inputMessage"
            value={formData.inputMessage}
            onChange={handleInputChange}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
