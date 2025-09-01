-- drop database thrift_garage;
Create database thrift_garage;
use thrift_garage;

-- drop table products;
create table products(
	id INT auto_increment Primary key,
    name_item Varchar(255),
    price_item INT,
    image_url_item Varchar(255),
    description Text
);

insert into products (name_item, price_item, image_url_item, description)
values ('Polo Ralph Lauren', 300000, 'Polo Ralph.jpg', 'Sweater rajut klasik, Elegan & timeless, cocok untuk smart casual'),
('Uniqlo Hoodie', 90000, 'uniqlo_hoodie.jpg', 'Hoodie basic simple & minimalis. Nyaman dipakai sehari-hari.' ),
('Guess Hoodie', 100000, 'guess_hoodie.jpg', 'Sweater dengan logo GUESS yang bold. Cocok untuk gaya casual streetwear.' ),
('Thraser Flame Hoodie', 130000, 'thraser_flame.jpg', 'Hoodie dengan logo api ikonik Thrasher. Favorit kalangan skate & streetwear.'),
('Casual Champion Sweater', 250000, 'champion-sweater.jpg', 'Sweater Champion Crewneck ini merupakan salah satu item streetwear klasik yang sering dicari di thrift market. Desain simple dengan logo ikonik membuatnya mudah dipadukan untuk outfit casual maupun sporty.'),
('Pull and Bear Anorak',180000,'pullnbear-laganajakna.jpg','Jaket Pull & Bear Laganja Anorak ini populer di kalangan penggemar streetwear karena desainnya simpel namun fungsional. Dengan hoodie dan kantong depan besar, jaket ini memberi kesan sporty sekaligus stylish. Sangat cocok dipakai untuk hangout, travelling, atau dipadukan dengan outfit casual harian.'),
('Nike Sportswear', 300000, 'nike.jpg', 'Bahannya hangat dan nyaman, cocok untuk dipakai santai maupun tampil streetwear. Dengan logo Nike ikonik, jaket ini memberi kesan sporty dan premium.'),
('Adidas Original Track	Jacket', 250000, 'adidas-original.jpg', 'Jaket Adidas Originals Cropped Track Jacket ini punya vibe minimalis modern dengan potongan cropped yang trendy. Warna cream clean look membuatnya versatile untuk dipadu padankan, sementara detail 3-stripes hitam di lengan tetap mempertahankan ciri khas Adidas.');


select * from products;

create table pembayaran(
	id_pembayaran INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(25),
    harga INT,
    status ENUM('Pending','Lunas') Default 'Pending',
    tanggal_pembayaran TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bukti_image VARCHAR(255)
);

-- drop table pembayaran;

insert into pembayaran (id_pembayaran, nama, harga, status, tanggal_pembayaran, bukti_image) values (
1, 'Lili', 500000, 'Pending', '2025-09-01', 'Polo Ralph.jpg'
);

select * from pembayaran;



