# cd /mnt/c/Users/maruf/OneDrive/Desktop/WORK_FILE/backend-best-practice

# sudo apt install postgresql postgresql-contrib
# sudo service postgresql status
# sudo service postgresql start
# sudo service postgresql stop
# sudo service postgresql restart
# sudo passwd postgres
# sudo -u postgres psql    

* [\l] see data table 
* [q] to exit
* [\c dir_name] change Dir
* [\d table_name] see data table



 *** postgresql DATABASE ***
        *** [SQL] ***

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

* primery key and foreign KEY
# alter TABLE games alter column img_url type varchar(200); [edite single column]
# alter TABLE games add column id serial primary key; [add new column with primary key]
# ALTER TABLE games ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);  [add foreign key in games[user_id] with users[id] ]

* add data with foreign key there user_id exist in users.id
# UPDATE games SET user_id = 2 WHERE id = 2;
# INSERT INTO games (name, age, email,user_id) VALUES ('John', 33, 'Doe@example.com',2);

*** JOIN ***
# SELECT * FROM games JOIN users ON users.id = games.user_id;
# SELECT * FROM games FULL JOIN users ON users.id = games.user_id;
# SELECT * FROM games LEFT JOIN users ON users.id = games.user_id;
# SELECT * FROM games RIGHT JOIN users ON users.id = games.user_id;
# SELECT games.name AS g_name, age, users.name AS u_name FROM games FULL JOIN users ON users.id = games.user_id;

*** SQL Mistake and solution ***

*  SELECT * mistake
# SELECT * FROM games; [problem]
# SELECT name FROM games; [solve] it's more spacific 

* INDEX mistake
# SELECT name FROM games WHERE name='John Doe'; [problem]
# EXPLAIN ANALYZE SELECT name FROM games WHERE name='John Doe';  [analysis time of exicution]
# CREATE INDEX name_index ON games(name); [solution]
* now work with less exicution time
# SELECT name FROM games WHERE name='John Doe'; [now_solve]

* SQL Injection mistake
# SELECT name FROM games where name='John Doe' OR '1'='1'; [problem]
# PREPARE stmt AS SELECT * FROM games WHERE name=$1 [solution]
# SELECT name FROM games where name='John Doe' OR '1'='1'; [now_solve]



*** Connect Info ***
host : localhost / 127.0.0.1
user : maruf
pass : 84210cse
DB : next_commerce
# [TEST] psql -U user_name -d DB_name -h localhost

* SHOW PORT and puth
# SHOW data_directory;
# SHOW port;
# SHOW listen_addresses;
# SELECT setting FROM pg_settings WHERE name = 'port'; [show port]

* Migraion Problem with Prisma
# ALTER USER <username> CREATEDB; [solve]
