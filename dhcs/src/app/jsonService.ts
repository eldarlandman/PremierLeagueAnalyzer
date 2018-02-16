import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class jsonService {
  constructor(public http: Http) {}

  getData(name) {
    return this.http.get('assets/' + name + '.json')
      .map((res: Response) => res.json());
  }
}
