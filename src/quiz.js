import React, { Component } from 'react'
import { QuizData } from './quizdata';

export class Quiz extends Component {
    render() {
        const handleClick = (option, answer) => {
            if (option == answer) {
                alert(`Correct!`);

                // code that will execute if condition is true
              }
              else {
                alert(`Incorrect!`);
              }
           
        };

        return (
            <div>
                <h1>Questions</h1>
                <ul>{QuizData.map(question =>
                    <><li>{question.question}</li>
                    {question.options.map(option =>
                    <button onClick={() => handleClick(option, question.answer)}>{option}</button>)}
                    </>
                )}
                </ul>

            </div>
        )
    }
}

export default Quiz