### JavaScript skill test ####

```bash
npm install && npm test
```

- Tests are written in Ecmascript06 and transpiled via ```bash npm run transpile ```

You will write the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
Bear in mind that there will be multiple instances of PaginationHelper.

The constructor takes in an array of items and an integer indicating how many items fit within a single page:
PaginationHelper(collection, itemsPerPage)
This class has the following methods:
itemCount() returns the number of items within the entire collection.
pageCount() returns the number of pages
pageItemCount(pageIndex) returns the number of items on the current page. page_index is zero based. This method should return -1 for pageIndex values that are out of range.
pageIndex(itemIndex) determines what page an item is on. Zero based indexes. This method should return -1 for itemIndex values that are out of range

The following are some examples of how this class is used:
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1

 Tests are welcome.
