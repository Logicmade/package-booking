import { ValidationError } from "class-validator";

export default class ReturnValue {
    constructor (public result:boolean, public validationErrors: ValidationError[], public otherErrors:string[],  public value:any){

    }
}