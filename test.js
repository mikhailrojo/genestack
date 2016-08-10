var assert  = require("assert");
var PaginationHelper = require('./index.js').default;


describe("Testing default example", function(){
  var helper;

  before(function(){
    helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  })

  it("helper.pageCount(); //should == 2", function(){
    assert.equal(helper.pageCount(), 2);
  });
  it("helper.itemCount(); //should == 6", function(){
    assert.equal(helper.itemCount(), 6);
  });
  it("helper.pageItemCount(0); //should == 4", function(){
    assert.equal(helper.pageItemCount(0), 4);
  });
  it("helper.pageItemCount(1); // last page - should == 2", function(){
    assert.equal(helper.pageItemCount(1), 2);
  });
  it("helper.pageItemCount(2); // should == -1 since the page is invalid", function(){
    assert.equal(helper.pageItemCount(2), -1);
  });
  it("helper.pageIndex(5); //should == 1", function(){
    assert.equal(helper.pageIndex(5), 1);
  });
  it("helper.pageIndex(2); //should == 0", function(){
    assert.equal(helper.pageIndex(2), 0);
  });
  it("helper.pageIndex(20); //should == -1", function(){
    assert.equal(helper.pageIndex(20), -1);
  });
  it("helper.pageIndex(-10); //should == -1", function(){
    assert.equal(helper.pageIndex(-10), -1);
  });
});



describe("Testing more complex example", function(){
  var helper;

  before(function(){
    helper = new PaginationHelper(['a','b','c','d','e','f', 'g', 'h', 'i', 'j'], 3);
    // длина 10, шаг 3, страниц 4
  })

  it("helper.pageCount(); //should == 4", function(){
    assert.equal(helper.pageCount(), 4);
  });
  it("helper.itemCount(); //should == 10", function(){
    assert.equal(helper.itemCount(), 10);
  });

  describe("pageItemCount test on big array", function(){

    it("helper.pageItemCount(0); //should == 3", function(){
      assert.equal(helper.pageItemCount(0), 3);
    });
    it("helper.pageItemCount(2); //should == 3", function(){
      assert.equal(helper.pageItemCount(2), 3);
    });
    it("helper.pageItemCount(3); //should == 3", function(){
      assert.equal(helper.pageItemCount(3), 1);
    });
    it("helper.pageItemCount(4); // should == -1 since the page is invalid", function(){
      assert.equal(helper.pageItemCount(4), -1);
    });
  })

  describe("pageIndex test on big array", function(){

    it("helper.pageIndex(5); //should == 1", function(){
      assert.equal(helper.pageIndex(5), 1);
    });
    it("helper.pageIndex(6); //should == 2", function(){
      assert.equal(helper.pageIndex(6), 2);
    });
    it("helper.pageIndex(2); //should == 0", function(){
      assert.equal(helper.pageIndex(2), 0);
    });
    it("helper.pageIndex(9); //should == 3", function(){
      assert.equal(helper.pageIndex(9), 3);
    });
    it("helper.pageIndex(10); //should == -1", function(){
      assert.equal(helper.pageIndex(20), -1);
    });
    it("helper.pageIndex(11); //should == -1", function(){
      assert.equal(helper.pageIndex(-10), -1);
    });
  });
})
