'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Code goes here
var PaginationHelper = function () {
  function PaginationHelper(collection, itemsPerPage) {
    _classCallCheck(this, PaginationHelper);

    this.collection = collection;
    this.length = collection.length;
    this.itemsPerPage = itemsPerPage;
    this.pageCountVar = Math.ceil(this.length / this.itemsPerPage); //2
    this.fullPages = Math.floor(this.length / this.itemsPerPage); //1
    this.reminder = this.length % itemsPerPage; // 2
  }

  _createClass(PaginationHelper, [{
    key: 'itemCount',
    value: function itemCount() {
      return this.length;
    }
  }, {
    key: 'pageCount',
    value: function pageCount() {
      return this.pageCountVar;
    }
  }, {
    key: 'pageItemCount',
    value: function pageItemCount(pageIndex) {
      var indexInPage = pageIndex + 1;
      if (pageIndex < 0 || indexInPage > this.pageCountVar) {
        return -1;
      }
      if (indexInPage <= this.fullPages) {
        return this.itemsPerPage;
      } else if (indexInPage === this.pageCountVar) {
        return this.reminder;
      }
    }
  }, {
    key: 'pageIndex',
    value: function pageIndex(itemIndex) {
      if (itemIndex >= this.length || itemIndex < 0) {
        return -1;
      }
      var tempArray = this.collection.slice(0, itemIndex); //[a,b,c,d,e]
      return Math.floor(tempArray.length / this.itemsPerPage);
    }
  }]);

  return PaginationHelper;
}();

exports.default = PaginationHelper;


var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
