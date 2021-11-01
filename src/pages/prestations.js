import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";



const prestations = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: { 
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    }
  };

      return (
        <main>
          <Mouse />
          <motion.div
            className="home"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <Navigation />
            <div className="home-main">
              <div className="main-content">
                <motion.h1 drag onDragEnd   dragConstraints={{ left: -250, right: 950, top: -200, bottom: 250 }}>
    
                </motion.h1>
                  <ul ><b>Mes TARIFS:</b>
                  <br/>
                  <br/>

<li>
 « Juste moi » 130 euros
Séance pour une personne, en extérieur ou en studio
</li> 
<br/>
<br/>
<li>« Pour deux » 195 euros
Pour deux personnes, en extérieur ou en studio</li> 
<br/>
<br/>

<li>« Famille » 220 euros
Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)
</li> 
<br/>
<br/>
<li>« Il était une fois » 160 euros
Photo de grossesse (À votre domicile, en extérieur ou en studio)
</li> 
<br/>
 <br/>
<li>« Mon bébé » 100 euros
Photo d’enfant jusqu’à 3 ans (photo à domicile)
</li> 
<br/>
 <br/>
<li>« J’immortalise l’événement » sur mesure
Prestation de mariage ou baptême sur devis
</li> 
 </ul>
 </div>
 </div>
 </motion.div>
        </main>
      );
    };

export default prestations;


