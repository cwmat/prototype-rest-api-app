import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Import data service and data class
import { SmellprofileService } from '../smellprofile.service';
import { Smellprofile } from '../smellprofile';

@Component({
  selector: 'app-smellprofile-details',
  templateUrl: './smellprofile-details.component.html',
  styleUrls: ['./smellprofile-details.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileDetailsComponent implements OnInit {
  smellprofile;

  constructor(private route: ActivatedRoute,
              private smellprofileService:SmellprofileService,
              private router: Router) { }

  ngOnInit() {
    this.getSmell();
  }

  getSmell() : void {
    const param = this.route.snapshot.paramMap.get('id');
    this.smellprofileService.getSmell(param)
      .subscribe(smellprofile => this.smellprofile = smellprofile[0]);
  }

  goBack():void {
    // do some logic here if we like
     
    // navigate back to gallery
    this.router.navigate(['/gallery']);
    }
  

}
