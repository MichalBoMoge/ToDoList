document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var q = document.getElementById("inp").value;
        if(q.length > 0)    
            {

            document.getElementById("lista").innerHTML +='<li><input type="checkbox" onclick="mark()">'+q+`
              <button onclick='kill()'>x</button>
              </li>
              <hr width='100%' height='5px'> 
            
            `;
            
            document.getElementById("inp").value = "";

           document.querySelector()
        }
    }
});