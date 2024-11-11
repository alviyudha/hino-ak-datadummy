import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { hinoAvatar} from '../assets/images/importImages'

export default function ReactFloatingWspComp() {

  return (
    <FloatingWhatsApp
    phoneNumber="+6281248857822" 
    accountName="Hino AK" 
    avatar={hinoAvatar} 
    chatMessage='dengan saya Erlina, ada yang bisa saya bantu ?'
    darkMode={false}
  />
  )
}