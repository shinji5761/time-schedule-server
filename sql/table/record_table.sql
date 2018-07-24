DROP IF EXISTS TABLE record;
CREATE TABLE record (
      no INTEGER
    , recordDate DATE
    , recordTime VARCHAR(8)
    , paretntCategoryId VARCHAR(6)
    , childCategoryId VARCHAR(6)
    , PRIMARY KEY ( no )
);