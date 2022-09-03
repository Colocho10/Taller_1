document.write("MATRIZ ALEATORIA");
let n = prompt("Digite el tamaño de la matriz");
let inicio = 0;
let nlimite = n-1;
let c = 1;

let matriz = new Array(n);
for(x=0; x<=n; x++){
    matriz[x] = new Array(n);
}

for(x=0; x<=n; x++){
    for(y=0; y<=n; y++){
        matriz[x][y] = 0;
    }        
}

while(c <= (Math.pow(n,2))){
    for(x= inicio; x<= nlimite; x++){
        matriz[inicio][x] = c;
        c++;
     }

     for(x=inicio+1; x<=nlimite; x++){
        matriz[x][nlimite]=c;
        c++;
     }

     for(x=nlimite-1; x>=inicio+1; x--){
        matriz[nlimite][x]=c;
        c++;
     }

     for(x=nlimite; x>= inicio+1; x--){
        matriz[x][inicio]=c;
        c++;
     }

     inicio = inicio+1;
     nlimite = nlimite-1;
}

document.write("<table>");
for(x=0; x< n; x++){
    document.write("<tr>");
    for(y=0; y< n; y++){
        document.write("<td align='center'>"+matriz[x][y]+"</td>");
    }
    document.write("</tr>");
}
document.write("<table>");