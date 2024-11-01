import React, { useState, useEffect } from 'react';
import {TheDay} from './TheDay'

export default function AgeMessage(props) {
    const [isBirthday, setIsBirthday] = useState(false);
    const birthDate = TheDay;
    const today = new Date();
 
    useEffect(() => {
      // Vérifier si c'est l'anniversaire aujourd'hui
      
      if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
        setIsBirthday(true);
      } else {
        setIsBirthday(false);
      }
    }, []);
  return (
    <div className="mt-5 md:hidden font-mono">
      {isBirthday ? (
        <div>
            <p className="relative top-20 text-center  text-2xl">
            <span className="border-solid border-2 border-blue-200 rounded-full p-2 px-4">I'm {props.age}  </span>
            <span></span>
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-2xl mt-5 sm:text-xl font-bold">
            It's my birthday
            </p>
            <p className="relative w-4/12 mx-auto top-20 text-center  font-light">
            <img src="brendacake.png" className="piip hidden hidden-on-custom" alt="piip"/>
            </p>
            
           
            
            <p className="relative w-10/12 mx-auto top-20 text-center  text-xl mt-5 sm:text-xl font-light">
                <span className="font-bold">
                Psaume 20:4-5
                </span><br/>
            "Qu'il te donne ce que ton cœur désire, et qu'il accomplisse tous tes projets!
             Nous chanterons de joie pour ta victoire,
             et nous dresserons nos étendards au nom de notre Dieu; que l'Éternel exauce tous tes vœux!"
            </p>
            
            
        </div>
      ) : (
        <div>
            <p className="relative top-20 text-center  text-2xl">
            <span className="border-solid border-2 border-red-200 rounded-full p-2 px-4">I'm {props.age}  </span>
            <span></span>
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-xl mt-5  font-light">
            C'est quand mon anniversaire?
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-xl mt-5  font-light">
            <span className="font-bold">
                Psaume 27:24
                </span><br/>
            "Espère en l'Éternel! Fortifie-toi et que ton cœur s'affermisse! Espère en l'Éternel!"
            </p>
            
            <p className="relative w-8/12 mx-auto top-20 text-center  font-light">
            <img src="not.png" className="angry hidden hidden-on-custom" alt="angry"/>
            </p>
        </div>
        
      )}
      
    </div>
  );
}