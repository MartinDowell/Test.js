CREATE TABLE IF NOT EXISTS fruits (
  post_id     INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  name        VARCHAR(20)   NOT NULL,
  colour      VARCHAR(20)   NOT NULL,
  country     VARCHAR(20)   NOT NULL,
  entry_date  DATETIME      NOT NULL,
  PRIMARY KEY (post_id)
);
