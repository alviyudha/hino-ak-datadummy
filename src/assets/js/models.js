import { krsAmbulance, krsAngKendaraanTractor, krsBakBerpendingin, krsBakTerbuka, krsBakTerbuka4x2, krsBokPendingin4x2, krsBoksDutro,krsBoksRanger6x2,krsBusbesarMesinBlk,krsBusbesarMesinDpn,krsContainer20Feet, krsContainer40Feet, krsDump, krsDump8x2, krsDumpCoalRaner, krsLosBakFlatBed, krsLowBedTractor, krsMikroMedium, krsMobilPemadam, krsTangkiGas, krsTangkiTractor, krsTankiTank, krsTrucSampah, krsTruckCrane, krsTruckCrane4x2, krsTrukAngkut4x2, krsTrukArmRoll, krsTrukLogging, krsTrukLogging4x2, krsTrukMolenMixer, krsTrukTanki4x2 } from "../images/importImages";

export const modelSpecData = {
  // hino 300
    '115-sd-std-euro4': {
      karoseri: [
        { img: krsBoksDutro  },
        { img: krsBakTerbuka },
        { img: krsLosBakFlatBed },
        { img: krsBakBerpendingin }
       
      ],
      performa: [
        {
         
          title: 'Kecepatan Maksimum (kmh)',
          text: '122',
        },
        {
         
          title: 'Daya Tanjak (tan %)',
          text: '46,7',
        },
       
      ],
      modelMesin: [
        {
          title: 'Model',
          text: 'N04C-WV',
        },
        {
          title: 'Model Tipe',
          text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
        },
        {
          title: 'Tenaga Maksimum (PS/rpm)',
          text: '115 / 2.500',
        },
        {
          title: 'Daya maksimum (Kgm/rpm)',
          text: '36 /1.200-2.200',
        },
        {
          title: 'Jumlah silinder',
          text: '4',
        },
        {
          title: 'Diameter x Langkah Piston (mm)',
          text: '104 x 118',
        },
        {
          title: 'Isi Silinder (cc)',
          text: '4,009',
        },
       
      ],
      kopling: [
        {
         
          title: 'Tipe',
          text: 'Pelat Kering Tunggal; Hydraulic Operation',
        },
        {
         
          title: 'Diameter Cakram (mm)',
          text: '300',
        },
        
      ],
      transmisi: [
        {
         
          title: 'Tipe',
          text: 'RE50',
        },
        {
         
          title: 'Ke-1',
          text: '5,342',
        },
        {
         
          title: 'Ke-2',
          text: '2,975',
        },
        {
         
          title: 'Ke-3',
          text: '	1,604',
        },
        {
         
          title: 'Ke-4',
          text: '1,000',
        },
        {
         
          title: 'Ke-5',
          text: '	0,712',
        },
        {
         
          title: 'Mundur',
          text: '	4,970',
        },
       
      ],
      kemudi: [
        {
         
          title: 'Tipe',
          text: 'Power Steering (Recirculating Ball Screw)',
        },
        {
         
          title: 'Minimal Radius Putar (m)',
          text: '5,8',
        },
        
      ],
      sumbu: [
        {
         
          title: 'Depan',
          text: 'Reverse Elliot,I-Section Beam',
        },
        {
         
          title: 'Belakang',
          text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
        },
        {
         
          title: 'Perbandingan Gigi Akhir',
          text: '4,625',
        },
        
      ],
      rem: [
        {
         
          title: 'Rem Utama',
          text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
        },
        {
         
          title: 'Rem Pelambat',
          text: 'Terletak pada Pipa Gas Buang',
        },
        {
         
          title: 'Rem Parkir',
          text: 'Internal Expanding pada Output Shaft Transmission',
        },
        
      ],
      rodaBan: [
        {
         
          title: 'Ukuran Ban',
          text: '7.50-15-14PR',
        },
        {
         
          title: 'Ukuran Rim',
          text: '15 x 5.50F-30',
        },
        {
         
          title: 'Jumlah Ban',
          text: '4 (+1)',
        },
        
      ],
      sisListrikACCU: [
        {
         
          title: 'Accu (V-Ah)',
          text: '12V-100Ah x 1',
        },
        
      ],
      tangkiSolar: [
        {
         
          title: 'Kapasitas (L)',
          text: '100',
        },
        
      ],
      dimensi: [
        {
         
          title: 'Jarak Sumbu Roda WB (mm)',
          text: '2.530',
        },
        {
         
          title: 'Total Panjang OL (mm)',
          text: '4.745',
        },
        {
         
          title: 'Total Lebar OW (mm)',
          text: '1.717',
        },
        {
         
          title: 'Total Tinggi OH (mm)',
          text: '2.118',
        },
        {
         
          title: 'Lebar Jejak Depan FR Tr (mm)',
          text: '1.415',
        },
        {
         
          title: 'Lebar Jejak Belakang RR Tr (mm)',
          text: '1.420',
        },
        {
         
          title: 'Julur Depan FOH (mm)',
          text: '1.066',
        },
        {
         
          title: 'Julur Belakang ROH (mm)',
          text: '1.149',
        },
        {
         
          title: 'Kabin Kesumbu Roda Belakang CA (mm)',
          text: '2.050',
        },
        
      ],
      suspensi: [
        {
         
          title: 'Depan & Belakang',
          text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
        },
        
      ],
      beratChassis: [
        {
         
          title: 'Berat Kosong (kg)',
          text: '1.970',
        },
        {
         
          title: 'Berat Total Kendaraan (kg)',
          text: '5.400',
        },
        
      ],

    },
    '115-sdr-std-euro4': {
  karoseri: [
    { img: krsBoksDutro  },
    { img: krsBakTerbuka },
    { img: krsLosBakFlatBed },
  ],
  performa: [
    {
      title: 'Kecepatan Maksimum (kmh)',
      text: '122',
    },
    {
      title: 'Daya Tanjak (tan %)',
      text: '46,7',
    },
  ],
  modelMesin: [
    {
      title: 'Model',
      text: 'N04C-WV',
    },
    {
      title: 'Model Tipe',
      text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
    },
    {
      title: 'Tenaga Maksimum (PS/rpm)',
      text: '115 / 2,500',
    },
    {
      title: 'Daya maksimum (Kgm/rpm)',
      text: '36 /1.200-2.200',
    },
    {
      title: 'Jumlah silinder',
      text: '4',
    },
    {
      title: 'Diameter x Langkah Piston (mm)',
      text: '104 x 118',
    },
    {
      title: 'Isi Silinder (cc)',
      text: '4009',
    },
  ],
  kopling: [
    {
      title: 'Tipe',
      text: 'Pelat Kering Tunggal; Hydraulic Operation',
    },
    {
      title: 'Diameter Cakram (mm)',
      text: '300',
    },
  ],
  transmisi: [
    {
      title: 'Tipe',
      text: 'RE50',
    },
    {
      title: 'Ke-1',
      text: '5,342',
    },
    {
      title: 'Ke-2',
      text: '2,975',
    },
    {
      title: 'Ke-3',
      text: '1,604',
    },
    {
      title: 'Ke-4',
      text: '1,000',
    },
    {
      title: 'Ke-5',
      text: '0,712',
    },
    {
      title: 'Mundur',
      text: '4,970',
    },
  ],
  kemudi: [
    {
      title: 'Tipe',
      text: 'Power Steering (Recirculating Ball Screw)',
    },
    {
      title: 'Minimal Radius Putar (m)',
      text: '5,5',
    },
  ],
  sumbu: [
    {
      title: 'Depan',
      text: 'Reverse Elliot,I-Section Beam',
    },
    {
      title: 'Belakang',
      text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
    },
    {
      title: 'Perbandingan Gigi Akhir',
      text: '4,625',
    },
  ],
  rem: [
    {
      title: 'Rem Utama',
      text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
    },
    {
      title: 'Rem Pelambat',
      text: 'Terletak pada Pipa Gas Buang',
    },
    {
      title: 'Rem Parkir',
      text: 'Internal Expanding pada Output Shaft Transmission',
    },
  ],
  rodaBan: [
    {
      title: 'Ukuran Ban',
      text: '7.50-15-14PR',
    },
    {
      title: 'Ukuran Rim',
      text: '15 x 5.50F-30',
    },
    {
      title: 'Jumlah Ban',
      text: '4 (+1)',
    },
  ],
  sisListrikACCU: [
    {
      title: 'Accu (V-Ah)',
      text: '12V-100Ah x 1',
    },
  ],
  tangkiSolar: [
    {
      title: 'Kapasitas (L)',
      text: '100',
    },
  ],
  dimensi: [
    {
      title: 'Jarak Sumbu Roda WB (mm)',
      text: '2.530',
    },
    {
      title: 'Total Panjang OL (mm)',
      text: '5.090',
    },
    {
      title: 'Total Lebar OW (mm)',
      text: '1.720',
    },
    {
      title: 'Total Tinggi OH (mm)',
      text: '2.118',
    },
    {
      title: 'Lebar Jejak Depan FR Tr (mm)',
      text: '1.415',
    },
    {
      title: 'Lebar Jejak Belakang RR Tr (mm)',
      text: '1.420',
    },
    {
      title: 'Julur Depan FOH (mm)',
      text: '1.065',
    },
    {
      title: 'Julur Belakang ROH (mm)',
      text: '1.495',
    },
    {
      title: 'Kabin Kesumbu Roda Belakang CA (mm)',
      text: '2.050',
    },
  ],
  suspensi: [
    {
      title: 'Depan & Belakang',
      text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
    },
  ],
  beratChassis: [
    {
      title: 'Berat Kosong (kg)',
      text: '1,980',
    },
    {
      title: 'Berat Total Kendaraan (kg)',
      text: '5.400',
    },
  ],
},
    '115-sdl-std-euro4': {
  karoseri: [
    { img: krsBoksDutro },
    { img: krsBakTerbuka},
    { img: krsLosBakFlatBed },
    { img: krsBakBerpendingin }
  ],
  performa: [
    {
      title: 'Kecepatan Maksimum (kmh)',
      text: '122',
    },
    {
      title: 'Daya Tanjak (tan %)',
      text: '46,7',
    },
  ],
  modelMesin: [
    {
      title: 'Model',
      text: 'N04C-WV',
    },
    {
      title: 'Model Tipe',
      text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
    },
    {
      title: 'Tenaga Maksimum (PS/rpm)',
      text: '115 / 2.500',
    },
    {
      title: 'Daya maksimum (Kgm/rpm)',
      text: '36 /1.200-2.200',
    },
    {
      title: 'Jumlah silinder',
      text: '4',
    },
    {
      title: 'Diameter x Langkah Piston (mm)',
      text: '104 x 118',
    },
    {
      title: 'Isi Silinder (cc)',
      text: '4,009',
    },
  ],
  kopling: [
    {
      title: 'Tipe',
      text: 'Pelat Kering Tunggal; Hydraulic Operation',
    },
    {
      title: 'Diameter Cakram (mm)',
      text: '300',
    },
  ],
  transmisi: [
    {
      title: 'Tipe',
      text: 'RE50',
    },
    {
      title: 'Ke-1',
      text: '5,342',
    },
    {
      title: 'Ke-2',
      text: '2,975',
    },
    {
      title: 'Ke-3',
      text: '1,604',
    },
    {
      title: 'Ke-4',
      text: '1,000',
    },
    {
      title: 'Ke-5',
      text: '0,712',
    },
    {
      title: 'Mundur',
      text: '4,970',
    },
  ],
  kemudi: [
    {
      title: 'Tipe',
      text: 'Power Steering (Recirculating Ball Screw)',
    },
    {
      title: 'Minimal Radius Putar (m)',
      text: '7,3',
    },
  ],
  sumbu: [
    {
      title: 'Depan',
      text: 'Reverse Elliot,I-Section Beam',
    },
    {
      title: 'Belakang',
      text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
    },
    {
      title: 'Perbandingan Gigi Akhir',
      text: '4,625',
    },
  ],
  rem: [
    {
      title: 'Rem Utama',
      text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
    },
    {
      title: 'Rem Pelambat',
      text: 'Terletak pada Pipa Gas Buang',
    },
    {
      title: 'Rem Parkir',
      text: 'Internal Expanding pada Output Shaft Transmission',
    },
  ],
  rodaBan: [
    {
      title: 'Ukuran Ban',
      text: '7.50-15-14PR',
    },
    {
      title: 'Ukuran Rim',
      text: '15 x 5.50F-30',
    },
    {
      title: 'Jumlah Ban',
      text: '4 (+1)',
    },
  ],
  sisListrikACCU: [
    {
      title: 'Accu (V-Ah)',
      text: '12V-100Ah x 1',
    },
  ],
  tangkiSolar: [
    {
      title: 'Kapasitas (L)',
      text: '100',
    },
  ],
  dimensi: [
    {
      title: 'Jarak Sumbu Roda WB (mm)',
      text: '3.405',
    },
    {
      title: 'Total Panjang OL (mm)',
      text: '6.430',
    },
    {
      title: 'Total Lebar OW (mm)',
      text: '1.720',
    },
    {
      title: 'Total Tinggi OH (mm)',
      text: '2.115',
    },
    {
      title: 'Lebar Jejak Depan FR Tr (mm)',
      text: '1.415',
    },
    {
      title: 'Lebar Jejak Belakang RR Tr (mm)',
      text: '1.420',
    },
    {
      title: 'Julur Depan FOH (mm)',
      text: '1.065',
    },
    {
      title: 'Julur Belakang ROH (mm)',
      text: '1.960',
    },
    {
      title: 'Kabin Kesumbu Roda Belakang CA (mm)',
      text: '2.925',
    },
  ],
  suspensi: [
    {
      title: 'Depan & Belakang',
      text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
    },
  ],
  beratChassis: [
    {
      title: 'Berat Kosong (kg)',
      text: '2,030',
    },
    {
      title: 'Berat Total Kendaraan (kg)',
      text: '5.400',
    },
  ],
},

  '115-ld-std-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka },
      { img: krsTankiTank },
      { img: krsLosBakFlatBed },
      { img: krsBakBerpendingin },
      { img: krsTruckCrane }
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (kmh)',
        text: '110',
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '36,9',
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WV',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS/rpm)',
        text: '115 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm/rpm)',
        text: '36 /1.200-2.200',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50',
      },
      {
        title: 'Ke-1',
        text: '5,342',
      },
      {
        title: 'Ke-2',
        text: '2,975',
      },
      {
        title: 'Ke-3',
        text: '1,604',
      },
      {
        title: 'Ke-4',
        text: '1,000',
      },
      {
        title: 'Ke-5',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4,970',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,3',
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,125',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.00-16-14PR',
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 5.50F-115',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu (V-Ah)',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.435',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.970',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.141',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.405',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.435',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.900',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.900',
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2,230',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '7.000',
      },
    ],
  },
  '136-md-std-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka },
      { img: krsTankiTank },
      { img: krsLosBakFlatBed },
      { img: krsBakBerpendingin },
      { img: krsTruckCrane },
      { img: krsMobilPemadam }
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '123',
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '36,7',
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS/rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm/rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50',
      },
      {
        title: 'Ke-1',
        text: '5,342',
      },
      {
        title: 'Ke-2',
        text: '2,975',
      },
      {
        title: 'Ke-3',
        text: '1,604',
      },
      {
        title: 'Ke-4',
        text: '1,000',
      },
      {
        title: 'Ke-5',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4,970',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,8',
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,125',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR',
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu (V-Ah)',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.345',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.955',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.155',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.900',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.900',
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.250',
      },
      {
        title: 'Berat Kosong (kg)',
        text: '2,280',
      },
    ],
  },
  '115hd-euro4': {
    karoseri: [
      { img: krsTankiTank },
      { img: krsDump },
      { img: krsLosBakFlatBed },
      { img: krsBakBerpendingin },
      { img: krsTrukLogging },
      { img: krsTruckCrane },
      { img: krsMobilPemadam },
      { img: krsTrukArmRoll }
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '107',
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '38,5',
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WV',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '115 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '36 / 1.200-2.200',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4.009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50',
      },
      {
        title: 'Ke-1',
        text: '5,342',
      },
      {
        title: 'Ke-2',
        text: '2,975',
      },
      {
        title: 'Ke-3',
        text: '1,604',
      },
      {
        title: 'Ke-4',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4,970',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,8',
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428',
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.025',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.945',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.154',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.580',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.900',
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.410',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '7.500',
      },
    ],
  },
  '136hd-euro4': {
    karoseri: [
      { img: krsTankiTank },
      { img: krsDump },
      { img: krsLosBakFlatBed },
      { img: krsBakBerpendingin },
      { img: krsTrukLogging },
      { img: krsTruckCrane },
      { img: krsMobilPemadam },
      { img: krsTrukArmRoll } // Menambahkan krsTrukArmRoll
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '98/92', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '42,9/46,2', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4.009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50',
      },
      {
        title: 'Ke-1',
        text: '5,342',
      },
      {
        title: 'Ke-2',
        text: '2,975',
      },
      {
        title: 'Ke-3',
        text: '1,604',
      },
      {
        title: 'Ke-4',
        text: '1,000',
      },
      {
        title: 'Ke-5',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4,970',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,8',
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428/6,833', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '2.900', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '6.026', // Memperbarui nilai
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '1.945',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.154',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.066', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '1.580',
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.400', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600', // Memperbarui nilai
      },
    ],
  },
  '136-mdl-std-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka },
      { img: krsTankiTank },
      { img: krsLosBakFlatBed },
      { img: krsBakBerpendingin },
      { img: krsTruckCrane },
      { img: krsMobilPemadam },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '123', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '36,7', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009', // Memperbarui format nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50',
      },
      {
        title: 'Ke-1',
        text: '5.342', // Memperbarui format nilai
      },
      {
        title: 'Ke-2',
        text: '2.975', // Memperbarui format nilai
      },
      {
        title: 'Ke-3',
        text: '1.604', // Memperbarui format nilai
      },
      {
        title: 'Ke-4',
        text: '1.000',
      },
      {
        title: 'Ke-5',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4.970', // Memperbarui format nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar',
        text: '8,0', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,125', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR',
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.000', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.184', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.955', // Memperbarui nilai
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.153', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.070', // Memperbarui nilai
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.114', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.520', // Memperbarui nilai
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.360', // Memperbarui format nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.250', // Memperbarui nilai
      },
    ],
  },
  '136-hdx-euro4': {
    karoseri: [
      { img: krsTankiTank },
      { img: krsDump },
      { img: krsLosBakFlatBed },
      { img: krsBakBerpendingin },
      { img: krsTrukLogging },
      { img: krsTruckCrane },
      { img: krsMobilPemadam },
      { img: krsTrukArmRoll }
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '109/93', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '47,5/58,1', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '6,370',
      },
      {
        title: 'Ke-2',
        text: '3,870',
      },
      {
        title: 'Ke-3',
        text: '1,913',
      },
      {
        title: 'Ke-4',
        text: '1,461',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Mundur',
        text: '5,926', // Memperbarui format nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,9', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857/6,833', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.026',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.945',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.154',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.066',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.580',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.900',
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.410', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600',
      },
    ],
  },
  '136-hdl-euro4': {
    karoseri: [
     { img: krsBoksDutro },
      { img: krsBakTerbuka },
      { img: krsTankiTank },
      { img: krsLosBakFlatBed },
      { img: krsBakBerpendingin },
      { img: krsTruckCrane },
      { img: krsMobilPemadam },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '109/99', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '47.5/53.5', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61',
      },
      {
        title: 'Ke-1',
        text: '6,370',
      },
      {
        title: 'Ke-2',
        text: '3,870',
      },
      {
        title: 'Ke-3',
        text: '1,913',
      },
      {
        title: 'Ke-4',
        text: '1,461',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,703', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '5,926',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,9', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857/6,428', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR',
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.000',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.185',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.955',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.153',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.120',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.520', // Memperbarui nilai
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2,440', // Memperbarui format nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600',
      },
    ],
  },
  '136-hdx-mixer-euro4': {
    karoseri: [
     { img: krsTrukMolenMixer },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '109', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '47,5', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '6,370',
      },
      {
        title: 'Ke-2',
        text: '3,870',
      },
      {
        title: 'Ke-3',
        text: '1,913',
      },
      {
        title: 'Ke-4',
        text: '1,461',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,703', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '5,926',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,9', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.000',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.185',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.955',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.153',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.120',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.900', // Memperbarui nilai
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.410',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600',
      },
    ],
  },

  '136-hd-plantation-euro4': {
    karoseri: [
      { img: krsBakTerbuka },
      { img: krsDump },
      { img: krsTrukLogging },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '109', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '47,5', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '6.370',
      },
      {
        title: 'Ke-2',
        text: '3.870',
      },
      {
        title: 'Ke-3',
        text: '1.913',
      },
      {
        title: 'Ke-4',
        text: '1.461',
      },
      {
        title: 'Ke-5',
        text: '1.000',
      },
      {
        title: 'Ke-6',
        text: '0,703', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '5.926',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,9', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR (LUG)', // Memperbarui format nilai
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.026',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.945',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.154',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.066',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.580',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.900', // Memperbarui nilai
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.410',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600',
      },
    ],
  }
,
  '136hdx-lsd-euro4': {
    karoseri: [
      { img: krsBakTerbuka },
      { img: krsTankiTank },
      { img: krsDump },
      { img: krsTrukLogging },
      { img: krsTruckCrane },
      { img: krsMobilPemadam },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '93', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '58,1', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61',
      },
      {
        title: 'Ke-1',
        text: '6,370',
      },
      {
        title: 'Ke-2',
        text: '3,870',
      },
      {
        title: 'Ke-3',
        text: '1,913',
      },
      {
        title: 'Ke-4',
        text: '1,461',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Mundur',
        text: '5,926',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,9',
      },
    ],
    sumbu: [
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,833', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR (LUG)',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.900',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.026',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.945',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.154',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.066',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.580',
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.410',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600',
      },
    ],
  },

  // hino 500
  'fg-260-ju-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum JIS Gross (PS/rpm)',
        text: '265/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum JIS Gross (Kgm/rpm)',
        text: '82/1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum ISO-NET (PS/rpm)',
        text: '260/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum ISO-NET (Kgm/rpm)',
        text: '81/1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui format nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4.736',
      },
      {
        title: 'Ke-3',
        text: '2.738',
      },
      {
        title: 'Ke-4',
        text: '1.651',
      },
      {
        title: 'Ke-5',
        text: '1.000',
      },
      {
        title: 'Ke-6',
        text: '0,787',
      },
      {
        title: 'Ke-7',
        text: '0,649',
      },
      {
        title: 'Mundur',
        text: '7.839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '11,7', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake', // Memperbarui nilai
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '10.00-20-16PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.00V-162',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '7.030', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.745',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.640',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '6.650', // Memperbarui nilai
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.770',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },
  'fg-260-th-euro4': {
    karoseri: [
      { img: krsTangkiTractor },
      { img: krsTangkiGas },
      { img: krsLowBedTractor },
      { img: krsAngKendaraanTractor  },
      { img:krsContainer20Feet },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '109', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum JIS Gross (PS/rpm)',
        text: '265/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum JIS Gross (Kgm/rpm)',
        text: '82/1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum ISO-NET (PS/rpm)',
        text: '260/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum ISO-NET (Kgm/rpm)',
        text: '81/1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '122 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui format nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787',
      },
      {
        title: 'Ke-7',
        text: '0,649',
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,4', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake', // Memperbarui nilai
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '10.00-R20-16PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.580', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '5.785', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '925', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.750', // Memperbarui nilai
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5,860', // Memperbarui format nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '34.000', // Memperbarui format nilai
      },
    ],
  },
  'fmx-280-th-euro4': {
    karoseri: [
      { img: krsTangkiTractor },
      { img: krsLowBedTractor },
      { img: krsAngKendaraanTractor  },
      { img:krsContainer20Feet },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '85', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '34', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum JIS Gross (PS/rpm)',
        text: '285/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum JIS Gross (Kgm/rpm)',
        text: '85/1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum ISO-NET (PS/rpm)',
        text: '260/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum ISO-NET (Kgm/rpm)',
        text: '84/1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '122 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui format nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14.056', // Menambahkan nilai baru
      },
      {
        title: 'Ke-1',
        text: '9.647', // Menambahkan nilai baru
      },
      {
        title: 'Ke-2',
        text: '6.993', // Menambahkan nilai baru
      },
      {
        title: 'Ke-3',
        text: '5.021', // Menambahkan nilai baru
      },
      {
        title: 'Ke-4',
        text: '3.636', // Menambahkan nilai baru
      },
      {
        title: 'Ke-5',
        text: '2.653', // Menambahkan nilai baru
      },
      {
        title: 'Ke-6',
        text: '1.923', // Menambahkan nilai baru
      },
      {
        title: 'Ke-7',
        text: '1.380', // Menambahkan nilai baru
      },
      {
        title: 'Ke-8',
        text: '1.000', // Menambahkan nilai baru
      },
      {
        title: 'Mundur',
        text: '13.636', // Menambahkan nilai baru
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,1', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui format nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS as Variant)', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake', // Memperbarui nilai
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R22.5-148/145', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.280+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.790', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.730', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '860', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.125',
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic & Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7.230', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kombinasi (kg)',
        text: '38.000', // Memperbarui nilai
      },
    ],
  },
  'flx-280-jw-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka },
      { img: krsLosBakFlatBed },
      { img: krsTankiTank },
      { img: krsBakBerpendingin },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '86', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '41', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum JIS Gross (PS/rpm)',
        text: '285/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum JIS Gross (Kgm/rpm)',
        text: '85/1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum ISO-NET (PS/rpm)',
        text: '280/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum ISO-NET (Kgm/rpm)',
        text: '84/1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui format nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Menambahkan nilai baru
      },
      {
        title: 'Ke-1',
        text: '9,647', // Menambahkan nilai baru
      },
      {
        title: 'Ke-2',
        text: '6,993', // Menambahkan nilai baru
      },
      {
        title: 'Ke-3',
        text: '5,021', // Menambahkan nilai baru
      },
      {
        title: 'Ke-4',
        text: '3,636', // Menambahkan nilai baru
      },
      {
        title: 'Ke-5',
        text: '2,653', // Menambahkan nilai baru
      },
      {
        title: 'Ke-6',
        text: '1,923', // Menambahkan nilai baru
      },
      {
        title: 'Ke-7',
        text: '1,380', // Menambahkan nilai baru
      },
      {
        title: 'Ke-8',
        text: '1,000', // Menambahkan nilai baru
      },
      {
        title: 'Mundur',
        text: '13,636', // Menambahkan nilai baru
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '11,8', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '12 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '1.850+4.180+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.990', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.790', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.380',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.230', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '5.975', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic & Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '8.540', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '32.000', // Memperbarui nilai
      },
    ],
  },
  'fg-260-jk-abs-euro4': {
    karoseri: [
      { img: krsTankiTank },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum JIS Gross (PS/rpm)',
        text: '265/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum JIS Gross (Kgm/rpm)',
        text: '82/1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum ISO-NET (PS/rpm)',
        text: '260/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum ISO-NET (Kgm/rpm)',
        text: '81/1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '7,305', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '4.736', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '2.738', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '1.651', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '1000', // Memperbarui format nilai
      },
      {
        title: 'Ke-6',
        text: '0,787', // Memperbarui format nilai
      },
      {
        title: 'Ke-7',
        text: '0,649', // Memperbarui format nilai
      },
      {
        title: 'Mundur',
        text: '7,839', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,9',
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS)', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.630', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.150', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835', // Memperbarui nilai
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.240',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.800', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.480', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000', // Memperbarui nilai
      },
    ],
  },
  'fm-280-jd-abs-euro4': {
    karoseri: [
      { img: krsDump },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '77', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '60', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum JIS Gross (PS/rpm)',
        text: '285/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum JIS Gross (Kgm/rpm)',
        text: '85/1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum ISO-NET (PS/rpm)',
        text: '280/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum ISO-NET (Kgm/rpm)',
        text: '84/1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '9647', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '6993', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '5021', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '3636', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '2653', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1923', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1380', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '1000', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '13636', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,2', // Memperbarui format nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS)',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R22.5-148/145', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.030+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.600',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.760', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860', // Memperbarui nilai
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.940',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.875', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic', // Menambahkan informasi baru
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,635', // Memperbarui format nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000', // Memperbarui nilai
      },
    ],
  },
  'fl-260-jn-abs-euro4': {
    karoseri: [
      { img: krsTankiTank },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '111', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '26', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum JIS Gross (PS/rpm)',
        text: '265/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum JIS Gross (Kgm/rpm)',
        text: '82/1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum ISO-NET (PS/rpm)',
        text: '260/2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum ISO-NET (Kgm/rpm)',
        text: '81/1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '7,305', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '4.736', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '2.738', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '1.651', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '1.000', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '0,787', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '0,649', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '7.839', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,2', // Memperbarui format nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS)',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R22.5-148/145', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.030+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.950', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.775', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835', // Memperbarui nilai
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '2.290', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.875', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic', // Menambahkan informasi baru
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,165', // Memperbarui format nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },

  'sg-280-th-abs-euro4': {
    karoseri: [
      { img: krsTangkiTractor },
      { img: krsTangkiGas },
      { img: krsLowBedTractor },
      { img: krsAngKendaraanTractor  },
      { img:krsContainer20Feet },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '89', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '31', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '285 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '85 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '280 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '84 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '9,647', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '6,993', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '5,021', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '3,636', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '2,653', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1,923', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1,380', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '13,636', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,4', // Memperbarui format nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS)',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R22.5-148/145', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X7.50-162', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3,580', // Memperbarui format nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '5.845', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.720', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '985', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.580', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.960', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '37.000', // Memperbarui nilai
      },
    ],
  },
  'sg-280-th-euro4': {
    karoseri: [
      { img: krsTangkiTractor },
      { img: krsLowBedTractor },
      { img: krsAngKendaraanTractor  },
      { img: krsTangkiTractor },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '89', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '31', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '285 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '85 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '280 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '84 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '9,647', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '6,993', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '5,021', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '3,636', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '2,653', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1,923', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1,380', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '13,636', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,4', // Memperbarui format nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R22.5-148/145', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X7.50-162', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.580', // Memperbarui format nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '5.845', // Memperbarui nilai
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.720', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '985', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.750', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '', // Menunggu informasi
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '', // Menunggu informasi
      },
    ],
  },
  'fl-260-jw-abs-euro4': {
    karoseri: [
      { img: krsTankiTank },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '111', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '26', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '265 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '82 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '260 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '81 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '7,305', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '4.736', // Memperbarui format nilai
      },
      {
        title: 'Ke-3',
        text: '2.738', // Memperbarui format nilai
      },
      {
        title: 'Ke-4',
        text: '1.651', // Memperbarui format nilai
      },
      {
        title: 'Ke-5',
        text: '1.000',
      },
      {
        title: 'Ke-6',
        text: '0,787', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '0,649', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '7.839', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '11,5', // Memperbarui format nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS)', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R22.5-148/145', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.130+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.770',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.190', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '5.975', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7.460', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000', // Memperbarui nilai
      },
    ],
  },
  'fm-280-th-euro4': {
    karoseri: [
      { img: '' },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '83', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '34', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '285 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '85 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '280 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '84 / 1.500', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '9647', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '6993', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '5021', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '3636', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '2653', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1923', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1380', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '1000', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '13636', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,0', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R22.5-148/145', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X7.50-162', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.280+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.745',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: 'WB 2.730', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '835', // Memperbarui nilai
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.125', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Tipe Trunnion Suspensi, Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,615', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '38.000', // Memperbarui nilai
      },
    ],
  },
  'fm-340-th-abs-euro4': {
    karoseri: [
      { img: krsTangkiTractor },
      { img: krsAngKendaraanTractor },
      { img: krsContainer40Feet },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '103', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '33', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'P11C-WN', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '350 / 2.100', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '134 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '340 / 2.100', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '130 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '122 x 150',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '10.520',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '430',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009OD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '10.178', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '6.986', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '5.063', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '3.636', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '2.633', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '1.921', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1.392', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1.000', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '0.724', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '9.874', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,6', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS)', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '295/80R22.5*', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.480+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.100',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.850',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.360',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '890',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.425', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Trunnion Suspensi, Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '8,390', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '46.000', // Memperbarui nilai
      },
    ],
  },
  'fm-340-th-euro4': {
    karoseri: [
      { img: krsTangkiTractor },
      { img: krsTangkiGas },
      { img: krsLowBedTractor },
      { img: krsAngKendaraanTractor },
      { img: krsContainer40Feet },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '103', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '33', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'P11C-WN', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '350 / 2.100', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '134 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '340 / 2.100', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '130 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6', // Memperbarui nilai
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '122 x 150', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '10.520', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '430', // Memperbarui nilai
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009OD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '10.178', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '6.986', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '5.063', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '3.636', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '2.633', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '1.921', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1.392', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1.000', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '0.724', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '9.874', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,6', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2', // Memperbarui nilai
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '295/80R22.5*', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.480+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.100',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.850',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.360',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '890',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.425', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Tipe Trunnion Suspensi, Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.410', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600', // Memperbarui nilai
      },
    ],
  },
  'fle-260-jw-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakBerpendingin },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '119', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '25', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '265 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '82 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '260 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '81 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6', // Memperbarui nilai
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380', // Memperbarui nilai
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '7,305', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '4,736', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '2,738', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '1,651', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '0,787', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '0,649', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '7,839', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '11,4', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2', // Memperbarui nilai
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '20X7.00V-162', // Memperbarui nilai
      },
      {
        title: 'Ukuran Ban',
        text: '10.00-20-16PR', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.130+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.755',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.190',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '5.975', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic dan Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7.200', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000', // Memperbarui nilai
      },
    ],
  },
  'fg-260-jj-euro4': {
    karoseri: [
      { img: krsDump },
      { img: krsMobilPemadam },
      { img: krsTrucSampah },
      { img: krsTrukArmRoll },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '265 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '82 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '260 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '81 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6', // Memperbarui nilai
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380', // Memperbarui nilai
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '7,305', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '4,736', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '2,738', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '1,651', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '0,787', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '0,649', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '7,839', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,6', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2', // Memperbarui nilai
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Ukuran Ban',
        text: '10.00-20-16PR', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.330', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.600',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.990',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.500', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5,520', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16,000', // Memperbarui nilai
      },
    ],
  },
  'fm-260-jd-euro4': {
    karoseri: [
      { img: krsDump },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '77', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '57', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '265 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '82 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '260 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '81 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6', // Memperbarui nilai
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380', // Memperbarui nilai
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '9,647', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '6,993', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '5,021', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '3,636', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '2,653', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1,923', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1,380', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '13,636', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,2', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2', // Memperbarui nilai
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.030+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.600',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.770',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.940',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.875',
      },
    ],
    suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,685', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000', // Memperbarui nilai
      },
    ],
  },
  'fm-280-jd-euro4': {
    karoseri: [
      { img: krsDump },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '77', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '60', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '285 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '85 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '280 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '84 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6', // Memperbarui nilai
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380', // Memperbarui nilai
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '9,647', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '6,993', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '5,021', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '3,636', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '2,653', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1,923', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1,380', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '1,3636', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,2', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2', // Memperbarui nilai
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.030+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.600',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.760', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.940',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.875',
      },
    ],
    suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic', // Memperbarui nilai
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7.635', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fm-280-jd-mining-spec-euro4': {
    karoseri: [
      { img: krsDump },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '77', // Memperbarui nilai
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '60', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '285 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '85 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '280 / 2.500', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '84 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6', // Memperbarui nilai
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380', // Memperbarui nilai
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '14,056', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '9,647', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '6,993', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '5,021', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '3,636', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '2,653', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1,923', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1,380', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '13,636', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,2', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2', // Memperbarui nilai
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R20-18PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.030+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.600',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.780', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.940',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.875', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7.885', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fm-340-pl-euro4': {
    karoseri: [
      { img: krsDump },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '71', // Memperbarui nilai
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '97', // Memperbarui nilai
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'P11C-WN', // Memperbarui nilai
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Turbocharger; Intercooler; Common Rail', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '350 / 2.100', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '134 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '340 / 2.100', // Memperbarui nilai
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '130 / 1.500', // Memperbarui nilai
      },
      {
        title: 'Jumlah silinder',
        text: '6', // Memperbarui nilai
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 150', // Memperbarui nilai
      },
      {
        title: 'Isi Silinder (cc)',
        text: '10.520', // Memperbarui nilai
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring', // Memperbarui nilai
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '430', // Memperbarui nilai
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009OD', // Memperbarui nilai
      },
      {
        title: 'C',
        text: '10,178', // Memperbarui nilai
      },
      {
        title: 'Ke-1',
        text: '6,986', // Memperbarui nilai
      },
      {
        title: 'Ke-2',
        text: '5,063', // Memperbarui nilai
      },
      {
        title: 'Ke-3',
        text: '3,636', // Memperbarui nilai
      },
      {
        title: 'Ke-4',
        text: '2,633', // Memperbarui nilai
      },
      {
        title: 'Ke-5',
        text: '1,921', // Memperbarui nilai
      },
      {
        title: 'Ke-6',
        text: '1,392', // Memperbarui nilai
      },
      {
        title: 'Ke-7',
        text: '1,000', // Memperbarui nilai
      },
      {
        title: 'Ke-8',
        text: '0,724', // Memperbarui nilai
      },
      {
        title: 'Mundur',
        text: '9,874', // Memperbarui nilai
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering', // Memperbarui nilai
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '6,7', // Memperbarui nilai
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam', // Memperbarui nilai
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear', // Memperbarui nilai
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', // Memperbarui nilai
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2', // Memperbarui nilai
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda', // Memperbarui nilai
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-R20-18PR', // Memperbarui nilai
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165', // Memperbarui nilai
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)', // Memperbarui nilai
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2', // Memperbarui nilai
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200', // Memperbarui nilai
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.480+1.350', // Memperbarui nilai
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.600',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.935', // Memperbarui nilai
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.380',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.390',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.425', // Memperbarui nilai
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '8.450', // Memperbarui nilai
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fm-340-pd-euro': {
    karoseri: [
      { img: krsBakTerbuka },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '47,5', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '109', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61', 
      },
      {
        title: 'Ke-1',
        text: '6,370',
      },
      {
        title: 'Ke-2',
        text: '3,870',
      },
      {
        title: 'Ke-3',
        text: '1,913',
      },
      {
        title: 'Ke-4',
        text: '1,461',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,703', 
      },
      {
        title: 'Mundur',
        text: '5,926',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,9', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR (LUG)', 
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.380',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.026',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.945',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.154',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.066',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.580',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.410',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.600',
      },
    ],
  },
  'fm-280-jm-euro4': {
    karoseri: [
      { img: krsTrukMolenMixer },
    ],
    performa: [
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '77', 
      },
      {
        title: 'Daya Tanjak (tan %)',
        text: '60', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD',
      },
      {
        title: 'C',
        text: '14,056',
      },
      {
        title: 'Ke-1',
        text: '9,647',
      },
      {
        title: 'Ke-2',
        text: '6,993',
      },
      {
        title: 'Ke-3',
        text: '5,021',
      },
      {
        title: 'Ke-4',
        text: '3,636',
      },
      {
        title: 'Ke-5',
        text: '2,653',
      },
      {
        title: 'Ke-6',
        text: '1,923',
      },
      {
        title: 'Ke-7',
        text: '1,380',
      },
      {
        title: 'Ke-8',
        text: '1,000',
      },
      {
        title: 'Mundur',
        text: '13,636',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,1', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.280+1.350',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.420',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.785',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.285',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.505',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.125', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,520',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fm-280-jl-euro4': {
    karoseri: [
      { img: krsTrukMolenMixer },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '60', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '77', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD',
      },
      {
        title: 'C',
        text: '14,056',
      },
      {
        title: 'Ke-1',
        text: '9,647',
      },
      {
        title: 'Ke-2',
        text: '6,993',
      },
      {
        title: 'Ke-3',
        text: '5,021',
      },
      {
        title: 'Ke-4',
        text: '3,636',
      },
      {
        title: 'Ke-5',
        text: '2,653',
      },
      {
        title: 'Ke-6',
        text: '1,923',
      },
      {
        title: 'Ke-7',
        text: '1,380',
      },
      {
        title: 'Ke-8',
        text: '1,000',
      },
      {
        title: 'Mundur',
        text: '1,3636',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,4', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Tipe Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR (LUG)', 
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.580+1.350',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.735',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.775',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.525',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.425', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,500',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fg-240-jp-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka4x2 },
      { img: krsLosBakFlatBed },
      { img: krsBokPendingin4x2 },
      { img: krsTrukLogging4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '51', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '92', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WF',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '240 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '73 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX06', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '9,4', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR (LUG)', 
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '5.530',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '9.700',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.725',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.890',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '4.700', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.540',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '14.200',
      },
    ],
  },
  'fg-260-jp-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka4x2 },
      { img: krsLosBakFlatBed },
      { img: krsBokPendingin4x2 },
      { img: krsTrukLogging4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '260 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '81 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '9,6', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '10.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '5.530',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '9.700',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.890',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '4.700', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.640',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },
  'fg-260-jk-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsLosBakFlatBed },
      { img: krsBokPendingin4x2 },
      { img: krsTrukLogging4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '265 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '82 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,9', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Jumlah Ban',
        text: '6 + 1 (Cadangan)', 
      },
      {
        title: 'Ukuran Ban',
        text: '10.00 - 20-16PR',
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.630',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.150',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.240',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.800', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.480',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },
  'fg-260-jl-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsLosBakFlatBed },
      { img: krsBokPendingin4x2 },
      { img: krsTrukLogging4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '265 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '82 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,2', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '10.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.780',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.650',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.590',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.950', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.520',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },
  'fg-260-jm-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsLosBakFlatBed },
      { img: krsBokPendingin4x2 },
      { img: krsTrukLogging4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '265 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '82 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,6', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '10.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '5.080',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.850',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.490',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '4.250', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.520',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },
  'fg-260-js-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsLosBakFlatBed },
      { img: krsBokPendingin4x2 },
      { img: krsTrukLogging4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '108', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '265 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '82 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '260 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '81 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '10,3', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '10.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.130',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '10.600',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.750',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.190',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '5.300', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.740',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },
  'fl-260-jn-euro4': {
    karoseri: [
      { img: krsBoksDutro },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsTruckCrane4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '26', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '111', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '265 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '82 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '260 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '81 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '118 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '386',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,2', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.030+1.350',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.775',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.835',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.290',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3.875', 
      },
    ],
    suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7.165',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fl-260-jw-euro4': {
    karoseri: [
      { img: krsBoksRanger6x2 },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '26', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '111', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WE',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '265 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '82 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '260 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '81 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '11,5', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1 (Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.130+1.350',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.770',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.190',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '5.975', 
      },
    ],
    suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,460',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fl-280-jt-euro4': {
    karoseri: [
      { img: krsBoksRanger6x2 },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '53', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '85', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '285 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '85 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7,684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', 
      },
      {
        title: 'C',
        text: '14,056',
      },
      {
        title: 'Ke-1',
        text: '9,647',
      },
      {
        title: 'Ke-2',
        text: '6,993',
      },
      {
        title: 'Ke-3',
        text: '5,021',
      },
      {
        title: 'Ke-4',
        text: '3,636',
      },
      {
        title: 'Ke-5',
        text: '2,653',
      },
      {
        title: 'Ke-6',
        text: '1,923', 
      },
      {
        title: 'Ke-7',
        text: '1,380', 
      },
      {
        title: 'Ke-8',
        text: '1,000', 
      },
      {
        title: 'Mundur',
        text: '1,3636',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (mm)',
        text: '9,5', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.930+1.350',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '9.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.770',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.390',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '4.775', 
      },
    ],
    suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,280',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fl-280-jw-euro4': {
    karoseri: [
      { img: krsBoksRanger6x2 },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '53', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '85', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '285 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '85 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', 
      },
      {
        title: 'C',
        text: '14,056',
      },
      {
        title: 'Ke-1',
        text: '9,647',
      },
      {
        title: 'Ke-2',
        text: '6,993',
      },
      {
        title: 'Ke-3',
        text: '5,021',
      },
      {
        title: 'Ke-4',
        text: '3,636',
      },
      {
        title: 'Ke-5',
        text: '2,653',
      },
      {
        title: 'Ke-6',
        text: '1,923', 
      },
      {
        title: 'Ke-7',
        text: '1,380', 
      },
      {
        title: 'Ke-8',
        text: '1,000', 
      },
      {
        title: 'Mundur',
        text: '1,3636',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '11,4', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', 
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.130+1.350',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.770',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.190',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '5.975', 
      },
    ],
    suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7.520',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
  'fm-280-jw-euro4': {
    karoseri: [
      { img: krsBoksRanger6x2 },
      { img: krsBakTerbuka4x2 },
      { img: krsTrukTanki4x2 },
      { img: krsTruckCrane4x2 },
      { img: krsTrukAngkut4x2 },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '60', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '77', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross / PS / rpm)',
        text: '285 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross / Kgm / rpm)',
        text: '85 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET / PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET / Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'M009DD', 
      },
      {
        title: 'C',
        text: '14,056',
      },
      {
        title: 'Ke-1',
        text: '9,647',
      },
      {
        title: 'Ke-2',
        text: '6,993',
      },
      {
        title: 'Ke-3',
        text: '5,021',
      },
      {
        title: 'Ke-4',
        text: '3,636',
      },
      {
        title: 'Ke-5',
        text: '2,653',
      },
      {
        title: 'Ke-6',
        text: '1,923', 
      },
      {
        title: 'Ke-7',
        text: '1,380', 
      },
      {
        title: 'Ke-8',
        text: '1,000', 
      },
      {
        title: 'Mundur',
        text: '13,636',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '11,5', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '6,428', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11.00-20-16PR', 
      },
      {
        title: 'Ukuran Rim',
        text: '20X7.50V-165',
      },
      {
        title: 'Jumlah Ban',
        text: '10 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.130+1.350',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.950',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.490',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.770',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.050',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.860',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.280',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.190',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '5.975', 
      },
    ],
    suspensi: [
      {
        title: 'Depan',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
      {
        title: 'Belakang',
        text: 'Tipe Suspensi Trunnion, Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '7,945',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '26.000',
      },
    ],
  },
// hino700

  'zy5041-euro4': {
  karoseri: [
    { img: krsDump8x2 },
  ],
  performa: [
    {
      title: 'Daya Tanjak (tan %)',
      text: '53', 
    },
    {
      title: 'Kecepatan Maksimum (Km/h)',
      text: '99', 
    },
  ],
  modelMesin: [
    {
      title: 'Model',
      text: 'E13C-BJ',
    },
    {
      title: 'Model Tipe',
      text: 'Mesin Diesel 4 Langkah Segaris; Direct Injection; Variable Nozzle Turbo; Turbo Charger Intercooler, Common Rail',
    },
    {
      title: 'Tenaga Maksimum (PS / rpm)',
      text: '410 / 1.800',
    },
    {
      title: 'Daya maksimum (Kgm / rpm)',
      text: '204 / 1.100',
    },
    {
      title: 'Jumlah silinder',
      text: '6',
    },
    {
      title: 'Diameter x Langkah Piston (mm)',
      text: '137 x 146',
    },
    {
      title: 'Isi Silinder (cc)',
      text: '12.913',
    },
  ],
  kopling: [
    {
      title: 'Tipe',
      text: 'Single Dry Plate with Damper Spring',
    },
    {
      title: 'Diameter Cakram (mm)',
      text: '430',
    },
  ],
  transmisi: [
    {
      title: 'Tipe',
      text: 'ZF 16S2530', 
    },
    {
      title: 'Ke-1',
      text: '13.804 / 11.539',
    },
    {
      title: 'Ke-2',
      text: '9.487 / 7.930',
    },
    {
      title: 'Ke-3',
      text: '6.529 / 5.458',
    },
    {
      title: 'Ke-4',
      text: '4,565 / 3,816',
    },
    {
      title: 'Ke-5',
      text: '3,023 / 2,527',
    },
    {
      title: 'Ke-6',
      text: '2,078 / 1,737', 
    },
    {
      title: 'Ke-7',
      text: '1,430 / 1,195', 
    },
    {
      title: 'Ke-8',
      text: '1,000 / 0,835', 
    },
    {
      title: 'Mundur',
      text: '12,923 / 10,803',
    },
  ],
  kemudi: [
    {
      title: 'Tipe',
      text: 'Intergral Power Steering Recirculating with Hydrolic Booster',
    },
    {
      title: 'Minimal Radius Putar (m)',
      text: '13,5', 
    },
  ],
  sumbu: [
    {
      title: 'Depan',
      text: 'Reversed Elliot, "I" section',
    },
    {
      title: 'Belakang',
      text: 'Full Floating Type Spiral Bevel Gear with Hub Reduction',
    },
    {
      title: 'Perbandingan Gigi Akhir',
      text: '5.410', 
    },
    {
      title: 'Sistem Penggerak',
      text: 'Rear 8x4',
    },
  ],
  rem: [
    {
      title: 'Rem Utama',
      text: 'Full Air with Dual Circuit (ABS Without ASR)',
    },
    {
      title: 'Rem Pelambat',
      text: 'Engine Retarder, Transmission Intarder',
    },
    {
      title: 'Rem Parkir',
      text: 'Wheel Parking, F2 & R1,R2 Axle',
    },
  ],
  rodaBan: [
    {
      title: 'Ukuran Ban',
      text: '12.00-R24-18PR', 
    },
    {
      title: 'Ukuran Rim',
      text: '24 x 8.50 -180',
    },
    {
      title: 'Jumlah Ban',
      text: '12 (+1)',
    },
  ],
  sisListrikACCU: [
    {
      title: 'Accu',
      text: '12V - 120Ah x 2',
    },
  ],
  tangkiSolar: [
    {
      title: 'Kapasitas (L)',
      text: '330',
    },
  ],
  dimensi: [
    {
      title: 'Jarak Sumbu Roda WB (mm)',
      text: '1.850 + 3.750 + 1.500',
    },
    {
      title: 'Total Panjang OL (mm)',
      text: '9.290',
    },
    {
      title: 'Total Lebar OW (mm)',
      text: '2.545',
    },
    {
      title: 'Total Tinggi OH (mm)',
      text: '3.205',
    },
    {
      title: 'Lebar Jejak Depan FR Tr (mm)',
      text: '2.065',
    },
    {
      title: 'Lebar Jejak Belakang RR Tr (mm)',
      text: '1.870',
    },
    {
      title: 'Julur Depan FOH (mm)',
      text: '1.400',
    },
    {
      title: 'Julur Belakang ROH (mm)',
      text: '790',
    },
    {
      title: 'Kabin Kesumbu Roda Belakang CA (mm)',
      text: '5.190', 
    },
  ],
  suspensi: [
    {
      title: 'Depan & Belakang',
      text: 'Semi elliptical; Multi Leaf Spring with Shock Absorber & Stabilizer & Semi-elliptical; Multi Leaf Spring with Stabilizer & torque rod',
    },
  ],
  beratChassis: [
    {
      title: 'Depan (kg)',
      text: '11.860',
    },
    {
      title: 'Berat Total Kendaraan (kg) (GVW)',
      text: '50.000',
    },
  ],
  },
  'zs4141-euro4': {
  karoseri: [
    { img: krsDumpCoalRaner },
  ],
  performa: [
    {
      title: 'Daya Tanjak (tan %)',
      text: '70', 
    },
    {
      title: 'Kecepatan Maksimum (Km/h)',
      text: '99', 
    },
  ],
  modelMesin: [
    {
      title: 'Model',
      text: 'E13C-BJ',
    },
    {
      title: 'Model Tipe',
      text: 'Mesin Diesel 4 Langkah Segaris; Direct Injection; Variable Nozzle Turbo; Turbo Charger Intercooler, Common Rail',
    },
    {
      title: 'Tenaga Maksimum (PS / rpm)',
      text: '410 / 1.800',
    },
    {
      title: 'Daya maksimum (Kgm / rpm)',
      text: '204 / 1.100',
    },
    {
      title: 'Jumlah silinder',
      text: '6',
    },
    {
      title: 'Diameter x Langkah Piston (mm)',
      text: '137 x 146',
    },
    {
      title: 'Isi Silinder (cc)',
      text: '12.913',
    },
  ],
  kopling: [
    {
      title: 'Tipe',
      text: 'Single Dry Plate with Damper Spring',
    },
    {
      title: 'Diameter Cakram (mm)',
      text: '430',
    },
  ],
  transmisi: [
    {
      title: 'Tipe (Low/High)',
      text: 'ZF 16S2530', 
    },
    {
      title: 'Ke-1 (Low/High)',
      text: '13,804 / 11,539',
    },
    {
      title: 'Ke-2 (Low/High)',
      text: '9,487 / 7,930',
    },
    {
      title: 'Ke-3 (Low/High)',
      text: '6,529 / 5,458',
    },
    {
      title: 'Ke-4 (Low/High)',
      text: '4,565 / 3,816',
    },
    {
      title: 'Ke-5 (Low/High)',
      text: '3,023 / 2,527',
    },
    {
      title: 'Ke-6 (Low/High)',
      text: '2,078 / 1,737', 
    },
    {
      title: 'Ke-7 (Low/High)',
      text: '1,430 / 1,195', 
    },
    {
      title: 'Ke-8 (Low/High)',
      text: '1,000 / 0,835', 
    },
    {
      title: 'Mundur (Low/High)',
      text: '12,923 / 10,803',
    },
  ],
  kemudi: [
    {
      title: 'Tipe',
      text: 'Intergral Power Steering Recirculating with Hydrolic Booster',
    },
    {
      title: 'Minimal Radius Putar (m)',
      text: '11.5', 
    },
  ],
  sumbu: [
    {
      title: 'Depan',
      text: 'Reversed Elliot, "I" section',
    },
    {
      title: 'Belakang',
      text: 'Full Floating Type Spiral Bevel Gear with Hub Reduction',
    },
    {
      title: 'Perbandingan Gigi Akhir',
      text: '7,210', 
    },
    {
      title: 'Sistem Penggerak',
      text: 'Rear 6x4',
    },
  ],
  rem: [
    {
      title: 'Rem Utama',
      text: 'Full Air with Dual Circuit (ABS Without ASR)',
    },
    {
      title: 'Rem Pelambat',
      text: 'Engine Retarder',
    },
    {
      title: 'Rem Parkir',
      text: 'Wheel Parking, F1 & R1,R2 Axle',
    },
  ],
  rodaBan: [
    {
      title: 'Ukuran Ban',
      text: '12.00-R24-18PR', 
    },
    {
      title: 'Ukuran Rim',
      text: '24 x 8.50 - 180',
    },
    {
      title: 'Jumlah Ban',
      text: '10 (+1)',
    },
  ],
  sisListrikACCU: [
    {
      title: 'Accu',
      text: '12V - 120Ah x 2',
    },
  ],
  tangkiSolar: [
    {
      title: 'Kapasitas (L)',
      text: '330',
    },
  ],
  dimensi: [
    {
      title: 'Jarak Sumbu Roda WB (mm)',
      text: '4.145 + 1.500',
    },
    {
      title: 'Total Panjang OL (mm)',
      text: '8.245',
    },
    {
      title: 'Total Lebar OW (mm)',
      text: '2.545',
    },
    {
      title: 'Total Tinggi OH (mm)',
      text: '3.205',
    },
    {
      title: 'Lebar Jejak Depan FR Tr (mm)',
      text: '2.065',
    },
    {
      title: 'Lebar Jejak Belakang RR Tr (mm)',
      text: '1.870',
    },
    {
      title: 'Julur Depan FOH (mm)',
      text: '1.400',
    },
    {
      title: 'Julur Belakang ROH (mm)',
      text: '1.200',
    },
    {
      title: 'Kabin Kesumbu Roda Belakang CA (mm)',
      text: '3.735', 
    },
  ],
  suspensi: [
    {
      title: 'Depan & Belakang',
      text: 'Parabolic leaf springs with shock absorbers and stabilizer & Semi-elliptical; Multi Leaf Spring with Stabilizer & torque rod',
    },
  ],
  beratChassis: [
    {
      title: 'Berat Kosong (kg)',
      text: '10.845',
    },
    {
      title: 'Berat Total Kendaraan (kg) (GVW)',
      text: '41.000',
    },
  ],
  },
  // hinobus
  '115-sdb-std-euro4': {
    karoseri: [
      { img: krsAmbulance },
      { img: krsMikroMedium },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48,9', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '118', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WV',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '115 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '36 / 1.200-2.200',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50', 
      },
      {
        title: 'Ke-1',
        text: '5.342',
      },
      {
        title: 'Ke-2',
        text: '2.975',
      },
      {
        title: 'Ke-3',
        text: '1.604',
      },
      {
        title: 'Ke-4',
        text: '1.000',
      },
      {
        title: 'Ke-5',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4.970', 
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '5,6', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '4,625', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR (LUG)', 
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '2.530',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '5.075',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.730',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.116',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.435',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.440',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.480',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.060', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '1.920',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '5.400',
      },
    ],
  },
  '115-sdbl-std-euro4': {
    karoseri: [
      { img: krsAmbulance },
      { img: krsMikroMedium },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48,9', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '118', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WV',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '115 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '36 / 1.200-2.200',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50', 
      },
      {
        title: 'Ke-1',
        text: '5.342',
      },
      {
        title: 'Ke-2',
        text: '2.975',
      },
      {
        title: 'Ke-3',
        text: '1.604',
      },
      {
        title: 'Ke-4',
        text: '1.000',
      },
      {
        title: 'Ke-5',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4.970', 
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,5', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '4,625', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '235/65R16C (Radial Tubeless)', 
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 7 JJ – 30 (Alloy Wheel)',
      },
      {
        title: 'Jumlah Ban',
        text: '4 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.405',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '6.430',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.720',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.111',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.445',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.440',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '1.960',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2.935', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.000',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '5.400',
      },
    ],
  },
  '136-mdbl-std-euro4': {
    karoseri: [
      { img: krsMikroMedium },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '36,7', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '123', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WY',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '136 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '40 / 1.400-2.500',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal; Hydraulic Operation',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '300',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE50', 
      },
      {
        title: 'Ke-1',
        text: '5,342',
      },
      {
        title: 'Ke-2',
        text: '2,975',
      },
      {
        title: 'Ke-3',
        text: '1,604',
      },
      {
        title: 'Ke-4',
        text: '1,000',
      },
      {
        title: 'Ke-5',
        text: '0,712',
      },
      {
        title: 'Mundur',
        text: '4,970', 
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Power Steering (Recirculating Ball Screw)',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,8', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,I-Section Beam',
      },
      {
        title: 'Belakang',
        text: 'Full-floating; Single Reduction; Single speed by Hypoid Gearings',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,125', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda; dilengkapi dengan Booster',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding pada Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '7.50-16-14PR (LUG)', 
      },
      {
        title: 'Ukuran Rim',
        text: '16 x 6.00GS-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 (+1)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-100Ah x 1',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.000',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.185',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '1.955',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.153',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.455',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.480',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.065',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.120',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3,520', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle dengan Pegas Daun Semi Elliptic',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2,130',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '7.500',
      },
    ],
  },
  'gb150-euro4': {
    karoseri: [
      { img: krsMikroMedium },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48 / 43', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '113 / 127', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WK',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '150 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '42.8 / 1.400',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '325',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61', 
      },
      {
        title: 'Ke-1',
        text: '6,370',
      },
      {
        title: 'Ke-2',
        text: '3,870',
      },
      {
        title: 'Ke-3',
        text: '1,913',
      },
      {
        title: 'Ke-4',
        text: '1,472',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,703', 
      },
      {
        title: 'Mundur',
        text: '5,926',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,7', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reversed Elliot, section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,571 / 5,142', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding; Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '215/75R17.5', 
      },
      {
        title: 'Ukuran Rim',
        text: '17.5 X 6.00-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-60AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.870',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.790',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.065',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '1.785',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.655',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.590',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.680',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.240',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '3,520', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle with Semi Eliptic with Shock Absorber and stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.380',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.000',
      },
    ],
  },
  'gb150-l-euro4': {
    karoseri: [
      { img: krsMikroMedium },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '48 / 43', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '113 / 127', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WK',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '150 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '42.8 / 1.400',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '325',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'RE61', 
      },
      {
        title: 'Ke-1',
        text: '6,370',
      },
      {
        title: 'Ke-2',
        text: '3,870',
      },
      {
        title: 'Ke-3',
        text: '1,913',
      },
      {
        title: 'Ke-4',
        text: '1,472',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,703', 
      },
      {
        title: 'Mundur',
        text: '5,926',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '8,4', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reversed Elliot, section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,571 / 5,142', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding; Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '215/75R17.5', 
      },
      {
        title: 'Ukuran Rim',
        text: '17.5 X 6.00-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.200',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.280',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.065',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '1.810',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.655',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.590',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.715',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.365',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle with Semi Eliptic with Shock Absorber and stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.400',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.000',
      },
    ],
  },
  'gb150l-at-euro4': {
    karoseri: [
      { img: krsMikroMedium },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '29,4 / 25,2', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '118 / 134', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WK',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '150 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '42.8 / 1.400',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: '-',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '-',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'A860E', 
      },
      {
        title: 'Ke-1',
        text: '3,742',
      },
      {
        title: 'Ke-2',
        text: '2,003',
      },
      {
        title: 'Ke-3',
        text: '1,343',
      },
      {
        title: 'Ke-4',
        text: '1,000',
      },
      {
        title: 'Ke-5',
        text: '0,773',
      },
      {
        title: 'Ke-6',
        text: '0,634', 
      },
      {
        title: 'Mundur',
        text: '3,539',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,8', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857 / 5,142', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding; Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '215/75R17.5', 
      },
      {
        title: 'Ukuran Rim',
        text: '17.5 X 6.00-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '4.200',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '8.280',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.070',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '1.820',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.655',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.590',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.715',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.365',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
    suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle with Semi Eliptic with Shock Absorber and stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.430',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.000',
      },
    ],
  },
  'gb150-at-euro4': {
    karoseri: [
      { img: krsMikroMedium },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '29,4 / 25,2', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '118 / 134', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'N04C-WK',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris; Variable Nozzle Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (PS / rpm)',
        text: '150 / 2.500',
      },
      {
        title: 'Daya maksimum (Kgm / rpm)',
        text: '42.8 / 1.400',
      },
      {
        title: 'Jumlah silinder',
        text: '4',
      },
      {
        title: 'Diameter x Langkah Piston',
        text: '104 x 118',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '4,009',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: '-',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '-',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'A860E', 
      },
      {
        title: 'Ke-1',
        text: '3,742',
      },
      {
        title: 'Ke-2',
        text: '2,003',
      },
      {
        title: 'Ke-3',
        text: '1,343',
      },
      {
        title: 'Ke-4',
        text: '1,000',
      },
      {
        title: 'Ke-5',
        text: '0,773',
      },
      {
        title: 'Ke-6',
        text: '0,634', 
      },
      {
        title: 'Mundur',
        text: '3,539',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '7,8', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857 / 5,142', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Vaccum Servo dengan sirkuit ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Internal Expanding; Output Shaft Transmission',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '215/75R17.5', 
      },
      {
        title: 'Ukuran Rim',
        text: '17.5 X 6.00-127',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-65AH×2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '100',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '3.870',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '7.780',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.070',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '1.825',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '1.655',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.590',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '1.715',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '2.195',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Rigid Axle with Semi Eliptic with Shock Absorber and stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '2.400',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '8.000',
      },
    ],
  },
  'ak240-std-euro4': {
    karoseri: [
      { img: krsBusbesarMesinDpn },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '32', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '126', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'JO8E-WF',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Geometric Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET PS / rpm)',
        text: '240 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET PS / rpm)',
        text: '73 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross PS / rpm)',
        text: '245 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross PS / rpm)',
        text: '74 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX06', 
      },
      {
        title: 'Ke-1',
        text: '6,515',
      },
      {
        title: 'Ke-2',
        text: '4,224',
      },
      {
        title: 'Ke-3',
        text: '2,441',
      },
      {
        title: 'Ke-4',
        text: '1,473',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,702', 
      },
      {
        title: 'Mundur',
        text: '6,991',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '9,6', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,428', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11R22.5 148/145', 
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-120Ah x2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '200',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '5.800',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.110',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.455',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.275',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.040',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.845',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '2.120',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.190',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Semi-elliptic leaf spring with shock absorbers and stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.050',
      },
      {
        title: 'Berat Total Kombinasi (kg)',
        text: '15.000',
      },
    ],
  },
  'rk280-std-euro4': {
    karoseri: [
      { img: krsBusbesarMesinBlk },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '40,3', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '120', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Geometric Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (JIS-GROSS PS / rpm)',
        text: '285 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS-GROSS Kgm / rpm)',
        text: '85 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston (mm)',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX06', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '9,3', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '4,875', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11R22.5 148/145', 
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-120Ah x2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '270',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.000',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.700',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.455',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.080',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.040',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.845',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '2.350',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.350',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Semi Eliptic Leaf Spring with Shock Absorber&Stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.250',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '15.500',
      },
    ],
  },
  'rk280-abs-euro4': {
    karoseri: [
      { img: krsBusbesarMesinBlk },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '40,3', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '120', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Geometric Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross PS / rpm)',
        text: '285 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross Kgm / rpm)',
        text: '85 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX06', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '9,3', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot, section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '4,875', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda (ABS)',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11R22.5 148/145', 
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-120Ah x2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '270',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.000',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.700',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.455',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.080',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.040',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.845',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '2.350',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.350',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Semi-elliptic leaf spring with shock absorbers and stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.250',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '15.500',
      },
    ],
  },
  'rm280-std-euro4': {
    karoseri: [
      { img: krsBusbesarMesinBlk },
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '30', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '127', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Geometric Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET PS / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross PS / rpm)',
        text: '285 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross PS / rpm)',
        text: '85 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '9,6', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11R22.5 148/145', 
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-120Ah x2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '350',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.000',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.700',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.440',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.030',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.040',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.820',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '2.350',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.350',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Air Bellow Sus. with Double Acting Shock Absorber & Stabilizer / Wide Air Bellow Sus. with Double Acting Shock Absorber & Stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.740',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },
  'rm280-abs-euro4': {
    karoseri: [
    ],
    performa: [
      {
        title: 'Daya Tanjak (tan %)',
        text: '30', 
      },
      {
        title: 'Kecepatan Maksimum (Km/h)',
        text: '127', 
      },
    ],
    modelMesin: [
      {
        title: 'Model',
        text: 'J08E-WD',
      },
      {
        title: 'Model Tipe',
        text: 'Mesin Diesel 4 Langkah Segaris ; Variable Geometric Turbocharger; Intercooler; Common Rail',
      },
      {
        title: 'Tenaga Maksimum (ISO-NET PS / rpm)',
        text: '280 / 2.500',
      },
      {
        title: 'Daya maksimum (ISO-NET Kgm / rpm)',
        text: '84 / 1.500',
      },
      {
        title: 'Tenaga Maksimum (JIS Gross PS / rpm)',
        text: '285 / 2.500',
      },
      {
        title: 'Daya maksimum (JIS Gross Kgm / rpm)',
        text: '85 / 1.500',
      },
      {
        title: 'Jumlah silinder',
        text: '6',
      },
      {
        title: 'Diameter x Langkah Piston',
        text: '112 x 130',
      },
      {
        title: 'Isi Silinder (cc)',
        text: '7.684',
      },
    ],
    kopling: [
      {
        title: 'Tipe',
        text: 'Pelat Kering Tunggal, dengan Coil Spring',
      },
      {
        title: 'Diameter Cakram (mm)',
        text: '380',
      },
    ],
    transmisi: [
      {
        title: 'Tipe',
        text: 'MX07', 
      },
      {
        title: 'Ke-1',
        text: '7,305',
      },
      {
        title: 'Ke-2',
        text: '4,736',
      },
      {
        title: 'Ke-3',
        text: '2,738',
      },
      {
        title: 'Ke-4',
        text: '1,651',
      },
      {
        title: 'Ke-5',
        text: '1,000',
      },
      {
        title: 'Ke-6',
        text: '0,787', 
      },
      {
        title: 'Ke-7',
        text: '0,649', 
      },
      {
        title: 'Mundur',
        text: '7,839',
      },
    ],
    kemudi: [
      {
        title: 'Tipe',
        text: 'Integral Power Steering',
      },
      {
        title: 'Minimal Radius Putar (m)',
        text: '9,6', 
      },
    ],
    sumbu: [
      {
        title: 'Depan',
        text: 'Reverse Elliot,section beam',
      },
      {
        title: 'Belakang',
        text: 'Full Floating Type Hypoid Gear',
      },
      {
        title: 'Perbandingan Gigi Akhir',
        text: '5,857', 
      },
      {
        title: 'Sistem Penggerak',
        text: 'Rear 4x2',
      },
    ],
    rem: [
      {
        title: 'Rem Utama',
        text: 'Full Air dengan Sirkuit Ganda dan ABS',
      },
      {
        title: 'Rem Pelambat',
        text: 'Terletak pada Pipa Gas Buang',
      },
      {
        title: 'Rem Parkir',
        text: 'Spring Brake',
      },
    ],
    rodaBan: [
      {
        title: 'Ukuran Ban',
        text: '11R22.5 148/145', 
      },
      {
        title: 'Ukuran Rim',
        text: '22.5X8.25-165',
      },
      {
        title: 'Jumlah Ban',
        text: '6 + 1(Cadangan)',
      },
    ],
    sisListrikACCU: [
      {
        title: 'Accu',
        text: '12V-120Ah x2',
      },
    ],
    tangkiSolar: [
      {
        title: 'Kapasitas (L)',
        text: '350',
      },
    ],
    dimensi: [
      {
        title: 'Jarak Sumbu Roda WB (mm)',
        text: '6.000',
      },
      {
        title: 'Total Panjang OL (mm)',
        text: '11.700',
      },
      {
        title: 'Total Lebar OW (mm)',
        text: '2.440',
      },
      {
        title: 'Total Tinggi OH (mm)',
        text: '2.030',
      },
      {
        title: 'Lebar Jejak Depan FR Tr (mm)',
        text: '2.040',
      },
      {
        title: 'Lebar Jejak Belakang RR Tr (mm)',
        text: '1.820',
      },
      {
        title: 'Julur Depan FOH (mm)',
        text: '2.350',
      },
      {
        title: 'Julur Belakang ROH (mm)',
        text: '3.350',
      },
      {
        title: 'Kabin Kesumbu Roda Belakang CA (mm)',
        text: '2,900', 
      },
    ],
 suspensi: [
      {
        title: 'Depan & Belakang',
        text: 'Air Bellow Sus. with Double Acting Shock Absorber & Stabilizer / Wide Air Bellow Sus. with Double Acting Shock Absorber & Stabilizer',
      },
    ],
    beratChassis: [
      {
        title: 'Berat Kosong (kg)',
        text: '5.740',
      },
      {
        title: 'Berat Total Kendaraan (kg)',
        text: '16.000',
      },
    ],
  },

















  };