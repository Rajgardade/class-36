class Form 
{
    constructor() {}
  
    display()
    {
      var title = createElement('h2')
      title.html("CAR GAME");
      title.position( 400 , 100   );
      
      var input = createInput("Name");
      var button = createButton('Play');
     
      
      input.position(  400  , 220   );
      button.position( 420  , 260   );

      button.mousePressed(function()
                          {
                                input.hide();
                                button.hide();
  
                                var name =   input.value();

                                playerCount=   playerCount+1;
                                

                               player.updateName( name  );
                               player.updateCount( playerCount  );

                                var greeting = createElement('h2');
                                greeting.html("Hello " + name );
                                greeting.position( 400  , 140 );
                         });

    }
}
