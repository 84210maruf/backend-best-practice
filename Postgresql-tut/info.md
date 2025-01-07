cd /mnt/c/Users/maruf/OneDrive/Desktop/WORK_FILE/backend-best-practice


sudo apt install postgresql postgresql-contrib
 sudo service postgresql status
 sudo service postgresql start
 sudo service postgresql stop
 sudo passwd postgres
 sudo -u postgres psql    

 [\l] see data table 
 [q] to exit
 [\c dir_name] change Dir
 [\d table_name] see data table


 //postgresql DATABASE

# CREATE DATABASE next_commerce;
# CREATE TABLE games (
    id INT,
    name VARCHAR(100),
    genre VARCHAR(100),
    img_url VARCHAR(250)
);
# insert into games values (1, 'marff','gen-z', 'https:fjkdvj.jpg');
# insert into games(name,id,genre,img_url) values ('marfff',3,'gen-yz', 'https:fjkdfdvj.jpg');
# insert into games(name,genre) values ('sharrrf','gen-xyz');

# select * from games;
# select name,genre  from games;

# delete from games;  [delete all data from table]
# alter TABLE games drop column id; [delete single column]

//primery key and foreign KEY
# alter TABLE games alter column img_url type varchar(200); [edite single column]
# alter TABLE games add column id serial primary key; [add new column with primary key]
# ALTER TABLE games ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);  [add foreign key in games[user_id] with users[id] ]

//add data with foreign key there user_id exist in users.id
# UPDATE games SET user_id = 2 WHERE id = 2;
# INSERT INTO games (name, age, email,user_id) VALUES ('John', 33, 'Doe@example.com',2);

// JOIN
# SELECT * FROM games JOIN users ON users.id = games.user_id;
# SELECT * FROM games FULL JOIN users ON users.id = games.user_id;
# SELECT * FROM games LEFT JOIN users ON users.id = games.user_id;
# SELECT * FROM games RIGHT JOIN users ON users.id = games.user_id;
# SELECT games.name AS g_name, age, users.name AS u_name FROM games FULL JOIN users ON users.id = games.user_id;
