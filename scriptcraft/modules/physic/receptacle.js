

var receptacle = {
  '0_4' : {
    '0' : 'R,l,^,nabla','1' : '','21' : '<','3':'','41' : '', '5' : '','61': '<','7' : '','81' : '', '9' : '', '9101' : '<','911' : "",'9121' : '',   '913' : '',  '9141' : '<','915' : '', '9161' : '',   '917' : '',      '9181' : '<','919' : '',  '9201' : '',   '921' : '',  '9221' : '<','923' : '',  '9241' : '',   '925':'', '9261':'<','927':'','9281':'',  '929':'',     '9301':'<','931':'','93219':'', '933':'' 
  },
  '2_Lightostatics' : {
    '0' : "Eps_0*c^6",'1' : "",'21' :'','3' : "",'41' : '<-','5' : "",'61': '','7' : "",'81' : '->','9' : "v_ee",'9101' : '', '911' : "v_e",'9121' : '<-', '913' : "T", '9141' : "", '915' : "T_l",'9161' : '->','917' : "N_l",'9181' : '', '919' : "l_1", '9201' : '<-', '921' : "", '9221' : '', '923' : "",  '9241' : '->', '925':"S_l",'9261':'','927':"l_2", '9281':'<-','929':"",    '9301':'','931':"",'9321':'->','933':"" 
  },
  '30_N' : {
    '0' : "Eps_0*c^5",'1' : '','21' : '^','3' : '','41' : '',	'5': '','61': 'v','7' : '','81' : '', '9' : '', '9101' : '^','911' : '','9121' : '',   '913' : '',  '9141' : 'v','915' : '', '9161' : '',   '917' : '',      '9181' : '^','919' : '',  '9201' : '',   '921' : '',  '9221' : 'v','923' : '',  '9241' : '',   '925':'', '9261':'^','927':'','9281':'',  '929':'',     '9301':'v','931':'','9321':'', '933':'' 
  },
  '3_Elasticostatics' : {
    '0' : "Eps_0*c^4",'1' : "",'21' :'','3' : "V3",'41' : '->','5': "S_aa",'61': '','7' : "S_a",'81' : '<-','9': "S",'9101' : '', '911' :"l1",'9121' : '->', '913' : "Q", '9141' : "", '915' : "F",'9161' : '<-', '917' : "alpha", '9181' : '', '919' : "R", '9201' : '->', '921' : "k", '9221' : '', '923' : "P", '9241' : '<-', '925':"R2",'9261':'','927':"n",'9281':'->','929':"gamma",'9301':'','931':"",'9321':'<-','933':"" 
  },
  '40_I' : {
    '0' : "Eps_0*c^3",'1' : '','21' : 'v','3' : '','41' : '',	'5': '','61': '^','7' : '','81' : '', '9' : '', '9101' : 'v','911' : '','9121' : '',   '913' : '',  '9141' : '^','915' : '', '9161' : '',   '917' : '',      '9181' : 'v','919' : '',  '9201' : '',   '921' : '',  '9221' : '^','923' : '',  '9241' : '',   '925':'', '9261':'v','927':'','9281':'',  '929':'',     '9301':'^','931':'','9321':'', '933':'' 
  },
  '4_Magnetostatics' : {
    '0' : "Eps_0*c^2",'1' : "",'21' :'','3' : "",'41' : '<-','5' : "p_mm",'61': '','7' : "p_m",'81' : '->','9' : "L",'9101' : '', '911' : "P_m",'9121' : '<-', '913' : "Phi_m", '9141' : "", '915' : "v_s",'9161' : '->','917' : "I",'9181' : '', '919' : "H", '9201' : '<-', '921' : "B", '9221' : '', '923' : "M_0",  '9241' : '->', '925':"j",'9261':'','927':"divj", '9281':'<-','929':"J",    '9301':'','931':"v_m",'9321':'->','933':"Z_a" 
  },
  '50_1/r' : {
    '0' : "Eps_0*c^1",'1' : '','21' : '^','3' : '','41' : '',	'5': '','61': 'v','7' : '','81' : '', '9' : '', '9101' : '^','911' : '','9121' : '',   '913' : '',  '9141' : 'v','915' : '', '9161' : '',   '917' : '',       '9181' : '^','919' : '',  '9201' : '',   '921' : '',  '9221' : 'v','923' : '',  '9241' : '',   '925':'', '9261':'^','927':'','9281':'',  '929':'',     '9301':'v','931':'','9321':'', '933':'' 
  },
  '5_Electrostatics' : {
    '0' : "Eps_0*c^0",'1' : "",'21' :'','3' : "",'41' : '->','5' : "j_e",'61' : '','7' : "P_e",'81' : '<-','9' : "S_m",'9101' : '', '911' : "N",'9121' : '->', '913' : "m", '9141' : "", '915' : "tau",'9161' : '<-', '917' : "phi", '9181' : '', '919' : "E", '9201' : '->', '921' : "D", '9221' : '', '923' : "rho_e", '9241' : '<-', '925':"1_eps",'9261':'','927':"",'9281':'->','929':"n_rho",'9301':'','931':"",'9321':'<-','933':"" 
  },
  '60_' : {
    '0' : "Eps_0*c^-1",'1' : '','21': 'v','3' : '','41' : '',	'5': '','61': '^','7' : '','81' : '', '9' : '', '9101' : 'v','911' : '','9121' : '',   '913' : '',  '9141' : '^','915' : '', '9161' : '',   '917' : '', '9181' : 'v','919' : '',  '9201' : '',   '921' : '',  '9221' : '^','923' : '',  '9241' : '',   '925':'', '9261':'v','927':'','9281':'',  '929':'',     '9301':'^','931':'','9321':'', '933':'' 
  },
  '6_Radiatostatics' : {
    '0' : "Eps_0*c^-2",'1' : "",'21':'','3' : "",'41' : '<-','5' : "",'61': '','7' : "",'81' : '->','9' : "",'9101' : '', '911' : "K_ee",'9121' : '<-', '913' : "K_e", '9141' : "", '915' : "v3",'9161' : '->','917' : "1/r",'9181' : '', '919' : "sig", '9201' : '<-', '921' : "D_r", '9221' : '', '923' : "",  '9241' : '->', '925':"",'9261':'','927':"", '9281':'<-','929':"",    '9301':'','931':"",'9321':'->','933':"" 
  },
  '70_' : {
    '0' : "Eps_0*c^-3",'1' : '','21' : '^','3' : '','41' : '',	'5': '','61': 'v','7' : '','81' : '', '9' : '', '9101' : '^','911' : '','9121' : '',   '913' : '',  '9141' : 'v','915' : '', '9161' : '',   '917' : '',       '9181' : '^','919' : '',  '9201' : '',   '921' : '',  '9221' : 'v','923' : '',  '9241' : '',   '925':'', '9261':'^','927':'','9281':'',  '929':'',     '9301':'v','931':'','9321':'', '933':'' 
  },
  '7_Atomostatics' : {
    '0' : "Eps_0*c^-4",'1' : "",'21' :'','3' : "",'41' : '->','5' : "",'61' : '','7' : "",'81' : '<-','9' : "",'9101' : '', '911' : "",'9121' : '->', '913' : "1/C", '9141' : "", '915' : "Eps_0",'9161' : '<-', '917' : "", '9181' : '', '919' : "", '9201' : '->', '921' : "", '9221' : '', '923' : "", '9241' : '<-', '925':"",'9261':'','927':"",'9281':'->','929':"",'9301':'','931':"",'9321':'<-','933':"" 
  },
#  '9_0' : {},
  'g_1' : {
    '0' : "1",'1':'','21':'','3':""    ,'41':'','5':"Inert.m",'61':'','7':"Dipol.m",'81':'','9':"Angul.m",'9101':'','911':"V.quant",'9121':'','913':"S.quant",'9141':"",'915':"V.pot",'9161':'','917':"S.pot",'9181':'','919':"Tense",'9201':'','921':"Induc",'9221':'','923':"Q.den",'9241':'','925':"P.den"  
  },
  'g_2' : {
    '0' : "2",'1':'','21':'','3':"2/-3",'41':'','5':"1/-2",   '61':'','7':"2/-1",   '81':'','9':"1/-2",   '9101':'','911':"2/-1",	 '9121':'','913':"1/0",    '9141':"",'915':"2/1",'9161':'','917':"1/0",'9181':'','919': "2/1", 	'9201':'','921':"1/2",'9221':'',     '923':"2/3",'9241':'','925':"1/2",'9261':'','927':"2/3",'9281':'','929':"1/4"
  },
  'g_3' : {
    '0' : "3",'1':'','21':'','3':"",'41':'','5':'', 		'61' :'','7':"",	'81' : '','9':"",	'9101':'','911':"S_a"	,'9121':'','913':"E_p",'9141':'','915':"E_k",'9161':"F",'917':"k_l",'9181':'','919': "k_c", '9201' : "P", 	'921' : "f_l",	'9221':'', '923': 'f_c'  
  }
}; 