import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(topics: any, term: any): any {
    // check if search term is undefined
    if(term === undefined) return topics;
    return topics.filter(topic=>{ // javascript filter(function)
      // if below is false, then topic will be removed from topics array
      return topic.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}