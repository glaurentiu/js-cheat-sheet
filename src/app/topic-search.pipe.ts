import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicSearch'
})
export class TopicSearchPipe implements PipeTransform {

  transform(list: any[], value: string) {
    let words = value.split(' ');
    var regex = `(${words[0]})`
    for (let i = 1; i < words.length; i++) {
      regex +=`|(${words[i]})`
    }


    var regexNew = new RegExp(regex)


    return value ? list.filter(item => item.name.toLowerCase().match(regexNew)) : list;
  }

}
