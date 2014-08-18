var physical_process = {
  process_1: {
    name: {
      ru: 'излучение',
      en: 'radiation'
    },
    operation: {
      direct: 'GA +',
      backing: 'GA *'
    },
    notes: {
      ru: 'создание и ликвидация потока',
      en: 'establishment and liquidation of flow'
    },
    tech_analog: {
      ru: 'электролит',
      en: 'electrolyte'
    },
    comments: {
      ru: 'скалярный потенциал, формула генерации пространства, тлесный угол',
      en: 'scalar potential formula generation space tlesny angle',
      book: '',
      book_pages: ''
    },
    options: {
      heat_flow: 3,
      solid_angle: 1,
      magnetic_driving_force: 1000,
      electro_motive_force: 1
    },
    physical_laws: 'law_71'
  },     
  process_2: {
    name: {
      ru: 'проводимость',
      en: 'conductivity'
    },
    operation: {
      direct: 'GA -> GA',
      backing: 'GA -> |'
    },
    notes: {
      ru: 'Проводящее пространство',
      en: 'conducting space'
    },
    tech_analog: {
      ru: 'электролит',
      en: 'electrolyte'
    },
    comments: {
      ru: 'Соединение массы и заряда через электрохимическим эквивалентом вещества',
      en: 'Compound mass and charge through the electrochemical equivalent of the substance',
      book: 'http://fatyf.narod.ru/ELECTRON.htm',
      book_pages: '1'
    },
    options: {
      current: 3,
      time: 1,
      charge: 1000,
      mass: 1
    }
  },     
  process_3: {
    name: {
      ru: 'сбор',
      en: 'collecting'
    },
    operation: {
      direct: 'G*A -> G\'A',
      backing: 'G\'A -> G*A'
    },
    notes: {
      ru: 'Заставляет протекать в одном направлении. Пространство -> путь',
      en: 'Causes flow in the same direction. Space -> way'
    },
    tech_analog: {
      ru: 'Рефлектор (собирает луч света и рассеивает его)',
      en: 'Reflector (collects and diffuses the light beam it)	'
    },
    comments: {
      ru: 'Оптическая напряжённость',
      en: 'optical intensity',
      book: '',
      book_pages: ''
    },
    options: {
      spatial_curvature: 3,
      strength: 1,
      acceleration: 10,
    }
  },     
  process_4: {
    name: {
      ru: 'Проведение',
      en: 'carriage'
    },
    operation: {
      direct: 'GA -> GA',
      backing: 'GA -- GA'
    },
    notes: {
      ru: 'имеется ограничение связи',
      en: 'there is a limitation due'
    },
    tech_analog: {
      ru: 'Провода, нефтепроводы, русло реки',
      en: 'Wires, pipelines, river bed'
    },
    comments: {
      ru: 'Процесс передачи импульса до стабилизации поля скоростей в третей форме - плотность кванта. Надо преодалеть энегетический барьер.',
      en: 'The process of transferring momentum to stabilize the velocity field in the third form - the density of quantum.Necessary preodalet enegetichesky barrier.',
      book: '',
      book_pages: ''
    },
    options: {
      barrier: 3,
      spring: 1,
      angular_velocity: 1,
      magnetic_induction: 1,
      electric_displacement: 1 
    }
  },     
  process_5: {
    name: {
      ru: 'Преобразование',
      en: 'conversion'
    },
    operation: {
      direct: 'GA -> GB',
      backing: 'GB -> GA'
    },
    notes: {
      ru: 'измениение свойства потока',
      en: 'Change the flow properties'
    },
    tech_analog: {
      ru: 'Двигатель внутреннего сгорания (из химической энергии создаёт тепловую и механическую)',
      en: 'The internal combustion engine (out of chemical energy creates heat and mechanical)'
    },
    comments: {
      ru: 'передача между таблицами с физическими процессам различной природы',
      en: 'transfer between tables with the physical processes of different nature'
    },
    options: {
      mass: 3,
      energy: 1,
      charge: 10,
    },
    physical_laws: 'law_1:law_2'
  },
  process_6: {
    name: {
      ru: 'Увеличение',
      en: 'increase'
    },
    operation: {
      direct: 'GA1 < GA2',
      backing: 'GA1 > GA2'
    },
    notes: {
      ru: 'Изменение количества',
      en: 'Changing the amount'
    },
    tech_analog: {
      ru: 'Усилители, трансформаторы, вентили, шестерни',
      en: 'Amplifiers, transformers, valves, gears'
    },
    comments: {
      ru: 'коэффиценты потенциала',
      en: 'odds on potential',
      book: 'Potehin A.I. Izluchenie i rasprostranenie e\'lektromagnitnyh voln v anizotropnoj srede (Nauka, 1979)(ru)(400dpi)(L)(T)(41s)_PE_.djvu',
      book_pages: '9'
    },
    options: {
      force: 1,
      velocity: 1,
      Charge_density: 1,
    }
  },
  process_7: {
    name: {
      ru: 'изменение направления',
      en: 'baffling'
    },
    operation: {
      direct: 'GA -^ GA',
      backing: 'GA -. GA'
    },
    notes: {
      ru: 'изменение направления',
      en: 'baffling'
    },
    tech_analog: {
      ru: 'Зеркала, шестерни, световоды',
      en: 'Mirrors, gears, optical fibers'
    },
    comments: {
      ru: 'Коэффиценты передачи между индукцией и напряжённостью (для электричества), между векторным и скалярным квантом (для механики)',
      en: 'Transfer coefficient between the induction and (for electricity), between the vector and scalar quantum (for mechanics)',
      book: 'Potehin A.I. Izluchenie i rasprostranenie e\'lektromagnitnyh voln v anizotropnoj srede (Nauka, 1979)(ru)(400dpi)(L)(T)(41s)_PE_.djvu',
      book_pages: '9'
    },
    options: {
      magnetic_induction: 1,
      spinor: 1,
      electric_displacement_field: 1
    }
  },          
  process_8: {
    name: {
      ru: 'выравнивание',
      en: 'alignment'
    },
    operation: {
      direct: 'GA\'\' -> GA\'',
      backing: 'GA\' -> GA\'\''
    },
    notes: {
      ru: 'колебания',
      en: 'vibration'
    },
    tech_analog: {
      ru: 'выпрямители, диоды, колебательные контуры',
      en: 'rectifiers, diodes, resonant circuits'
    },
    comments: {
      ru: 'увеличение потенциального барьера',
      en: 'increase the potential barrier',
      book: '',
      book_pages: ''
    },
    options: {
      length: 1,
      curvature: 1,
      electric_field: 1
    }
  },    
  process_9: {
    name: {
      ru: 'связь',
      en: 'link'
    },
    operation: {
      direct: 'GA o-o GA',
      backing: 'GA o/o GA'
    },
    notes: {
      ru: 'физическая связь',
      en: 'physical link'
    },
    tech_analog: {
      ru: 'выключатели',
      en: 'switches'
    },
    comments: {
      ru: 'увеличение потенциального барьера',
      en: 'increase the potential barrier',
      book: '',
      book_pages: ''
    },
    options: {
      energy: 1
    }
  },    
  process_10: {
    name: {
      ru: 'соединение',
      en: 'connection'
    },
    operation: {
      direct: 'GA + GB -> GAB',
      backing: 'GAB -< GA + GB'
    },
    notes: {
      ru: 'химическое соединение',
      en: 'chemical connection'
    },
    tech_analog: {
      ru: 'химические процессы, карбюратор, смеситель, сепаратор, центрифуга',
      en: 'chemical processes, carburetor, mixer, separator, centrifuge'
    },
    comments: {
      ru: 'алфавитные подстановки, генетические измениения, биоинформатика',
      en: 'alphabetic substitution genetic Change, bioinformatics',
      book: 'https://en.wikipedia.org/wiki/Mixing_%28process_engineering%29',
      book_pages: ''
    },
    options: {
      charge_density: 1,
      magnetic_field: 1,
      length: 1,
      magnetic_flux: 1
    }
  },    
  process_11: {
    name: {
      ru: 'объединение',
      en: 'union'
    },
    operation: {
      direct: 'GA1 + GA2 -> GA1+A2',
      backing: 'GA1+A2 -< GA1 + GA2'
    },
    notes: {
      ru: 'геометрическое объединение. применительно к однородным процессам',
      en: 'mgeometric union. applied to homogeneous processes'
    },
    tech_analog: {
      ru: 'тройник, сварка, резка',
      en: 'tee, welding, cutting'
    },
    comments: {
      ru: 'группа геометрических блоков представленных алгеброической геометрией',
      en: 'group of geometric blocks submitted algebroicheskoy geometry',
      book: 'http://ru.convdocs.org/docs/index-5429.html:http://www.modcos.com/articles.php?id=53&idcom=60',
      book_pages: ''
    },
    options: {
      solid_angle: 1,
      curvature: 1,
      gaussian curvature: 1,
      length: 1,
      area: 1,
      volume: 1
    }
  },    
  process_12: {
    name: {
      ru: 'накопление',
      en: 'accumulation'
    },
    operation: {
      direct: 'GA -> o',
      backing: 'o -> GA'
    },
    notes: {
      ru: 'вещество, энергия -> информация',
      en: 'matter, energy -> information'
    },
    tech_analog: {
      ru: 'баки, магнитные ленты, склады',
      en: 'tanks, magnetic tape storage'
    },
    comments: {
      ru: 'вторая производная по времени от Атомной тормозной способности вещества (S_a) 913 1_Infostatics',
      en: 'second time derivative of the stopping power of nuclear matter (S_a)',
      book: '',
      book_pages: ''
    },
    options: {
      time: 1,
      energy: 1,
      '913': 1,
      S_a: 1
    }
  },    
  process_13: {
    name: {
      ru: 'отображение',
      en: 'mapping'
    },
    operation: {
      direct: 'GA -> i',
      backing: 'i -> GA'
    },
    notes: {
      ru: 'вещество, энергия -> информация',
      en: 'matter, energy -> information'
    },
    tech_analog: {
      ru: 'фотография',
      en: 'photo'
    },
    comments: {
      ru: 'перенос проекции структуры. поток энергии. Атомная тормозная способность вещества (S_a). связанные состояния',
      en: 'transfer projection structure. energy flow. nuclear stopping power of matter (S_a). bound states',
      book: '',
      book_pages: ''
    },
    options: {
      mass: 1,
      energy: 1,
      solid_angle: 1,
      S_a: 1
    }
  },          
  process_14: {
    name: {
      ru: 'фиксирование',
      en: 'clamping'
    },
    operation: {
      direct: 'GA -> o <- GA',
      backing: 'GA <- o -> GA'
    },
    notes: {
      ru: 'уменьшение числа свобод',
      en: 'reducing the number of freedoms'
    },
    tech_analog: {
      ru: 'Оси, наручники, вилка',
      en: 'axis, handcuffs, a fork'
    },
    comments: {
      ru: 'уравнение теоретической механики. векторная операция проекции, добавления или удаления линейного уравнения. составной кабель для каждой компоненты',
      en: 'equation of theoretical mechanics. projection of a vector operation, adding or removing a linear equation. component cable for each dimension',
      book: 'Landau',
      book_pages: ''
    },
    options: {
      momentum: 1,
      length: 1,
      force: 1,
      time: 1
    }
  }   
};

var physical_laws = {
  law_1 : { 
    'ru' : 'Закон Ома', 
    'en' : 'Ohm\'s Law', 
    'name' : '', 
    formula: 'gamma*T=j=(sig*E/T)*T', 
    comments: {
      ru: 'Импульс удельного веса это плотность электрического тока. Удельный вес это шаг спирали умноженный на удельную проводимость',
      en: 'Impulse specific gravity, the electric current density. Specific weight is multiplied by a pitch conductivity',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '89'
    },
  },
  law_2 : { 
    'ru' : 'Закон Джоуля - Ленца', 
    'en' : 'Joule - Lenz', 
    'name' : '' 
    formula: 'Q=(((I / Eps_0*c^2) * dl1) * Eps_0*c^3)', 
    comments: {
      ru: 'I=Eps_0*c^3, 1/Eps_0*c^2 = 1/c * R, T = 1/c * dl1: При прохождении тока через проводник, выделяется тепло',
      en: 'When current flows through a conductor, heat is released',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '122'
    },
  },
  'law_3' : {'ru' : 'Эффект Зеебека', 'en' : 'Seebeck effect', 'name' : '' }, 
  'law_4' : {'ru' : 'Эффект Томсона', 'en' : 'Thomson effect', 'name' : ''  }, 
  'law_5' : {'ru' : 'Эффект Петелье', 'en' : 'effect loops', 'name' : ''  }, 
  law_6 : {
    'ru' : 'Закон Био - Савара - Лапласа', 
    'en' : 'The Biot - Savart - Laplace', 
    'name' : ''  
    formula: 'B = I / l1 / Eps_0*c^2', 
    comments: {
      ru: 'tau = 1/Eps_0*c^2, l1 = l1 * alpha, 1/l1 = l1 / S / alpha :  Элемент провода l1 с током I сосдаёт индукцию магнитного поля в вакууме B',
      en: 'Element wire l1 with current I current magnetic induction fields in vacuo B',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '131'
    },
  }, 
  'law_7' : {'ru' : 'Сверхпроводимость', 'en' : 'superconductivity', 'name' : ''  }, 

  'law_8' : {'ru' : 'Тензорезистивный эффект', 'en' : 'Thin-film effect', 'name' : ''  }, 
  'law_9' : {'ru' : 'Вторичная электронная эмиссия', 'en' : 'Secondary electron emission', 'name' : ''  }, 
  'law_10' : {'ru' : 'Эффект Ганна', 'en' : 'Gunn effect', 'name' : ''  }, 
  law_11 : {
    'ru' : 'Второй закон Ньютона', 
    'en' : 'Newton\'s second law', 
    'name' : ''  
    formula: 'E = (F / m)', 
    comments: {
      ru: 'Ускорение пропорционально силе и направлено по прямой действия силы',
      en: 'Acceleration is proportional to force and directed by direct action of the force',
      book: 'Butikov, Kondrat\'ev. Tom 1. Fizika dlja uglublennogo izuchenija. Mehanika (ru)(T)(352s).djvu',
      book_pages: '91'
    },
  }, 
  'law_12' : {'ru' : 'Магниторезистивный эффект', 'en' : 'magnetoresistive effect', 'name' : ''  }, 
  'law_13' : {'ru' : 'Эффект Гопкинсона', 'en' : 'Hopkinson effect', 'name' : ''  }, 
  'law_14' : {'ru' : 'Катодолюминесценция', 'en' : 'cathodoluminescence', 'name' : ''  }, 
  'law_15' : {'ru' : 'Пироэлектрический эффект', 'en' : 'pyroelectric effect', 'name' : ''  }, 
  law_16 : {
    'ru' : 'Закон Ампера', 
    'en' : 'Ampere\'s law', 
    'name' : ''  
    formula: 'F = B * l1 * Eps_0*c^3', 
    part_order: 'B:I:l1',
    comments: {
      ru: 'I=Eps_0*c^3, l1 = l1 * alpha :  Элемент провода l1 с током I сосдаёт индукцию магнитного поля в вакууме B',
      en: 'Element wire l1 with current I current magnetic induction fields in vacuo B',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '143'
    },
  }, 
  'law_17' : {'ru' : 'Электрокалорический эффект', 'en' : 'electrocaloric effect', 'name' : ''  }, 
  'law_18' : {'ru' : 'Термоэлектронная эмиссия', 'en' : 'thermionic emission', 'name' : ''  }, 
  'law_19' : {'ru' : 'Эффект Холла', 'en' : 'Hall effect', 'name' : ''  }, 
  'law_20' : {'ru' : 'Магнитострикция', 'en' : 'magnetostriction', 'name' : ''  }, 


  'law_21' : {'ru' : 'Эффект Эйнштейна - де - Хааза', 'en' : 'The Einstein - de - Haas', 'name' : ''  }, 
  'law_22' : {'ru' : 'Автоэлектронная эмиссия', 'en' : 'field electron emission', 'name' : ''  }, 
  'law_23' : {'ru' : 'Эффект Виллари (магнитоупругий эффект)', 'en' : 'Villari effect (magnetoelastic effect)', 'name' : ''  }, 
  'law_24' : {'ru' : 'Электролюминесценция', 'en' : 'electroluminescence', 'name' : ''  }, 
  'law_25' : {'ru' : 'Эффект Магнуса', 'en' : 'Magnus effect', 'name' : ''  }, 
  'law_26' : {'ru' : 'Естественная оптическая активность', 'en' : 'Natural optical activity', 'name' : ''  }, 
  'law_27' : {'ru' : 'Эффект Баркгауэена', 'en' : 'effect Barkgaueena', 'name' : ''  }, 
  'law_28' : {'ru' : 'Эффект Барнета', 'en' : 'effect Barnet', 'name' : ''  }, 
  'law_29' : {'ru' : 'Закон Брюстера', 'en' : 'Brewster', 'name' : ''  }, 
  law_30 : {
    'ru' : 'Закон всемирного тяготения', 
    'en' : 'Law of gravitation', 
    'name' : ''  
    formula: 'F =  (((m / Eps_0*c^1) * Eps_0*c^3) / dl1)', 
    part_order: 'm:l1',
    comments: {
      ru: 'T / l1 = 1 / c^1, m = Eps_0*c^2 * l1 = tau * l1, T/T:  сила взаимодействия 2 масс пропорциональна их произведению и обратно пропорциональна квадрату расстояния между ними',
      en: '2 interaction force is proportional to their product charges and inversely proportional to the square of the distance between them',
      book: 'Butikov, Kondrat\'ev. Tom 1. Fizika dlja uglublennogo izuchenija. Mehanika (ru)(T)(352s).djvu',
      book_pages: '124'
    },
  }, 
  'law_31' : {'ru' : 'Пьезоэлектрический эффект', 'en' : 'Piezoelectric effect', 'name' : ''  }, 
  'law_32' : {'ru' : 'Обратный пьезоэлектрический эффект', 'en' : 'inverse piezoelectric effect', 'name' : ''  }, 
  'law_33' : {'ru' : 'пьезомагнитный эффект', 'en' : 'piezomagnetic effect', 'name' : ''  }, 
 
  law_34 : {
    'ru' : 'Закон Кулона', 
    'en' : 'Coulomb\'s law', 
    'name' : ''  
    formula: 'F =  (((m / Eps_0*c^1) * Eps_0*c^3) / dl1)', 
    part_order: 'm:l1',
    comments: {
      ru: 'T / l1 = 1 / c^1, m = Eps_0*c^2 * l1 = tau * l1, T/T:  сила взаимодействия 2 зарядов пропорциональна их произведению и обратно пропорциональна квадрату расстояния между ними',
      en: 'interaction force is proportional to their 2 masses  and inversely proportional to the product of the square of the distance between them',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '124'
    },
  },
  law_35 : {
    'ru' : 'Сила Лоренца', 
    'en' : 'Lorentz force', 
    'name' : ''  
    formula: 'F = m * E:F=(B * ((m / Eps_0*c^1) / v_s) * Eps_0*c^3)', 
    part_order: 'B:m:v_s',
    comments: {
      ru: 'v_s = Eps_0*c^3 / Eps_0*c^1 / v_s = I * R / v_s , B = B * alpha :  сила перпендикулярная скорости заряда и вектору магнитного поля',
      en: 'force perpendicular to the velocity of the charge and the magnetic field vector',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '147'
    },
  },
  law_36 : {
    'ru' : 'Электромагнитная индукция', 
    'en' : 'Electromagnetic induction', 
    'name' : ''  
    formula: 'phi = Phi_m / T', 
    part_order: 'Phi_m:T',
    comments: {
      ru: 'электродвижущая сила электромагнитной индукции пропорциональна скорости изменения магнитного потока',
      en: 'electromagnetic induction electromotive force is proportional to the rate of change of magnetic flux',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '157'
    },
  },
  'law_37' : {'ru' : 'Электростатическая индукция', 'en' : 'electrostatic induction', 'name' : ''  },
  law_38 : {
    'ru' : 'Самоиндукция', 
    'en' : 'inductance', 
    'name' : ''  
    formula: 'D = tau / l1', 
    part_order: 'tau:l1',
    comments: {
      ru: 'D = 1 / L , tau = 1 / m_o , li / (N / l1) = V3 * (N / l1) : самоиндукция не даёт мгновенно изменять значение тока в электрической цепи',
      en: 'inductance does not instantly change the value of the current in an electrical circuit',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '163'
    },
  }, 
  'law_39' : {'ru' : 'Фотоэлектронная эмиссия (внешний фотоэффект)', 'en' : 'photoemission', 'name' : '' }, 
  'law_40' : {'ru' : 'Терморезистивный эффект', 'en' : 'thermoresistive effect', 'name' : '' }, 
  'law_41' : {'ru' : 'Эффект Мейснера', 'en' : 'Meissner effect', 'name' : ''  }, 
  'law_42' : {'ru' : 'Эффект Поккельса', 'en' : 'Pockels effect', 'name' : ''  }, 
  law_43 : {
    'ru' : 'Вихревые токи (токи Фуко)', 
    'en' : 'eddy currents', 
    'name' : ''  
    formula: 'I = Phi_m / l1 * Eps_0*c^2', 
    part_order: 'Phi_m:l1',
    comments: {
      ru: 'tau = 1 / m_o = Eps_0*c^2 : замкнутые электрические токи в массивных проводниках, возникающие при изменении пронизывающего их магнитного поля',
      en: 'closed electrical currents in conductors massive arising from a change of the magnetic field permeating',
      book: 'Butikov, Kondrat\'ev. Tom 2. Fizika dlja uglublennogo izuchenija. E\'lektrodinamika, optika (ru)(T)(336s).djvu',
      book_pages: '164'
    },
  }, 
  'law_44' : {'ru' : 'Гальваноупругий магнитный эффект', 'en' : 'Galvano elastic magnetic effect', 'name' : ''  }, 
  'law_45' : {'ru' : 'Диэлектрический гистерезис', 'en' : 'dielectric hysteresis', 'name' : '' },
  
  'law_46' : {'ru' : 'Магнито электрический эффект в антиферромагнетиках', 'en' : 'Magneto-electric effect in antiferromagnets', 'name' : '', 'exit_c' : 'magnetization'   }, 
  'law_47' : {'ru' : 'Магнито электрический эффект в антиферромагнетиках', 'en' : 'Magneto-electric effect in antiferromagnets', 'name' : '', 'exit_c' : 'polarized'  }, 
  'law_48' : {'ru' : 'Акусто магнето электрический эффект', 'en' : 'Acousto-magneto-electric effect', 'name' : ''  }, 
  law_49 : {
    'ru' : 'Действие магнитного поля на контур с током', 
    'en' : 'Effect of a magnetic field on a current loop', 
    'name' : ''  
    formula: 'Q = B * S * Eps_0*c^3', 
    part_order: 'B:S:alpha',
    comments: {
      ru: 'I=Eps_0*c^3, S = S * alpha : На контур с током в магнитном поле действует момент сил, разворачивающий контур, так, чтобы его плоскость была перпендикулярна магнитным силовым линиям',
      en: 'Per circuit in a magnetic field exerts a torque unfolding circuit so that its plane is perpendicular to the magnetic field lines',
      book: 'http://lightelectronics.ru/v_pomosh_studentam/deystvie-magnitnogo-polya',
      book_pages: '1'
    },
  }, 
  'law_50' : {'ru' : 'Акустический парамагнитный резонанс', 'en' : 'Acoustic paramagnetic resonance', 'name' : ''  }, 

  'law_51' : {'ru' : 'Магнитный гистерезис', 'en' : 'magnetic hysteresis', 'name' : ''  }, 
  'law_52' : {'ru' : 'Поляризация диэлектриков', 'en' : 'polarization of dielectrics', 'name' : ''  }, 
  'law_53' : {'ru' : 'Ионизация газа под действием электрического поля', 'en' : 'Ionization of the gas by the electric field', 'name' : ''  }, 
  'law_54' : {'ru' : 'Пробой диэлектриков', 'en' : 'dielectric breakdown', 'name' : ''  }, 
  'law_55' : {'ru' : 'Взрывная электронная эмиссия', 'en' : 'Explosive electron emission', 'name' : ''  }, 
  'law_56' : {'ru' : 'Триболюминесценция', 'en' : 'triboluminescence', 'name' : ''  }, 
  'law_57' : {'ru' : 'дуговой разряд', 'en' : 'arc discharge', 'name' : ''  }, 
  'law_58' : {'ru' : 'тлеющий разряд', 'en' : 'glow discharge', 'name' : ''  }, 
  'law_59' : {'ru' : 'искровой разряд', 'en' : 'sparkover', 'name' : ''  }, 
  'law_60' : {'ru' : 'Эффект Кикоина - Носкова (фото магнито электрический эффект)', 'en' : 'Effect Kikoin - Noskov (photo-magneto-electric effect)', 'name' : ''  }, 
  'law_61' : {'ru' : 'Термоэлектретный эффект', 'en' : 'thermoelectret effect', 'name' : ''  }, 
  'law_62' : {'ru' : 'Термолюминесценция', 'en' : 'thermoluminescence', 'name' : ''  }, 
  'law_63' : {'ru' : 'Намагничивание тел', 'en' : 'magnetization bodies', 'name' : ''  }, 
  'law_64' : {'ru' : 'Безэлектродный кольцевой разряд', 'en' : 'Electrodeless discharge ring', 'name' : ''  }, 
  'law_65' : {'ru' : 'Звуковое радиационное давление', 'en' : 'Sound radiation pressure', 'name' : ''  }, 
  'law_66' : {'ru' : 'Электрострикция', 'en' : 'electrostriction', 'name' : ''  }, 
  'law_67' : {'ru' : 'Эффект Фарадея', 'en' : 'Faraday effect', 'name' : ''  }, 
  'law_68' : {'ru' : 'Эффект Коттона - Мутона', 'en' : 'The Cotton - Mouton', 'name' : ''  }, 
  'law_69' : {'ru' : 'Эффект Доплера в оптике', 'en' : 'Doppler effect in optics', 'name' : ''  }, 
  'law_70' : {'ru' : 'Эффект Керра', 'en' : 'Kerr effect', 'name' : ''  }, 
  law_71 : {
    'ru' : 'Теплопроводность изотропных тел', 
    'en' : 'The thermal conductivity of isotropic bodies', 
    name : {
      ru : 'закон Фурье',
      en : 'Fourier law'
    },
    formula: 'S_l = alpha / l1 * Eps_0*c^5',
    part_order: 'l_1',
    comments: {
      ru: 'l_1 = Eps_0*c^5 / l1 :  Закон теплопроводности, также известный как закону Фурье, утверждает, что скорость время передачи тепла через материал пропорциональна отрицательного градиента температуры и площади, под прямым углом к ​​этой градиента, через который тепловых потоков.',
      en: 'The law of heat conduction, also known as Fourier\'s law, states that the time rate of heat transfer through a material is proportional to the negative gradient in the temperature and to the area, at right angles to that gradient, through which the heat flows.',
      book: 'https://en.wikipedia.org/wiki/Thermal_conduction',
      book_pages: '1'
    },      
  }, 
  'law_72' : {'ru' : 'Фотопластический эффект', 'en' : 'photoplastic effect', 'name' : ''  }, 
  law_73 : {
    'ru' : 'Основные уравнения динамики вращательного движения твёрдого тела', 
    'en' : 'Basic equations of dynamics of rotational motion of a rigid body', 
    'name' : ''  
    formula: 'L = Q * T',
    part_order: 'Q:T',
    comments: {
      ru: 'изменение момента количества движения твердого тела , равно импульсу момента всех внешних сил, действующих на это тело',
      en: 'change of angular momentum of a rigid body this momentum all the moments of the external forces acting on the body',
      book: 'http://physics-lectures.ru/fizicheskie-osnovy-mexaniki/5-7-osnovnoe-uravnenie-dinamiki-vrashhatelnogo-dvizheniya/',
      book_pages: '1'
    },
  }, 
  'law_74' : {'ru' : 'Тормозное рентгеновское излучение', 'en' : 'Bremsstrahlung', 'name' : ''  }, 

  'law_75' : {'ru' : 'Эффект Доплера в акустике', 'en' : 'Doppler effect in acoustics', 'name' : ''  }, 
  'law_76' : {'ru' : 'Акустоэлектрический эффект', 'en' : 'acoustoelectric effect', 'name' : ''  }, 
  'law_77' : {'ru' : 'Двойное лучепреломление', 'en' : 'birefringence', 'name' : ''  }, 
  'law_78' : {'ru' : 'Эффект Нернста', 'en' : 'Nernst', 'name' : ''  }, 
  'law_79' : {'ru' : 'Тепловое расширение тел', 'en' : 'Thermal expansion of bodies', 'name' : ''  }, 
  'law_80' : {'ru' : 'Фотоупругость (пьезооптический эффект)', 'en' : 'Photoelasticity (piezooptic effect)', 'name' : ''  }, 
  'law_81' : {'ru' : 'Фотопроводимость (фоторезистивный эффект)', 'en' : 'Photoconductivity (photoconductive effect)', 'name' : ''  }, 
  'law_82' : {'ru' : 'Поглощение звука', 'en' : 'sound absorption', 'name' : ''  }, 
  'law_83' : {'ru' : 'Поглощение света', 'en' : 'absorption of light', 'name' : ''  }, 
  'law_84' : {'ru' : 'Полное внутренне отражение', 'en' : 'Total internal reflection', 'name' : ''  }, 
  'law_85' : {'ru' : 'Фотолюминисценция', 'en' : 'photoluminescence', 'name' : ''  }, 
  'law_86' : {'ru' : 'Закон Кюри', 'en' : 'Curie\'s law', 'name' : ''  }, 
  'law_87' : {'ru' : 'Вентильный фотоэффект', 'en' : 'valve photoeffect', 'name' : ''  }
};
 
