/./
/\./
/the/
/the/g
/the/gi
/1/gi
/09/gi
/[09]/gi
/[az]/gi
/[a-z]/gi
/[0-9]/gi
/\d/gi
/\D/gi
/\w/gi
/\W/gi
/\s/gi
/\S/gi
/\w[а-я]іїґ/gi

/[^nat]/gi

/th[ea]/gi  
/the/gi  /* other that */
/\bth\/gi 
/\Bth\/gi   /* that */
/\bth[ea]t?/gi
/the|that/gi
/\bto|\bis|\bby/gi
/its|it's/
/it(s|'s)/gi
/it'?s/gi   /* необязательный символ ' */

/n......l/gi
/n.{6}l/gi
/n.{1,6}l/gi
/n.{1,16}l/gi  /* nd satellite tel  - жадный алгоритм greedy */
/n.{1,16}?l/gi  /* nd satellite tel  - не жадный алгоритм non-greedy */ 
/n.{1,}?l/gi  /* nd satellite tel  - не жадный алгоритм non-greedy */ 
/n.{1,}l/gi  /* nd satellite tel  - жадный алгоритм greedy */ 
/n.{1,}l/giy  /* y или sticky перенос строки */ 

/n.+l/gi  /* + => 1 и более раз */
/n.*l/gi  /* * => 0 и более раз */

/^as/gim  /* m => multiline */
/\.$/gim

/nat(?= geo)/gi
/(nat|national)(?=geo)/gi             /* совпадение */
/national geographic\s(?!channel)/gi  /* исключение */
/National geographic\s(?:channel)/gi  /* захват всей группы */

/* Text for test */
National Geographic (formerly National Geographic Channel and also commercially abbreviated and trademarked as Nat Geo or Nat Geo TV) is an American digital cable and satellite television network that is owned by National Geographic Partners, majority-owned by 21st Century Fox with the remainder owned by the National Geographic Society.
The flagship channel airs non-fiction television programs produced by National Geographic and other production companies. Like History and Discovery Channel, the channel features documentaries with factual content involving nature, science, culture, and history, plus some reality and pseudo-scientific entertainment programming. Its primary sister network worldwide, including the United States, is Nat Geo Wild, which focuses on animal-related programming, including the popular Dog Whisperer with Cesar Millan.
As of February 2015, National Geographic is available to approximately 86,144,000 pay television households (74% of households with television) in the United States.[1]

Перший номер «The National Geographic Magazine» вийшов друком у жовтні 1888 року, за дев'ять місяців після заснування товариства. На той час журнал мав темно-коричневу обкладинку та не мав жодної фотографії, і містив лише «старанні статті». За стилем це був науковий журнал, орієнтований на невелике коло професійних читачів. Журнал виходив нерегулярно, лише 1896 року «The National Geographic Magazine» став щомісячником. Починаючи з 1905 року, журнал набув популярнішого стилю, зросла кількість ілюстрацій. Того року одне з чисел журналу вийшло із безпрецедентною кількістю фотографій — вони займали близько однієї п'ятої загальної площі видання.
Багатолітній редактор журналу і «батько фотожурналістики», Ґілберт Ґроувенер
А в 1908 році світлини займали вже до 50 % площі журналу.
/*  End Text for test */












