var loadMarkdown = function(){
  $.get("https://raw.githubusercontent.com/AurelienLourot/github-commit-watcher/master/README.html", function(data){
    $("#main").html(marked(data));
  });
}

loadMarkdown();
