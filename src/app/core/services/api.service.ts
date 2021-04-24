import {Injectable} from '@angular/core';
import {QuizInformationType} from '../../shared/models/quiz-information-type.model';
import {Observable, of, Subject} from 'rxjs';
import {QuizQuestionsResponse} from '../../shared/interfaces/quiz-questions-response.interface';
import {HttpClient} from '@angular/common/http';
import {OPEN_TRIVIA_DB} from '../../config/http';
import {map} from 'rxjs/operators';
import {QuizQuestion} from '../../shared/models/quiz-questions.model';
import {shuffle} from '../utils/shuffle';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private cachedQuizQuestions: Subject<QuizQuestion[]> = new Subject<QuizQuestion[]>();

  constructor(
    private httpClient: HttpClient
  ) {}

  private modifyResponseData(response: QuizQuestionsResponse): QuizQuestion[] {
    const quizQuestions: QuizQuestion[] = [];

    if (!response || response.results.length === 0) {
      return null;
    }

    for (const item of response.results) {
      const newQuestion = new QuizQuestion();

      newQuestion.question = item.question;
      newQuestion.answers = [...item.incorrect_answers, item.correct_answer];
      newQuestion.correctAnswer = item.correct_answer;

      newQuestion.answers = shuffle(newQuestion.answers);

      quizQuestions.push(newQuestion);
    }

    return quizQuestions;
  }

  public getQuizQuestionsFromServer(type: QuizInformationType): Observable<boolean> {
    return this.httpClient.get<QuizQuestionsResponse>(`${OPEN_TRIVIA_DB}amount=${type.amount}&category=${type.category}&difficulty=${type.difficulty}&type=multiple`)
      .pipe(
        map(this.modifyResponseData),
        map((stream: QuizQuestion[]) => {
          if (!stream) {
            return false;
          }

          this.cachedQuizQuestions.next(stream);

          return true;
        })
      );
  }

  public getQuizQuestions(): Observable<QuizQuestion[]> {
    return this.cachedQuizQuestions;
  }
}
