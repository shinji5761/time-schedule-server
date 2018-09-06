-- 親カテゴリ
INSERT INTO parent_category (id, category_name) VALUES( 'PC001', '実装');
INSERT INTO parent_category (id, category_name) VALUES( 'PC002', '結合試験');

-- 子カテゴリ
INSERT INTO child_category (id, category_name, parent_category_id) VALUES( 'CC001', '実装', 'PC001');
INSERT INTO child_category (id, category_name, parent_category_id) VALUES( 'CC002', '単体試験', 'PC001');
INSERT INTO child_category (id, category_name, parent_category_id) VALUES( 'CC003', '仕様書作成', 'PC002');
INSERT INTO child_category (id, category_name, parent_category_id) VALUES( 'CC004', '実施', 'PC002');

