

export class Messages{
    public Errors:Array<string> = [];
    public Warnings:Array<string> = [];
    public Infos: Array<string>= [];
    public isError:boolean = false;
    public isWarning: boolean = false;
    public isInfo:boolean = false;

    public addErrorMessage(value: string){
        this.isError = true;
        this.Errors.push(value);
    }
    public clearErrorMessages(){
        this.isError = false;
        this.Errors = []
    }
    public setErrorMessage(value: Array<string>){
        this.isError = true;
        this.Errors = value;
    }
    public getErrorMessages():Array<string>{
        return this.Errors;
    }

    public isErrorMessage():boolean{
        return this.isError;
    }

    public addWarningMessage(value: string){
        this.isWarning = true;
        this.Warnings.push(value);
    }
    public clearWarningMessages(){
        this.isWarning = false;
        this.Warnings = []
    }
    public setWarningMessage(value: Array<string>){
        this.isWarning = true;
        this.Warnings = value;
    }
    public getWarningMessages():Array<string>{
        return this.Warnings;
    }

    public isWarningMessage():boolean{
        return this.isWarning;
    }

    public addInfoMessage(value: string){
        this.isInfo = true;
        this.Infos.push(value);
    }
    public clearInfoMessages(){
        this.isInfo = false;
        this.Infos = []
    }
    public setInfoMessage(value: Array<string>){
        this.isInfo = true;
        this.Infos = value;
    }
    public getInfoMessages():Array<string>{
        return this.Infos;
    }

    public isInfoMessage():boolean{
        return this.isInfo;
    }

    public isMessage():boolean{
        return (this.isInfo || this.isError || this.isWarning);
    }
}