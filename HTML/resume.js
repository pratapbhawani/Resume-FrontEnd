var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionID=this.textContent.trim().toLowerCase();
        // console.log(targetsectionID);
        var targetsection=document.getElementById(targetsectionID);
        // console.log(targetsection);
        var interval=setInterval(function(){
            var targetsectioncoordinates=targetsection.getBoundingClientRect();
            if(targetsectioncoordinates.y<=0){
                clearInterval(interval);
                return;
            }
            if(targetsectionID=='contact' && targetsectioncoordinates.top<=200){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}