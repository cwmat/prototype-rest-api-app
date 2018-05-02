import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Import data service and data class
import { SmellprofileService } from '../smellprofile.service';
import { Smellprofile } from '../smellprofile';

@Component({
  selector: 'app-smellprofile-new',
  templateUrl: './smellprofile-new.component.html',
  styleUrls: ['./smellprofile-new.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileNewComponent implements OnInit {
  @Output() newSmellEvent = new EventEmitter();
  newSmell : any = {};


  constructor(private smellprofileService:SmellprofileService) { }

  ngOnInit() {
  }

  createSmell(newSmellForm) : void {
    let data : any = {
      name: this.newSmell.name,
      type: this.newSmell.type,
      desc: this.newSmell.desc,
      lat: this.newSmell.lat,
      lon: this.newSmell.long
    };
    console.log("Data", data);
    this.smellprofileService.createSmell(data)
    .subscribe((smell)=>{
      console.log("Smell", smell)
      this.newSmellEvent.emit();
      newSmellForm.reset();
    });
  }

}
