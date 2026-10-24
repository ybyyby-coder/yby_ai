-- 个人中心上线迁移：执行前请确认现有昵称没有重复。
-- 若已有重复昵称，请先人工改名，再执行唯一索引。
ALTER TABLE user ADD UNIQUE KEY uk_userName (userName);
