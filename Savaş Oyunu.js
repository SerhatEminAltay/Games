const user1 =
{
    can: 100, mana : 100,canİksiriHakkı:1,manaİksiriHakkı:1
}

const user2 =
{
    can: 100, mana : 100,canİksiriHakkı:1,manaİksiriHakkı:1
};


let kullanıcı1Nickname, kullanıcı2Nickname, user1ÖzelYetenekHasar, user1NormalHasar,user2NormalHasar,user2ÖzelYetenekHasar,sıraKullanıcı1=1, sıraKullanıcı2=1;

    function isim1(){ // burada 1. oyuncunun isimi alınıyor. isimi alındıktan sonra değiştirilememek üzere kitleniyor.
        kullanıcı1Nickname = document.getElementById("isim1").value;
        if (kullanıcı1Nickname != null) 
        {
            document.getElementById("isim1").disabled = true;
        }
    }

    function Canbas1(canDeğeri1){   // burada eğer kullanıcı 1in can hakkı,kullanıcı 1in canı ve kullanıcı 2nin canı 0 dan büyükse can basıyor. 
                                    //değilse bu buton bir işe yaramıyor.                 
        if ((sıraKullanıcı1==1) && (user1.canİksiriHakkı > 0) && (user1.can > 0) && (user2.can > 0)) 
        {
            user1.canİksiriHakkı -=1;
            user1.can += canDeğeri1;
            document.getElementById("demo4").innerHTML = "Canınız : " + user1.can + " ve  Can iksiri hakkınız : " + user1.canİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı1Nickname+" 50 can aldı ve canı " + user1.can + " oldu." + "<br>";
            document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı2Nickname + " adlı oyuncuda." + "<br>"
            sıraKullanıcı1 = 0, sıraKullanıcı2 = 1;
        }

        else if ((user1.canİksiriHakkı <= 0) && (sıraKullanıcı1==1)) 
        {
            sıraKullanıcı1 = 1;
        }   
    }

    function Manabas1(manaDeğeri1){ // burada eğer kullanıcı 1in mana hakkı,kullanıcı 1in canı ve kullanıcı 2nin canı 0 dan büyükse can basıyor. 
                                    // değilse bu buton bir işe yaramıyor.
        if ((sıraKullanıcı1==1) && (user1.manaİksiriHakkı > 0) && (user1.can > 0) && (user2.can > 0)) {
            user1.mana += manaDeğeri1;
            user1.manaİksiriHakkı -=1;
            document.getElementById("demo5").innerHTML = "Mananız : " + user1.mana +" ve mana iksiri hakkınız : " + user1.manaİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı1Nickname+" 50 mana aldı ve manası " + user1.mana + " oldu." + "<br>";
            document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı2Nickname + " adlı oyuncuda." + "<br>";
            sıraKullanıcı1 = 0, sıraKullanıcı2 = 1;
        }
        else if ((user1.manaİksiriHakkı <=  0) && (sıraKullanıcı1==1))
        {
            sıraKullanıcı1 = 1;
        }
   
    }

    function saldır1(){ // eğer kullanıcı 1 ve kullanıcı 2nin can büyükse içeriye giriyor ve hasar veriyor.  eğer değilse buton bir işe yaramıyor.
                        // hasar verildikten sonra kullanıcı 2nin can 0dan büyükse kullanıcı 1de sıra oluyor. eğer hasar verildikten sonra kullanıcı 2nin can 0dan küçükse 
                        // kullanıcı1 oyunu kazandı diyor.
        if ((sıraKullanıcı1==1) && (user2.can >0) && (user1.can > 0)) 
        {
            user1NormalHasar = Math.floor(Math.random() * 11) + 20 ;
            user2.can -= user1NormalHasar;
            document.getElementById("demo6").innerHTML = "Canınız :" + user2.can + " ve  Can iksiri hakkınız : " + user2.canİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı1Nickname+ " oyunucusu normal saldırı yaptı ve " + kullanıcı2Nickname+" oyuncusuna " 
            + user1NormalHasar + " hasar verdi." + kullanıcı2Nickname + " oyuncusunun " + user2.can + " canı kaldı."+ "<br>";

            if (user2.can > 0) 
            {
                document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı2Nickname + " adlı oyuncuda." + "<br>";
                sıraKullanıcı1 = 0, sıraKullanıcı2 = 1;
            }

            else
            {
                document.getElementById("demo3").innerHTML += "<br>" + "<br>" + kullanıcı1Nickname + " adlı oyuncu oyunu kazandı."
            }  
        }
    }

    function özelSaldır1(){ // eğer kullanıcı1 can ve kullanıcı2 can 0dan büyükse ve kullanıcı 1in manası 75den büyükse içeri giriyor ve hasar veriyor.eğer değilse buton bir işe yaramıyor.
                            // hasar verildikten sonra kullanıcı 2nin can 0dan büyükse kullanıcı 1de sıra oluyor. eğer hasar verildikten sonra kullanıcı 2nin can 0dan küçükse 
                            // kullanıcı1 oyunu kazandı diyor.
        
        if ((sıraKullanıcı1==1) && (user2.can >0) && (user1.can > 0) && (user1.mana>=75)) 
        {
            user1ÖzelYetenekHasar = Math.floor(Math.random() * 31) + 40;
            user2.can -= user1ÖzelYetenekHasar;
            user1.mana-=75;
            document.getElementById("demo6").innerHTML = "Canınız :" + user2.can + " ve  Can iksiri hakkınız : " + user2.canİksiriHakkı;;
            document.getElementById("demo5").innerHTML = "Mananız : " + user1.mana +" ve mana iksiri hakkınız : " + user1.manaİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı1Nickname+ " oyunucusu özel saldırı yaptı ve " + kullanıcı2Nickname+" oyuncusuna " 
            + user1ÖzelYetenekHasar + " hasar verdi." + kullanıcı2Nickname + " oyuncusunun " + user2.can + " canı kaldı." + "<br>";

            if (user2.can >0) 
            {
                document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı2Nickname + " adlı oyuncuda." + "<br>";
                sıraKullanıcı1 = 0, sıraKullanıcı2 = 1;
            }
            
            else 
            {
                document.getElementById("demo3").innerHTML += "<br>" + "<br>" + kullanıcı1Nickname + " adlı oyuncu oyunu kazandı."
            }
        }

        else if ((user1.mana<75) && (sıraKullanıcı1==1)) 
        {
            sıraKullanıcı1 = 1;
        } 
    }

    function isim2(){ // burada 2. oyuncunun isimi alınıyor. isimi alındıktan sonra değiştirilememek üzere kitleniyor.
        kullanıcı2Nickname = document.getElementById("isim2").value;
        if (kullanıcı1Nickname != null) 
        {
            document.getElementById("isim2").disabled = true;
        }
    }

    function Canbas2(canDeğeri2){ // burada eğer kullanıcı 2in can hakkı,kullanıcı 1in canı ve kullanıcı 2nin canı 0 dan büyükse can basıyor. 
                                 //değilse bu buton bir işe yaramıyor.

        if ((sıraKullanıcı2==1) && (user2.canİksiriHakkı > 0) && (user1.can > 0) && (user2.can > 0)) 
        {
            user2.canİksiriHakkı -=1;
            user2.can += canDeğeri2;
            document.getElementById("demo6").innerHTML = "Canınız : " + user2.can + " ve  Can iksiri hakkınız : " + user2.canİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı2Nickname+" 50 can aldı ve canı " + user2.can + " oldu." + "<br>";
            document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı1Nickname + " adlı oyuncuda." + "<br>";
            sıraKullanıcı2 = 0, sıraKullanıcı1 = 1;
        }
        else if ((user2.canİksiriHakkı <= 0) && (sıraKullanıcı2==1)) 
        {
            sıraKullanıcı2 = 1;
        }    
    }

    function Manabas2(manaDeğeri2){ // burada eğer kullanıcı 2in mana hakkı,kullanıcı 1in canı ve kullanıcı 2nin canı 0 dan büyükse can basıyor. 
                                    // değilse bu buton bir işe yaramıyor.
        if ((sıraKullanıcı2==1) && (user2.manaİksiriHakkı > 0) && (user1.can > 0) && (user2.can > 0)) {
            user2.mana += manaDeğeri2;
            user2.manaİksiriHakkı -=1;
            document.getElementById("demo7").innerHTML = "Mananız : " + user2.mana +" ve mana iksiri hakkınız : " + user2.manaİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı2Nickname+" 50 mana aldı ve manası " + user2.mana + " oldu." + "<br>";
            document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı1Nickname + " adlı oyuncuda." + "<br>";
            sıraKullanıcı2 = 0, sıraKullanıcı1 = 1;
        }
        else if ((user2.manaİksiriHakkı <=  0) && (sıraKullanıcı2==1)) 
        {
            sıraKullanıcı2 = 1;
        }  
    }

    function saldır2(){     // eğer kullanıcı 1 ve kullanıcı 2nin can büyükse içeriye giriyor ve hasar veriyor. eğer değilse buton bir işe yaramıyor, tıklandığında bir şey olmuyor. 
                            // hasar verildikten sonra kullanıcı 1nin can 0dan büyükse kullanıcı 1de sıra oluyor. eğer hasar verildikten sonra kullanıcı 1nin can 0dan küçükse 
                            // kullanıcı2 oyunu kazandı diyor.
        if ((sıraKullanıcı2==1) && (user1.can >0) && (user2.can > 0)) 
        {
            user2NormalHasar = Math.floor(Math.random() * 11) + 20 ;
            user1.can -= user2NormalHasar;
            document.getElementById("demo4").innerHTML = "Canınız :" + user1.can + " ve  Can iksiri hakkınız : " + user1.canİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı2Nickname+ " oyunucusu normal saldırı yaptı ve " + kullanıcı1Nickname + " oyuncusuna " 
            + user2NormalHasar + " hasar verdi." + kullanıcı1Nickname + " oyuncusunun " + user1.can + " canı kaldı." + "<br>";

            if (user1.can >0) 
            {
                document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı1Nickname + " adlı oyuncuda." + "<br>";
                sıraKullanıcı2 = 0, sıraKullanıcı1 = 1;
            }
            else
            {
                document.getElementById("demo3").innerHTML += "<br>" + "<br>" + kullanıcı2Nickname + " adlı oyuncu oyunu kazandı."
            }    
        }   
    }
    
    function özelSaldır2(){ // eğer kullanıcı1 can ve kullanıcı2 can 0dan büyükse ve kullanıcı 2in manası 75den büyükse içeri giriyor ve hasar veriyor.eğer değilse buton bir işe yaramıyor.
                            // hasar verildikten sonra kullanıcı 1nin can 0dan büyükse kullanıcı 2de sıra oluyor. eğer hasar verildikten sonra kullanıcı 1nin can 0dan küçükse 
                            // kullanıcı2 oyunu kazandı diyor.
        if ((sıraKullanıcı2==1) && (user1.can >0)  && (user2.can > 0) && (user2.mana>=75)) 
        {
            user2ÖzelYetenekHasar = Math.floor(Math.random() * 31) + 40;
            user1.can -= user2ÖzelYetenekHasar;
            user2.mana-=75;
            document.getElementById("demo4").innerHTML = "Canınız : " + user1.can + " ve  Can iksiri hakkınız : " + user1.canİksiriHakkı;
            document.getElementById("demo7").innerHTML = "Mananız : " + user2.mana +" ve mana iksiri hakkınız : " + user2.manaİksiriHakkı;
            document.getElementById("demo3").innerHTML += kullanıcı2Nickname+ " oyunucusu özel saldırı yaptı ve " + kullanıcı1Nickname + " oyuncusuna " 
            + user2ÖzelYetenekHasar + " hasar verdi." + kullanıcı1Nickname + " oyuncusunun " + user1.can + " canı kaldı." + "<br>";

            if (user1.can >0) 
            {
                document.getElementById("demo3").innerHTML += "Oyun sırası " +  kullanıcı1Nickname + " adlı oyuncuda." + "<br>";
                sıraKullanıcı2 = 0, sıraKullanıcı1 = 1;
            }
            
            else 
            {
                document.getElementById("demo3").innerHTML += "<br>" + "<br>" + kullanıcı2Nickname + " adlı oyuncu oyunu kazandı."
            }
        }

        else if ((user1.mana<75) && (sıraKullanıcı2==1)) 
        {
            sıraKullanıcı2 = 1;
        }
        
    }
