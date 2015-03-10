var md = new Material();

var myXHR = new XMLHttpRequest();
var myXHRData = '';
myXHR.onload = function(){
  myXHRData = JSON.parse(this.response);
  console.log(myXHRData);
};
myXHR.open("GET", "rabbihossain.json", true);
myXHR.overrideMimeType("application/json");
myXHR.send();

var gitXHR = new XMLHttpRequest();
var gitXHRData = '';
gitXHR.onload = function(){
  gitXHRData = JSON.parse(this.response);
  for(i=0;i<10;i++){
    if(gitXHRData[i].type == "ForkEvent"){
      gitXHRData[i].type = "Forked"
    };
    if(gitXHRData[i].type == "WatchEvent"){
      gitXHRData[i].type = "Watched"
    };
    if(gitXHRData[i].type == "PushEvent"){
      gitXHRData[i].type = "Pushed a commit to"
    };
    if(gitXHRData[i].type == "CreateEvent"){
      gitXHRData[i].type = "Created repository"
    };
  };
};
gitXHR.open("GET", "https://api.github.com/users/rabbihossain/events/public", true);
gitXHR.overrideMimeType("application/json");
gitXHR.send();
