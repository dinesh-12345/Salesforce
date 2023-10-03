import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected ={};//for storing answers of each question
    correctAnswers =0;// for checking the answers
    isSubmitted = false;//used to show score to user

    //To apply dynamic styling for the score.
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success':'slds-text-color_error'}`;
    }

    //To show/hide the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    // To show/hide the reset button
    get anySelected(){
        return (Object.keys(this.selected).length === 0);
    }

    myQuestions=[
        {
            id : "Question1",
            question : "Which of the following is not a template loop?",
            answers : {
                    a:"for:each",
                    b:"iteration",
                    c:"map loop"
            },
            correctAnswer: "c"
        },
        {
            id : "Question2",
            question : "Which of the file is invalid in LWC Component foldser?",
            answers : {
                    a:".svg",
                    b:".apex",
                    c:".js"
            },
            correctAnswer: "b"
        },
        {
            id : "Question3",
            question : "Which of the following is not a directive?",
            answers : {
                    a:"for:each",
                    b:"if:true",
                    c:"@track"
            },
            correctAnswer: "c"
        }
        
    ]

    //changle handler called on every click on the radio buttons
    changeHandler(event){
        const{name,value} =event.target;    
        this.selected={...this.selected,[name]:value};
    }

    //from submit handler
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswers= correct.length;
        this.isSubmitted= true;
        //console.log(this.correctAnswers);
    }

    //from reset handler
    resetHandler(){
        this.selected={};
        this.correctAnswers=0;
        this.isSubmitted=false;
    }


}