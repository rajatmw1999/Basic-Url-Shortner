
function fun(postUrl){
  var i=0, flag=0;
while(i<9){
  if((postUrl[i]==='w')&&(postUrl[i+1]==='w')&&(postUrl[i+2]==='w')&&(postUrl[i+3]==='.'))
  {
    flag=1;
    break;
  }
  ++i;
}
if(flag===1)
  var remainUrl = postUrl.substring(i+4, postUrl.length);
else
{
  i=0;
    if((postUrl[i]==='h')&&(postUrl[i+1]==='t')&&(postUrl[i+2]==='t')&&(postUrl[i+3]==='p')&&(postUrl[i+4]==='s')){
      var remainUrl = postUrl.substring(i+8, postUrl.length);
    }
    else if((postUrl[i]==='h')&&(postUrl[i+1]==='t')&&(postUrl[i+2]==='t')&&(postUrl[i+3]==='p')&&(postUrl[i+4]===':')){
        var remainUrl = postUrl.substring(i+7, postUrl.length);
    }
    else{
      var remainUrl = postUrl;
    }
}
return remainUrl;
}

module.exports = fun;
