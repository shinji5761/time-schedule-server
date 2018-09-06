DROP TABLE IF EXISTS record;
CREATE TABLE record (
      no SERIAL
    , recordingDate DATE
    , recordTime VARCHAR(8)
    , parentCategoryId VARCHAR(6)
    , childCategoryId VARCHAR(6)
    , PRIMARY KEY ( no )
);