-- 親カテゴリテーブル
DROP TABLE IF EXISTS parent_category CASCADE;
CREATE TABLE parent_category (
      no SERIAL 
    , id VARCHAR(5)
    , category_name VARCHAR(32)
    , PRIMARY KEY ( id )
);

-- 子カテゴリテーブル
DROP TABLE IF EXISTS child_category CASCADE;
CREATE TABLE child_category (
      no SERIAL 
    , id VARCHAR(5)
    , category_name VARCHAR(32)
    , parent_category_id VARCHAR(5)
    , PRIMARY KEY ( id )
    , FOREIGN KEY ( parent_category_id) REFERENCES parent_category(id)
);