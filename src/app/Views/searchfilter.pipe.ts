import { Doctors } from './doctors';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Doctorsss: Doctors[], searchValue: string): Doctors[] {
    if(!Doctorsss || !searchValue){
      return Doctorsss;
    }
    return Doctorsss.filter(Doctors => Doctors.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
