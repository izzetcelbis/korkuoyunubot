const { Telegraf, Context } = require('telegraf')
const bot = new Telegraf('1606946477:AAETCm_Ikx2PCTUpwGDn64Oq5HY3ifzeVN0')




bot.start((ctx) => {
   
   ctx.reply(ctx.from.first_name+" selam, oyunumuza hoşgeldin. Karakterleri incelemeye başla ve oyunu başlat. \n ",{



reply_markup: {

    inline_keyboard: [

        [

            {text:'Karakterleri incele', callback_data: 'karakterler'},
        ]
    ]
}

   });
 //  ctx.telegram.sendAudio(ctx.chat.id, {source: "baslangic.mp3"})
  

   bot.action('karakterler', ctx =>{

    ctx.deleteMessage();
    ctx.replyWithPhoto({
    

        source: "karakterler.png"
    },{
    
        caption: "Karakterleri iyi tanı!",
    
        reply_markup: {
    
            inline_keyboard: [
                [
                    
                      {text: "Oyunu başlat", callback_data: 'baslat'},
                     
                      
                      
                ],
            
            ]
        }
    
    
        
    }
    
    
    )



   })
 
   

bot.action('baslat', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Doğru kararlar vermeye dikkat et!',
    {
    
          reply_markup: {
    
                inline_keyboard: [  
                      [
                          
                            {text: 'Devam et', callback_data: 'playing'},
                            
                            
                      ],

                      
                      //
                    //  [
                     //       {text: 'Anan', callback_data: 'daging'},
                           
                            
                  //    ]
 
                      //
                ]
          }
    })


} )

   
})


bot.action('playing', ctx=> {

    ctx.deleteMessage();
    
    bot.telegram.sendMessage(ctx.chat.id,ctx.from.first_name+", biraz senin hikayenden bahsedelim karakterinin adı Lina ve 21 yaşındasın, yaklaşık 3 ay önce babanı bir kalp krizi sonucu kaybettin.Onu herkesten çok seviyordun psikolojik olarak çok kötü etkilendin.Şu anda babaannenle yaşıyorsun, başka hiç kimsen yok annen ve küçük kardeşin bir trafik kazasında ölmüşler.\n\nBu süreçte tek yardımcın arkadaşların, onlarla aşırı eğleniyorsun ve kafa dağıtıyorsun. Başka bir sosyal aktiviten yok.", {


        reply_markup: {
    
            inline_keyboard: [
                  [
                      
                        {text: 'Hikayeye başla', callback_data: 'hikayebasla'},
                       
                        
                        
                  ],

           //       [
                      
                  //  {text: 'Okumayı bırak', callback_data: 'okumayibirak'},
                    
                    
           //   ],

                ]
                
                
            }






    })


})





bot.action('hikayebasla', ctx => {
    ctx.deleteMessage();
    ctx.deleteMessage(),
    

 //   ctx.telegram.sendPhoto(ctx.chat.id, {source: "baslayalim.png"})
    
    

    

    bot.telegram.sendMessage(ctx.chat.id, "Bir gün babaannen en sevdiğin kahvaltılıkları hazırlayıp seni uyandırıyor.\n-----------------------------------------------------------------------\n\nBabaanne: Kızım seninle bir şey konuşmam gerekiyor.\n\nLina: Ne hakkında babaanne?\n\nBabaanne: Baban bana bir sandık bırakmıştı açamamıştım şimdiye kadar, dün gece sen evde yokken açtım o sandığı.", {



        reply_markup: {
    
            inline_keyboard: [
                  [
                      
                        {text: 'Dinlemeye devam et', callback_data: 'dinle'},
                       
                        
                        
                  ],

            //    [
                      
              //      {text: 'Okumayı bırak', callback_data: 'mesajat'},
                    
                    
            //  ],

                ]
                
                
            }


    })


    bot.action('dinle', ctx=> {
        ctx.deleteMessage();
    

bot.telegram.sendMessage(ctx.chat.id, "Lina: Ne sandığı babaanne ne varmış içinde? \n\nBabaanne: İçinde değişik değişik kağıtlar var ne olduğunu anlamadım. Bizim caminin hocasına götürücem akşamüstü.\n\nLina: Benim bir arkadaşım var ona götürürüm, sen kendini yorma . \n\n\n",{


    reply_markup: {
    
        inline_keyboard: [
              [
                  
                    {text: 'Arkadaşlarına mesaj at', callback_data: 'mesajat'},
                   
                    
                    
              ],
[

    {text: 'Sandığa bak', callback_data: 'sandigabak'},
]
            
        ]

    }
})



    })

    









    
  
    

} ) 



bot.action('sandigabak', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Babaannen gittikten sonra sandığı açmaya çalıştın, omzuna bir şey dokunduğunu hissettin ve ürperek elini geri çektin.",{


reply_markup: {

    inline_keyboard: [
          [
              
                {text: 'Arkadaşlarına mesaj at', callback_data: 'mesajat'},
               
                
                
          ],

        
    ]

}
})



})





bot.action('banyogir', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Banyoya girdin, temizlendin ve biraz vakit geçirdin, mutlu oldun.",{


reply_markup: {

    inline_keyboard: [
          [
              
                {text: 'Netflix izle', callback_data: 'tvizle'},
               
                
                
          ],

        
    ]

}
})



})


bot.action('aylaizle', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Ayla'yı izledin duygusal bir film olduğu için ağlamaya başladın, moralin biraz bozuldu.",{


reply_markup: {

    inline_keyboard: [
          [
              
                {text: 'Arkadaşlarınla buluş', callback_data: 'bulusma'},
               
                
                
          ],

        
    ]

}
})



})


bot.action('kagitizle', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Kağıttan Hayatlar'ı izledin duygusal bir film olduğu için ağlamaya başladın, moralin biraz bozuldu.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Arkadaşlarınla buluş', callback_data: 'bulusma'},
               
                
                
          ],

        
    ]

}
})


})
bot.action('devamkonusmake', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Hakan: Emrah emin misin büyü olduğuna?\n\nEmrah: Evet, adım kadar eminim büyü bunlar içindeki kolye de büyülü olabilir.(Sandığın içini karıştırırken bir adres yazılı not buldular.)\n\nAsya: Bence buraya gitsek bize yardımcı olurlar.\n\nHakan: Aşkım saçmalama bilmediğin bir yere mi gidiceksin?\n\nAsya: Ben gideceğim Hakan, gelip gelmemeyi sen bilirsin. En azından bilgi sahibi oluruz, Lina'yı tek başına bırakamam.\n\nLina: Bencede gitmeliyiz, yoksa bu sandığın anlamını bulamayız.\n\nEmrah: Yarın sabah hepinizi kapının önünden alacağım, köy bize 3-4 saat uzaklıkta çantanızı hazırlayın.\n\n(Herkes evlerine dağıldı)",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Babaannenle konuş', callback_data: 'babaannekonusmake'},
               
                
                
          ],

         

        
    ]

}
})



})



bot.action('bulusma', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Lina: Sabah sandığı açmaya çalıştım, omzuma bir şey dokunmuş gibi hissettim çok korkuyorum.\n\nEmrah: Sakin ol, bi bakalım içine.(Emrah sandığı açmaya çalıştı, içinde kağıtların ve kağıtların üzerinde bir kolye olduğunu gördüler)\n\nEmrah: Lina, bunlar büyü.Babaannen nerden bulmuş bunu?\n\nLina: Babam ölmeden önce babaanneme vermiş bu sandığı.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam Et', callback_data: 'devamkonusmake'},
               
                
                
          ],

        
    ]

}
})



})

bot.action('babaannekonusmake', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Lina: Babaanne, biz bu sandığın içini açtık içinde büyü varmış ve içinde bir adres bulduk bi köy, yarın sabah oraya yola çıkacağız.\n\nBabaanne: Koyunlu Köyü mü?\n\nLina: Evet babaanne nereden biliyorsun?\n\nBabaanne: Babanın ilk işe başladığı köy orası, ara sıra bize de bahsederdi.. Pek tekin bir köy değil kızım gidip gitmemeyi bir daha düşünün isterseniz.\n\nLina: Bu sandığın ve içindeki kolyenin anlamını öğrenmem gerekiyor babaanne. ",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Whatsapp grubuna mesaj at', callback_data: 'arkadaslaramesajke'},
               
                
                
          ],

        
    ]

}
})



})

bot.action('arkadaslaramesajke', ctx=> {
    ctx.deleteMessage(),
    ctx.deleteChatPhoto(),

ctx.replyWithPhoto({
    

    source: "konusma2.jpg"
},{

    caption: "(Whatsapp'tan arkadaşlarınla mesajlaşıyorsun)",

    reply_markup: {

        inline_keyboard: [
            [
                
                  {text: "Çantanı hazırlayıp uyu", callback_data: 'uyu1'},
                 
                  
                  
            ],
            [
                
                {text: "Köy hakkında araştırma yap(❗️)", callback_data: 'arastirma1'},
               
                
                
          ]
        ]
    }


    
}


)

})

bot.action('bulusma', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Lina: Sabah sandığı açmaya çalıştım, omzuma bir şey dokunmuş gibi hissettim çok korkuyorum.\n\nEmrah: Sakin ol, bi bakalım içine.(Emrah sandığı açmaya çalıştı, içinde kağıtların ve kağıtların üzerinde bir kolye olduğunu gördüler)\n\nEmrah: Lina, bunlar büyü.Babaannen nerden bulmuş bunu?\n\nLina: Babam ölmeden önce babaanneme vermiş bu sandığı.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam Et', callback_data: 'devamkonusmake'},
               
                
                
          ],

        
    ]

}
})



})

bot.action('uyu1', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "(Sabah uyandın, kıyafetlerini giydin kapının önüne çıkıp Emrah'ı beklemeye başladın.)\n\n(Emrah arabayla seni evinin önünden aldı bütün arkadaşların arabada)\n\nLina: Günaydın herkese, umarım bu yol boyunca kötü şeylerle karşılaşmayız.\n\nEmrah: Merak etme Lina, öyle bir şey olmayacak.\n\nHakan: Bende öyle umuyorum (tshirt'ünü kaldırarak belindeki kuru sıkı tabancayı gösterir) en azından korkutmak için işimizi görür.\n\nAsya: (gülmeye başlar) çok abartıyorsun Hakan.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam Et', callback_data: 'devamkonusmake2'},
               
                
                
          ],

        
    ]

}
})



})


bot.action('devamkonusmake2', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "(Yolculuğun üzerinden 3.30 saat geçti, koyunlu tabelasını gördün ve hava kararmaya başladı.)\n\nEmrah: Navigasyon kafayı yedi, olmayan yolları gösteriyor. Bu iki yoldan hangisine girmemiz gerekiyor acaba?\n\nHakan: Filmlerdeki olaylara döndü bu, yollardan biri çok tehlikeli oluyor ya. (gülmeye başlar)\n\n(Arkadaşların hangi yoldan gidilmesi gerektiğini senin belirlemeni istiyorlar) ",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Sağ yoldan git', callback_data: 'sagdangit1'},
               
                
                
          ],
          [
              
            {text: 'Sol yoldan git', callback_data: 'soldangit1'},
               
                
                
          ],
        
    ]

}
})



})



bot.action('eltiizle', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Eltilerin Savaşı'nı izledin komedi filmi olduğu için bazı sahnelerinde gülümsedin ve mutlu oldun, moralin biraz düzeldi.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Arkadaşlarınla buluş', callback_data: 'bulusma'},
               
                
                
          ],

        
    ]

}
})



})




bot.action('sagdangit1', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Sağdaki yoldan gitmeniz gerektiğini söyledin, yoldan biraz ilerledikten sonra yolun bozulduğunu farkettiniz. Sol yola dönmekten başka çareniz yok.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Sol yola dön', callback_data: 'soldangit1'},
               
                
                
          ],

        
    ]

}
})











})






bot.action('konusmayadevam2', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "(arabadan çığlık sesi geldi, ikiside arabaya koştular)\n\nEmrah: Ne oldu Lina?\n\nLina: Cama yaşlı bir adam tıklayıp gitti lütfen gidelim artık köye binin arabaya.\n\n(Arabaya binip köy yoluna devam ettiler.)",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam et', callback_data: 'konusmayadevam3'},
               
                
                
          ],

        
    ]

}
})











})


bot.action('konusmayadevam3', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Emrah: Siz iyi misiniz?\n\nAsya: İyiyiz, çok korktuk biri gerçekten cama vurdu ve kayboldu.\n\nLina: Korkmanızı istemem ama, dün ben bu köyü araştırdım.. Çok farklı bir köye benziyor, köyü cinler bastı falan diye haberleri var.\n\nHakan: Geri dönme şansımız var mı?\n\nEmrah: Sakin olun, belki biri sizi korkutmak istemiştir, dua edin köyde kalabilicek bir yer bulalım.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam et', callback_data: 'konusmayadevam4'},
               
                
                
          ],

        
    ]

}
})

})


bot.action('evegit2', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Emrah: Ne gördüğünü anlatsana Lina.\n\nLina:Duvarda arapça yazılar gördüm birden gözüm karardı işte.\n\nAsya: Emrah sen neden kızı orda bıraktın, zaten kendimi kötü hissediyorum yolculuğun başından beri.\n\nHakan: Tamam şimdi sakin olalım, Lina'nın durumu iyi konuşmamız gereken farklı konular var, Emrah sandığı getirdin mi eve?\n\nEmrah: Evet yatak odasında.\n\nLina: Ben getireyim. ",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Sandığı incele', callback_data: 'incele2'},
               
                
                
          ],

        
    ]

}
})

})

bot.action('konusmayadevam9', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Lina: Bende anlamadım ne olduğunu, Emrah'la birlikteyken de baştan aşağıya süzdü beni, beni tanıyor gibiydi.\n\nEmrah: Saçmalama Lina sen öyle düşünmüşsündür kötü düşünmeyin hemen.\n\nHakan: Abi nasıl düşünebiliriz başka, burada ne bok döndüğünü nasıl çözücez biz? Baksana adam hiçbir şey demeden çıktı gitti.\n\nAsya: Gerçekten bu işin boku çıkmaya başladı.\n\nLina: Ben muhtarın evine gidicem lütfen hiç biriniz gelmeyin.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam et', callback_data: 'konusmayadevam9'},
               
                
                
          ],

        
    ]

}
})

})


bot.action('konusmayadevam8', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "Emrah: Aslında biz köye bu sandığı araştırmak için gelmiştik.\n\nMuhtar: İçine bakabilir miyim?\n\nLina: Bakabilirsiniz.\n\n(Muhtar sandığı açtı, elini içindeki büyü kağıtlarında gezdirdi ve kolyeyi eline aldı.\n\nMuhtar: Gidin bu köyden.\n\nEmrah: Neyden bahsediyorsun muhtar ne oldu?\n\nMuhtar: Akşam olmadan gidin bu köyden(cümlesini bitirdikten sonra hiçbir şey demeden evden çıkar)\n\nAsya: Ne oluyor ya?",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam et', callback_data: 'konusmayadevam9'},
               
                
                
          ],

        
    ]

}
})

})


bot.action('incele2', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "(tam sandığı açarken evin kapısı çalmaya başladı)\n\nLina: Kim bu saatte?\n\nEmrah: Ben bakarım.(kapıyı açar, muhtar gelmiş)\n\nEmrah: Hoş geldin muhtar bir şey mi oldu?\n\nMuhtar: Öyle bakınmaya geldim, bu sandık neyin nesi? ",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Devam et', callback_data: 'konusmayadevam8'},
               
                
                
          ],

        
    ]

}
})

})

bot.action('bayil', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "(Telefonu çıkardın Emrah'ı aramaya çalışıyordun, duvar yazısına bakarken birden başın döndü bayıldın. 15 dakika sonra Emrah'ın burnuna kolonya koklatmasıyla uyandın.)\n\nEmrah: Lina iyi misin?\n\nLina: Evet iyiyim, duvar yazısına bakıyordum birden gözlerim karardı.\n\nAsya: Lina hangi duvar yazısı, bu duvarlarda yazı falan yok.\n\nLina: Ama, ama ben gördüm nasıl olur bu.\n\nHakan: Muhtar evi ayarladı gidince konuşuruz sen iyiysen sorun yok Lina.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: 'Eve git', callback_data: 'evegit2'},
               
                
                
          ],

        
    ]

}
})

})
bot.action('soldangit1', ctx=> {
    ctx.deleteMessage(),
    ctx.deleteChatPhoto(),

ctx.replyWithPhoto({
    

    source: "yaslikadin.jpg"
},{

    caption: "(Yolda biraz ilerlediniz, yol kenarında yaşlı bir kadının durduğunu farkettiniz.)\n\nLina: Hasta falan mı acaba?\n\nEmrah: Ben bi inip bakayım, Hakan sende gel.\n\nAsya: Lina ben korkmaya başladım, kadın nedense ürpertti beni.\n\n(Hakan ve Emrah arabadan inip yaşlı kadının yanına gittiler)\n\nEmrah: Teyze bir şeye ihtiyacın mı var, neden burada bekliyorsun?(kadın cevap vermiyor)\n\nHakan: Teyze bizi duyuyor musun?",

    reply_markup: {

        inline_keyboard: [
            [
                
                  {text: "Devam et", callback_data: 'konusmayadevam2'},
                 
                  
                  
            ],
           
        ]
    }


    
}


)

})


bot.action('mesajat', ctx=> {
    ctx.deleteMessage(),
    ctx.deleteChatPhoto(),

ctx.replyWithPhoto({
    

    source: "konusma.jpg"
},{

    caption: "(Whatsapp'tan arkadaşlarınla mesajlaşıyorsun)",

    reply_markup: {

        inline_keyboard: [
            [
                
                  {text: "Netflix'ten birşeyler izle", callback_data: 'tvizle'},
                 
                  
                  
            ],
            [
                
                {text: "Banyoya gir", callback_data: 'banyogir'},
               
                
                
          ]
        ]
    }


    
}


)

})


bot.action('arastirma1', ctx=> {
    ctx.deleteMessage(),
    ctx.deleteChatPhoto(),

ctx.replyWithPhoto({
    

    source: "koyarastirma.png"
},{

    caption: "(Köyü araştırdın, karşına çıkan haber ve fotoğraflar)",

    reply_markup: {

        inline_keyboard: [
            [
                
                 {text: "Çantanı hazırlayıp uyu", callback_data: 'uyu1'},
                 
                  
                  
            ],
            [
                
               // {text: "Banyoya gir", callback_data: 'banyogir'},
               
                
                
          ]
        ]
    }


    
}


)

})



bot.action('tvizle', ctx=> {
    ctx.deleteMessage(),
    ctx.deleteChatPhoto(),

ctx.replyWithPhoto({
    

    source: "filmler.png"
},{

    caption: "Hangi filmi izlemek istersin? (📣:Komedi filmi mutluluğunu arttırabilir)",

    reply_markup: {

        inline_keyboard: [
            [
                
                  {text: "Ayla'yı izle", callback_data: 'aylaizle'},
                 
            ],
            [
                
                {text: "Kağıttan Hayatlar'ı izle", callback_data: 'kagitizle'},
            
                
                
          ],
          [
                
            {text: "Eltilerin Savaşı'nı izle", callback_data: 'eltiizle'},
           
      ],
        ]
    }


    
}


)

})
   
   
bot.action('emrahibekle1', ctx=> {
    ctx.deleteMessage(),
    ctx.deleteChatPhoto(),

ctx.replyWithPhoto({
    

    source: "duvaryazi1.jpg"
},{

    caption: "Arabayı beklerken ara sokaklara girdin, böyle bir duvar yazısı gördün.",

    reply_markup: {

        inline_keyboard: [
            [
                
                  {text: "Emrah'ı ara", callback_data: 'bayil'},
                 
                  
                  
            ],
           
         
        ]
    }


    
}


)

})
   
  
   


bot.action('konusmayadevam4', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "(Köyün içine girdiniz)\n\nEmrah: Ben arabayı buraya park edip köyün muhtarını arayayım. Siz bekleyin arabada, Hakan dikkat et kızlara.\n\nLina: Ben de gelebilir miyim?\n\nEmrah: Tamam gel.\n\n(Muhtarı köyün kahvesinde buldular ve sakin bir yerde konuşmak istediklerini söylediler)\n\n(Muhtar Lina'yı baştan sona süzdü ve gözlerine bakakaldı)\n\nLina: Birine mi benzettiniz?\n\nMuhtar: Yok kızım dalmışım öyle.\n\nEmrah: Biz 4 kişiyiz muhtar, kalıcak bir yere ihtiyacımız var İstanbul'dan geliyoruz.\n\nMuhtar: Misafir evi var, siz arabanıza geçin ben oğlumu göndereceğim yanınıza.\n\nEmrah: Tamam muhtar, Lina istersen sen burada bekle dönerken alırım seni.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: "Emrah'ın seni almasını bekle", callback_data: 'emrahibekle1'},
               
                
                
          ],
          [
              
            {text: "Emrah ile git", callback_data: 'emrahilegit1'},
               
                
                
          ],

        
    ]

}
})











})
bot.action('emrahilegit1', ctx=> {
    ctx.deleteMessage();


bot.telegram.sendMessage(ctx.chat.id, "(Emrah ile arabaya kadar yürüdünüz, muhtarın oğlu sizi alıp misafir evine yerleştirdi)\n\nEmrah: Sandığın içine tekrar bakalım, başka bir ipucu falan var mı diye.\n\nAsya: Evet haklısın sandık nerede?\n\nLina: İçeriye koydum getiriyorum.",{


reply_markup: {

    inline_keyboard: [
          [
              
            {text: "Sandığı incele", callback_data: 'incele2'},
               
                
                
          ],
   

        
    ]

}
})











})
 
  //  bot.telegram.sendMessage(ctx.chat.id, "(Whatsapp'ı açıp arkadaşlarınla yazışıyorsun)",)
    

  //  ctx.telegram.sendPhoto(ctx.chat.id, {source: "konusma.jpg"})

  

  
 
   






    
  
    

        




bot.command('karakterler', ctx => {
ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,' \n\nHakan: 23 yaşında, bilgisayar mühendisliği bölümünde üniversite okuyor.Sıradışı varlıklara çok fazla meraklı.\n\nCan: 24 yaşında, Hakanın en yakın arkadaşı lisede okumayı bırakmış bir kafede çalışıyor.Asya ile sevgililer.  \n\nAsya: 21 yaşında en yakın arkadaşın, ona çok fazla değer veriyorsun birlikte çok şey yaşadınız.Aynı üniversiteyi okudunuz. \n\n\n\nKarakterleri iyice incelediysen artık hazırsın! /baslat',
    {
    
          
    })

    ctx.deleteMessage();
} )

   




bot.launch({
    webhook: {
      domain: 'korkuoyunubot.herokuapp.com',
      hookPath: '/RANDOM_ID',
      port: process.env.PORT
    }
  });