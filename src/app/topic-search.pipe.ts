import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicSearch'
})
export class TopicSearchPipe implements PipeTransform {

  transform(list: any[], value: string) {


    return value ? list.filter(item => item.name.toLowerCase().includes(value.toLowerCase())) : list;
  }

}
