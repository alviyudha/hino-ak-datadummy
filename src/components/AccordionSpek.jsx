import React from 'react'
import { modelSpecData } from '../assets/js/models'
import { useParams } from 'react-router-dom';

export default function AccordionSpek() {
  let { modelName } = useParams();
  const getUrlSpecData = modelSpecData[modelName]
  return (
    <div className='shadow p-2' >
      <h3 className='border-bot-cust p-2 mb-3'>Full Spesifikasi</h3>
    <div className="accordion accordion-flush " id="accordionSpek">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-1" aria-expanded="false" aria-controls="panelStayopen-1">
        KAROSERI
      </button>
    </h2>
    <div id="panelStayopen-1" className="accordion-collapse collapse  show" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        {getUrlSpecData.karoseri.map((item, index) => (
    <div className="col-md-3 col-sm-2" key={index}>
      <img src={item.img} alt="" />
    </div>
  ))}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-2" aria-expanded="false" aria-controls="panelStayopen-2">
        PERFORMA
      </button>
    </h2>
    <div id="panelStayopen-2" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.performa.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-3" aria-expanded="false" aria-controls="panelStayopen-3">
        MODEL MESIN
      </button>
    </h2>
    <div id="panelStayopen-3" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.modelMesin.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-4" aria-expanded="false" aria-controls="panelStayopen-4">
        KOPLING
      </button>
    </h2>
    <div id="panelStayopen-4" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.kopling.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-5" aria-expanded="false" aria-controls="panelStayopen-5">
        TRANSMISI
      </button>
    </h2>
    <div id="panelStayopen-5" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.transmisi.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-6" aria-expanded="false" aria-controls="panelStayopen-6">
        KEMUDI
      </button>
    </h2>
    <div id="panelStayopen-6" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.kemudi.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-7" aria-expanded="false" aria-controls="panelStayopen-7">
        SUMBU
      </button>
    </h2>
    <div id="panelStayopen-7" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.sumbu.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-8" aria-expanded="false" aria-controls="panelStayopen-8">
        REM
      </button>
    </h2>
    <div id="panelStayopen-8" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.rem.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-9" aria-expanded="false" aria-controls="panelStayopen-9">
        RODA DAN BAN
      </button>
    </h2>
    <div id="panelStayopen-9" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.rodaBan.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-10" aria-expanded="false" aria-controls="panelStayopen-10">
        SISTEM LISTRIK ACCU
      </button>
    </h2>
    <div id="panelStayopen-10" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.sisListrikACCU.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-11" aria-expanded="false" aria-controls="panelStayopen-11">
        TANGKI SOLAR 
      </button>
    </h2>
    <div id="panelStayopen-11" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.tangkiSolar.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-12" aria-expanded="false" aria-controls="panelStayopen-12">
        DIMENSI
      </button>
    </h2>
    <div id="panelStayopen-12" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.dimensi.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-13" aria-expanded="false" aria-controls="panelStayopen-13">
        SUSPENSI
      </button>
    </h2>
    <div id="panelStayopen-13" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.suspensi.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelStayopen-14" aria-expanded="false" aria-controls="panelStayopen-14">
        BERAT CHASSIS
      </button>
    </h2>
    <div id="panelStayopen-14" className="accordion-collapse collapse" data-bs-parent="#accordionSpek">
      <div className="accordion-body">
        {/* content */}
        <table className="table table-hover">
            <tbody>
                {getUrlSpecData.beratChassis.map((item,index) =>(
                     <tr key={index}>
                     <th scope="row">{item.title}</th>
                     <td>{item.text}</td>
                     </tr>
                ))}
               
            </tbody>
            </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
