DROP DATABASE IF EXISTS techgeek_db;
CREATE DATABASE techgeek_db;
\c techgeek_db

-- add create tables here

CREATE TABLE devloper(
   id serial primary key,
   name varchar,
   specialist varchar,
   email varchar ,
   picture varchar,
   no_project int
);


CREATE TABLE projects(
   id serial primary key,
   name varchar,
   kindOfproject varchar, 
   detielsOfProject varchar
--    devloper_Id int not null,
--    foreign key(devloper_Id) references devloper ON DELETE CASCADE ON UPDATE CASCADE 
);

create table project_devlopers (
    project_Id int not null , 
    devloper_Id int not null,
    foreign key(project_Id) references projects ON DELETE CASCADE ON UPDATE CASCADE ,
    foreign key(devloper_Id) references devloper ON DELETE CASCADE ON UPDATE CASCADE 
);



insert into devloper(name ,specialist , email , picture ,  no_project) values 
('Hamad','web','ejah@jd.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/220px-Steve_Jobs_Headshot_2010-CROP2.jpg',0),
('abdulrab','web','ejah@jd.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/220px-Steve_Jobs_Headshot_2010-CROP2.jpg',0),
('hamud','web','ejah@jd.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/220px-Steve_Jobs_Headshot_2010-CROP2.jpg',0),
('sosan','web','ejah@jd.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/220px-Steve_Jobs_Headshot_2010-CROP2.jpg',0),
('romia','web','ejah@jd.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/220px-Steve_Jobs_Headshot_2010-CROP2.jpg',0);


insert into projects(name ,kindOfproject , detielsOfProject) values 

('pokemon','web','i wklefjnwlkcfnwe wskefjbksjfnkwndf fjbnldnowndoiweoincoiwcn '),
('roby','mobile','i wklefjnwlkcfnwe wskefjbksjfnkwndf fjbnldnowndoiweoincoiwcn '),
('hemble','mobile','i wklefjnwlkcfnwe wskefjbksjfnkwndf fjbnldnowndoiweoincoiwcn '),
('hemlaite','web','i wklefjnwlkcfnwe wskefjbksjfnkwndf fjbnldnowndoiweoincoiwcn '),
('dfl;efk','web','i wklefjnwlkcfnwe wskefjbksjfnkwndf fjbnldnowndoiweoincoiwcn ');

insert into project_devlopers( project_Id ,devloper_Id ) values 
(1 , 1) , (3,4);
