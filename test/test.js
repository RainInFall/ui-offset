var Offset = require('..');
var expect = require('expect');

describe('Offset', function(){
  it('should work', function() {
    var offset = Offset(3, 4);
    expect(offset.x()).toBe(3);
    expect(offset.y()).toBe(4);
    expect(Offset.isOffset(offset)).toBe(true);
  });
});

describe('Offset#distance', function() {
  it('should work', function() {
    var offset = Offset(3, 4);
    expect(offset.distance()).toBe(5);
  });
});

describe('Offset#reverse', function() {
  it('should work', function(){
    var offset = Offset(3, 4);
    offset = offset.reverse();
    expect(offset.x()).toBe(-3);
    expect(offset.y()).toBe(-4);
  });
  it('should not effect itself', function(){
    var offset = Offset(3, 4);
    offset.reverse();
    expect(offset.x()).toBe(3);
    expect(offset.y()).toBe(4);
  });
  it('should clone new one', function(){
    var offset = Offset(3, 4);
    expect(offset.reverse()).toNotBe(offset);
  });
});

describe('Offset#clone', function(){
  it('should work', function(){
    var offset = Offset(3, 4);
    var another = offset.clone();
    expect(offset.x()).toBe(another.x());
    expect(offset.y()).toBe(another.y());
    expect(offset).toNotBe(another);
  });
});

describe('Offset#equals', function() {
  it('should work', function(){
    var one = Offset(3 ,4);
    var other = Offset(3, 4);
    expect(one.equals(other)).toBe(true);
    expect(other.equals(one)).toBe(true);
  });
  it('should tell not equals', function() {
    var one = Offset(3 ,4);
    var other = Offset(4, 3);
    expect(one.equals(other)).toBe(false);
    expect(other.equals(one)).toBe(false);
  });
});
