create user admin identified by 1234;
grant create session to user;
grant connect, resource, dba to admin;
// 계정 생성

drop table membership cascade constraints;

create table membership(
id varchar2(20) not null,
password varchar2(20) not null,
email varchar2(50) not null,
name varchar2(10) not null,
p_num varchar(20) not null,
address varchar2(100) not null,
gender char not null,
age int not null,
replycnt number default 0
);
// 계정 테이블 생성

alter table membership add constraint pk_member primary key(id);
// 계정 테이블 기본키 지정

drop table tbl_board cascade CONSTRAINTS;

drop SEQUENCE seq_board;

create sequence seq_board
increment by 1
start with 0
maxvalue 9999999
minvalue 0;
// 게시판 시퀀스 생성

create table tbl_board (
bno number(10, 0),
title varchar2(200) not null,
content varchar2(2000) not null,
writer varchar2(50) not null,
regdate date default sysdate,
updatedate date default sysdate
);
// 게시판 테이블 생성

alter table tbl_board add constraint pk_board primary key (bno); 
// 게시판 테이블 기본키 지정

alter table tbl_board add constraint fk_board  
foreign key (writer)  references  membership(ip) on delete cascade;
// 게시판 테이블 외래키 cascade 지정

drop table tbl_reply cascade CONSTRAINTS;

drop SEQUENCE seq_reply;
create sequence seq_reply
increment by 1
start with 0
maxvalue 9999999
minvalue 0;
// 덧글 시퀀스 생성

create table tbl_reply (
  rno number(10,0), 
  bno number(10,0) not null,
  reply varchar2(1000) not null,
  replyer varchar2(50) not null, 
  replyDate date default sysdate, 
  updateDate date default sysdate
);
// 덧글 테이블 생성

alter table tbl_reply add constraint pk_reply primary key (rno);
// 기본키 지정

alter table tbl_reply  add constraint fk_reply_board  
foreign key (bno)  references  tbl_board (bno) on delete cascade;
// 댓글 테이블 외래키 cascade 지정