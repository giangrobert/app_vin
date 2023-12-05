import {HttpEvent, HttpEventType, HttpInterceptorFn} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {inject} from "@angular/core";
import {tap} from "rxjs";
// import {inject} from "@angular/core";


export const toastInterceptor: HttpInterceptorFn = (req, next) => {
    // console.log('Alerta Toast')
    const toastr = inject(ToastrService);
    // console.log(event)
    //
    // if (req.url.includes('api')) {
    //     // Aquí puedes mostrar el toast antes de la petición
    //     // const s =  FuseAlertComponent;
    //     // FuseAlertService.show('sad');
    //     toastr.info('Hello world!', 'Toastr fun!');
    // }
    return next(req).pipe(tap(event => {
        if (req.url.includes('api')){
            if (event.type === HttpEventType.Response) {
                if (event.status >= 0 && event.status < 200){
                    toastr.info(`${event.body['message']??'Ten mucho cuidado'} '`, 'Atención');
                }else if (event.status >= 200 && event.status < 300){
                    toastr.success(`${event.body['message']??'En hora buena'}`, 'Correcto');
                }else if (event.status >= 300 && event.status < 400){
                    toastr.info(`${event.body['message']??'Ten mucho cuidado'}`, 'Atención');
                }else if (event.status > 400 && event.status < 500 || event.status >= 500 && event.status < 600){
                    toastr.error(`${event.body['message']??event.body['error']}`, 'Error');
                }
                    console.log(req.url, 'returned a response with status', event.status);
            }
        }else if (req.responseType) {
            console.log('blob response', event);
        }

    }));



};





//
// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';
//
//
// @Injectable()
// export class ToastInterceptor implements HttpInterceptor {
//     constructor(private toast: ToastrService) {}
//
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//         if (req.url.includes('api')) {
//             // Mostrar el alerta
//             alertService.show('nombreAlerta');
//         }
//
//         return next.handle(req);
//     }
// }

