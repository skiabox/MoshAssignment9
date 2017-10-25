import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  public headerYear: string = '';
  public headerMonth: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          this.headerYear = params.get('year');
          this.headerMonth = params.get('month');
        }
      );
  }

  //methods
  public onClick(): void
  {
    this.router.navigate(['/']);
  }

}
