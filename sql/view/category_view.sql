CREATE OR REPLACE VIEW category_view AS
SELECT
      pc.id AS parent_id
    , pc.category_name  AS parent_name
    , cc.id AS child_id
    , cc.category_name  AS child_name
FROM parent_category pc, child_category cc
WHERE pc.id = cc.parent_category_id;
