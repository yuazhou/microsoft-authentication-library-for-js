export class MSALError {
    private err = '';
    private errDesc = '';
    private scps = '';

    constructor(error: string , errorDesc?: string, scopes?: string) {
        this.err = error;
        if (errorDesc) {
            this.errDesc = errorDesc;
        }
        if (scopes) {
            this.scps = scopes;
        }
    }

    get error(): string {
      return this.err;
    }

    set error(value: string) {
        this.err = value;
    }

    get errorDesc(): string {
        return this.errDesc;
    }

    set errorDesc(value: string) {
        this.errDesc = value;
    }

    get scopes(): string {
        return this.scps;
    }

    set scopes(value: string) {
        this.scps = value;
    }
}
