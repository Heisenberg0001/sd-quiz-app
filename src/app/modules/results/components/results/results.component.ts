import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from "../../../../shared/models/quiz-questions.model";
import { APIService } from "../../../../core/services/api.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public results: QuizQuestion[] = [];
  public score: number;

  constructor( private apiService: APIService ) { }

  public ngOnInit(): void {
    this.results = [...this.apiService.getResultArr()];
    this.score = this.apiService.getScore();

    // this.results = [
    //   {
    //     "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    //     "answers": [
    //       "Bill Gates",
    //       "Donald Trump",
    //       "Richard Branson",
    //       "Alan Sugar"
    //     ],
    //     "correctAnswer": "Richard Branson",
    //     "isCorrect": false,
    //     "userAnswer": "Donald Trump"
    //   },
    //   {
    //     "question": "Which American president appears on a one dollar bill?",
    //     "answers": [
    //       "Thomas Jefferson",
    //       "Abraham Lincoln",
    //       "George Washington",
    //       "Benjamin Franklin"
    //     ],
    //     "correctAnswer": "George Washington",
    //     "isCorrect": true,
    //     "userAnswer": "George Washington"
    //   },
    //   {
    //     "question": "What is the name of the Jewish New Year?",
    //     "answers": [
    //       "Succoss",
    //       "New Year",
    //       "Elul",
    //       "Rosh Hashanah"
    //     ],
    //     "correctAnswer": "Rosh Hashanah",
    //     "isCorrect": false,
    //     "userAnswer": "New Year"
    //   },
    //   {
    //     "question": "Red Vines is a brand of what type of candy?",
    //     "answers": [
    //       "Chocolate",
    //       "Bubblegum",
    //       "Licorice",
    //       "Lollipop"
    //     ],
    //     "correctAnswer": "Licorice",
    //     "isCorrect": false,
    //     "userAnswer": "Chocolate"
    //   },
    //   {
    //     "question": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    //     "answers": [
    //       "Fat Man",
    //       "Noah&#039;s Ark",
    //       "Trojan Horse",
    //       "Spruce Goose"
    //     ],
    //     "correctAnswer": "Spruce Goose",
    //     "isCorrect": false,
    //     "userAnswer": "Trojan Horse"
    //   },
    //   {
    //     "question": "Which of the following presidents is not on Mount Rushmore?",
    //     "answers": [
    //       "Theodore Roosevelt",
    //       "Abraham Lincoln",
    //       "Thomas Jefferson",
    //       "John F. Kennedy"
    //     ],
    //     "correctAnswer": "John F. Kennedy",
    //     "isCorrect": false,
    //     "userAnswer": "Theodore Roosevelt"
    //   },
    //   {
    //     "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
    //     "answers": [
    //       "Pear",
    //       "Apple",
    //       "Plum",
    //       "Peach"
    //     ],
    //     "correctAnswer": "Plum",
    //     "isCorrect": true,
    //     "userAnswer": "Plum"
    //   },
    //   {
    //     "question": "The Flag of the European Union has how many stars on it?",
    //     "answers": [
    //       "10",
    //       "12",
    //       "14",
    //       "16"
    //     ],
    //     "correctAnswer": "12",
    //     "isCorrect": true,
    //     "userAnswer": "12"
    //   },
    //   {
    //     "question": "When one is &quot;envious&quot;, they are said to be what color?",
    //     "answers": [
    //       "Red",
    //       "Yellow",
    //       "Green",
    //       "Blue"
    //     ],
    //     "correctAnswer": "Green",
    //     "isCorrect": false,
    //     "userAnswer": "Red"
    //   },
    //   {
    //     "question": "Earth is located in which galaxy?",
    //     "answers": [
    //       "The Mars Galaxy",
    //       "The Black Hole",
    //       "The Milky Way Galaxy",
    //       "The Galaxy Note"
    //     ],
    //     "correctAnswer": "The Milky Way Galaxy"
    //   }
    // ];
    //
    // this.score = 3;
  }

}
