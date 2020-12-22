import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ResultResponse} from './result.response';


@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent implements OnInit {
  countVoteListForChittagong: number;
  countVoteListList: Array<ResultResponse> = new Array<ResultResponse>();


  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(): void {
    this.backendService.getResult().subscribe(res => {
      this.countVoteListList = res;
      console.log(this.countVoteListList);
    });
  }
}
