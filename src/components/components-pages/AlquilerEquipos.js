import React, { useState, useEffect } from 'react';
import AlquilerImage from './alquiler-equipos/img/Alquiler-img-header.jpg';
import './dj/DJ.css';
import './alquiler-equipos/Alquileres.css';
import imagenFondo from './produccion-musical/img/04.jpg';
import alquiler1 from "./alquiler-equipos/img/Alquiler-img-header.jpg"
import { getRoomRentalData } from './alquiler-equipos/getRoomRentalData';





export const AlquilerEquipos = () => {


  const [room, setRoom] = useState({amountHour:{practice:"", audioSet:"", videoSet:""}, clarifications:""});
  const [practice, setPractice] = useState({costs:{fourHours:"", sixHours:"", eightHours:""}, clarifications:""});



  useEffect(()=>{
    const fetchArray = async()=>{
          const resRoom = await getRoomRentalData('room-rental');
          setRoom(resRoom);
          const resPractice = await getRoomRentalData('practice-pack');
          setPractice(resPractice);
    }
    fetchArray();
  },[]);






  const arrayAlquileres = [
    {
        titulo:"ALQUILER DE SALA",
        img: alquiler1,
        descipcion:"",
        informacionAlquiler: [
            {
                titulo: "COSTOS POR HORA", 
                descripcion:[
                    `PRACTICA: $${room?.amountHour ? room?.amountHour?.practice : ""}`, 
                    `AUDIO SET: $${room?.amountHour ? room?.amountHour?.audioSet : ""}`, 
                    `VIDEO SET: $${room?.amountHour ? room?.amountHour?.videoSet : ""}`
                ]
  
            }, 
            {
                titulo: "ACLARACIÓN", 
                descripcion: room?.clarifications ? room?.clarifications : []
            },
        ],
    },
    {
        titulo:"PACK DE PRÁCTICAS",
        img: alquiler1,
        descipcion:"",
        informacionAlquiler: [
            {
                titulo: "COSTOS", 
                descripcion:[
                    `4 HORAS: $${practice?.costs ? practice?.costs?.fourHours : ""}`, 
                    `6 HORAS: $${practice?.costs ? practice?.costs?.sixHours : ""}`, 
                    `8 HORAS: $${practice?.costs ? practice?.costs?.eightHours : ""}`
                ]
            }, 
            {
                titulo: "ACLARACIÓN", 
                descripcion: practice?.clarifications ? practice?.clarifications : []
            },
        ],
    },
  ]

  return (
    <div>
      <header  
        // style={{ 
        //   backgroundImage: `url(${AlquilerImage})`,
        //   backgroundSize: "cover", 
        //   backgroundPosition: "center",
        //   width:"100%",
        //   height:"600px",
        //   position:"relative",
        // }}
      >
        {/* Overlay oscuro con opacidad al 10% */}
        {/* <div className='overlay-img'></div> */}

        <div className='texto-header'>
          <h1 className='mb-4 text-white'>ALQUILER DE SALA DJ</h1>
          <h6 className='fw-normal fs-6'>
            Disfruta de un espacio profesional para practicar o grabar tus sets en audio y video. Con equipamiento de última generación, que incluye CDJ 2000 NEXUS, XDJ 1000 MK2, DJM900 NEXUS, XONE 92 y 96, RMX 1000, tendrás todo lo necesario para mejorar tu técnica y creatividad. Ofrecemos packs de prácticas para quienes buscan entrenar con frecuencia, además de combos con descuentos exclusivos.
          </h6>
        </div>
      </header>

      <div>
        {arrayAlquileres && arrayAlquileres.map((alquiler, index) => {
          return (
            <div className="alquileres-ancho" key={index}>
              <div className="border border-secondary rounded mx-auto m-3 color-fondo" style={{ backgroundImage: `url(${imagenFondo})` }}>
                <div className='overlay-img2 p-5'>
                  <h5 className="text-center fw-bold">{alquiler.titulo}</h5>
                  <p className="z-4 lista">
                    {alquiler.informacionAlquiler?.map((items, itemIndex) => {
                      return (
                        <div key={itemIndex}>
                          <h3 className='fs-6 fw-normal'>{items?.titulo}</h3>
                          {items?.titulo === "COSTOS POR HORA" || items?.titulo === "COSTOS" ? (
                            <ol>
                              {items?.descripcion && items?.descripcion?.map((item, descIndex) => (
                                <li key={descIndex}>
                                  <p className='fw-semibold' style={{ fontSize: "14px" }}>{item}</p>
                                </li>
                              ))}
                            </ol>
                          ) : ""}
                          {items?.titulo === "ACLARACIÓN" ? (
                            <ul>
                              {items?.descripcion && items?.descripcion?.map((item, descIndex) => (
                                <li key={descIndex}>
                                  <p className='fw-semibold' style={{ fontSize: "14px" }}>{item}</p>
                                </li>
                              ))}
                            </ul>
                          ) : ""}
                        </div>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
