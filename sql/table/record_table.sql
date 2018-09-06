DROP TABLE IF EXISTS record;
CREATE TABLE record (
      no SERIAL
    , recording_date DATE
    , record_time VARCHAR(8)
    , parent_category_id VARCHAR(6)
    , child_category_id VARCHAR(6)
    , PRIMARY KEY ( no )
);