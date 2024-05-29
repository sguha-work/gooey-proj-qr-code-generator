import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
import { Subject_Generate_QR_Success$ } from '../subjects/generate-qr.behavior-subject';
export const generateQR = (body)=>{
    const output = ajax({
        url: 'http://localhost:3000/qr',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      }).pipe(
        map(response => response),
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        })
      );
       
      output.subscribe({
        next: (value) => {
            Subject_Generate_QR_Success$.next(value.response);
        },
        error: err => console.log(err)
      });
}