import { useEffect, useState } from 'react'
import React, { useRef } from 'react';
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetter'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form =useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_4z6rba6', 'template_u4ywdho', form.current, 'itqVmKcSDIE8hRaJ0')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message, please try again')
          console.log(error.text)
        }
      )
  }


  return(
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
         Nikhil S Thomas
          <br />
          India
          <br />
          New Delhi <br />
          Pul Pehladhpur 110044 <br />
          <br />
          <span className='span-text'> nikhilsthomas123@gmail.com </span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.4990,77.2905]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.4990,77.2905]}>
              <Popup>Nikhil lives here, come over for a plate of momos :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-zig-zag-deflect" />
    </>
  )
}

export default Contact
