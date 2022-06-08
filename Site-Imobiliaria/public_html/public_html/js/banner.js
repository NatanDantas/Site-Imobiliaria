
var banners = ["img/imovel/i1.PNG","img/imovel/a2.png","img/imovel/a3.png","img/imovel/a4.png","img/imovel/a5.png"];
var bannerAtual = 0;
function trocaBanner(){
    if(bannerAtual == 4){
        bannerAtual = 0;
    }else{
        bannerAtual = bannerAtual + 1;
    }
    document.querySelector('.banner-destaque img').src=
                                            banners[bannerAtual];
}
setInterval(trocaBanner, 3000);




