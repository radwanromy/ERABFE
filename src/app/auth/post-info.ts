export class PostInfo {
    title: any;
    content: any;
    description: any;
    comments: any[] | undefined;
    

    constructor( title: any, content: any,description: any) {
        this. title =  title;
        this.content =content;
        this.description = description;
        this.comments= ['user'];
    }
}
