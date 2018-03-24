  (function(){
    HTMLElement.prototype.tab = function(){
      var tablinks = this.querySelectorAll('.tab-link');

      tablinks.forEach(function (tablink){
        tablink.onclick = function (event){

          //prevent any other action
          event.preventDefault();
    
          //first set inactive to every link of tab
          tablinks.forEach(function (tempTablink) {
            tempTablink.setAttribute(
              'class',
              tempTablink.getAttribute('class').replace(' active', '')
            );
          });
      
          //set active class to current cliked element tab link
          var tablinkClass = tablink.getAttribute('class');
          tablink.setAttribute('class',tablinkClass+' active');
      
          //get his nested child a with href attribute and remove # from its href
          var href = tablink.querySelector('a').getAttribute('href').replace('#','');

          //all contents of divs
          var tabContents = document.querySelectorAll('.tab-content');

          tabContents.forEach(function(tabContent){
        
            //set inactive to every tab content
            tabContent.setAttribute('class',tabContent.getAttribute('class').replace(' active',''));

            //set active class to proper div
            if(tabContent.getAttribute('id') == href){
              tabContent.setAttribute('class',tabContent.getAttribute('class')+' active');
            }
          });

        };
      });
    };
})();
