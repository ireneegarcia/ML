import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'thousandsPipe'
})

export class ThousandsPipe implements PipeTransform {

    public transform(value: any) {
        if (value !== undefined && value !== null) {
            const roundValue = Math.round(value);
            if (roundValue) {
                return roundValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            } else {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            }
        } else {
            return 0;
        }
    }

}
