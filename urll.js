var url = require('url');

var address = 'https://www.amazon.in/Red-Lemon-Titanium-Multifunctional-Waterproof/dp/B09ZYQH7C5/?_encoding=UTF8&pd_rd_w=7Do4f&content-id=amzn1.sym.82b4a24f-081c-4d15-959c-ef13a1d3fa4e&pf_rd_p=82b4a24f-081c-4d15-959c-ef13a1d3fa4e&pf_rd_r=BA62KT3KXZSC21MM45WK&pd_rd_wg=S1MLV&pd_rd_r=da66bcf0-cb22-4aef-896f-0cd58e705301&ref_=pd_gw_ci_mcx_mr_hp_atf_m';

var resultUrl = url.parse(address,true);
console.log(resultUrl)