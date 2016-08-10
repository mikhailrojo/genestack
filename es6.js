// Code goes here
export default class PaginationHelper {

  constructor(collection, itemsPerPage){
   this.collection = collection;
   this.length = collection.length;
   this.itemsPerPage = itemsPerPage;
   this.pageCountVar = Math.ceil(this.length/this.itemsPerPage); //2
   this.fullPages = Math.floor(this.length/this.itemsPerPage);//1
   this.reminder = this.length % itemsPerPage; // 2
  }

  itemCount(){
    return this.length;
  }
  pageCount(){
    return this.pageCountVar;
  }

  pageItemCount(pageIndex){
    var indexInPage = pageIndex+1;
    if(pageIndex < 0 || indexInPage > this.pageCountVar){
      return -1;
    }
    if(indexInPage <= this.fullPages){
      return this.itemsPerPage;
    }else if(indexInPage === this.pageCountVar){
      return this.reminder;
    }
  }
  pageIndex(itemIndex){
    if (itemIndex >= this.length || itemIndex < 0){
      return -1;
    }
    var tempArray = this.collection.slice(0, itemIndex);//[a,b,c,d,e]
    return Math.floor(tempArray.length/this.itemsPerPage);
  }

}


var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
