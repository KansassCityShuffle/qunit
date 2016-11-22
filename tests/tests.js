QUnit.test( "hello test", function( assert ) 
{
	assert.ok( 1 == "1", "Passed!" );
} );

QUnit.test('checkParity()', function( assert ) 
{  
    assert.ok( isPair(0), '0 is pair' ); 
    assert.ok( isPair(2), '2 is pair' ); 
    assert.ok( isPair(-4), '-4 in not pair' ); 
    assert.ok( !isPair(1), '1 is not pair' ); 
    assert.ok( !isPair(-7), '-7 is not pair' );  
} );

QUnit.test( 'sayHello()', function( assert ) 
{
	assert.ok( sayHello("lisa", "Hello lisa" ) );
	assert.ok( sayHello("1", "Hello 1" ) );
	assert.ok( sayHello(" ", "Hello  " ) );
} );