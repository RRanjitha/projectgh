import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IQuantity } from 'app/shared/model/quantity.model';

type EntityResponseType = HttpResponse<IQuantity>;
type EntityArrayResponseType = HttpResponse<IQuantity[]>;

@Injectable({ providedIn: 'root' })
export class QuantityService {
    private resourceUrl = SERVER_API_URL + 'api/quantities';

    constructor(private http: HttpClient) {}

    create(quantity: IQuantity): Observable<EntityResponseType> {
        return this.http.post<IQuantity>(this.resourceUrl, quantity, { observe: 'response' });
    }

    update(quantity: IQuantity): Observable<EntityResponseType> {
        return this.http.put<IQuantity>(this.resourceUrl, quantity, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IQuantity>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IQuantity[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    softDelete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    // commented for making the delete as soft one which means not to delete from db
    // delete(id: number): Observable<HttpResponse<any>> {
    //     return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    // }
}
