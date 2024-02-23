import './App.css';
import fondo from './Assets/fondo3.png'
import orca from './Assets/orca.png'
import React, { useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';

function App() {
  const { scrollYProgress } = useViewportScroll();
  const xOrca = useTransform(scrollYProgress, [0.05, 0.3], [600, 0]);
  const [typingCompleted, setTypingCompleted] = useState(false);


  return (
    <div className="App">
      <img className='fondo' src={fondo} alt='Fondo de pagina'/>
      <div className='title' >
        <p>      
        {!typingCompleted ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Horcas')
                .pauseFor(300)
                .deleteChars(6)
                .typeString('Orcas')
                .pauseFor(600)
                .callFunction(() => {
                  setTypingCompleted(true);
                })
                .start()
            }}
          />
        ) : 
          'Orcas'
        }
        </p>
        <h3 className={typingCompleted ? 'visible' : ''}>Por Sol Navarro</h3>
      </div>
      
      <div className='blackout-orca' onClick={()=>{console.log(scrollYProgress.current)}}>
        <motion.img className='orca' src={orca} alt='orquita' 
          style={{ x: xOrca }} // Aplica la transformación a la posición x de la imagen
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        <div className='info'>
        <p>
          Estos cetáceos son los mayores depredadores de los océanos, llegan a pesar más de cinco toneladas y medir hasta nueve metros. <br/>
          Conocidas como orcas se trata del las especie incluída en la familia de los delfines más grande del mundo.
          Su característica más representativa es la aleta dorsal, que puede llegar a medir 1,80 metros y se queda atrofiada cuando permanecen en cautiverio. <br/>
          También es muy peculiar el color blanco y negro que cubre su cuerpo que de una forma única identifica a cada individuo.<br/>
          En la dieta de las orcas se incluyen desde leones marinos, focas, pingüinos, calamares, pulpos, tortugas hasta tiburones. <br/>
          Se trata de unos animales bastante longevos que viven entre 60 y 90 años y habitan en todos los océanos del planeta, aunque tienen cierta preferencia por las aguas frías.
        </p>
        </div>
        <div className='datos'>
          <h1><strong>Datos</strong></h1>
          <h2><strong>Nadan largas distancias</strong><br/></h2>
          <p>            
            Emigran constantemente, no se quedan demasiado tiempo en el mismo lugar.<br/>
            Su necesidad de estar en constante movimiento les lleva a nadar incluso 2000 kilómetros.
          </p>
          <h2><strong>Las orcas son seres sociales</strong> <br/></h2>
          <p>            
            Viven en manadas de 15 miembros más o menos. Interactúan entre sí e incluso van a cazar en grupo. <br/>
            Sus estructuras sociales son complejas y algunas poblaciones se organizan en sociedades matriarcales. <br/>
            También pueden haber varias vainas dentro de una comunidad e incluso, <br/>
            entre ellas puede haber intercambio de miembros para fines reproductivos.
          </p>
          <h2><strong>Utilizan la ecolocalización</strong> <br/></h2>
          <p>            
            Las orcas emplean ecolocalización para hablar entre ellas y cazar. <br/>
            Hacen un sonido que viaja a través del agua hasta que las ondas sonoras golpean un objeto. <br/>
            dddDespués, la onda de sonido rebota hacia la otra orca.
          </p>
          <h2><strong>No suponen un peligro para los humanos</strong> <br/></h2>
          <p>            
            Es muy común pensar que estos depredadores pueden suponer un peligro pero no es así. <br/>
            A parte de no entrar en su dieta, hay teorías que dicen que como sociedad han aprendido que cazar humanos no es bueno ni necesario.
          </p>
          <h2><strong>Son muy inteligentes</strong> <br/></h2>
          <p>            
            Hay estudios que demuestran que son más inteligentes que los chimpancés. <br/>
            Su inteligencia les ayuda a crear estrategias para cazar. Además de ser muy inteligentes, <br/>
            demuestran gran capacidad para trabajar en equipo y proteger a los miembros de su comunidad, tal como lo hacemos los seres humanos.
          </p>
          <h2><strong>No tienen depredadores</strong> <br/></h2>
          <p>            
            Se colocan en la parte superior de la cadena alimenticia.<br/>
            Las orcas se alimentan de aves marinas, calamares, pulpos, tortugas marinas, tiburones, rayas y peces.
          </p>
          <h2><strong>A veces cazan por practicar</strong> <br/></h2>
          <p>            
            Las orcas se enseñan a cazar unas a otras. Normalmente son las hembras las que enseñan a las crías. <br/>
            Cuando no necesitan alimentarse pero sí enseñar a alguna cría cazarán pero no de comerán a la presa. <br/>
            De esta manera pueden practicar y perfeccionar su técnica. <br/>
            Una de sus técnicas es dar golpes a placas de hielo donde descansan las focas para ahogarlas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
