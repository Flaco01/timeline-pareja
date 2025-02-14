import React, { useState } from "react";
import { motion } from "framer-motion";
import Event from "./Event";
import Modal from "./Modal";
import imagen1 from "../assets/1.jpeg";
import imagen2 from "../assets/1-2.jpeg";
import video1 from "../assets/1-3.mp4";
import video2 from "../assets/1-4.mp4";
import image4 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image5 from "../assets/2-1.jpeg";
import image6 from "../assets/2-2.jpeg";
import video3 from "../assets/4.mp4";
import video4 from "../assets/4-1.mp4";
import video5 from "../assets/4-2.mp4";
import image7 from "../assets/4-3.jpeg";
import image8 from "../assets/5.jpeg";
import video6 from "../assets/6.mp4";
import image9 from "../assets/6-1.jpeg";
import image10 from "../assets/7.jpeg";
import video7 from "../assets/7-1.mp4";
import image11 from "../assets/8.jpeg";
import image12 from "../assets/8-1.jpeg";
import video8 from "../assets/8-2.mp4";
import image13 from "../assets/8-3.jpeg";
import video9 from "../assets/8-4.mp4";
import video10 from "../assets/8-5.mp4";
import image14 from "../assets/9.jpeg";
import video11 from "../assets/10.mp4";
import video12 from "../assets/10-1.mp4";
import image17 from "../assets/10-2.jpeg";
import video13 from "../assets/11.mp4";
import image15 from "../assets/13.jpeg";
import image16 from "../assets/13-1.jpeg";
import video14 from "../assets/14.mp4";
import image19 from "../assets/17.jpeg";
import video16 from "../assets/17-1.mp4";
import image20 from "../assets/18.jpeg";
import image21 from "../assets/18-1.jpeg";
import image22 from "../assets/18-2.jpeg";
import video17 from "../assets/18-3.mp4";
import image23 from "../assets/19.jpeg";
import video18 from "../assets/19-1.mp4";
import image24 from "../assets/20.jpeg";
import video19 from "../assets/20-1.mp4";
import image25 from "../assets/21.jpeg";
import video20 from "../assets/21-1.mp4";
import image26 from "../assets/22.jpeg";
import video21 from "../assets/22-1.mp4";
import image27 from "../assets/23.jpeg";
import video22 from "../assets/23-1.mp4";
import video23 from "../assets/24.mp4";
import image28 from "../assets/22-2.jpeg";
import image29 from "../assets/25.jpg";
import image30 from "../assets/26.jpeg";
import video24 from "../assets/26-1.mp4";
import image31 from "../assets/26-2.jpeg";
import video25 from "../assets/26-3.mp4";
import image32 from "../assets/26-4.jpeg";
import TimelineBubble from "./TimelineBubble";
import bgImage from "../assets/bg-image.gif";

const eventsData = [
  {
    date: "28/12/2024",
    title: "Nuestro primera salida",
    description: "El día en que todo comenzó...",
    media: [
      { type: "image", src: imagen1 },
      { type: "image", src: imagen2 },
      { type: "video", src: video1 },
      { type: "video", src: video2 },
    ],
  },
  {
    date: "30/12/2024",
    title: "Amy hermana Ani",
    description: "Cómo olvidarme del día en que le conocí a tu hermana y fuimos juntos a Quero",
    media: [
      { type: "image", src: image3 },
    ],
  },
  {
    date: "01/01/2025",
    title: "Parque flores",
    description: "Jamás olvidaré el día en el que te presenté a todos y nos nervios que sentía",
    media: [
      { type: "image", src: image4 },
      { type: "image", src: image5 },
      { type: "image", src: image6 },
    ],
  },
  {
    date: "03/01/2025",
    title: "Shhhh",
    description: "Como olvidar cuando tuvimos por primera vez un momento a solas 🔥",
    media: [
      { type: "image", src: image7 },
      { type: "video", src: video3 },
      { type: "video", src: video4 },
      { type: "video", src: video5 },
    ],
  },
  {
    date: "06/01/2025",
    title: "Caporal",
    description: "Ese día quedará por siempre en mí, hasta ahora recuerdo lo hermosa que te veías bailando",
    media: [
      { type: "image", src: image8 },
    ],
  },
  {
    date: "07/01/2025",
    title: "Escapada de la u",
    description: "Esa vez la recuerdo muy bien porque fue cuando conociste mi ambiente en la universidad",
    media: [
      { type: "image", src: image9 },
      { type: "video", src: video6 },
    ],
  },
  {
    date: "08/01/2025",
    title: "👀",
    description: "¿Ani con ropa de Mateo? ¿Mateo con ropa de Ani?",
    media: [
      { type: "image", src: image10 },
      { type: "video", src: video7 },
    ],
  },
  {
    date: "13/01/2025",
    title: "Cambio de look",
    description: "Fuimos a Red Skins y me buscaste ropa a tu gusto, tampoco olvidaré lo feliz que te veías con tus nuevas zapatillas",
    media: [
      { type: "image", src: image14 },      
    ],
  },
  {
    date: "15/01/2025",
    title: "Besos",
    description: "Este fue uno de mis días favoritos, me llenaste de besos 💋",
    media: [
      { type: "image", src: image11 },
      { type: "video", src: video10 },
      { type: "image", src: image12 },      
      { type: "video", src: video8 },
      { type: "image", src: image13 },
      { type: "video", src: video9 },      
    ],
  },
  {
    date: "16/01/2025",
    title: "Estrenando el carro",
    description: "Que hermoso día que fue, aquí está uno de mis videos favoritos",
    media: [
      { type: "image", src: image17 },
      { type: "video", src: video11 },               
      { type: "video", src: video12 },
    ],
  },
  {
    date: "20/01/2025",
    title: "😉",
    description: "Que lindo es estar juntos, con o sin ropa",
    media: [
      { type: "image", src: image15 },
      { type: "video", src: video13 },
      { type: "image", src: image16 },      
    ],
  },
  {
    date: "25/01/2025",
    title: "Paseito fuera de la ciudad",
    description: "Bienvenidos a PatateYork",
    media: [
      { type: "image", src: image29 },
      { type: "video", src: video14 },        
    ],
  },
  {
    date: "27/01/2025",
    title: "Concurso de la Ane",
    description: "Cómo olvidar cuando le fuimos a verle a la Ane en su concurso de inglés",
    media: [
      { type: "image", src: image19 },
      { type: "video", src: video16 },        
    ],
  },
  {
    date: "29/01/2025",
    title: "Filmadora",
    description: "La influencer más linda",
    media: [
      { type: "image", src: image20 },
      { type: "image", src: image21 },
      { type: "video", src: video17 },
      { type: "image", src: image22 },
    ],
  },
  {
    date: "31/01/2025",
    title: "Fiesta",
    description: "Nuestra primera vez en la discoteca",
    media: [
      { type: "image", src: image23 },      
      { type: "video", src: video18 },      
    ],
  },
  {
    date: "02/02/2025",
    title: "🌙",
    description: "Fui cortadito el cabello a tu casa, me invitaste a pasar y vimos el álbum de tu familia",
    media: [
      { type: "image", src: image24 },      
      { type: "video", src: video19 },      
    ],
  },
  {
    date: "04/02/2025",
    title: "Champiz",
    description: "Noche con los muchachos",
    media: [
      { type: "image", src: image25 },      
      { type: "video", src: video20 },
    ],
  },
  {
    date: "06/02/2025",
    title: "Díganle que se cambie",
    description: "¡Llama la atención de las féminas!",
    media: [
      { type: "image", src: image28 },
      { type: "video", src: video22 },
      { type: "image", src: image26 },
      { type: "video", src: video21 },
      
    ],
  },
  {
    date: "08/02/2025",
    title: "Aquí con mi amigo",
    description: "¡NO SOMOS AMIGOS, ERES MI ESPOSA!",
    media: [
      { type: "image", src: image27 },      
      { type: "video", src: video23 },
    ],    
  },
  {
    date: "14/02/2025",
    title: "Feliz día amor mío",
    description: "¡Gracias por todo lo vivido mi niña ❤️!",
    media: [
      { type: "image", src: image30 },
      { type: "video", src: video24 },
      { type: "image", src: image31 },
      { type: "video", src: video25 },
      { type: "image", src: image32 },
    ],    
  },
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen py-10 flex items-center justify-center"
    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "auto", backgroundPosition: "center", backgroundRepeat: "repeat" }}>
      <div className="relative w-full max-w-2xl">
        {/* Línea central entrecortada */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-400" style={{ transform: "translateX(-50%)", backgroundImage: "linear-gradient(to bottom, #fff 50%, transparent 50%)", backgroundSize: "1px 10px" }}></div>

        {/* Contenedor de eventos */}
        <div className="relative z-10 flex flex-col items-center">
          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex items-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ alignSelf: index % 2 === 0 ? "flex-start" : "flex-end" }}
            >
              {/* Línea horizontal que conecta la burbuja con la línea vertical */}
              <div                
              >   
                <TimelineBubble index={index} />             
              </div>

              {/* Burbuja */}
              <div className={`relative ${index % 2 === 0 ? "ml-6" : "mr-6"}`}>
                <Event
                  date={event.date}
                  onClick={() => setSelectedEvent(event)}
                  image={event.media[0].src}
                />
                {/* Fecha alineada con la burbuja */}
                <div
                  className={`absolute top-full mt-2 ${index % 2 === 0 ? "left-1/2 transform -translate-x-1/2" : "right-1/2 transform translate-x-1/2"}`}
                >
                  <span className="text-lg text-white">{event.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default Timeline;
