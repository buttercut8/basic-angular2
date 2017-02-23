import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
@Injectable()
export class EmployService {

    private _url : string = "http://date.jsontest.com/";

    constructor(private _http : Http){}

    getRequest(){
        return this._http.get(this._url)
                    .map(
                        ((response : Response)  => response.json())
                    );
    }

    postRequest(){
        let json = JSON.stringify({
            name : 'Remy Nguyen',
            age : 20,
            address : 'District 9',
        });
        let params = 'json=' + json;
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        return this._http.post('http://validate.jsontest.com',params,{
            headers : headers
        }).map((response : Response) => response.json());

    }





    getItem(){
        return [
            {
                name : 'Remy Nguyen',
                age : 20,
                address : 'District 9',
            },
            {
                name : 'Tony Nguyen',
                age : 22,
                address : 'District 1',
            },
            {
                name : 'Jonny Nguyen',
                age : 26,
                address : 'District 5',
            },
            {
                name : 'Tony Tran',
                age : 23,
                address : 'District 2',
            }
        ]
    }
}
