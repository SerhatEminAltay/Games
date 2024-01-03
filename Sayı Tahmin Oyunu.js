let bilgisayarTürettiğiSayı = Math.floor(Math.random() * 101);

let kullanıcıGirdiğiSayı;
let verilenTahminHakkı = Number(prompt("Kaç adet tahmin hakkına sahip olmak istiyorsunuz. Ne kadar az tahminle doğru bilirseniz sizin için o kadar iyi.\nTahmin etmeniz gereken sayı 0-100 arasındadır (0 ve 100 dahil.)"))
let deneme = 0;


function tahminYap() 
{
    if (verilenTahminHakkı>0 && kullanıcıGirdiğiSayı!=bilgisayarTürettiğiSayı) 
    {
        kullanıcıGirdiğiSayı = Number(document.getElementById("sayı").value);

        if (kullanıcıGirdiğiSayı > bilgisayarTürettiğiSayı) 
        {
            verilenTahminHakkı--;
            deneme++;
            if (verilenTahminHakkı == 0) 
            {
                document.getElementById("demo2").innerHTML += "Girdiğiniz " + kullanıcıGirdiğiSayı + " sayısı rastgele sayıdan büyüktür. Ancak maalesef canınız kalmadi. Rastgele sayi = " + bilgisayarTürettiğiSayı + "<br>";
            }
            else 
            {
                document.getElementById("demo2").innerHTML += "Girdiğiniz " + kullanıcıGirdiğiSayı + " sayısı rastgele sayıdan büyüktür. " + deneme + " defa denediniz ve " + verilenTahminHakkı + " canınız kaldı. " + "Lütfen tekrar deneyiniz." + "<br>";
            }
        }

        else if (kullanıcıGirdiğiSayı < bilgisayarTürettiğiSayı) 
        {
            verilenTahminHakkı--;
            deneme++;
            if (verilenTahminHakkı == 0) 
            {
                document.getElementById("demo2").innerHTML += "Girdiğiniz " + kullanıcıGirdiğiSayı + " sayısı rastgele sayıdan küçüktür. Ancak maalesef canınız kalmadı. Rastgele sayı = " + bilgisayarTürettiğiSayı + "<br>";
            }
            else 
            {
                document.getElementById("demo2").innerHTML += "Girdiğiniz " + kullanıcıGirdiğiSayı + " sayısı rastgele sayıdan küçüktür. " + deneme + " defa denediniz ve " + verilenTahminHakkı + " canınız kaldı. " + "Lütfen tekrar deneyiniz." + "<br>";
            }
        }

        else if (kullanıcıGirdiğiSayı == bilgisayarTürettiğiSayı) 
        {
            verilenTahminHakkı--;
            deneme++;
            document.getElementById("demo2").innerHTML += "<br>"+"Tebrikler doğru sayıyı buldunuz." + "<br>" + "Rastgele sayı : " + bilgisayarTürettiğiSayı + "<br>" + "Deneme sayınız : " + deneme + "<br>" + "Kalan canınız. : " + verilenTahminHakkı + "<br>";
        }

    }

    //innerHTML += ile önceki yazıları orada depolayabiliyorum yani orada kalmalarını sağlayabiliyorum.

    /* buradaki else şöyle çalışıyor. eğerki verilenTahminHakkı>0 && kullanıcıGirdiğiSayı!=bilgisayarTürettiğiSayı 
    ise üstteki kod çalışacak. yani şöyle eğerki tahmin hakkı 0 ve 0 dan küçükse el çalışacak yani tahmin yap butonu bir şey yapmayacak.
    yani çalışmayacak. eğer kullanıcı direkt 0 girsede böyle olacak, eğer kullanıcı 5 hak istedi 5 hakkıda tüketti bitirdi yine öyle
    olacak veya kullanıcı sayıyı tahmin etti yine öyle olacak. yani kullanıcı bu durumları yaptığı zaman tahmin et butonuna tıklamak
    bir şey ifade etmiyor çünkü else in içi bomboş.
    */
}

