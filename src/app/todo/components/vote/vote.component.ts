import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from 'app/todo/models/todo';
import {BackendService} from '../../services/backend.service';
import {ReduxService} from '../../services/redux.service';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteComponent implements OnInit {
  /**
   * Observable list of todo
   */
  todos: Observable<Todo[]>;
  // @Input() data: Todo[];
  // voteListForChittagong = new Array<Todo>();
  // voteListForDhaka = new Array<Todo>();

  constructor(private backendService: BackendService,
              private reduxService: ReduxService) {
    // this.todos = store.select(fromTodos.getTodosAll);


  }

  ngOnInit() {
    // // subscribe to receive selected todo
    // this.store.select(fromTodos.getSelectedTodo).subscribe(todo => {
    //   if (!todo) {
    //     return;
    //   }
    // });

  }

  vote(symbol: string): void {
    this.reduxService.save(symbol).subscribe();
  }

  showDate(): void {
    this.reduxService.getAllReduxValue().subscribe(res => {
      console.log(res);
      res.forEach(todo => {
        this.backendService.addTotalVote(todo.symbolName, todo.isVoted).subscribe();
      });
    });
    this.refresh();
  }

  refresh(): void {
    this.reduxService.refresh().subscribe(res =>{
      console.log(res);
    });
  }
}
