function rastgeleSeçenekEldeEtme1() 
  {
    const seçenekler1 = ["Yazı", "Tura"];
    const rastgeleIndex1 = Math.floor(Math.random() * seçenekler1.length);
    return seçenekler1[rastgeleIndex1];
  }

  function kazananıBelirleme1(kullanıcınınSeçimi1, bilgisayarınSeçimi1) 
  {
    if (kullanıcınınSeçimi1 == bilgisayarınSeçimi1) {
      return "Tebrikler. Doğru bildiniz.";
    } 

    else 
    {
      return "Maalesef yanlış tahmin ettiniz.";
    }
  }

  function oyunuOyna1(kullanıcınınSeçimi1) 
  {
    const bilgisayarınSeçimi1 = rastgeleSeçenekEldeEtme1();
    document.getElementById("demo1").innerHTML="Bilgisayarın seçimi: " + bilgisayarınSeçimi1 +"<br>" +"Sizin seçiminiz: " + kullanıcınınSeçimi1 + "<br>" + kazananıBelirleme1(kullanıcınınSeçimi1, bilgisayarınSeçimi1);
  }