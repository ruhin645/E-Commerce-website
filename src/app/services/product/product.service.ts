import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { Observable,catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getCategory(): Observable<any> {
    const proxyUrl = 'https://corsproxy.io/'; // Free CORS proxy
    const apiUrl = environments.ServerApi + 'GetAllCategory';
    return this.http.get<any>(proxyUrl + apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching categories:', error);
        return throwError(() => new Error('Something went wrong while fetching categories.'));      
      })      
     
    );
  }
  getProducts(): Observable<any> {
    const proxyUrl = 'https://corsproxy.io/'; // Free CORS proxy
    const apiUrl = environments.ServerApi + 'GetAllProducts';
    return this.http.get<any>(proxyUrl + apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching categories:', error);
        return throwError(() => new Error('Something went wrong while fetching categories.'));      
      })      
     
    );
  }
  saveProduct(obj: any): Observable<any> {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Free CORS proxy
    const apiUrl = environments.ServerApi + 'CreateProduct';
    return this.http.post<any>(proxyUrl + apiUrl,obj).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching categories:', error);
        return throwError(() => new Error('Something went wrong while fetching categories.'));      
      })      
     
    );
  }
  updateProduct(obj: any): Observable<any> {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Free CORS proxy
    const apiUrl = environments.ServerApi + 'UpdateProduct';
    return this.http.post<any>(proxyUrl + apiUrl,obj).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching categories:', error);
        return throwError(() => new Error('Something went wrong while fetching categories.'));      
      })      
     
    );
  }
  deleteProduct(id: any): Observable<any> {
    const proxyUrl = 'https://corsproxy.io/?'; // Free CORS proxy
    const apiUrl = environments.ServerApi + 'DeleteProductById?id='+id;
    console.log('Delete API URL:', apiUrl);
  
    // Log the ID to verify it's being passed correctly
    console.log('Product ID being deleted:', id);
    return this.http.get<any>(proxyUrl + apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching categories:', error);
        return throwError(() => new Error('Something went wrong while fetching categories.'));      
      })      
     
    );
  }
}
