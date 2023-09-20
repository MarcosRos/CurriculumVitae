import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { IaService } from 'src/app/services/ia.service';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.scss']
})
export class IaComponent {
/* INTELIGENCIA ARTIFICIAL OBJETOS */ 
response: string = '';
showResponse: boolean = false;
files: [] = [];
filesInfo: any[] = [];
form: FormGroup

constructor(private is: IaService) {
  this.form = new FormGroup({
    file: new FormControl('', Validators.required),
  });
}

async consultarIA() {
  if (this.isValidUpload() == true) {
    console.log(this.filesInfo)
    this.response = "Cargando..."
    this.showResponse = true;
    await lastValueFrom(this.is.getResponse(this.filesInfo[0])).then((result: any) => {
      if (result != null) {
        this.response = result
        this.showResponse = true;
      }
    })
  }
}

subirArchivo(e: any) {
  let files = e.target.files;
  var allFiles: any[] = [];
  for (var i = 0; i < files.length; i++) {
    let file = files[i];
    let fileExtension = file.name.split('.').pop();
    if (fileExtension) {
      const isValidExtension: boolean = ['jpg', 'png', 'jpeg'].includes(fileExtension);
      const isValidSize: boolean = file.size <= 10 * 1024 * 1024; // 10 MB
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1024) + ' kB',
          base64: reader.result,
          //file: file,
          isValidExtension: isValidExtension,
          isValidSize: isValidSize
        };
        allFiles.push(fileInfo);
      }
    }
  }
  this.filesInfo = allFiles;
}

isValidUpload() {
  if (this.filesInfo.length == 1) {
    let isValid = true;
    if (!this.filesInfo[0].isValidExtension || !this.filesInfo[0].isValidSize) 
      isValid = false;
    return isValid;
  } else 
    return false;
}

get f() {
  return this.form.controls;
}

touchInputFile() {
  this.f['file'].markAsTouched();
}

/* INTELIGENCIA ARTIFICIAL OBJETOS */ 

}
