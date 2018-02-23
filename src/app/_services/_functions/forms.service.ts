import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormsService {
  form: any ={};
  constructor(private fb: FormBuilder) { }

  private build(obj){
    return this.fb.group(obj);
  }
  
  group(object){
    if(typeof object != 'object'){
      throw new Error('Invalid object. form can\'t be build');
    }
      for(let field in object){
        if(Array.isArray(object[field]['validators'])){
          this.form[object[field]["key"]] = new FormControl(object[field]['defaultValue'], Validators.compose( object[field]['validators'] ) );
        }else{
          this.form[object[field]["key"]] = new FormControl(object[field]['defaultValue']);
        }
      }
    return this.build(this.form);
  }
  set(object, updatedForm:any=null){
    if(typeof object != 'object'){
      throw new Error('Invalid object. form can\'t be update');
    }
    if(typeof updatedForm != null){
      for(let field in updatedForm){        
        object.controls[updatedForm[field]["key"]].setValue(updatedForm[field]['defaultValue']);
      }
    }
    return object;
  }
  update(object, updatedForm:any = null){
    if(typeof object != 'object'){
      throw new Error('Invalid object. form can\'t be update');
    }
    let reformObject = {};
    if(typeof updatedForm != null) {
      for(let field in updatedForm) {
        if(!object.controls.hasOwnProperty(updatedForm[field].key) || updatedForm[field] == null ) continue;
        let key = updatedForm[field].key;
        reformObject[key] = updatedForm[field].defaultValue;
      }
      object.patchValue(reformObject);
    }
    return object;
  }
  reset(formGroup: FormGroup) {
    if (typeof formGroup != 'object') {
      throw new Error('Invalid object. form reset faild!');
    }
    // tslint:disable-next-line:forin
    for (let field in formGroup.controls) {
      formGroup.controls[field].patchValue('');
    }
    return formGroup;
  }
  addField(myForm:FormGroup, newName:string, object:any):any{
    myForm.addControl(newName, new FormControl(object[0].defaultValue, object[0].validators) );
    return myForm;
  }
  removeField(myForm:FormGroup ,fieldName:string){
    if( !myForm.contains(fieldName) ) return myForm;
      myForm.removeControl(fieldName);
      return myForm;
  }

}
