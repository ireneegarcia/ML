export class AuthorModel {

    author: {
        name: string,
        lastname: string
    };

    constructor(data?: AuthorModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.author = data.author;
        }
    }
}
