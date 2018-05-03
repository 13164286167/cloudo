SET NAMES UTF8;
 DROP DATABASE IF EXISTS kd;
 CREATE DATABASE kd CHARSET=UTF8;
 USE kd;
 CREATE TABLE kd_index_carousel (
     cid INT PRIMARY KEY AUTO_INCREMENT,
     img VARCHAR(128),
     href VARCHAR(128)
 );
 INSERT INTO kd_index_carousel VALUES (null,'img/index/1520256186395509.jpg','productList.html');
 INSERT INTO kd_index_carousel VALUES (null,'img/index/1520256208674443.jpg','productList.html');
 INSERT INTO kd_index_carousel VALUES (null,'img/index/1520256261585792.jpg','productList.html');
 INSERT INTO kd_index_carousel VALUES (null,'img/index/1520256388980606.jpg','productList.html');

CREATE TABLE kd_product (
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(128),
    brandName VARCHAR(128),
    productName VARCHAR(128),
    price INT,
    pic VARCHAR(128),
    spec VARCHAR(128)
);
INSERT INTO kd_product VALUES(null,"显示明细  白色骷髅头印花床品三件套","NUNUNU",
"白色骷髅头印花床品三件套","979","img/product_details/1527155653346233.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  黑色妈咪包","NUNUNU",
"黑色妈咪包","1279","img/product_details/1526972938063934.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  黑色网眼沙滩包","NUNUNU",
"黑色网眼沙滩包","599","img/product_details/1526972665174608.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  粉色印花沙滩半身裙","NUNUNU",
"粉色印花沙滩半身裙","439","img/product_details/1526899034326276.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  星星印花休闲衬衫","NUNUNU",
"星星印花休闲衬衫","439","img/product_details/1526898159377418.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  男孩骷髅面具印花内裤套装","NUNUNU",
"男孩骷髅面具印花内裤套装","319","img/product_details/1526898036412322.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  迷你骷髅印花棉布床品套装","NUNUNU",
"迷你骷髅印花棉布床品套装","619","img/product_details/1526898014063478.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  男孩骷髅头骨印花内裤套装","NUNUNU",
"男孩骷髅头骨印花内裤套装","319","img/product_details/1526897836953305.jpg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  Ballet Sun Dress Ivory And Black","LITTLE CREATIVE FACTORY",
"Ballet Sun Dress Ivory And Black","859","img/product_details/0057061_ballet-sun-dress-ivory-and-black.jpeg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  'The Future Is Female' Print T-Shirt Charcoal","IMPS & ELFS",
"'The Future Is Female' Print T-Shirt Charcoal","299","img/product_details/0066659_the-future-is-female-print-t-shirt-charcoal.jpeg","3-4year"
);
INSERT INTO kd_product VALUES(null,"显示明细  黑色印花连衣裙","BOY LONDON",
"黑色印花连衣裙","699","img/product_details/0065976_17819512.jpeg","15-28year"
);
INSERT INTO kd_product VALUES(null,"显示明细  BONDI WASH柠檬茶树和柑橘碗盘清洁液500ML","BONDI WASH",
"BONDI WASH柠檬茶树和柑橘碗盘清洁液500ML","168","img/product_details/1525318497136818.jpg","500ML"
);
INSERT INTO kd_product VALUES(null,"显示明细  BONDI WASH 柠檬茶树和柑橘家居清洁喷雾500ML","BONDI WASH",
"BONDI WASH 柠檬茶树和柑橘家居清洁喷雾500ML","199","img/product_details/1525318405041554.jpg","500ML"
);
INSERT INTO kd_product VALUES(null,"显示明细  BONDI WASH 塔斯马尼亚胡椒和熏衣草地面清洁液500ML","BONDI WASH",
"BONDI WASH 塔斯马尼亚胡椒和熏衣草地面清洁液500ML","140","img/product_details/1525318661425906.jpg","500ML"
);
INSERT INTO kd_product VALUES(null,"显示明细  衣物香氛喷雾-婴儿香氛","THE LAUNDRESS",
"衣物香氛喷雾-婴儿香氛","100","img/product_details/1525318271697993.jpg","4OZ"
);
INSERT INTO kd_product VALUES(null,"显示明细  衣物柔软精-婴儿香氛","THE LAUNDRESS",
"衣物柔软精-婴儿香氛","190","img/product_details/1525318141698749.jpg","16OZ"
);
INSERT INTO kd_product VALUES(null,"显示明细  婴儿洗衣精","THE LAUNDRESS",
"婴儿洗衣精","210","img/product_details/1525317757062469.jpg","32OZ"
);
CREATE TABLE kd_new_product (
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(128),
    brandName VARCHAR(128),
    productName VARCHAR(128),
    price INT,
    pic VARCHAR(128),
    spec VARCHAR(128),
    gender VARCHAR(8),
    topicName VARCHAR(128),
    color VARCHAR(64),
    size VARCHAR(64),
    sort VARCHAR(64)
);
INSERT INTO kd_new_product VALUES(null,'显示明细  Logo Print T-Shirt Charcoal','LE PETIT COCO',
'Logo Print T-Shirt Charcoal','319','img/new_product/0068131_logo-print-t-shirt-charcoal.jpeg','10YEAR',1,'新品','黑色','16岁','T恤'
);
INSERT INTO kd_new_product VALUES(null,'显示明细  Do Your Best Print T-Shirt White/Red','LE PETIT COCO',
'Do Your Best Print T-Shirt White/Red','339','img/new_product/0068134_do-your-best-print-t-shirt-whitered.jpeg','10YEAR',1,'新品','多色','16岁','T恤'
);
INSERT INTO kd_new_product VALUES(null,'显示明细  Shorts White','LE PETIT COCO',
'Shorts White','389','img/new_product/0068133_shorts-white.jpeg','10YEAR',1,'新品','白色','16岁','短裤'
);
INSERT INTO kd_new_product VALUES(null,'显示明细  Logo Print T-Shirt White','LE PETIT COCO',
'Logo Print T-Shirt White','319','img/new_product/0068132_logo-print-t-shirt-white.jpeg','10YEAR',1,'新品','白色','16岁','T恤'
);
INSERT INTO kd_new_product VALUES(null,'显示明细  Poster Print White','LE PETIT COCO',
'Poster Print White','389','img/new_product/0068127_poster-print-white.jpeg','10YEAR',1,'新品','白色','16岁','T恤'
);
INSERT INTO kd_new_product VALUES(null,'显示明细  Pouch pocket T-Shirt White','LE PETIT COCO',
'Pouch pocket T-Shirt White','319','img/new_product/0068126_pouch-pocket-t-shirt-white.jpeg','10YEAR',1,'新品','白色','16岁','T恤'
);
INSERT INTO kd_new_product VALUES(null,'显示明细  Pouch pocket T-Shirt Grey','LE PETIT COCO',
'Pouch pocket T-Shirt Grey','319','img/new_product/0068124_pouch-pocket-t-shirt-grey.jpeg','10YEAR',1,'新品'
,'灰色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Feather Applique T-Shirt White','LE PETIT COCO',
'Feather Applique T-Shirt White','479','img/new_product/0068128_feather-applique-t-shirt-white.jpeg','10YEAR',1,'新品'
,'白色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Do Your Best Print T-Shirt White/Navy','LE PETIT COCO',
'Do Your Best Print T-Shirt White/Navy','339','img/new_product/0068121_do-your-best-print-t-shirt-whitenavy.jpeg','10YEAR',1,'新品'
,'白色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Carnival Print T-Shirt White','LE PETIT COCO',
'Carnival Print T-Shirt White','339','img/new_product/0068114_carnival-print-t-shirt-white.jpeg','10YEAR',1,'新品'
,'白色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Organza Sleeve T-Shirt Green','LE PETIT COCO',
'Organza Sleeve T-Shirt Green','369','img/new_product/0068116_organza-sleeve-t-shirt-green.jpeg','10YEAR',0,'新品'
,'绿色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Skort White','LE PETIT COCO',
'Skort White','299','img/new_product/0068117_skort-white.jpeg','10YEAR',0,'新品'
,'白色','16岁','短裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Striped T-Shirt Blue','LE PETIT COCO',
'Striped T-Shirt Blue','359','img/new_product/0068112_striped-t-shirt-blue.jpeg','10YEAR',1,'新品'
,'蓝色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Striped Joggings Bottoms Navy','LE PETIT COCO',
'Striped Joggings Bottoms Navy','539','img/new_product/0068109_striped-joggings-bottoms-navy.jpeg','10YEAR',1,'新品'
,'深蓝色','16岁','长裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Striped Shorts Red','LE PETIT COCO',
'Striped Shorts Red','479','img/new_product/0068111_striped-shorts-red.jpeg','10YEAR',0,'新品'
,'红色','16岁','短裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Frill Sweatshirt Jacket Red','LE PETIT COCO',
'Frill Sweatshirt Jacket Red','859','img/new_product/0068129_frill-sweatshirt-jacket-red.jpeg','10YEAR',0,'新品'
,'红色','15岁','夹克');
INSERT INTO kd_new_product VALUES(null,'显示明细  Frill Trousers Red','LE PETIT COCO',
'Frill Trousers Red','409','img/new_product/0068130_frill-trousers-red.jpeg','10YEAR',0,'新品'
,'红色','16岁','长裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Graphic Print Feather Applique Skirt Green','LE PETIT COCO',
'Graphic Print Feather Applique Skirt Green','829','img/new_product/0068115_graphic-print-feather-applique-skirt-green.jpeg','10YEAR',0,'新品'
,'绿色','16岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Organza & Feather Dress  Grey','LE PETIT COCO',
'Organza & Feather Dress  Grey','809','img/new_product/0068113_organza-feather-dress-grey.jpeg','10YEAR',0,'新品'
,'灰色','12岁','背心');
INSERT INTO kd_new_product VALUES(null,'显示明细  Organza Logo Print Vest Pink','LE PETIT COCO',
'Organza Logo Print Vest Pink','409','img/new_product/0068059_two-tone-organza-dress-pink.jpeg','10YEAR',0,'新品'
,'粉色','12岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Crinkle Top White','LE PETIT COCO',
'Crinkle Top White','519','img/new_product/0068120_crinkle-top-white.jpeg','10YEAR',0,'新品'
,'白色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Crinkle Trousers Black','LE PETIT COCO',
'Crinkle Trousers Black','659','img/new_product/0068122_crinkle-trousers-black.jpeg','10YEAR',0,'新品'
,'黑色','16岁','长裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Crinkle Shorts Grey','LE PETIT COCO',
'Crinkle Shorts Grey','469','img/new_product/0068125_crinkle-shorts-grey.jpeg','10YEAR',0,'新品'
,'灰色','16岁','短裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Carmensita Dress Pink','KETIKETA',
'Carmensita Dress Pink','609','img/new_product/0068346_17815238.jpeg','10YEAR',0,'新品'
,'粉色','16岁','裙子');

INSERT INTO kd_new_product VALUES(null,'显示明细  Ariel Layered Frill Detail Dress Floral Red','KETIKETA',
'Ariel Layered Frill Detail Dress Floral Red','649','img/new_product/0068345_17815237.jpeg','10YEAR',0,'新品'
,'粉色','16岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Aida Frill Shorts  Red','KETIKETA',
'Aida Frill Shorts  Red','389','img/new_product/0068343_17815235.jpeg','10YEAR',0,'新品'
,'红色','16岁','短裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Flavia Hand Embroidered Dress Mustard Yellow','KETIKETA',
'Flavia Hand Embroidered Dress Mustard Yellow','819','img/new_product/0068342_17815234.jpeg','10YEAR',0,'新品'
,'黄色','16岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Aida Frill Shorts Mustard Yellow','KETIKETA',
'Aida Frill Shorts Mustard Yellow','389','img/new_product/0068339_17815231.jpeg','10YEAR',0,'新品'
,'黄色','16岁','短裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Leo Shorts Mustard Yellow','KETIKETA',
'leo Shorts Mustard Yellow','479','img/new_product/0068331_17814915.jpeg','10YEAR',0,'新品'
,'黄色','16岁','短裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Aida Frill Dress Mustard Yellow','KETIKETA',
'aida Frill Dress Mustard Yellow','779','img/new_product/0063555_aida-frill-dress-mustard-yellow.jpeg','10YEAR',0,'新品'
,'黄色','18岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Flavia Hand Embroidered Dress Red','KETIKETA',
'Flavia Hand Embroidered Dress Red','819','img/new_product/0063554_flavia-hand-embroidered-dress-red.jpeg','10YEAR',0,'新品'
,'红色','16岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Babies Flavia Hand Embroidered Top Mustard Yellow','KETIKETA',
'Babies Flavia Hand Embroidered Top Mustard Yellow','519','img/new_product/0068353_babies-flavia-hand-embroidered-top-mustard-yellow.jpeg','10YEAR',0,'新品'
,'黄色','16岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Carmensita Top Pink','KETIKETA',
'Carmensita Top Pink','429','img/new_product/0068354_carmensita-top-pink.jpeg','10YEAR',0,'新品'
,'白色','16岁','斗篷');
INSERT INTO kd_new_product VALUES(null,'显示明细  Milo Hand Embroidered  Dress Blue','KETIKETA',
'Milo Hand Embroidered  Dress Blue','689','img/new_product/0068356_milo-hand-embroidered-dress-blue.jpeg','10YEAR',0,'新品'
,'蓝色','16岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Adelaide Layered Graphic Print Blouse Multi','VIVETTA',
'Adelaide Layered Graphic Print Blouse Multi','1529','img/new_product/0067918_adelaide-layered-graphic-print-blouse-multi.jpeg','10YEAR',0,'新品'
,'多色','16岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Alma Frill Detail Wide Leg Jersey Joggers Red','VIVETTA',
'Alma Frill Detail Wide Leg Jersey Joggers Red','619','img/new_product/0067910_alma-frill-detail-wide-leg-jersey-joggers-red.jpeg','10YEAR',0,'新品'
,'红色','16岁','长裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Isabel Polka Dot Dog Print Frill Detail Dress Multi','VIVETTA',
'Isabel Polka Dot Dog Print Frill Detail Dress Multi','1908','img/new_product/0067922_isabel-polka-dot-dog-print-frill-detail-dress-multi.jpeg','10YEAR',0,'新品'
,'多色','8岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Jillian Embroidered Collar Detail Broderie Anglaise Dress White','VIVETTA',
'Jillian Embroidered Collar Detail Broderie Anglaise Dress White','1729','img/new_product/0067912_jillian-embroidered-collar-detail-broderie-anglaise-dress-white.jpeg','10YEAR',0,'新品'
,'白色','8岁','连衣裙');
INSERT INTO kd_new_product VALUES(null,'显示明细  Amanda Sleeveless Applique Collar Detail Dress Yellow','VIVETTA',
'Amanda Sleeveless Applique Collar Detail Dress Yellow','1619','img/new_product/0067924_amanda-sleeveless-applique-collar-detail-dress-yellow.jpeg','10YEAR',0,'新品'
,'黄色','16岁','连衣裙');
INSERT INTO kd_new_product VALUES(null,'显示明细  Olivia Short Sleeved House Print Dress Multi','VIVETTA',
'Olivia Short Sleeved House Print Dress Multi','1729','img/new_product/0067920_olivia-short-sleeved-house-print-dress-multi.jpeg','10YEAR',0,'新品'
,'多色','8岁','连衣裙');
INSERT INTO kd_new_product VALUES(null,'显示明细  Justine Pleated Shirt Dress White & Blue','VIVETTA',
'Justine Pleated Shirt Dress White & Blue','2099','img/new_product/0067916_justine-pleated-shirt-dress-white-blue.jpeg','10YEAR',0,'新品'
,'黑色','10岁','裙子');
INSERT INTO kd_new_product VALUES(null,'显示明细  Yara Polka Dot Dog Print Trousers White','VIVETTA',
'Yara Polka Dot Dog Print Trousers White','899','img/new_product/0067914_yara-polka-dot-dog-print-trousers-white.jpeg','10YEAR',0,'新品'
,'多色','16岁','长裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Altea Crossed Fingers Logo Print T-Shirt Light Blue','VIVETTA',
'Altea Crossed Fingers Logo Print T-Shirt Light Blue','459','img/new_product/0067904_altea-crossed-fingers-logo-print-t-shirt-light-blue.jpeg','10YEAR',0,'新品'
,'蓝色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Loren Text Logo Print T-Shirt Pink','VIVETTA',
'Loren Text Logo Print T-Shirt Pink','459','img/new_product/0067907_loren-text-logo-print-t-shirt-pink.jpeg','10YEAR',0,'新品'
,'粉色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Kisha Graphic Print T-Shirt Multi','VIVETTA',
'Kisha Graphic Print T-Shirt Multi','639','img/new_product/0067899_kisha-graphic-print-t-shirt-multi.jpeg','10YEAR',0,'新品'
,'多色','16岁','T恤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Sleeveless Embroidered Lips Logo Shift Dress Black','VIVETTA',
'Sleeveless Embroidered Lips Logo Shift Dress Black','839','img/new_product/0067905_sleeveless-embroidered-lips-logo-shift-dress-black.jpeg','10YEAR',0,'新品'
,'黑色','12岁','连衣裙');
INSERT INTO kd_new_product VALUES(null,'显示明细  Elide Stripe Silhouette Print Sleeveless Dress Multi','VIVETTA',
'Elide Stripe Silhouette Print Sleeveless Dress Multi','1389','img/new_product/0067900_elide-stripe-silhouette-print-sleeveless-dress-multi.jpeg','10YEAR',0,'新品'
,'多色','12岁','连衣裙');
INSERT INTO kd_new_product VALUES(null,'显示明细  Gisella Graphic Print Long Shorts Black','VIVETTA',
'Gisella Graphic Print Long Shorts Black','839','img/new_product/0067908_gisella-graphic-print-long-shorts-black.jpeg','10YEAR',0,'新品'
,'黑色','16岁','短裤');
INSERT INTO kd_new_product VALUES(null,'显示明细  Gaia Polka Dot Dog Print Frill Detail Blouse Yellow','VIVETTA',
'Gaia Polka Dot Dog Print Frill Detail Blouse Yellow','889','img/new_product/0067897_gaia-polka-dot-dog-print-frill-detail-blouse-yellow.jpeg','10YEAR',0,'新品'
,'黄色','16岁','衬衣');

CREATE TABLE kd_user (
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(64),
    upwd VARCHAR(64),
    phone VARCHAR(32),
    gender INT
);
INSERT INTO kd_user VALUES(null,'唐博1','123456','13164286161',1);
INSERT INTO kd_user VALUES(null,'唐博2','123456','13164286162',1);
INSERT INTO kd_user VALUES(null,'唐博3','123456','13164286163',1);
INSERT INTO kd_user VALUES(null,'唐博4','123456','13164286164',1);
INSERT INTO kd_user VALUES(null,'唐博','123456','13164286167',1);
CREATE TABLE kd_love (
    kid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT ,
    pid INT,
    count INT,
    ischecked INT,
    FOREIGN KEY(uid) REFERENCES kd_user(uid)
);
CREATE TABLE kd_shopping_cart (
    cid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT ,
    cpid INT,
    count INT,
    is_checked INT,
    FOREIGN KEY(uid) REFERENCES kd_user(uid)
);