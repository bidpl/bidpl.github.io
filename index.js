var dominant;
var recessive;
var total;

var p;
var q;
var total;

function update(){
  dominant = parseInt(document.getElementById("dominantInput").value);
  recessive = parseInt(document.getElementById("recessiveInput").value);
  
  total = dominant + recessive;
  
  q = Math.sqrt(recessive/total);
  p = 1-q;
  
  setText("total_output", total);
  
  setText("p_output", p);
  setText("q_output", q);
  
  setText("p^2_output", Math.pow(p, 2));
  setText("2pq_output", 2*p*q);
  setText("q^2_output", Math.pow(q, 2));
  
  setText("homoDominant_output", Math.pow(p,2)*total);
  setText("homoDominant-Rounded_output", Math.round(Math.pow(p,2)*total));
  
  setText("hetero_output", 2*p*q*total);
  setText("hetero-Rounded_output", Math.round(2*p*q*total));
  
  setText("homoRecessive_output", recessive);
}

function setText(id, text){
  document.getElementById(id).innerHTML = text;
}