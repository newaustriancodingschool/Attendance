import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidatorsService{
    
    static maxLength(max: number): ValidatorFn{
        return (c: AbstractControl): {[key: string]:any}=>{
            return (c.value.length >= max) ? {"Max length exceeded": false}: null;
        }
    }
    static minLength(min: number): ValidatorFn{
        return (c: AbstractControl): {[key: string]:any}=>{
            return (c.value.length >= min) ? null: {"Minimum length exceeded": false};
        }
    }
    static required(): ValidatorFn{
        return (c: AbstractControl): {[key: string]:any}=>{
            return (c.value.length) ? null : {"valid": false};
        }
    }
}