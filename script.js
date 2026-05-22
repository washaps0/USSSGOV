// Massive, verified law database of UK, KOAP, DK, PK, EK
const ukDataRaw = `6.1 ч.1|Легкие телесные повреждения|Умышленное нанесение побоев или легких телесных повреждений|0|3|3|
6.1 ч.2|Особо тяжкие телесные повреждения|Умышленное нанесение особо тяжких телесных повреждений (Судимость)|0|4|4|
6.1 ч.3|Нанесение ТВ по неосторожности|Нанесение особо тяжких телесных повреждений по неосторожности/в состоянии аффекта|0|3|3|
6.2 ч.1|Умышленное убийство|Умышленное причинение смерти другому человеку (Судимость)|0|4|4|
6.2 ч.2|Смерть по неосторожности|Причинение смерти другому человеку по неосторожности/в состоянии аффекта|0|3|3|
6.3|Тяжкое убийство|Убийство двух и более лиц, по найму или с особой жестокостью (Судимость)|0|5|5|
6.6|Угроза убийством|Угроза убийством или причинением тяжкого вреда здоровью|30000|3|3|
6.7|Воспрепятствование медикам|Воспрепятствование в деятельности медицинского работника|5000|3|3|
7.1|Похищение человека|Незаконный захват, перемещение и удержание лица (Судимость)|0|5|5|
7.1.1|Незаконное лишение свободы|Лишение человека свободы, не связанное с его похищением (Судимость)|0|4|4|
7.2|Использование рабского труда|Использование рабского труда человека (Судимость)|0|4|4|
7.3|Сделки с людьми|Любые сделки связанные с куплей-продажей человека (Судимость)|0|4|4|
8.1|Изнасилование|Половое сношение с применением насилия или угрозы (Судимость)|0|4|4|
8.2|Понуждение к половому сношению|Понуждение путем шантажа или угрозы|0|3|3|
8.3|Сексуальное домогательство|Нежелательные предложения сексуального характера|0|3|3|
9.1|Воспрепятствование избирательным правам|Воспрепятствование свободному осуществлению гражданином своих избирательных прав|0|5|5|
9.2|Воспрепятствование деятельности Сената|Воспрепятствование прибытию сенатора на заседание|20000|3|3|
10.1 ч.1|Кража|Тайное хищение чужого имущества свыше $1.000|15000|3|3|
10.1 ч.2|Кража со взломом|Кража с незаконным проникновением в помещение|0|4|4|
10.1 ч.3|Кража группой лиц|Кража группой лиц с применением насилия|0|5|5|
10.2|Мошенничество|Хищение путем обмана или злоупотребления доверием|0|3|3|
10.2.1|Вымогательство|Требование передачи имущества под угрозой|0|3|3|
10.3|Грабеж|Открытое хищение чужого имущества|0|4|4|
10.4|Разбой|Нападение в целях хищения с применением насилия|0|4|4|
10.5|Угон ТС|Неправомерное завладение автомобилем или иным транспортом|0|3|3|
10.6|Уничтожение чужого имущества|Умышленные уничтожение чужого имущества|0|3|3|
10.7|Порча чужого имущества|Умышленные уничтожение или повреждение чужого имущества из хулиганских побуждений|0|3|3|
10.8|Порча гос. имущества|Умышленное уничтожение или повреждение государственного имущества|0|3|3|
11.1|Без регистрации|Осуществление предпринимательской деятельности без регистрации|20000|3|3|
11.2|Принуждение к сделке|Принуждение к совершению сделки под угрозой|0|3|3|
11.3|Уклонение от налогов|Уклонение от уплаты налогов (Судимость) + взыскание долга x2|0|5|5|
11.4|Сокрытие денежных средств|Сокрытие денежных средств для уклонения от налогов|0|3|3|
11.5|Ограничение конкуренции|Заключение соглашения между конкурентами|0|4|4|
11.6|Махинации с бюджетом|Нецелевое использование или хищение средств из госбюджета (Судимость)|0|5|5|
11.7|Финансирование экстремизма|Финансирование экстремистской деятельности или терроризма|0|5|5|
12.1|Терроризм|Совершение взрыва, поджога или иных устрашающих действий (Судимость)|0|5|5|
12.1.1|Призывы к терроризму|Публичные призывы к осуществлению террористической деятельности|0|5|5|
12.1.2|Вовлечение в терроризм|Склонение, вербовка или вовлечение лица в совершение теракта|0|5|5|
12.2|Несообщение о преступлении|Несообщение в органы власти о готовящемся преступлении|0|3|3|
12.3|Ложное сообщение об акте терроризма|Заведомо ложное сообщение о готовящихся взрыве, поджоге|0|4|4|
12.4|Экстремизм|Действия, направленные на возбуждение ненависти либо вражды|0|5|5|
12.5|Организация экстремистской организации|Организация деятельности экстремистской организации|0|5|5|
12.6|Нарушение порядка собрания|Нарушение установленного порядка собрания или митинга|0|3|3|
12.6.1|Массовые беспорядки|Организация массовых беспорядков с насилием|0|5|5|
12.7 ч.1|Проникновение на объект|Незаконное нахождение на охраняемом объекте|50000|3|3|
12.7 ч.2|Проникновение на ОЗО|Нахождение на особо охраняемом объекте (Судимость)|80000|4|5|
12.7 ч.3|Проникновение должностным лицом|Деяние, совершённые должностным лицом|60000|5|5|
12.8 ч.1|Незаконный оборот оружия|Приобретение, сбыт или перевозка оружия и спецсредств|30000|4|4|
12.8 ч.2|Хранение оружия|Незаконное хранение, ношение или использование оружия|30000|4|4|
12.8.1|Гос. маркировка (нелегал)|Хранение/сбыт спецсредств с маркировкой гос. структур (Судимость)|0|5|5|
12.9|Взрывчатые вещества|Приобретение, передача или хранение взрывчатых веществ|0|5|5|
12.10|Хищение оружия|Хищение огнестрельного оружия, боеприпасов|0|4|4|
12.10.1|Хищение оружия сотрудником|Хищение оружия сотрудником правоохранительных органов|0|5|5|
12.11|Вооруженное формирование|Создание вооруженного формирования, не предусмотренного законом|0|5|5|
12.12|Преступное сообщество|Организация преступного сообщества или участие в нем|0|5|5|
12.13|Получение гос. тайны|Получение сведений, составляющих государственную тайну|0|5|5|
13.1|Производство наркотиков|Незаконное кустарное производство и сбор наркотических веществ|20000|3|3|
13.2|Хранение наркотиков (от 3г)|Незаконное хранение наркотических средств от 3 грамм (Судимость)|60000|4|4|
13.2.1|Крупный размер наркотиков|Хранение свыше 25г или с целью сбыта (Судимость)|0|5|5|
13.3|Организация проституции|Организация или вовлечение в занятие проституцией|0|3|3|
13.4|Наркотики сотрудников|Приобретение наркотиков сотрудниками государственных структур|0|5|5|
13.6|Перевозка запрещенного груза|Перевозка или хранение нелегального груза|0|4|4|
14.1|Дискредитация гос. органов|Публичные действия, направленные на дискредитацию органов власти|0|5|5|
14.2|Захват власти|Действия, направленные на насильственный захват власти|0|5|5|
14.2.1|Сепаратизм|Сепаратизм и посягательство на территориальную целостность|0|5|5|
14.3|Разглашение гостайны|Разглашение сведений, составляющих гос. тайну|0|4|4|
14.3.1|Получение гос. тайны|Незаконное получение сведений, составляющих государственную тайну|0|4|4|
14.3.2|Утрата документов|Утрата документов, содержащих государственную тайну|0|4|4|
15.1 ч.1|Превышение полномочий|Действия должностного лица, явно выходящие за пределы его прав (Судимость)|100000|4|4|
15.1 ч.2|Превышение с применением насилия|Превышение с применением насилия или оружия|0|5|5|
15.1.1 ч.1|Злоупотребление|Использование полномочий вопреки интересам службы (Судимость)|100000|5|5|
15.1.1 ч.2|Злоупотребление при задержании|Использование полномочий при задержании (Судимость)|40000|5|5|
15.1.1 ч.3|Злоупотребление при расследовании|Деяния, совершенные органом расследования|0|5|5|
15.2 ч.1|Неисполнение приказа|Неисполнение приказа начальника сотрудником органа правопорядка|30000|4|4|
15.2 ч.2|Неисполнение нормативного акта|Неисполнение указа или распоряжения|30000|4|4|
15.2 ч.3|Неисполнение приказа Губернатора|Неисполнение приказа Губернатора сотрудником|0|4|4|
15.2 ч.4|Неисполнение постановления Сената|Неисполнение постановления Сената|0|4|4|
15.3|Присвоение полномочий|Присвоение государственным служащим полномочий должностного лица|0|4|4|
15.4|Получение взятки|Получение должностным лицом взятки за действия (Судимость)|0|5|5|
15.5|Дача взятки|Дача взятки должностному лицу (Судимость)|0|5|5|
15.5.1|Посредничество во взяточничестве|Непосредственная передача взятки по поручению|0|5|5|
15.6 ч.1|Халатность|Неисполнение обязанностей вследствие небрежного отношения (Судимость)|70000|4|4|
15.6 ч.2|Халатность с вредом|Деяние, повлекшее по неосторожности причинение тяжкого вреда|0|5|5|
15.7|Деструктивное поведение|Действия должностного лица, нарушающие этику и мораль|70000|3|3|
16.1 ч.1|Воспрепятствование правосудию|Вмешательство в деятельность суда в целях воспрепятствования правосудию|0|4|4|
16.1 ч.2|Воспрепятствование расследованию|Вмешательство в деятельность прокурора или следователя|0|4|4|
16.1 ч.3|Воспрепятствование служебным лицом|Деяния, совершенные лицом с использованием служебного положения|0|4|4|
16.1 ч.4|Воспрепятствование деятельности адвоката|Вмешательство в законную деятельность адвоката|0|4|4|
16.1 ч.5|Неуважение к суду|Нарушение порядка в суде или неявка на заседание|0|4|5|
16.2|Угроза жизни лиц правосудия|Угроза или посягательство на жизнь судьи или прокурора|0|5|5|
16.3|Привлечение невиновного|Привлечение заведомо невиновного к ответственности|0|5|5|
16.4|Заведомо незаконное задержание|Заведомо незаконное задержание или содержание под стражей|0|5|5|
16.5|Фальсификация доказательств|Фальсификация доказательств по гражданскому делу|0|5|5|
16.6|Фальсификация в уголовном|Фальсификация доказательств по уголовному делу|0|5|5|
16.7|Неправомерный приговор|Вынесение судьей заведомо неправомерного приговора|0|5|5|
16.8|Ложные показания|Заведомо ложные показания свидетеля или эксперта|0|4|4|
16.9|Подкуп свидетеля|Подкуп свидетеля или эксперта|0|4|4|
16.10 ч.1|Неисполнение постановлений|Злостное игнорирование приговора, ордера или запроса (Судимость)|70000|4|4|
16.10 ч.2|Неисполнение должностным лицом|Деяние, совершенное должностным лицом|40000|5|5|
16.11|Сокрытие улик|Сокрытие улик или уничтожение улик|0|4|4|
16.12|Уклонение от суда|Уклонение от расследования, задержания и суда|0|4|4|
16.13|Ложные показания (досье)|Заведомо ложные показания свидетеля в ходе следствия|50000|4|4|
16.14|Отказ от дачи показаний|Отказ свидетеля от дачи показаний или прохождения экспертизы|0|3|3|
16.15|Уклонение от наказания|Уклонение от отбывания ограничения свободы или лишения свободы|0|2|5|
17.1|Посягательство на жизнь|Посягательство на жизнь представителя власти (Судимость)|0|5|5|
17.2|Угроза/Насилие к власти|Применение неопасного насилия или угроза к офицеру (Судимость)|0|4|4|
17.3|Оскорбление представителя|Оскорбление сотрудника при исполнении обязанностей|50000|3|3|
17.3.1|Оскорбление неприкосновенного|Оскорбление лица, обладающего статусом неприкосновенности (Судимость)|100000|5|5|
17.4 Утратила силу||0|0|0|
17.5|Самоуправство|Самовольное совершение действий вопреки установленному порядку|0|3|3|
17.6|Неповиновение|Неповиновение законному распоряжению правомочного лица|60000|3|3|
17.7|Отказ от оплаты штрафа|Отказ от оплаты законно выписанного штрафа|60000|3|3|
17.8|Подделка документов|Использование фальшивого удостоверения или лицензии|60000|3|3|
18.1|Неисполнение приказа|Неисполнение подчиненным приказа начальника (Военная)|10000|3|3|
18.2|Самовольное оставление|Самовольное оставление части или места службы (Военная)|10000|3|3|
18.3|Дезертирство|Самовольное оставление в целях уклонения от военной службы (Военная)|15000|4|4|
18.4|Нарушение боевого дежурства|Нарушение правил несения боевого дежурства (Военная)|20000|3|3|
18.5|Уничтожение оружия|Умышленные уничтожение или повреждение оружия (Военная)|0|3|3|
18.5.1|Уничтожение по неосторожности|Уничтожение по неосторожности, повлекшие тяжкие последствия (Военная)|5000|4|4|
18.6|Нарушение вождения|Нарушение правил вождения, повлекшее по неосторожности вред (Военная)|0|4|4|
19.1|Браконьерство|Незаконная добыча и улов охотничьих ресурсов|0|3|3|`;


const koapDataRaw = `1.5.1 ч.1(в)|Неповиновение USSS|Неповиновение законному требованию сотрудника USSS на территории Правительства|30000|0|0|0|0
2.1|Мелкое хулиганство|Нецензурная брань, шум, курение или приставание в общественных местах|7000|0|0|0|0
2.2|Неприемлемый вид|Нахождение в общественном месте без верхней одежды или в состоянии опьянения|7000|0|0|0|0
2.3|Нарушение порядка собраний|Нарушение установленного порядка организации или проведения собрания|20000|0|0|0|0
2.4|Инвентарь не по назначению|Использование холодного оружия или спорт-инвентаря не по назначению в людном месте|12000|0|0|0|0
2.5|Побои (без вреда)|Нанесение ударов, причинивших физическую боль, но не повлекших вреда здоровью|20000|0|0|0|0
2.6|Неуважение к Сенату|Оскорбление участников Сената или проявление неуважения к органам власти|75000|0|0|0|0
2.7|Холодное оружие|Незаконное ношение или использование ножей, мачете и иного холодного оружия|10000|0|0|0|0
2.8|Стрельба в не отведенных местах|Стрельба из оружия, если она не несет прямой угрозы жизни граждан|25000|0|0|0|0
3.1|Дискриминация|Нарушение прав и законных интересов по признакам пола, расы, национальности|1500|0|0|0|0
3.2|Дискриминация в труде|Ограничение в трудовых правах по признакам различия|40000|0|0|0|0
3.3|Нарушение охраны труда|Нарушение государственных нормативных требований охраны труда|20000|0|0|0|0
3.4|Нарушение неприкосновенности|Нарушение неприкосновенности частной жизни, телефонный терроризм|8000|0|0|0|0
3.5|Разжигание ненависти|Действия, направленные на разжигание ненависти или вражды|25000|0|0|0|0
3.6|Порча имущества (мелкая)|Умышленное повреждение чужого имущества без значительного ущерба|7000|0|0|0|0
3.7|Воспрепятствование медикам|Воспрепятствование деятельности медицинского работника|10000|0|0|0|0
3.7.1|Неоказание помощи больному|Неоказание помощи больному без уважительных причин|15000|0|0|0|0
3.8|Нарушение прав на перерыв|Нарушение работодателем прав сотрудника на обеденный перерыв или отпуск|40000|0|0|0|0
3.9|Несоответствие трудовых правил|Несоответствие правил внутреннего трудового распорядка законодательству|100000|0|0|0|0
3.10|Незаконное собирание сведений|Незаконное собирание или распространение сведений о частной жизни|8000|0|0|0|0
3.11|Проникновение в жилище (адм.)|Незаконное проникновение в жилище против воли проживающего (без признаков УК)|12000|0|0|0|0
3.12|Воспрепятствование журналистам|Воспрепятствование законной профессиональной деятельности журналистов|10000|0|0|0|0
3.13|Мелкая кража|Тайное хищение чужого имущества на сумму менее 1.000$|2000|0|0|0|0
4.1|Незаконная охота/рыбалка|Нарушение правил рыболовства или осуществление охоты без лицензии|15000|0|0|0|0
5.1 ч.1|Ложный вызов|Заведомо ложный вызов полиции, EMS или других экстренных служб|9500|0|0|0|0
5.1 ч.2|Ложный вызов прокурора|Заведомо ложный вызов сотрудников Офиса Генерального прокурора|30000|0|0|0|0
5.2|Вмешательство в процесс|Мешательство гражданского лица в процесс задержания или разбирательства|30000|0|0|0|0
5.3|Необеспечение явки на проверку|Необеспечение явки на плановую проверку|350000|0|0|0|0
6.1|Клевета (публичная)|Клевета, содержащаяся в публичном выступлении или СМИ|1000|0|0|0|0
6.2|Клевета с обвинением|Клевета, соединенная с обвинением лица в совершении преступления|1000|0|0|0|0
6.3|Клевета в отношении граждан|Распространение заведомо ложных сведений, порочащих честь гражданина|1000|0|0|0|0
6.4 ч.1|Оскорбление|Унижение чести и достоинства другого лица в грубой форме|5000|0|0|0|0
6.4 ч.2|Матерное оскорбление|Оскорбление другого лица, выраженное в нецензурной форме|4000|0|0|0|0
7.1|Неквалифицированная помощь|Предоставление неквалифицированной медицинской помощи|10000|0|0|0|0
7.2|Отсутствие медсправок|Отсутствие действующих медицинских справок у государственного служащего|5000|0|0|0|0
7.3|Невыполнение режима готовности|Невыполнение правил поведения при введении режима повышенной готовности|7500|0|0|0|0
7.4|Отказ проверки санитарных норм|Отказ от проверки санитарных норм|100000|0|0|0|0
7.5|Отказ проведения проверки|Отказ от проведения проверки санитарных норм|110000|0|0|0|0
7.6|Многократный отказ EMS|Многократный отказ EMS от проведения проверки|200000|0|0|0|0
7.7|Многократный отказ проверки|Многократный отказ от прохождения проверки санитарных норм|170000|0|0|0|0
7.8|Неудовлетворительная оценка санитара|Неудовлетворительная оценка санитарных норм по итогам проверки|80000|0|0|0|0
7.9|Халатность санитарных услуг|Халатное отношение к обеспечению санитарных услуг и безопасности|100000|0|0|0|0
7.10|Халатность PSED|Халатное отношение к проведению санитарных услуг PSED|60000|0|0|0|0
7.11|Уклонение от проверки|Уклонение от запланированной проверки санитарных норм|160000|0|0|0|0
7.12|Многократное уклонение|Многократное уклонение от запланированной проверки|200000|0|0|0|0
7.13|Отказ пожарной проверки|Отказ проверки пожарной безопасности|120000|0|0|0|0
7.14|Неудовлетворительная пожарная|Неудовлетворительная оценка пожарной безопасности|100000|0|0|0|0
7.15|Отказ проверки пожарной|Отказ от проверки пожарной безопасности|160000|0|0|0|0
7.16|Отказ медицинской проверки|Отказ от проверки медицинской безопасности|120000|0|0|0|0
7.17|Отказ проведения медпроверки|Отказ от проведения медицинской проверки|160000|0|0|0|0
7.18|Многократный отказ EMS мед|Многократный отказ EMS от проведения медицинской проверки|250000|0|0|0|0
7.19|Непредставление отчетности|Непредставление или несвоевременное представление финотчетности|40000|0|0|0|0
7.20|Недостоверная информация|Предоставление недостоверной или неполной информации о финансах|15000|0|0|0|0
7.21|Нарушение финлегислации|Нарушение законодательства в финансовой сфере|8000|0|0|0|0
8.1|Наркотики до 3г|Незаконное хранение наркотических веществ в количестве менее 3 грамм|20000|0|0|0|0
9.1|Халатность (адм.)|Неисполнение обязанностей должностным лицом без существенного вреда|40000|0|0|0|0`;

const dkDataRaw = `1.1|Превышение скорости|Нарушение установленного скоростного режима в черте города или на автостраде|5000|0|0|0|0
1.2|Встречная полоса|Движение транспортного средства по полосе, предназначенной для встречного движения|10000|0|0|0|0
1.3|Движение без номерных знаков|Управление транспортным средством без установленных гос. регистрационных знаков|7500|0|0|0|0|Эвакуация ТС
1.4|Парковка в неположенном месте|Остановка или парковка транспортного средства на автомагистрали, тротуаре или газоне|5000|0|0|0|0|Эвакуация ТС
1.5|Создание аварийной ситуации|Движение, создающее непосредственную угрозу для жизни других участников дорожного движения|12000|0|0|0|0
1.6|Езда вне дорожного покрытия|Управление ТС вне дорог общего пользования (езда по горам, песку на легковом авто)|8000|0|0|0|0
1.10|ДТП с повреждениями|Уход с места дорожно-транспортного происшествия без составления протокола|15000|0|0|0|0
1.12|Проезд на красный|Проезд регулируемого перекрестка на запрещающий сигнал светофора|6000|0|0|0|0`;

const pkDataRaw = `Статья 15|Задержание (определение)|Кратковременное ограничение свободы (до 1 часа) для сбора улик и установления вины|0|0|0|0|0
Статья 16|Основания для задержания|Застигнут на месте, следы нарушения, 3 свидетеля, видеозапись, ордер или BOLO-розыск|0|0|0|0|0
Статья 17|Порядок задержания|Наручники -> Представиться -> Обыск (опц.) -> Миранда -> Основания -> Идентификация|0|0|0|0|0
Статья 19|Задержание госслужащих|Обязательный вызов руководства и прокурора. Ожидание 15 минут (время замораживается)|0|0|0|0|0
Статья 21|Взыскание штрафа|Оплата на месте. При отсутствии средств — сопровождение к ближайшему банкомату|0|0|0|0|0
Статья 25|Административный арест|Вторичный обыск, изъятие нелегала, установка BOLO (10 мин = 1 ур.), причина, КПЗ|0|0|0|0|0
Статья 27|Уголовный арест|Вторичный обыск, изъятие всего оружия/нелегала, BOLO (1 год = 1 ур.), причина, КПЗ|0|0|0|0|0
Статья 29|Личный обыск/досмотр|Первичный (опасные предметы), Вторичный (перед КПЗ), Досмотр в Капитолии и суде|0|0|0|0|0
Статья 32|Видеофиксация|Обязанность вести запись пресечения нарушения и всех процессуальных действий|0|0|0|0|0
Статья 33|Хранение записей|Срок хранения — 72 часа. Запрещено удалять при поданном иске или жалобе|0|0|0|0|0
Статья 36|Компетенция USSS|Исключительное право доступа Секретной Службы к компетенции любого ведомства штата|0|0|0|0|0
Статья 37|Стадии применения силы|1.Присутствие, 2.Приказ, 3.Физ.сила, 4.Спецсредства, 5.Огнестрельное оружие|0|0|0|0|0
Статья 39|Боло-розыск|Система из 5 уровней опасности (звезд). 1 год лишения свободы = 1 уровень розыска|0|0|0|0|0`;

const ekDataRaw = `Статья 28|Общее нарушение ЭК|Нарушение любой нормы Этического кодекса государственным служащим|50000|0|0|0|0|Штраф от 10.000$ до 50.000$
Статья 19|Внешний вид (Лицо/Волосы)|Яркий цвет волос, линз или выделяющийся макияж (грим)|50000|0|0|0|0|Штраф от 10.000$ до 50.000$
Статья 21|Запрещенные татуировки|Татуировки на голове, шее, кистях рук или на темы смерти, криминала|50000|0|0|0|0|Штраф от 10.000$ до 50.000$
Статья 23|Дресс-код (Мужской)|Нарушение установленного делового стиля или служебной формы|50000|0|0|0|0|Штраф от 10.000$ до 50.000$
Статья 25|Дресс-код (Женский)|Нарушение установленного делового стиля или служебной формы|50000|0|0|0|0|Штраф от 10.000$ до 50.000$
Статья 10|Безразличие к жителям|Проявление безразличия к жителям штата при исполнении обязанностей|50000|0|0|0|0|Приравнивается к халатности
Статья 12|Личные дела в раб. время|Использование рабочего времени не для профессиональных обязанностей|50000|0|0|0|0|Штраф от 10.000$ до 50.000$
Статья 18|Вызывающие аксессуары|Ношение громоздких, вульгарных или вызывающих ювелирных украшений|50000|0|0|0|0|Штраф от 10.000$ до 50.000$
1.10.1 ПГО|Неуважительное общение|Оскорбление, провокация или использование унизительных анимаций|0|0|0|0|0|OOC: Demorgan 50-100 / WARN
1.10.2 ПГО|Поведение в ЗЗ|Модель поведения, не соответствующая гос. сотруднику в Зеленых Зонах|0|0|0|0|0|OOC: Demorgan 20-80 / WARN`;

// Data arrays
let ukArticles = [];
let koapArticles = [];
let dkArticles = [];
let pkArticles = [];
let ekArticles = [];
let selectedArticles = [];
let currentCodeType = "UK";

function parseAllData() {
    const parser = (line, typeLabel) => {
        const fields = line.split("|");
        
        // Извлекаем спец. описание, игнорируя "0" и выбирая между 7-й и 9-й колонкой
        let sdes = "";
        const val6 = fields[6]?.trim();
        const val8 = fields[8]?.trim();
        
        if (val6 && val6 !== "0") {
            sdes = val6;
        } else if (val8 && val8 !== "0") {
            sdes = val8;
        }

        return {
            article: fields[0]?.trim() || "",
            title: fields[1]?.trim() || "",
            description: fields[2]?.trim() || "",
            fine: parseInt(fields[3]) || 0,
            jail: parseInt(fields[4]) || 0,
            punishment: parseInt(fields[5]) || 0,
            superdes: sdes,
            type: typeLabel,
            fixfine: parseInt(fields[3]) || 0,
            days: parseInt(fields[6]) || 0,
        };
    };

    ukArticles = ukDataRaw.trim().split("\n").map(line => parser(line, "УК"));
    koapArticles = koapDataRaw.trim().split("\n").map(line => parser(line, "КоАП"));
    dkArticles = dkDataRaw.trim().split("\n").map(line => parser(line, "ДК"));
    pkArticles = pkDataRaw.trim().split("\n").map(line => parser(line, "ПК"));
    ekArticles = ekDataRaw.trim().split("\n").map(line => parser(line, "ЭК"));
}

function switchCode(codeType) {
    currentCodeType = codeType;
    
    const tabs = ["ALL", "UK", "KOAP", "DK", "PK", "EK"];
    const titles = {
        ALL: "Глобальный поиск по всем кодексам",
        UK: "Уголовный Кодекс (УК)",
        KOAP: "Кодекс об Адм. Правонарушениях",
        DK: "Дорожный Кодекс (ДК)",
        PK: "Процессуальный Кодекс (ПК)",
        EK: "Этический Кодекс (ЭК)"
    };

    document.getElementById('currentDatabaseTitle').textContent = titles[codeType];

    tabs.forEach(key => {
        const btn = document.getElementById(`tab${key}`);
        if (key === codeType) {
            btn.className = "py-2.5 px-1 rounded-lg text-[11px] font-bold transition duration-200 text-center bg-blue-600 text-white shadow relative";
        } else {
            btn.className = "py-2.5 px-1 rounded-lg text-[11px] font-semibold text-slate-400 hover:text-white transition duration-200 text-center relative";
        }
    });

    document.getElementById('searchInput').value = "";
    renderQuickFilterChips();
    filterArticles();
}

function renderQuickFilterChips() {
    const container = document.getElementById('quickFilterChips');
    container.innerHTML = "";
    
    let prefixes = [];
    if (currentCodeType === "UK") {
        prefixes = ["6.", "7.", "10.", "12.", "15.", "16.", "17.", "18."];
    } else if (currentCodeType === "KOAP") {
        prefixes = ["1.", "2.", "3.", "5.", "6.", "8.", "9."];
    } else if (currentCodeType === "DK") {
        prefixes = ["1."];
    } else if (currentCodeType === "PK" || currentCodeType === "EK") {
        prefixes = ["Статья"];
    }

    prefixes.forEach(prefix => {
        const btn = document.createElement('button');
        btn.type = "button";
        btn.className = "bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white px-2.5 py-1 rounded-lg transition border border-slate-850 text-[10px] font-semibold";
        
        btn.textContent = currentCodeType === "PK" || currentCodeType === "EK" ? "Все статьи" : `Раздел ${prefix}`;
        btn.onclick = () => {
            document.getElementById('searchInput').value = prefix === "Статья" ? "" : prefix;
            filterArticles();
        };
        container.appendChild(btn);
    });
}

function filterArticles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    let currentSet = [];
    
    if (currentCodeType === "ALL") {
        currentSet = [...ukArticles, ...koapArticles, ...dkArticles, ...pkArticles, ...ekArticles];
    } else if (currentCodeType === "UK") currentSet = ukArticles;
    else if (currentCodeType === "KOAP") currentSet = koapArticles;
    else if (currentCodeType === "DK") currentSet = dkArticles;
    else if (currentCodeType === "PK") currentSet = pkArticles;
    else if (currentCodeType === "EK") currentSet = ekArticles;
    
    const filtered = currentSet.filter(item => {
        return item.article.toLowerCase().includes(searchInput) ||
               item.title.toLowerCase().includes(searchInput) ||
               item.description.toLowerCase().includes(searchInput);
    });

    renderArticlesList(filtered);
}

function renderArticlesList(articles) {
    const container = document.getElementById('articlesContainer');
    const countLabel = document.getElementById('listCount');
    
    container.innerHTML = "";
    countLabel.textContent = `${articles.length} статей`;

    if (articles.length === 0) {
        container.innerHTML = `<div class="py-12 text-center text-slate-600 text-xs font-mono">Подходящих статей не найдено</div>`;
        return;
    }

    articles.forEach(item => {
        // Проверка: является ли статья наказуемой
        const hasPunishment = item.punishment > 0 || item.jail > 0 || item.fine > 0 || item.fixfine > 0 || item.days > 0;
        
        const card = document.createElement('div');
        // Меняем стиль для информационных статей
        const cardBg = hasPunishment ? "bg-slate-950/70 hover:bg-slate-850" : "bg-slate-900/30 opacity-80 border-dashed";
        card.className = `p-3 ${cardBg} rounded-lg border border-slate-850 hover:border-slate-700 transition duration-150 cursor-pointer flex flex-col gap-1.5 select-none`;
        
        if (hasPunishment) {
            card.addEventListener('dblclick', () => addArticle(item));
        }

        let badgeHtml = "";
        if (item.type === "УК" && item.punishment > 0) {
            badgeHtml += `<span class="bg-amber-950/40 text-amber-400 border border-amber-800/40 text-[10px] px-1.5 py-0.5 rounded font-bold font-mono">${item.punishment} ★</span>`;
        }
        if ((item.type === "КоАП" || item.type === "ДК" || item.type === "ЭК") && item.fixfine > 0) {
            badgeHtml += `<span class="bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-[10px] px-1.5 py-0.5 rounded font-bold font-mono">$${item.fixfine.toLocaleString()}</span>`;
        }
        if (item.superdes) {
            const isNoBail = item.superdes.toLowerCase().includes('без права на залог');
            const alertColor = isNoBail ? 'red' : 'amber';
            badgeHtml += `<span class="bg-${alertColor}-950/50 text-${alertColor}-400 border border-${alertColor}-800/40 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">${item.superdes}</span>`;
        }

        const titleColor = hasPunishment ? "text-blue-400" : "text-slate-500";

        card.innerHTML = `
            <div class="flex items-start justify-between gap-2">
                <span class="${titleColor} font-bold font-mono text-xs">${item.article} [${item.type}]</span>
                <div class="flex items-center gap-1.5">
                    ${badgeHtml}
                    ${!hasPunishment ? '<span class="text-[9px] text-slate-600 font-mono italic">ИНФО</span>' : ''}
                </div>
            </div>
            <div>
                <h4 class="text-xs font-bold text-slate-200 leading-snug">${item.title}</h4>
                <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">${item.description}</p>
            </div>
            ${hasPunishment ? `
            <div class="flex justify-end mt-1 pt-1.5 border-t border-slate-900/40">
                <button class="add-btn text-[10px] bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white px-2.5 py-1 rounded transition flex items-center gap-1 font-semibold">
                    <i class="fa-solid fa-plus text-[8px]"></i> Добавить
                </button>
            </div>` : ''}
        `;
        
        if (hasPunishment) {
            card.querySelector('.add-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addArticle(item);
            });
        }
        
        container.appendChild(card);
    });
}

function addArticle(article) {
    // Проверка на наказание еще раз для безопасности
    const hasPunishment = article.punishment > 0 || article.jail > 0 || article.fine > 0 || article.fixfine > 0 || article.days > 0;
    if (!hasPunishment) return;

    if (selectedArticles.some(item => item.article === article.article && item.type === article.type)) return;
    selectedArticles.push(article);
    updateDossier();
}

function removeArticle(articleNum, type) {
    selectedArticles = selectedArticles.filter(item => !(item.article === articleNum && item.type === type));
    updateDossier();
}

function clearAllSelected() {
    selectedArticles = [];
    updateDossier();
}

function updateDossier() {
    const emptyState = document.getElementById('emptyChargesState');
    const selectedListContainer = document.getElementById('selectedChargesList');
    const calcCard = document.getElementById('calculatorCard');
    
    // Reset state
    calcCard.classList.remove('glow-red');
    calcCard.classList.add('glow-blue');
    const bailCont = document.getElementById('bailContainer');
    bailCont.classList.remove('animate-pulse-border', 'border-red-600', 'bg-red-950/20');
    bailCont.classList.add('border-slate-800', 'bg-slate-900/80');

    if (selectedArticles.length === 0) {
        emptyState.classList.remove('hidden');
        selectedListContainer.classList.add('hidden');
        
        document.getElementById('starsCountText').textContent = "Штраф";
        document.getElementById('starsStarsContainer').innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i>`;
        document.getElementById('totalFineText').textContent = "$0";
        document.getElementById('totalJailText').textContent = "0 лет";
        document.getElementById('starsLabel').textContent = "Без КПЗ";
        
        document.getElementById('bailAmountText').textContent = "$0";
        document.getElementById('bailAmountText').className = "text-base font-extrabold text-blue-400 mt-1";
        document.getElementById('bailLabel').textContent = "Доступен выход под залог";

        document.getElementById('specialDirectivesContainer').classList.add('hidden');
        document.getElementById('specialDirectivesContainer').innerHTML = "";
        return;
    }

    emptyState.classList.add('hidden');
    selectedListContainer.classList.remove('hidden');
    selectedListContainer.innerHTML = "";

    let totalStars = 0;
    let totalFine = 0;
    let totalJail = 0;
    let specDirectives = [];
    let bailPossible = true;

    selectedArticles.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = "flex items-start justify-between gap-3 p-3 bg-slate-950/80 rounded-lg border border-slate-800 hover:bg-slate-950 transition shadow-sm";
        
        let detailsHtml = "";
        if (item.type === "УК") {
            totalStars += item.punishment;
            totalJail += item.jail;
            totalFine += item.fine;
            
            detailsHtml = `
                <div class="flex flex-wrap gap-2 text-[10px] font-mono mt-1 text-slate-400">
                    <span class="text-rose-400"><i class="fa-solid fa-lock"></i> Срок: ${item.jail} лет</span>
                    <span class="text-amber-400"><i class="fa-solid fa-star"></i> Розыск: ${item.punishment} ★</span>
                    ${item.fine > 0 ? `<span class="text-emerald-400"><i class="fa-solid fa-wallet"></i> Штраф: $${item.fine.toLocaleString()}</span>` : ''}
                </div>
            `;

            if (item.superdes) {
                specDirectives.push({
                    type: "УК-Директива",
                    text: `Статья ${item.article} УК: <strong class="text-red-300 font-semibold">${item.superdes}</strong>`
                });
                if (item.superdes.toLowerCase().includes('без права на залог')) {
                    bailPossible = false;
                }
            }
        } else if (item.type === "КоАП" || item.type === "ДК" || item.type === "ЭК") {
            totalFine += item.fixfine;
            detailsHtml = `
                <div class="flex flex-wrap gap-2 text-[10px] font-mono mt-1 text-slate-400">
                    <span class="text-emerald-400"><i class="fa-solid fa-wallet"></i> Штраф: $${item.fixfine.toLocaleString()}</span>
                    ${item.days > 0 ? `<span class="text-rose-400"><i class="fa-solid fa-clock"></i> Лишение: ${item.days} дн.</span>` : ''}
                </div>
            `;
            if (item.superdes) {
                specDirectives.push({
                    type: "Директива",
                    text: `Статья ${item.article} ${item.type}: <strong class="text-amber-400 font-semibold">${item.superdes}</strong>`
                });
            }
        } else {
            detailsHtml = `<div class="text-[10px] mt-1 text-blue-400 font-mono">Процессуальное руководство</div>`;
        }

        itemCard.innerHTML = `
            <div class="flex-grow">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-xs font-bold text-blue-400 font-mono">[${item.type}] ${item.article}</span>
                    <span class="text-xs font-bold text-slate-200 leading-snug">${item.title}</span>
                </div>
                ${detailsHtml}
            </div>
            <button class="remove-btn text-slate-500 hover:text-red-400 p-1.5 rounded bg-slate-900 transition">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        `;
        
        itemCard.querySelector('.remove-btn').addEventListener('click', () => removeArticle(item.article, item.type));
        selectedListContainer.appendChild(itemCard);
    });

    // Set HUD totals
    document.getElementById('totalFineText').textContent = `$${totalFine.toLocaleString()}`;
    document.getElementById('totalJailText').textContent = `${totalJail} лет`;

    // Bail & Stars logic
    let bailAmountEl = document.getElementById('bailAmountText');
    let bailLabelEl = document.getElementById('bailLabel');

    if (totalStars > 0) {
        document.getElementById('starsCountText').textContent = `${totalStars} ★`;
        document.getElementById('starsLabel').textContent = totalStars > 5 ? "Макс. лимит (5 ★)" : "Уровень розыска";
        
        let renderStars = Math.min(totalStars, 5);
        let starHtml = "";
        for (let i = 0; i < renderStars; i++) {
            starHtml += `<i class="fa-solid fa-star"></i>`;
        }
        document.getElementById('starsStarsContainer').innerHTML = starHtml;

        // Calculate bail ($10,000 per star)
        if (bailPossible) {
            bailAmountEl.textContent = `$${(totalStars * 10000).toLocaleString()}`;
            bailAmountEl.className = "text-base font-extrabold text-blue-400 mt-1";
            bailLabelEl.textContent = "Доступен выход под залог";
        } else {
            bailAmountEl.textContent = "ОТКАЗ (NO BAIL)";
            bailAmountEl.className = "text-base font-extrabold text-red-500 mt-1 drop-shadow-md";
            bailLabelEl.textContent = "Тяжкое преступление. Залог запрещен.";
            
            // Trigger Red Alert Style
            calcCard.classList.remove('glow-blue');
            calcCard.classList.add('glow-red');
            bailCont.classList.remove('border-slate-800', 'bg-slate-900/80');
            bailCont.classList.add('border-red-600', 'bg-red-950/20', 'animate-pulse-border');
        }
    } else {
        document.getElementById('starsCountText').textContent = "Штраф";
        document.getElementById('starsLabel').textContent = "Без лишения свободы";
        document.getElementById('starsStarsContainer').innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i>`;
        
        bailAmountEl.textContent = "Не требуется";
        bailAmountEl.className = "text-base font-extrabold text-emerald-400 mt-1";
        bailLabelEl.textContent = "Только выплата штрафа";
    }

    // Warnings Box
    const dirBox = document.getElementById('specialDirectivesContainer');
    if (specDirectives.length > 0) {
        dirBox.classList.remove('hidden');
        dirBox.innerHTML = `
            <div class="font-bold text-red-400 mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-triangle-exclamation"></i> ВНИМАНИЕ! ДОПОЛНИТЕЛЬНЫЕ ДИРЕКТИВЫ:
            </div>
            <ul class="list-disc list-inside space-y-1 pl-1">
                ${specDirectives.map(d => `<li>${d.text}</li>`).join("")}
            </ul>
        `;
    } else {
        dirBox.classList.add('hidden');
    }
}

// Notepad functionalities
function saveNotepad() {
    const noteText = document.getElementById('tacticalNotepad').value;
    localStorage.setItem('usss_notepad_data', noteText);
}

function loadNotepad() {
    const savedData = localStorage.getItem('usss_notepad_data');
    if (savedData) {
        document.getElementById('tacticalNotepad').value = savedData;
    }
}

function clearNotepad() {
    document.getElementById('tacticalNotepad').value = '';
    localStorage.removeItem('usss_notepad_data');
}

function copyRawText(textVal, buttonId) {
    navigator.clipboard.writeText(textVal).then(() => {
        const btn = document.getElementById(buttonId);
        const oldText = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check text-emerald-400"></i> ТЕКСТ СКОПИРОВАН!`;
        btn.classList.add('bg-emerald-600');
        btn.classList.remove('bg-indigo-600', 'hover:bg-indigo-500');
        
        setTimeout(() => {
            btn.innerHTML = oldText;
            btn.classList.remove('bg-emerald-600');
            btn.classList.add('bg-indigo-600', 'hover:bg-indigo-500');
        }, 2000);
    }).catch(err => {
        console.error("Clipboard copy failed", err);
    });
}

function toggleRegTab(tab) {
    const tabs = ['Rules', 'DoDont', 'Miranda', 'Secrecy'];
    
    tabs.forEach(t => {
        const btn = document.getElementById(`regTab${t}`);
        const content = document.getElementById(`regContent${t}`);
        
        const isTarget = tab.toLowerCase().includes(t.toLowerCase()) || 
                        (tab === 'usss-rules' && t === 'Rules') || 
                        (tab === 'usss-do-dont' && t === 'DoDont');

        if (isTarget) {
            btn.className = "text-[11px] font-bold border-b-2 border-blue-500 pb-1.5 text-blue-400 uppercase tracking-wider transition";
            content.classList.remove('hidden');
        } else {
            btn.className = "text-[11px] font-semibold text-slate-400 pb-1.5 uppercase tracking-wider transition hover:text-white";
            content.classList.add('hidden');
        }
    });
}

function startTacticalClock() {
    setInterval(() => {
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        document.getElementById('tacticalClock').textContent = timeStr;
    }, 1000);
}

// Global scope assignments for HTML onclick handlers
window.switchCode = switchCode;
window.filterArticles = filterArticles;
window.clearAllSelected = clearAllSelected;
window.clearNotepad = clearNotepad;
window.saveNotepad = saveNotepad;
window.toggleRegTab = toggleRegTab;
window.copyRawText = copyRawText;
window.removeArticle = removeArticle;
window.addArticle = addArticle;

// Init
window.addEventListener('DOMContentLoaded', () => {
    parseAllData();
    renderQuickFilterChips();
    filterArticles();
    startTacticalClock();
    loadNotepad();
});