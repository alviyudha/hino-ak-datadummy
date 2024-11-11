import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { vehicleData } from '../assets/js/DataHino';

export default function FormServiceComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telp: '',
    nopol: '',
    carModel: 'Jenis Kendaraan',
    dealer: 'Pilih Dealer',
    Date: '',
    inputMessage: '',
  });

  const dealerWhatsAppNumbers = {
    'Pilih Dealer': '',
    'Sorong': '+6281248857822',
    'Manokwari': '+6281248857822', 
    'Jayapura': '+6281248857822', 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, email, telp, nopol, carModel, dealer, DateService, inputMessage } = formData;
  
    if (carModel === 'Jenis Kendaraan' || dealer === 'Pilih Dealer') {
      alert('Silakan pilih Jenis Kendaraan dan Dealer terlebih dahulu.');
      return;
    }
  
    try {
      const whatsappNumber = dealerWhatsAppNumbers[dealer];
      if (whatsappNumber) {
        const messageWa = `Halo, Saya ingin melakukan booking service.\nNama: ${name}.\nEmail: ${email}\nTelp: ${telp}\nMobil yang digunakan: ${carModel}\nNOPOL: ${nopol}.\nDealer yang diinginkan: ${dealer}.\n Jadwal Services: ${DateService}\nPesan: ${inputMessage}`;
  
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageWa)}`;
        window.open(whatsappUrl, '_blank');
      } else {
        alert('Silakan pilih dealer terlebih dahulu.');
      }
    } catch (error) {
      alert('Terjadi kesalahan saat mengirim pesan WhatsApp.');
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id='formServices'>
    <form onSubmit={handleSubmit} target="_blank">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Masukkan Nama Lengkap Anda"
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formTelp">
          <Form.Label>Telp</Form.Label>
          <Form.Control
            type="tel"
            name="telp"
            value={formData.telp}
            onChange={handleInputChange}
            placeholder="Masukkan Nomor Telp Anda"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Masukkan Alamat Email Anda"
          />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formNopol">
        <Form.Label>No Pol Kendaraan</Form.Label>
        <Form.Control
          type="text"
          name="nopol"
          value={formData.nopol}
          onChange={handleInputChange}
          placeholder="Ex B 123 CDS"
        />
      </Form.Group>
      <div className="mb-3">
      <Form.Label>Pilih Type Unit</Form.Label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="carModel"
            value={formData.carModel}
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
      <Form.Group as={Col} controlId="formDateService">
        <Form.Label>Jadwal Service</Form.Label>
        <Form.Control
          type="date"
          name="DateService"
          value={formData.DateService}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formSelectDealer">
        <Form.Label>Pilih Dealer</Form.Label>
        <Form.Control
          as="select"
          name="dealer"
          value={formData.dealer}
          onChange={handleInputChange}
        >
          <option value="Pilih Dealer">Pilih Dealer</option>
          <option value="Sorong">Sorong</option>
          <option value="Manokwari">Manokwari</option>
          <option value="Jayapura">Jayapura</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="formAddress">
        <Form.Label>Alamat</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="inputMessage"
          value={formData.inputMessage}
          onChange={handleInputChange}
          placeholder="Masukkan Alamat Anda"
        />
      </Form.Group>
      <button  type="submit" className="mt-5 btn-green">
        Submit
      </button>
    </form>
    </div>
  );
}
