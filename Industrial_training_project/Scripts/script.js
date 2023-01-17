//Collapse the menu button when lose focus.
$(function(){
    $("#navbarToggle").blur(function(event){
        let screenWidth = window.innerWidth;
        if (screenWidth < 768){
            $("#navbarNavAltMarkup").collapse('hide');
        }
    });
}
    );

//LOAD Home snippet
(function (global){
let dc = {};
let homeHtml = "snippets/home-snippet.html";

//INSERT html for select:
let insertHtml = function(html, selector){
let targetElem = document.querySelector(selector);
targetElem.innerHTML = html;
};
//SHOW Loading Icon:
let showLoading = function (selector) {
    let html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };
// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

    // On first load, show home view
    showLoading$("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        $document.querySelector("#main-content")
          .innerHTML = responseText;
      },
      false);
    });
    
  
global.$dc= dc;
}(window));
