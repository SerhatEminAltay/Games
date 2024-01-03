function rastgeleSeçenekEldeEtme() 
  {
    const seçenekler = ["Taş", "Kağıt", "Makas"];
    const rastgeleIndex = Math.floor(Math.random() * seçenekler.length);
    return seçenekler[rastgeleIndex];
  }

  let kullanıcınınSkoru = 0, bilgisayarınSkoru = 0;
  function kazananıBelirleme(kullanıcınınSeçimi, bilgisayarınSeçimi) 
  {
    if (kullanıcınınSeçimi === bilgisayarınSeçimi) 
    {
      return "Bu tur berabere kaldınız! Tekrar deneyiniz.";
    } 
    else if (
      (kullanıcınınSeçimi == "Taş" && bilgisayarınSeçimi == "Makas") ||
      (kullanıcınınSeçimi == "Kağıt" && bilgisayarınSeçimi == "Taş") ||
      (kullanıcınınSeçimi == "Makas" && bilgisayarınSeçimi == "Kağıt")
    ) 
    {
      kullanıcınınSkoru++;
      return "Tebrikler bu turu kazandınız!";
    } 
    else
    {
      bilgisayarınSkoru++;
      return "Maalesef bu turu kaybettiniz. Daha şanslı olabilirsiniz.";
    }
  }

  function oyunuOyna(kullanıcınınSeçimi) 
  {
    let bilgisayarınSeçimi = rastgeleSeçenekEldeEtme();

    if (kullanıcınınSkoru == 10 || bilgisayarınSkoru == 10) 
    {
      if (kullanıcınınSkoru == 10) 
      {
        document.getElementById("demo").innerHTML= "Tebrikler " + kullanıcınınSkoru + "-" + bilgisayarınSkoru + " ile kazandınız!";
      }
      else 
      {
        document.getElementById("demo").innerHTML="Maalesef " + bilgisayarınSkoru + "-" + kullanıcınınSkoru + " ile kaybettiniz."
      }
    }
    
    else
    {
      document.getElementById("demo").innerHTML="Bilgisayarın seçimi: " + bilgisayarınSeçimi + "<br>" +"Sizin seçiminiz: " + kullanıcınınSeçimi + "<br>" + kazananıBelirleme(kullanıcınınSeçimi, bilgisayarınSeçimi)+ "<br>"+ "Kullanıcının skoru : " + kullanıcınınSkoru + "<br>"+ "Bilgisayarın skoru : " + bilgisayarınSkoru;
    }
    
  }