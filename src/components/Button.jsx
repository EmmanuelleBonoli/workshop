
// BOUTON PLAY qui :
// 1 / demande une la question (INPUT)
// 2 / lance la fonction random
// 3 / Donne une réponse (// consomme le talbeau de réponse (autre composant))

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

let historyTable = [];

function Button({ answers }) {// on a mis la props answers en paramètres de la fonction Button

    function historyID(id, savedQuestion, savedAnswer) {
        this.id = id;
        this.savedQuestion = savedQuestion;
        this.savedAnswer = savedAnswer;
    }

    // let [random, setRandom] = useState(10);
    let [question, setQuestion] = useState("");
    let [savedQuestion, setSavedQuestion] = useState("");
    let [compteur, setCompteur] = useState(0);
    let [savedAnswer, setSavedAnswer] = useState("");

    // const handleRandom = () => {
    //     setRandom(Math.floor(Math.random() * 10))
    //     setSavedQuestion(question)
    //     setSavedAnswer(answers[random].answer)
    const handleRandom = () => {
        const updatedRandom = Math.floor(Math.random() * 10);
        const updatedSavedAnswer = answers[updatedRandom].answer;
        const compteurnew = compteur+1
        // setRandom(updatedRandom);
        setSavedQuestion(question);
        setSavedAnswer(updatedSavedAnswer);
        // historyTable.push(savedQuestion)
        // historyTable.push(answers[random].answer)
        // console.log(historyTable)
        setCompteur(compteurnew)
        const history = new historyID(compteurnew, question, updatedSavedAnswer)
        console.log(history)
        
        if(historyTable.length > 6) {
            historyTable.splice(0, 1);
        }
        historyTable.push(history)

        setQuestion("")
        
        return history
    }

    const handleChange = event => {
        setQuestion(event.target.value);
    }

    // On appelle la fonction Random au click et la valeur de notre state prend ra valeur retournée par la fonction Randometurn 
    return (
        <>
        <h1>WCS Magic 8 Ball </h1>
        <div className="game">
            
                {/* <img src="src/images/ball8.png" alt="magicball" /> */}
            
            
            <div className="buttonComponent">
                
                <div className="submit">
                    <input onChange={handleChange} name="myInput" value={question} />
                    <button onClick={handleRandom}> SOUMETTRE </button>
                    {/* rappel fonction handleRandom lors du Onclick */}
                </div>
                <div className='firstAnswer'>
                    <p>Question : {savedQuestion}</p>
                    <p>Réponse : {savedAnswer}</p>
                    {/* <img src={answers[random].img} alt="" /> */}
                </div>
            </div>
            <div className="historyTable">
                <h1>Historique des questions posées :</h1>
                <div className="table">
                    {historyTable.map((element) => {
                        return (<div className="QR" key={element.id}>
                            <p id="Q">Q : {element.savedQuestion}</p>
                            <p id="R">R : {element.savedAnswer}</p>
                            <div className="boxHalfWidth"></div>
                        </div>
                        )})
                     }
                     
                </div>

            </div>
        </div>
        </>
    )
}

export default Button;